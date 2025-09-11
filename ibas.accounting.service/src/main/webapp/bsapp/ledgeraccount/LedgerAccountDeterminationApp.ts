/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace accounting {
    export namespace app {
        /** 编辑应用-分类账 */
        export class LedgerAccountDeterminationApp extends ibas.Application<ILedgerAccountDeterminationView> {
            /** 应用标识 */
            static APPLICATION_ID: string = "54b1fafa-f2dc-4fc5-ad15-29857ee793a7";
            /** 应用名称 */
            static APPLICATION_NAME: string = "accounting_app_ledgeraccountdetermination";
            /** 构造函数 */
            constructor() {
                super();
                this.id = LedgerAccountDeterminationApp.APPLICATION_ID;
                this.name = LedgerAccountDeterminationApp.APPLICATION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                this.view.selectLedgerAccountEvent = this.selectLedgerAccount;
                this.view.savePostingPeriodAccountEvent = this.savePostingPeriodAccount;
                this.view.createPostingPeriodAccountEvent = this.createPostingPeriodAccount;
                this.view.choosePostingPeriodAccountAccountEvent = this.choosePostingPeriodAccountAccount;
                this.view.deletePostingPeriodAccountEvent = this.deletePostingPeriodAccount;
                this.view.copyLedgerAccountsEvent = this.copyLedgerAccountsEvent;
            }
            protected periodAccounts: ibas.IList<bo.PeriodLedgerAccount> = new ibas.ArrayList<bo.PeriodLedgerAccount>();
            protected conditionProperties: ibas.IList<bo.LedgerConditionProperty> = new ibas.ArrayList<bo.LedgerConditionProperty>();
            /** 视图显示后 */
            protected viewShowed(): void {
                let sort: ibas.ISort;
                let criteria: ibas.ICriteria = new ibas.Criteria();
                sort = criteria.sorts.create();
                sort.alias = bo.LedgerAccount.PROPERTY_GROUP_NAME;
                sort.sortType = ibas.emSortType.ASCENDING;
                sort = criteria.sorts.create();
                sort.alias = bo.LedgerAccount.PROPERTY_SIGN_NAME;
                sort.sortType = ibas.emSortType.ASCENDING;
                let boRepository: bo.BORepositoryAccounting = new bo.BORepositoryAccounting();
                boRepository.fetchLedgerAccount({
                    criteria: criteria,
                    onCompleted: (opRslt) => {
                        try {
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            this.view.showLedgerAccounts(opRslt.resultObjects);
                        } catch (error) {
                            this.messages(error);
                        }
                    }
                });
                criteria = new ibas.Criteria();
                sort = criteria.sorts.create();
                sort.alias = bo.PeriodCategory.PROPERTY_STARTDATE_NAME;
                sort.sortType = ibas.emSortType.DESCENDING;
                sort = criteria.sorts.create();
                sort.alias = bo.PostingPeriod.PROPERTY_ENDDATE_NAME;
                sort.sortType = ibas.emSortType.DESCENDING;
                boRepository.fetchPeriodCategory({
                    criteria: criteria,
                    onCompleted: (opRslt) => {
                        try {
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            this.view.showPostingPeriods(opRslt.resultObjects);
                        } catch (error) {
                            this.messages(error);
                        }
                    }
                });
                criteria = new ibas.Criteria();
                boRepository.fetchLedgerConditionProperty({
                    criteria: criteria,
                    onCompleted: (opRslt) => {
                        try {
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            this.conditionProperties = opRslt.resultObjects;
                        } catch (error) {
                            this.messages(error);
                        }
                    }
                });
            }
            /** 选中过账期间 */
            protected selectLedgerAccount(ledger: bo.LedgerAccount, period: bo.PeriodCategory): void {
                if (this.periodAccounts.filter(c => c.isDirty === true).length > 0
                    && ibas.config.get<boolean>(ibas.CONFIG_ITEM_DEBUG_MODE, false) === false) {
                    this.messages({
                        type: ibas.emMessageType.QUESTION,
                        title: ibas.i18n.prop(this.name),
                        message: ibas.i18n.prop("accounting_save_changed_data"),
                        actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
                        onCompleted: (action) => {
                            if (action === ibas.emMessageAction.YES) {
                                this.savePostingPeriodAccount(() => {
                                    this.selectLedgerAccount(ledger, period);
                                });
                            } else {
                                this.periodAccounts.clear();
                                this.selectLedgerAccount(ledger, period);
                            }
                        }
                    }); return;
                }
                if (ibas.objects.isNull(ledger)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("bo_periodledgeraccount_ledger")
                    )); return;
                }
                if (ibas.objects.isNull(period)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("bo_periodledgeraccount_period")
                    )); return;
                }
                this.busy(true);
                let criteria: ibas.ICriteria = new ibas.Criteria();
                let condition: ibas.ICondition = criteria.conditions.create();
                condition.alias = bo.PeriodLedgerAccount.PROPERTY_PERIOD_NAME;
                condition.value = period.objectKey.toString();
                condition = criteria.conditions.create();
                condition.alias = bo.PeriodLedgerAccount.PROPERTY_LEDGER_NAME;
                condition.value = ledger.sign;
                let sort: ibas.ISort = criteria.sorts.create();
                sort.alias = bo.PeriodLedgerAccount.PROPERTY_ORDER_NAME;
                sort.sortType = ibas.emSortType.ASCENDING;
                let boRepository: bo.BORepositoryAccounting = new bo.BORepositoryAccounting();
                boRepository.fetchPeriodLedgerAccount({
                    criteria: criteria,
                    onCompleted: (opRslt) => {
                        try {
                            this.busy(false);
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            this.periodAccounts = opRslt.resultObjects;
                            if (this.periodAccounts.length === 0) {
                                let glAccount: bo.PeriodLedgerAccount = new bo.PeriodLedgerAccount();
                                glAccount.order = this.periodAccounts.length + 1;
                                glAccount.name = ibas.i18n.prop("bo_periodledgeraccount_name_unknown");
                                glAccount.ledger = ledger.sign;
                                glAccount.period = period.objectKey;
                                this.periodAccounts.add(glAccount);
                            }
                            let properties: ibas.IList<bo.LedgerConditionProperty> = ibas.arrays.create(this.conditionProperties);
                            for (let item of this.conditionProperties) {
                                if (!ibas.strings.isEmpty(item.filters)) {
                                    // 不包含
                                    if (item.filters.indexOf(ibas.strings.format("!{0};", ledger.sign)) >= 0) {
                                        properties.remove(item);
                                    } else if (item.filters.indexOf(ibas.strings.format("{0};", ledger.sign)) < 0) {
                                        properties.remove(item);
                                    }
                                }
                            }
                            this.view.showPostingPeriodAccounts(this.periodAccounts.filter(c => c.isDeleted === false), properties);
                        } catch (error) {
                            this.messages(error);
                        }
                    }
                });
                this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_fetching_data"));
            }
            /** 保存过账期间总账科目事件 */
            protected savePostingPeriodAccount(callback?: () => void): void {
                let beSaveds: ibas.IList<bo.PeriodLedgerAccount> = new ibas.ArrayList<bo.PeriodLedgerAccount>();
                for (let item of this.periodAccounts) {
                    if (item.isDirty !== true) {
                        continue;
                    }
                    beSaveds.push(item);
                }
                if (beSaveds.length === 0) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("shell_data_save")
                    )); return;
                }
                let that: this = this;
                this.messages({
                    type: ibas.emMessageType.QUESTION,
                    title: ibas.i18n.prop(this.name),
                    message: ibas.i18n.prop("shell_multiple_data_save_continue", beSaveds.length),
                    actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
                    onCompleted(action: ibas.emMessageAction): void {
                        if (action !== ibas.emMessageAction.YES) {
                            return;
                        }
                        let boRepository: bo.BORepositoryAccounting = new bo.BORepositoryAccounting();
                        ibas.queues.execute(beSaveds, (data, next) => {
                            // 处理数据
                            boRepository.savePeriodLedgerAccount({
                                beSaved: data,
                                onCompleted(opRslt: ibas.IOperationResult<bo.PeriodLedgerAccount>): void {
                                    if (opRslt.resultCode !== 0) {
                                        next(new Error(ibas.i18n.prop("shell_data_save_error", data, opRslt.message)));
                                    } else {
                                        let index: number = that.periodAccounts.indexOf(data);
                                        if (index >= 0) {
                                            if (data.isDeleted) {
                                                that.periodAccounts.remove(data);
                                            } else {
                                                that.periodAccounts[index] = opRslt.resultObjects.firstOrDefault();
                                            }
                                        }
                                        next();
                                    }
                                }
                            });
                        }, (error) => {
                            // 处理完成
                            if (error instanceof Error) {
                                that.messages(ibas.emMessageType.ERROR, error.message);
                                that.view.showPostingPeriodAccounts(that.periodAccounts.filter(c => c.isDeleted === false));
                            } else {
                                that.messages(ibas.emMessageType.SUCCESS,
                                    ibas.i18n.prop("shell_data_save") + ibas.i18n.prop("shell_sucessful"));
                                if (callback instanceof Function) {
                                    callback();
                                } else {
                                    that.view.showPostingPeriodAccounts(that.periodAccounts.filter(c => c.isDeleted === false));
                                }
                            }
                            that.busy(false);
                        });
                        that.busy(true);
                    }
                });
            }
            /** 选择过账期间总账科目科目事件 */
            protected choosePostingPeriodAccountAccount(periodAccount: bo.PeriodLedgerAccount): void {
                if (ibas.objects.isNull(periodAccount)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("bo_periodledgeraccount")
                    )); return;
                }
                let that: this = this;
                let conditions: ibas.ICondition[] = app.conditions.account.create();
                ibas.servicesManager.runChooseService<bo.Account>({
                    boCode: bo.Account.BUSINESS_OBJECT_CODE,
                    criteria: conditions,
                    onCompleted(selecteds: ibas.IList<bo.Account>): void {
                        for (let selected of selecteds) {
                            periodAccount.account = selected.code;
                        }
                    }
                });
            }
            /** 创建过账期间总账科目事件 */
            protected createPostingPeriodAccount(ledger: bo.LedgerAccount, period: bo.PeriodCategory): void {
                if (ibas.objects.isNull(ledger)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("bo_periodledgeraccount_ledger")
                    )); return;
                }
                if (ibas.objects.isNull(period)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("bo_periodledgeraccount_period")
                    )); return;
                }
                let glAccount: bo.PeriodLedgerAccount = new bo.PeriodLedgerAccount();
                glAccount.order = this.periodAccounts.length + 1;
                glAccount.name = ibas.i18n.prop("bo_periodledgeraccount_name_unknown");
                glAccount.ledger = ledger.sign;
                glAccount.period = period.objectKey;
                this.periodAccounts.add(glAccount);
                this.view.showPostingPeriodAccounts(this.periodAccounts.filter(c => c.isDeleted === false));
            }
            /** 删除账期间总账科目科目事件 */
            protected deletePostingPeriodAccount(periodAccount: bo.PeriodLedgerAccount): void {
                if (ibas.objects.isNull(periodAccount)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("bo_periodledgeraccount")
                    )); return;
                }
                if (periodAccount.isNew) {
                    this.periodAccounts.remove(periodAccount);
                    this.view.showPostingPeriodAccounts(this.periodAccounts.filter(c => c.isDeleted === false));
                } else {
                    periodAccount.delete();
                    this.view.showPostingPeriodAccounts(this.periodAccounts.filter(c => c.isDeleted === false));
                }
            }
            /** 复制从期间总账科目事件 */
            private copyLedgerAccountsEvent(period: bo.PeriodCategory): void {
                if (ibas.objects.isNull(period)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("bo_periodledgeraccount_period")
                    )); return;
                }
                let that: this = this;
                let criteria: ibas.ICriteria = new ibas.Criteria();
                let condition: ibas.ICondition = criteria.conditions.create();
                condition.alias = bo.PeriodCategory.PROPERTY_OBJECTKEY_NAME;
                condition.operation = ibas.emConditionOperation.NOT_EQUAL;
                condition.value = period.objectKey.toString();

                ibas.servicesManager.runChooseService<bo.PeriodCategory>({
                    chooseType: ibas.emChooseType.SINGLE,
                    boCode: bo.PeriodCategory.BUSINESS_OBJECT_CODE,
                    criteria: criteria,
                    onCompleted(selecteds: ibas.IList<bo.PeriodCategory>): void {
                        for (let selected of selecteds) {
                            that.messages({
                                type: ibas.emMessageType.QUESTION,
                                message: ibas.i18n.prop("accounting_copy_ledgeraccounts_continue", selected.name, period.name),
                                actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
                                onCompleted(action: ibas.emMessageAction): void {
                                    if (action !== ibas.emMessageAction.YES) {
                                        return;
                                    }
                                    that.busy(true);
                                    // 加载并保存被复制内容
                                    let criteria: ibas.ICriteria = new ibas.Criteria();
                                    let condition: ibas.ICondition = criteria.conditions.create();
                                    condition.alias = bo.PeriodLedgerAccount.PROPERTY_PERIOD_NAME;
                                    condition.value = selected.objectKey.toString();
                                    condition = criteria.conditions.create();
                                    condition.alias = bo.PeriodLedgerAccount.PROPERTY_ACTIVATED_NAME;
                                    condition.value = ibas.emYesNo.YES.toString();
                                    let sort: ibas.ISort = criteria.sorts.create();
                                    sort.alias = bo.PeriodLedgerAccount.PROPERTY_ORDER_NAME;
                                    sort.sortType = ibas.emSortType.ASCENDING;
                                    let boRepository: bo.BORepositoryAccounting = new bo.BORepositoryAccounting();
                                    boRepository.fetchPeriodLedgerAccount({
                                        criteria: criteria,
                                        onCompleted: (opRslt) => {
                                            try {
                                                if (opRslt.resultCode !== 0) {
                                                    throw new Error(opRslt.message);
                                                }
                                                for (let item of opRslt.resultObjects) {
                                                    item.markNew();
                                                    item.reset();
                                                    item.period = period.objectKey;
                                                }
                                                // 保存数据
                                                ibas.queues.execute(opRslt.resultObjects, (data, next) => {
                                                    boRepository.savePeriodLedgerAccount({
                                                        beSaved: data,
                                                        onCompleted(opRslt: ibas.IOperationResult<bo.PeriodLedgerAccount>): void {
                                                            if (opRslt.resultCode !== 0) {
                                                                next(new Error(ibas.i18n.prop("shell_data_save_error", data, opRslt.message)));
                                                            } else {
                                                                let index: number = opRslt.resultObjects.indexOf(data);
                                                                if (index >= 0) {
                                                                    if (data.isDeleted) {
                                                                        opRslt.resultObjects.remove(data);
                                                                    } else {
                                                                        opRslt.resultObjects[index] = opRslt.resultObjects.firstOrDefault();
                                                                    }
                                                                }
                                                                next();
                                                            }
                                                        }
                                                    });
                                                }, (error) => {
                                                    // 处理完成
                                                    if (error instanceof Error) {
                                                        that.messages(ibas.emMessageType.ERROR, error.message);
                                                    } else {
                                                        that.messages(ibas.emMessageType.SUCCESS, ibas.i18n.prop("accounting_copy_sucessful", opRslt.resultObjects.length));
                                                    }
                                                    that.busy(false);
                                                });
                                            } catch (error) {
                                                that.messages(error);
                                            }
                                        }
                                    });
                                }
                            });
                        }
                    }
                });
            }
        }
        /** 视图-分类账 */
        export interface ILedgerAccountDeterminationView extends ibas.IView {
            /** 显示过账期间 */
            showPostingPeriods(datas: bo.PeriodCategory[]): void;
            /** 显示总账科目 */
            showLedgerAccounts(datas: bo.LedgerAccount[]): void;
            /** 选中总账科目事件 */
            selectLedgerAccountEvent: Function;
            /** 显示过账期间总账科目 */
            showPostingPeriodAccounts(datas: bo.PeriodLedgerAccount[], properties?: bo.LedgerConditionProperty[]): void;
            /** 创建过账期间总账科目事件 */
            createPostingPeriodAccountEvent: Function;
            /** 删除账期间总账科目科目事件 */
            deletePostingPeriodAccountEvent: Function;
            /** 选择过账期间总账科目科目事件 */
            choosePostingPeriodAccountAccountEvent: Function;
            /** 保存过账期间总账科目事件 */
            savePostingPeriodAccountEvent: Function;
            /** 复制从期间总账科目事件 */
            copyLedgerAccountsEvent: Function;
        }
    }
}
