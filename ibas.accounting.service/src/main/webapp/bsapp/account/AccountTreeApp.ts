/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace accounting {
    export namespace app {
        const PROPERTY_DATA: symbol = Symbol("data");
        const PROPERTY_LOGINST: symbol = Symbol("logInst");
        const PROPERTY_PARENT: symbol = Symbol("parent");
        const PROPERTY_NODES: symbol = Symbol("nodes");
        export class AccountNode extends ibas.Bindable {
            constructor(data: bo.Account) {
                super();
                this.data = data;
                this.logInst = data.logInst;
                this[PROPERTY_NODES] = new AccountNodes(this);
            }
            get data(): bo.Account {
                return this[PROPERTY_DATA];
            }
            set data(value: bo.Account) {
                this[PROPERTY_DATA] = value;
                this.firePropertyChanged("data");
            }
            get logInst(): number {
                return this[PROPERTY_LOGINST];
            }
            set logInst(value: number) {
                this[PROPERTY_LOGINST] = value;
                this.firePropertyChanged("logInst");
            }
            get code(): string {
                return this.data.code;
            }
            set code(value: string) {
                this.data.code = value;
                this.firePropertyChanged("code");
            }
            get name(): string {
                return this.data.name;
            }
            set name(value: string) {
                this.data.name = value;
                this.firePropertyChanged("name");
            }
            get active(): ibas.emYesNo {
                return this.data.active;
            }
            set active(value: ibas.emYesNo) {
                this.data.active = value;
                this.firePropertyChanged("active");
            }
            get nodes(): AccountNode[] {
                return this[PROPERTY_NODES].filter(c => c.data.isDeleted === false);
            }
            alls(): AccountNode[] {
                let nodes: ibas.IList<AccountNode> = new ibas.ArrayList<AccountNode>();
                nodes.add(this);
                for (let item of this[PROPERTY_NODES]) {
                    nodes.add(item.alls());
                }
                return nodes;
            }
        }
        export class AccountNodes extends ibas.ArrayList<AccountNode> {
            constructor(parent: AccountNode) {
                super();
                this[PROPERTY_PARENT] = parent;
            }
            filling(datas: bo.Account[]): void {
                for (let data of datas) {
                    if (ibas.strings.isEmpty(data?.code)) {
                        continue;
                    }
                    if (data?.parent === this[PROPERTY_PARENT]?.code) {
                        let node: AccountNode = new AccountNode(data);
                        node[PROPERTY_NODES].filling(datas);
                        this.add(node);
                    }
                }
            }
        }
        /** 应用-科目 */
        export class AccountTreeApp extends ibas.Application<IAccountTreeView> {
            /** 应用标识 */
            static APPLICATION_ID: string = "dc52e6b0-5750-433b-aaa1-19af12602d54";
            /** 应用名称 */
            static APPLICATION_NAME: string = "accounting_app_account_tree";
            /** 构造函数 */
            constructor() {
                super();
                this.id = AccountTreeApp.APPLICATION_ID;
                this.name = AccountTreeApp.APPLICATION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                this.view.viewGroupEvent = this.viewGroup;
                this.view.addAccountEvent = this.addAccount;
                this.view.removeAccountEvent = this.removeAccount;
                this.view.saveAccountEvent = this.saveAccount;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                let criteria: ibas.ICriteria = new ibas.Criteria();
                let condition: ibas.ICondition = criteria.conditions.create();
                condition.alias = bo.Account.PROPERTY_PARENT_NAME;
                condition.operation = ibas.emConditionOperation.IS_NULL;
                condition = criteria.conditions.create();
                condition.alias = bo.Account.PROPERTY_PARENT_NAME;
                condition.value = "";
                condition.relationship = ibas.emConditionRelationship.OR;
                let boRepository: bo.BORepositoryAccounting = new bo.BORepositoryAccounting();
                boRepository.fetchAccount({
                    criteria: criteria,
                    onCompleted: (opRslt) => {
                        try {
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            this.accounts = new ibas.ArrayList<AccountNode>();
                            for (let item of opRslt.resultObjects) {
                                this.accounts.add(new AccountNode(item));
                            }
                            criteria = new ibas.Criteria();
                            condition = criteria.conditions.create();
                            condition.alias = bo.Account.PROPERTY_PARENT_NAME;
                            condition.operation = ibas.emConditionOperation.NOT_NULL;
                            condition = criteria.conditions.create();
                            condition.alias = bo.Account.PROPERTY_PARENT_NAME;
                            condition.operation = ibas.emConditionOperation.NOT_EQUAL;
                            condition.value = "";
                            boRepository.fetchAccount({
                                criteria: criteria,
                                onCompleted: (opRslt) => {
                                    try {
                                        if (opRslt.resultCode !== 0) {
                                            throw new Error(opRslt.message);
                                        }
                                        for (let node of this.accounts) {
                                            node[PROPERTY_NODES].filling(opRslt.resultObjects);
                                        }
                                        this.view.showGroups(this.accounts);
                                    } catch (error) {
                                        this.messages(error);
                                    }
                                }
                            });
                        } catch (error) {
                            this.messages(error);
                        }
                    }
                });
                this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_fetching_data"));
            }
            private viewGroup(group: AccountNode): void {
                if (group.data.isNew) {
                    this.view.showAccount(group.data);
                } else {
                    let criteria: ibas.ICriteria = new ibas.Criteria();
                    criteria.result = 1;
                    let condition: ibas.ICondition = criteria.conditions.create();
                    condition.alias = bo.Account.PROPERTY_CODE_NAME;
                    condition.value = group.code;
                    let boRepository: bo.BORepositoryAccounting = new bo.BORepositoryAccounting();
                    boRepository.fetchAccount({
                        criteria: criteria,
                        onCompleted: (opRslt) => {
                            try {
                                if (opRslt.resultCode !== 0) {
                                    throw new Error(opRslt.message);
                                }
                                if (opRslt.resultObjects.length === 0) {
                                    throw new Error(ibas.i18n.prop("accounting_not_found_account", group.code, group.name));
                                }
                                group.data = opRslt.resultObjects.firstOrDefault();
                                this.view.showAccount(group.data);
                                this.view.showGroups(this.accounts);
                            } catch (error) {
                                this.messages(error);
                            }
                        }
                    });
                }
            }
            private accounts: ibas.IList<AccountNode>;
            private addAccount(node: AccountNode, type?: "TEXT"): void {
                if (ibas.objects.isNull(node)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("bo_account")
                    )); return;
                }
                let account: bo.Account = new bo.Account();
                account.parent = node.data.code;
                if (node.data.level > 1 && ibas.numbers.isNumber(node.code)) {
                    account.code = node.code + ibas.strings.fill(node.nodes.length + 1, 2, "0");
                }
                account.active = type === "TEXT" ? ibas.emYesNo.NO : ibas.emYesNo.YES;
                account.level = node.data.level + 1;
                node[PROPERTY_NODES].add(new AccountNode(account));
                this.view.showGroups(this.accounts);
            }
            private removeAccount(node: AccountNode): void {
                if (ibas.objects.isNull(node)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("bo_account")
                    )); return;
                }
                let that: this = this;
                this.messages({
                    type: ibas.emMessageType.QUESTION,
                    message: node.data.level === 1 ?
                        ibas.i18n.prop("accounting_continue_remove_node_children", node.name ? node.name : node.code) :
                        ibas.i18n.prop("accounting_continue_remove_node", node.name ? node.name : node.code),
                    actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
                    onCompleted(action: ibas.emMessageAction): void {
                        if (action !== ibas.emMessageAction.YES) {
                            return;
                        }
                        that.removeNode(node);
                        that.view.showGroups(that.accounts);
                    }
                });
            }
            private removeNode(node: AccountNode | bo.Account): void {
                if (node instanceof AccountNode) {
                    for (let item of node.nodes) {
                        this.removeNode(item);
                    }
                    if (node.data.level > 1) {
                        // 非第一层才删除自身
                        this.removeNode(node.data);
                    }
                } else if (node instanceof bo.Account) {
                    node.delete();
                }
            }
            private saveAccount(beSaveds: bo.Account[]): void {
                if (ibas.objects.isNull(beSaveds)) {
                    beSaveds = new ibas.ArrayList<bo.Account>();
                    for (let item of this.accounts) {
                        for (let node of item.alls()) {
                            if (!node.data.isDirty) {
                                continue;
                            }
                            if (node.data.isNew && node.data.isDeleted) {
                                continue;
                            }
                            beSaveds.push(node.data);
                        }
                    }
                }
                let that: this = this;
                this.messages({
                    type: ibas.emMessageType.QUESTION,
                    message: ibas.i18n.prop("shell_multiple_data_save_continue", beSaveds.length),
                    actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
                    onCompleted(action: ibas.emMessageAction): void {
                        if (action !== ibas.emMessageAction.YES) {
                            return;
                        }
                        let boRepository: bo.BORepositoryAccounting = new bo.BORepositoryAccounting();
                        ibas.queues.execute(beSaveds, (data, next) => {
                            // 处理数据
                            boRepository.saveAccount({
                                beSaved: data,
                                onCompleted(opRslt: ibas.IOperationResult<bo.Account>): void {
                                    if (opRslt.resultCode !== 0) {
                                        next(new Error(ibas.i18n.prop("shell_data_delete_error", data, opRslt.message)));
                                    } else {
                                        data.markOld();
                                        next();
                                    }
                                }
                            });
                        }, (error) => {
                            // 处理完成
                            if (error instanceof Error) {
                                that.messages(ibas.emMessageType.ERROR, error.message);
                            } else {
                                that.messages(ibas.emMessageType.SUCCESS,
                                    ibas.i18n.prop("shell_data_save") + ibas.i18n.prop("shell_sucessful"));
                                // 重新加载
                                that.viewShowed();
                            }
                            that.busy(false);
                        });
                        that.busy(true);
                    }
                });
            }
        }
        /** 视图-科目 */
        export interface IAccountTreeView extends ibas.IView {
            /** 显示分组 */
            showGroups(datas: AccountNode[]): void;
            /** 显示组 */
            viewGroupEvent: Function;
            /** 显示科目 */
            showAccount(data: bo.Account): void;
            /** 添加科目事件 */
            addAccountEvent: Function;
            /** 添加科目事件 */
            removeAccountEvent: Function;
            /** 保存科目事件 */
            saveAccountEvent: Function;
        }
    }
}
