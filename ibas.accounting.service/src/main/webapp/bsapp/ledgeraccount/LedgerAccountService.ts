/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace accounting {
    export namespace app {
        /** 应用-分类账设置 */
        export class LedgerAccountSettingService extends ibas.ServiceApplication<ILedgerAccountSettingView, ILedgerAccountSettingContract> {
            /** 应用标识 */
            static APPLICATION_ID: string = "69ba9e84-e449-4bb6-b1cd-3eb0358e3dc6";
            /** 应用名称 */
            static APPLICATION_NAME: string = "accounting_app_ledgeraccountsetting";
            /** 构造函数 */
            constructor() {
                super();
                this.id = LedgerAccountSettingService.APPLICATION_ID;
                this.name = LedgerAccountSettingService.APPLICATION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                this.view.chooseAccountEvent = this.chooseAccount;
                this.view.saveEvent = this.save;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                if (ibas.objects.isNull(this.settings)) {
                    this.settings = new ibas.ArrayList<bo.PeriodLedgerAccount>();
                }
                this.view.showLedgerAccounts(this.settings);
            }
            private currentPeriod: bo.PeriodCategory;
            private settings: ibas.IList<bo.PeriodLedgerAccount>;
            protected runService(contract: ILedgerAccountSettingContract): void {
                let criteria: ibas.ICriteria = new ibas.Criteria();
                criteria.result = 1;
                let condition: ibas.ICondition = criteria.conditions.create();
                condition.alias = bo.PeriodCategory.PROPERTY_STARTDATE_NAME;
                condition.value = ibas.dates.toString(ibas.dates.today());
                condition.operation = ibas.emConditionOperation.LESS_EQUAL;
                condition = criteria.conditions.create();
                condition.alias = bo.PeriodCategory.PROPERTY_ENDDATE_NAME;
                condition.value = ibas.dates.toString(ibas.dates.today());
                condition.operation = ibas.emConditionOperation.GRATER_EQUAL;
                let sort: ibas.ISort = criteria.sorts.create();
                sort.alias = bo.PeriodCategory.PROPERTY_OBJECTKEY_NAME;
                sort.sortType = ibas.emSortType.DESCENDING;
                let boReposiorty: bo.BORepositoryAccounting = new bo.BORepositoryAccounting();
                boReposiorty.fetchPeriodCategory({
                    criteria: criteria,
                    onCompleted: (opRslt) => {
                        try {
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            if (opRslt.resultObjects.length === 0) {
                                throw new Error(ibas.i18n.prop("accounting_period_not_found", ibas.dates.toString(ibas.dates.today())));
                            }
                            this.currentPeriod = opRslt.resultObjects.firstOrDefault();
                            criteria = new ibas.Criteria();
                            if (contract.settings instanceof Array) {
                                this.settingService(contract.description, contract.settings);
                            } else if (!ibas.strings.isEmpty(contract.settings?.category)) {
                                this.categoryService(contract.description, contract.settings);
                            } else {
                                this.show();
                            }
                        } catch (error) {
                            this.messages(error);
                        }
                    }
                });
            }
            private settingService(description: string, settings: ILedgerAccountSetting[]): void {
                let condition: ibas.ICondition;
                let criteria: ibas.ICriteria = new ibas.Criteria();
                for (let item of settings) {
                    condition = criteria.conditions.create();
                    condition.alias = bo.PeriodLedgerAccount.PROPERTY_LEDGER_NAME;
                    condition.value = item.ledger;
                    condition.relationship = ibas.emConditionRelationship.OR;
                }
                if (criteria.conditions.length > 0) {
                    if (criteria.conditions.length > 1) {
                        criteria.conditions.firstOrDefault().bracketOpen++;
                        criteria.conditions.lastOrDefault().bracketClose++;
                    }
                    condition = criteria.conditions.create();
                    condition.alias = bo.PeriodLedgerAccount.PROPERTY_PERIOD_NAME;
                    condition.value = this.currentPeriod.objectKey.toString();
                    condition = criteria.conditions.create();
                    condition.alias = bo.PeriodLedgerAccount.PROPERTY_NAME_NAME;
                    condition.value = description;
                    let boReposiorty: bo.BORepositoryAccounting = new bo.BORepositoryAccounting();
                    boReposiorty.fetchPeriodLedgerAccount({
                        criteria: criteria,
                        onCompleted: (opRslt) => {
                            try {
                                if (opRslt.resultCode !== 0) {
                                    throw new Error(opRslt.message);
                                }
                                this.settings = new ibas.ArrayList<bo.PeriodLedgerAccount>();
                                for (let cItem of settings) {
                                    let oItem: bo.PeriodLedgerAccount = opRslt.resultObjects.firstOrDefault(c => c.ledger === cItem.ledger);
                                    if (ibas.objects.isNull(oItem)) {
                                        oItem = new bo.PeriodLedgerAccount();
                                        oItem.ledger = cItem.ledger;
                                        oItem.period = this.currentPeriod.objectKey;
                                        oItem.account = cItem.account;
                                        oItem.name = description;
                                    }
                                    if (cItem.conditions instanceof Array) {
                                        oItem.periodLedgerAccountConditions.clear();
                                        for (let item of cItem.conditions) {
                                            let condition: bo.PeriodLedgerAccountCondition = oItem.periodLedgerAccountConditions.create();
                                            condition.bracketOpen = item.bracketOpen;
                                            condition.propertyName = item.alias;
                                            condition.operation = item.operation;
                                            condition.value = item.value;
                                            condition.bracketClose = item.bracketClose;
                                            condition.relationship = item.relationship;
                                        }
                                    }
                                    this.settings.add(oItem);
                                }
                                this.show();
                            } catch (error) {
                                this.messages(error);
                            }
                        }
                    });
                } else {
                    this.show();
                }
            }
            private categoryService(description: string, category: ILedgerAccountCategory): void {
                let condition: ibas.ICondition;
                let criteria: ibas.ICriteria = new ibas.Criteria();
                condition = criteria.conditions.create();
                condition.alias = bo.LedgerAccount.PROPERTY_SETTINGS_NAME;
                condition.operation = ibas.emConditionOperation.CONTAIN;
                condition.value = ibas.strings.format("{0};", category.category.endsWith(";") ? category.category.substring(0, category.category.length - 1) : category.category);
                let boReposiorty: bo.BORepositoryAccounting = new bo.BORepositoryAccounting();
                boReposiorty.fetchLedgerAccount({
                    criteria: criteria,
                    onCompleted: (opRslt) => {
                        try {
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            let settings: ILedgerAccountSetting[] = new ibas.ArrayList<ILedgerAccountSetting>();
                            for (let item of opRslt.resultObjects) {
                                settings.push({
                                    ledger: item.sign,
                                    conditions: category.conditions
                                });
                            }
                            this.settingService(description, settings);
                        } catch (error) {
                            this.messages(error);
                        }
                    }
                });
            }
            /** 选择过账期间总账科目科目事件 */
            private chooseAccount(periodAccount: bo.PeriodLedgerAccount): void {
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
            private save(): void {
                let beSaveds: ibas.IList<bo.PeriodLedgerAccount> = new ibas.ArrayList<bo.PeriodLedgerAccount>();
                for (let item of this.settings) {
                    if (item.isDirty !== true) {
                        continue;
                    }
                    if (item.isNew === true && ibas.strings.isEmpty(item.account)) {
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
                                        let index: number = that.settings.indexOf(data);
                                        if (index >= 0) {
                                            if (data.isDeleted) {
                                                that.settings.remove(data);
                                            } else {
                                                that.settings[index] = opRslt.resultObjects.firstOrDefault();
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
                                that.messages(ibas.emMessageType.SUCCESS,
                                    ibas.i18n.prop("shell_data_save") + ibas.i18n.prop("shell_sucessful"));
                            }
                            that.view.showLedgerAccounts(that.settings.filter(c => c.isDeleted === false));
                            that.busy(false);
                        });
                        that.busy(true);
                    }
                });
            }
        }
        /** 视图-分类账设置 */
        export interface ILedgerAccountSettingView extends ibas.IView {
            /** 显示期间科目 */
            showLedgerAccounts(datas: bo.PeriodLedgerAccount[]): void;
            /** 选择过账期间总账科目科目事件 */
            chooseAccountEvent: Function;
            /** 保存事件 */
            saveEvent: Function;
        }

        /** 分类账设置服务映射 */
        export class LedgerAccountSettingServiceMapping extends ibas.ServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = LedgerAccountSettingService.APPLICATION_ID;
                this.name = LedgerAccountSettingService.APPLICATION_NAME;
                this.description = ibas.i18n.prop(this.name);
                this.proxy = LedgerAccountSettingServiceProxy;
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract> {
                return new LedgerAccountSettingService();
            }
        }
    }
}
