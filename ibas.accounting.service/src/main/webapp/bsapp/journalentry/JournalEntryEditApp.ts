/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace accounting {
    export namespace app {
        /** 编辑应用-日记账分录 */
        export class JournalEntryEditApp extends ibas.BOEditApplication<IJournalEntryEditView, bo.JournalEntry> {
            /** 应用标识 */
            static APPLICATION_ID: string = "55394d69-cff2-4e48-9b03-999c1a2ed433";
            /** 应用名称 */
            static APPLICATION_NAME: string = "accounting_app_journalentry_edit";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.JournalEntry.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = JournalEntryEditApp.APPLICATION_ID;
                this.name = JournalEntryEditApp.APPLICATION_NAME;
                this.boCode = JournalEntryEditApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
                this.view.deleteDataEvent = this.deleteData;
                this.view.createDataEvent = this.createData;
                this.view.addJournalEntryLineEvent = this.addJournalEntryLine;
                this.view.removeJournalEntryLineEvent = this.removeJournalEntryLine;
                this.view.chooseJournalEntryLineAccountEvent = this.chooseJournalEntryLineAccount;
                this.view.chooseJournalEntryLineShortNameEvent = this.chooseJournalEntryLineShortName;
                this.view.chooseJournalEntryLineDistributionRuleEvent = this.chooseJournalEntryLineDistributionRule;
                this.view.reverseJournalEntryEvent = this.reverseJournalEntry;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成
                super.viewShowed();
                if (ibas.objects.isNull(this.editData)) {
                    // 创建编辑对象实例
                    this.editData = new bo.JournalEntry();
                    // 默认引用，不允许删除
                    this.editData.referenced = ibas.emYesNo.YES;
                    this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_created_new"));
                }
                this.view.showJournalEntry(this.editData);
                this.view.showJournalEntryLines(this.editData.journalEntryLines.filterDeleted());
            }
            run(): void;
            run(data: bo.JournalEntry): void;
            run(): void {
                if (arguments[0] instanceof bo.JournalEntry) {
                    let data: bo.JournalEntry = arguments[0];
                    if (data.isNew) {
                        this.editData = data;
                        this.show();
                    } else {
                        let criteria: ibas.ICriteria = data.criteria();
                        if (criteria?.conditions.length > 0) {
                            // 有效的查询对象查询
                            let that: this = this;
                            let boRepository: bo.BORepositoryAccounting = new bo.BORepositoryAccounting();
                            boRepository.fetchJournalEntry({
                                criteria: criteria,
                                onCompleted(opRslt: ibas.IOperationResult<bo.JournalEntry>): void {
                                    try {
                                        if (opRslt.resultCode !== 0) {
                                            throw new Error(opRslt.message);
                                        }
                                        if (opRslt.resultObjects.length > 0) {
                                            that.editData = opRslt.resultObjects.firstOrDefault();
                                            that.show();
                                        } else {
                                            that.messages({
                                                type: ibas.emMessageType.WARNING,
                                                message: ibas.i18n.prop("shell_data_deleted_and_created"),
                                                onCompleted(): void {
                                                    that.show();
                                                }
                                            });
                                        }
                                    } catch (error) {
                                        that.messages(error);
                                    }
                                }
                            });
                        } else {
                            super.run.apply(this, arguments);
                        }
                    }
                } else {
                    super.run.apply(this, arguments);
                }
            }
            /** 保存数据 */
            protected saveData(): void {
                this.busy(true);
                let that: this = this;
                let boRepository: bo.BORepositoryAccounting = new bo.BORepositoryAccounting();
                boRepository.saveJournalEntry({
                    beSaved: this.editData,
                    onCompleted(opRslt: ibas.IOperationResult<bo.JournalEntry>): void {
                        try {
                            that.busy(false);
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            if (opRslt.resultObjects.length === 0) {
                                // 删除成功，释放当前对象
                                that.messages(ibas.emMessageType.SUCCESS,
                                    ibas.i18n.prop("shell_data_delete") + ibas.i18n.prop("shell_sucessful"));
                                that.editData = undefined;
                            } else {
                                // 替换编辑对象
                                that.editData = opRslt.resultObjects.firstOrDefault();
                                that.messages(ibas.emMessageType.SUCCESS,
                                    ibas.i18n.prop("shell_data_save") + ibas.i18n.prop("shell_sucessful"));
                            }
                            // 刷新当前视图
                            that.viewShowed();
                        } catch (error) {
                            that.messages(error);
                        }
                    }
                });
                this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_saving_data"));
            }
            /** 删除数据 */
            protected deleteData(): void {
                let that: this = this;
                this.messages({
                    type: ibas.emMessageType.QUESTION,
                    title: ibas.i18n.prop(this.name),
                    message: ibas.i18n.prop("shell_delete_continue"),
                    actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
                    onCompleted(action: ibas.emMessageAction): void {
                        if (action === ibas.emMessageAction.YES) {
                            if (that.editData.referenced === ibas.emYesNo.YES) {
                                that.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_referenced", that.editData.toString()));
                            } else {
                                that.editData.delete();
                                that.saveData();
                            }
                        }
                    }
                });
            }
            /** 新建数据，参数1：是否克隆 */
            protected createData(clone: boolean): void {
                let that: this = this;
                let createData: Function = function (): void {
                    if (clone) {
                        // 克隆对象
                        that.editData = that.editData.clone();
                        // 默认引用，不允许删除
                        that.editData.referenced = ibas.emYesNo.YES;
                        that.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_cloned_new"));
                        that.viewShowed();
                    } else {
                        // 新建对象
                        that.editData = new bo.JournalEntry();
                        // 默认引用，不允许删除
                        that.editData.referenced = ibas.emYesNo.YES;
                        that.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_created_new"));
                        that.viewShowed();
                    }
                };
                if (that.editData.isDirty) {
                    this.messages({
                        type: ibas.emMessageType.QUESTION,
                        title: ibas.i18n.prop(this.name),
                        message: ibas.i18n.prop("shell_data_not_saved_continue"),
                        actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
                        onCompleted(action: ibas.emMessageAction): void {
                            if (action === ibas.emMessageAction.YES) {
                                createData();
                            }
                        }
                    });
                } else {
                    createData();
                }
            }
            /** 添加日记账分录-行事件 */
            protected addJournalEntryLine(type: "ACCOUNT" | "CUSTOMER" | "SUPPLIER"): void {
                if (type === "ACCOUNT") {
                    this.chooseJournalEntryLineAccount(undefined, false);
                } else if (type === "CUSTOMER") {
                    this.chooseJournalEntryLineShortName(undefined, type);
                } else if (type === "SUPPLIER") {
                    this.chooseJournalEntryLineShortName(undefined, type);
                } else {
                    this.editData.journalEntryLines.create();
                    this.view.showJournalEntryLines(this.editData.journalEntryLines.filterDeleted());
                }
            }
            /** 删除日记账分录-行事件 */
            protected removeJournalEntryLine(items: bo.JournalEntryLine[]): void {
                // 非数组，转为数组
                if (!(items instanceof Array)) {
                    items = [items];
                }
                if (items.length === 0) {
                    return;
                }
                // 移除项目
                for (let item of items) {
                    if (this.editData.journalEntryLines.indexOf(item) >= 0) {
                        if (item.isNew) {
                            // 新建的移除集合
                            this.editData.journalEntryLines.remove(item);
                        } else {
                            // 非新建标记删除
                            item.delete();
                        }
                    }
                }
                // 仅显示没有标记删除的
                this.view.showJournalEntryLines(this.editData.journalEntryLines.filterDeleted());
            }
            /** 选择日记账分录-行科目 */
            protected chooseJournalEntryLineAccount(caller: bo.JournalEntryLine, control: boolean): void {
                if ((!ibas.strings.isEmpty(caller.shortName) && caller.account !== caller.shortName) && ibas.objects.isNull(control)) {
                    // 判断是否为科目
                    let criteria: ibas.ICriteria = new ibas.Criteria();
                    criteria.noChilds = true;
                    criteria.result = 1;
                    let condition: ibas.ICondition = criteria.conditions.create();
                    condition.alias = bo.Account.PROPERTY_CODE_NAME;
                    condition.value = caller.shortName;
                    let boReposiorty: bo.BORepositoryAccounting = new bo.BORepositoryAccounting();
                    boReposiorty.fetchAccount({
                        criteria: criteria,
                        onCompleted: (opRslt) => {
                            // 非科目，则是客户或供应商，则使用控制科目
                            this.chooseJournalEntryLineAccount(caller, !(opRslt.resultObjects.length > 0));
                        }
                    });
                } else {
                    let that: this = this;
                    let conditions: ibas.ICondition[] = app.conditions.account.create();
                    if (control === true) {
                        let condition: ibas.Condition = new ibas.Condition();
                        condition.alias = bo.Account.PROPERTY_CONTROL_NAME;
                        condition.value = ibas.emYesNo.YES.toString();
                        condition.operation = ibas.emConditionOperation.EQUAL;
                        conditions.push(condition);
                    }
                    ibas.servicesManager.runChooseService<bo.Account>({
                        boCode: bo.Account.BUSINESS_OBJECT_CODE,
                        criteria: conditions,
                        onCompleted(selecteds: ibas.IList<bo.Account>): void {
                            // 获取触发的对象
                            let index: number = that.editData.journalEntryLines.indexOf(caller);
                            let item: bo.JournalEntryLine = that.editData.journalEntryLines[index];
                            // 选择返回数量多于触发数量时,自动创建新的项目
                            let created: boolean = false;
                            for (let selected of selecteds) {
                                if (ibas.objects.isNull(item)) {
                                    item = that.editData.journalEntryLines.create();
                                    created = true;
                                }
                                item.account = selected.code;
                                if (control !== true) {
                                    item.shortName = selected.code;
                                }
                                item.currency = selected.currency;
                                item = null;
                            }
                            if (created) {
                                // 创建了新的行项目
                                that.view.showJournalEntryLines(that.editData.journalEntryLines.filterDeleted());
                            }
                        }
                    });
                }
            }
            /** 选择日记账分录-行业务伙伴/科目 */
            protected chooseJournalEntryLineShortName(caller: bo.JournalEntryLine, type?: "ACCOUNT" | "CUSTOMER" | "SUPPLIER"): void {
                if (type === "CUSTOMER") {
                    let that: this = this;
                    let conditions: ibas.ICondition[] = businesspartner.app.conditions.customer.create();
                    ibas.servicesManager.runChooseService<businesspartner.bo.Customer>({
                        boCode: businesspartner.bo.Customer.BUSINESS_OBJECT_CODE,
                        criteria: conditions,
                        onCompleted(selecteds: ibas.IList<businesspartner.bo.Customer>): void {
                            // 获取触发的对象
                            let index: number = that.editData.journalEntryLines.indexOf(caller);
                            let item: bo.JournalEntryLine = that.editData.journalEntryLines[index];
                            // 选择返回数量多于触发数量时,自动创建新的项目
                            let created: boolean = false;
                            for (let selected of selecteds) {
                                if (ibas.objects.isNull(item)) {
                                    item = that.editData.journalEntryLines.create();
                                    created = true;
                                }
                                item.shortName = selected.code;
                                item = null;
                            }
                            if (created) {
                                // 创建了新的行项目
                                that.view.showJournalEntryLines(that.editData.journalEntryLines.filterDeleted());
                            }
                        }
                    });
                } else if (type === "SUPPLIER") {
                    let that: this = this;
                    let conditions: ibas.ICondition[] = businesspartner.app.conditions.supplier.create();
                    ibas.servicesManager.runChooseService<businesspartner.bo.Supplier>({
                        boCode: businesspartner.bo.Supplier.BUSINESS_OBJECT_CODE,
                        criteria: conditions,
                        onCompleted(selecteds: ibas.IList<businesspartner.bo.Supplier>): void {
                            // 获取触发的对象
                            let index: number = that.editData.journalEntryLines.indexOf(caller);
                            let item: bo.JournalEntryLine = that.editData.journalEntryLines[index];
                            // 选择返回数量多于触发数量时,自动创建新的项目
                            let created: boolean = false;
                            for (let selected of selecteds) {
                                if (ibas.objects.isNull(item)) {
                                    item = that.editData.journalEntryLines.create();
                                    created = true;
                                }
                                item.shortName = selected.code;
                                item = null;
                            }
                            if (created) {
                                // 创建了新的行项目
                                that.view.showJournalEntryLines(that.editData.journalEntryLines.filterDeleted());
                            }
                        }
                    });
                } else {
                    let that: this = this;
                    let criteria: ibas.ICriteria = new ibas.Criteria();
                    // 激活的
                    let condition: ibas.ICondition = criteria.conditions.create();
                    condition.alias = bo.Account.PROPERTY_ACTIVE_NAME;
                    condition.value = ibas.emYesNo.YES.toString();
                    condition.operation = ibas.emConditionOperation.EQUAL;

                    ibas.servicesManager.runChooseService<bo.Account>({
                        boCode: bo.Account.BUSINESS_OBJECT_CODE,
                        criteria: criteria,
                        onCompleted(selecteds: ibas.IList<bo.Account>): void {
                            // 获取触发的对象
                            let index: number = that.editData.journalEntryLines.indexOf(caller);
                            let item: bo.JournalEntryLine = that.editData.journalEntryLines[index];
                            // 选择返回数量多于触发数量时,自动创建新的项目
                            let created: boolean = false;
                            for (let selected of selecteds) {
                                if (ibas.objects.isNull(item)) {
                                    item = that.editData.journalEntryLines.create();
                                    created = true;
                                }
                                item.account = selected.code;
                                item.shortName = selected.code;
                                item = null;
                            }
                            if (created) {
                                // 创建了新的行项目
                                that.view.showJournalEntryLines(that.editData.journalEntryLines.filterDeleted());
                            }
                        }
                    });
                }
            }
            protected chooseJournalEntryLineDistributionRule(type: emDimensionType, caller: bo.JournalEntryLine): void {
                if (ibas.objects.isNull(type)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("accounting_dimension_invaild", ""));
                    return;
                }
                ibas.servicesManager.runApplicationService<app.IDimensionDataServiceContract, String>({
                    proxy: new app.DimensionDataServiceProxy({
                        type: type,
                    }),
                    onCompleted(result: string): void {
                        if (type === emDimensionType.DIMENSION_1) {
                            caller.distributionRule1 = result;
                        } else if (type === emDimensionType.DIMENSION_2) {
                            caller.distributionRule2 = result;
                        } else if (type === emDimensionType.DIMENSION_3) {
                            caller.distributionRule3 = result;
                        } else if (type === emDimensionType.DIMENSION_4) {
                            caller.distributionRule4 = result;
                        } else if (type === emDimensionType.DIMENSION_5) {
                            caller.distributionRule5 = result;
                        }
                    }
                });
            }
            /** 冲销分录 */
            protected reverseJournalEntry(): void {
                if (ibas.objects.isNull(this.editData) || this.editData.isDirty === true) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_saved_first"));
                    return;
                }
                if (!ibas.strings.isEmpty(this.editData.baseDocumentType) && this.editData.baseDocumentEntry > 0) {
                    throw new Error(ibas.i18n.prop("accounting_invaild_status_not_support_turn_to_operation"));
                }
                let boRepository: bo.BORepositoryAccounting = new bo.BORepositoryAccounting();
                boRepository.fetchJournalEntry({
                    criteria: this.editData.criteria(),
                    onCompleted: (opRslt) => {
                        try {
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            if (opRslt.resultObjects.length === 0) {
                                throw new Error(ibas.i18n.prop("shell_data_deleted"));
                            }
                            this.editData = opRslt.resultObjects.firstOrDefault();
                            this.view.showJournalEntry(this.editData);
                            this.view.showJournalEntryLines(this.editData.journalEntryLines.filterDeleted());
                            if ((this.editData.approvalStatus !== ibas.emApprovalStatus.APPROVED && this.editData.approvalStatus !== ibas.emApprovalStatus.UNAFFECTED)
                                || this.editData.canceled === ibas.emYesNo.YES
                                || this.editData.documentStatus === ibas.emDocumentStatus.PLANNED
                            ) {
                                throw new Error(ibas.i18n.prop("accounting_invaild_status_not_support_turn_to_operation"));
                            }
                            let target: bo.JournalEntry = this.editData.clone();
                            target.referenced = ibas.emYesNo.YES;
                            target.baseDocumentType = this.editData.objectCode;
                            target.baseDocumentEntry = this.editData.docEntry;
                            if (ibas.objects.isNull(target.reference1)) {
                                target.reference1 = "";
                            }
                            target.reference1 += ibas.i18n.prop("accounting_reverse_remarks", this.editData.docEntry);
                            for (let item of target.journalEntryLines) {
                                item.debit = -item.debit;
                                item.credit = -item.credit;
                            }

                            let app: JournalEntryEditApp = new JournalEntryEditApp();
                            app.navigation = this.navigation;
                            app.viewShower = this.viewShower;
                            app.run(target);

                        } catch (error) {
                            this.messages(error);
                        }
                    }
                });
            }
        }
        /** 视图-日记账分录 */
        export interface IJournalEntryEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showJournalEntry(data: bo.JournalEntry): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加日记账分录-行事件 */
            addJournalEntryLineEvent: Function;
            /** 删除日记账分录-行事件 */
            removeJournalEntryLineEvent: Function;
            /** 显示数据-日记账分录-行 */
            showJournalEntryLines(datas: bo.JournalEntryLine[]): void;
            /** 选择日记账分录-行科目事件 */
            chooseJournalEntryLineAccountEvent: Function;
            /** 选择日记账分录-行业务伙伴/科目事件 */
            chooseJournalEntryLineShortNameEvent: Function;
            /** 选择日记账分录-行成本中心事件 */
            chooseJournalEntryLineDistributionRuleEvent: Function;
            /** 冲销分录事件 */
            reverseJournalEntryEvent: Function;
        }
    }
}
