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
            }
            /** 视图显示后 */
            protected viewShowed(): void {

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
                                for (let item of contract.settings) {
                                    condition = criteria.conditions.create();
                                    condition.alias = bo.PeriodLedgerAccount.PROPERTY_LEDGER_NAME;
                                    condition.value = item.ledger;
                                    condition.relationship = ibas.emConditionRelationship.OR;
                                }
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
                                condition.alias = bo.PeriodLedgerAccount.PROPERTY_DATASOURCE_NAME;
                                condition.value = "LAS";
                                let boReposiorty: bo.BORepositoryAccounting = new bo.BORepositoryAccounting();
                                boReposiorty.fetchPeriodLedgerAccount({
                                    criteria: criteria,
                                    onCompleted: (opRslt) => {
                                        try {
                                            if (opRslt.resultCode !== 0) {
                                                throw new Error(opRslt.message);
                                            }
                                            for (let cItem of contract.settings) {
                                                let oItem: bo.PeriodLedgerAccount = opRslt.resultObjects.firstOrDefault(c => c.ledger === cItem.ledger);
                                                if (ibas.objects.isNull(oItem)) {
                                                    oItem = new bo.PeriodLedgerAccount();
                                                    oItem.dataSource = "LAS";
                                                    oItem.ledger = cItem.ledger;
                                                    oItem.period = this.currentPeriod.objectKey;
                                                }
                                            }
                                        } catch (error) {
                                            this.messages(error);
                                        }
                                    }
                                });
                            }
                        } catch (error) {
                            this.messages(error);
                        }
                    }
                });

            }
        }
        /** 视图-分类账设置 */
        export interface ILedgerAccountSettingView extends ibas.IView {

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
