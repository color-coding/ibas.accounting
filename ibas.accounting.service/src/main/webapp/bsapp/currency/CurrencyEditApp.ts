/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace accounting {
    export namespace app {
        /** 编辑应用-货币 */
        export class CurrencyEditApp extends ibas.BOEditApplication<ICurrencyEditView, bo.Currency> {
            /** 应用标识 */
            static APPLICATION_ID: string = "3673f169-7f82-4452-b7c8-0b443605b0d4";
            /** 应用名称 */
            static APPLICATION_NAME: string = "accounting_app_currency_edit";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.Currency.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = CurrencyEditApp.APPLICATION_ID;
                this.name = CurrencyEditApp.APPLICATION_NAME;
                this.boCode = CurrencyEditApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
                this.view.deleteDataEvent = this.deleteData;
                this.view.createDataEvent = this.createData;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成
                super.viewShowed();
                if (ibas.objects.isNull(this.editData)) {
                    // 创建编辑对象实例
                    this.editData = new bo.Currency();
                    this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_created_new"));
                }
                this.view.showCurrency(this.editData);
            }
            run(): void;
            run(data: bo.Currency): void;
            run(): void {
                let that: this = this;
                if (ibas.objects.instanceOf(arguments[0], bo.Currency)) {
                    let data: bo.Currency = arguments[0];
                    // 新对象直接编辑
                    if (data.isNew) {
                        that.editData = data;
                        that.show();
                        return;
                    }
                    // 尝试重新查询编辑对象
                    let criteria: ibas.ICriteria = data.criteria();
                    if (!ibas.objects.isNull(criteria) && criteria.conditions.length > 0) {
                        // 有效的查询对象查询
                        let boRepository: bo.BORepositoryAccounting = new bo.BORepositoryAccounting();
                        boRepository.fetchCurrency({
                            criteria: criteria,
                            onCompleted(opRslt: ibas.IOperationResult<bo.Currency>): void {
                                let data: bo.Currency;
                                if (opRslt.resultCode === 0) {
                                    data = opRslt.resultObjects.firstOrDefault();
                                }
                                if (ibas.objects.instanceOf(data, bo.Currency)) {
                                    // 查询到了有效数据
                                    that.editData = data;
                                    that.show();
                                } else {
                                    // 数据重新检索无效
                                    that.messages({
                                        type: ibas.emMessageType.WARNING,
                                        message: ibas.i18n.prop("shell_data_deleted_and_created"),
                                        onCompleted(): void {
                                            that.show();
                                        }
                                    });
                                }
                            }
                        });
                        return; // 退出
                    }
                }
                super.run.apply(this, arguments);
            }
            /** 保存数据 */
            protected saveData(others?: bo.Currency[]): void {
                this.busy(true);
                if (ibas.objects.isNull(others)) {
                    // 修改其他币种状态
                    let criteria: ibas.ICriteria = new ibas.Criteria();
                    // 其他标记系统币
                    if (this.editData.system === ibas.emYesNo.YES) {
                        let condition: ibas.ICondition = criteria.conditions.create();
                        condition.alias = bo.Currency.PROPERTY_SYSTEM_NAME;
                        condition.value = ibas.emYesNo.YES.toString();
                        condition.bracketOpen = 1;
                        condition = criteria.conditions.create();
                        condition.alias = bo.Currency.PROPERTY_CODE_NAME;
                        condition.operation = ibas.emConditionOperation.NOT_EQUAL;
                        condition.value = this.editData.code;
                        condition.bracketClose = 1;
                    }
                    // 其他标记本币
                    if (this.editData.local === ibas.emYesNo.YES) {
                        let condition: ibas.ICondition = criteria.conditions.create();
                        condition.alias = bo.Currency.PROPERTY_LOCAL_NAME;
                        condition.value = ibas.emYesNo.YES.toString();
                        condition.bracketOpen = 1;
                        if (criteria.conditions.length > 1) {
                            condition.relationship = ibas.emConditionRelationship.OR;
                        }
                        condition = criteria.conditions.create();
                        condition.alias = bo.Currency.PROPERTY_CODE_NAME;
                        condition.operation = ibas.emConditionOperation.NOT_EQUAL;
                        condition.value = this.editData.code;
                        condition.bracketClose = 1;
                    }
                    if (criteria.conditions.length > 1) {
                        let boRepository: bo.BORepositoryAccounting = new bo.BORepositoryAccounting();
                        boRepository.fetchCurrency({
                            criteria: criteria,
                            onCompleted: (opRslt) => {
                                for (let item of opRslt.resultObjects) {
                                    if (this.editData.system === ibas.emYesNo.YES) {
                                        if (this.editData.system === item.system) {
                                            item.system = ibas.emYesNo.NO;
                                        }
                                    }
                                    if (this.editData.local === ibas.emYesNo.YES) {
                                        if (this.editData.local === item.local) {
                                            item.local = ibas.emYesNo.NO;
                                        }
                                    }
                                }
                                this.saveData(opRslt.resultObjects.filter(c => c.isDirty === true));
                            }
                        }); return;
                    }
                }
                let beSaveds: ibas.ArrayList<bo.Currency> = ibas.arrays.create(others);
                beSaveds.add(this.editData);
                let that: this = this;
                let boRepository: bo.BORepositoryAccounting = new bo.BORepositoryAccounting();
                ibas.queues.execute(beSaveds, (data, next) => {
                    // 处理数据
                    boRepository.saveCurrency({
                        beSaved: data,
                        onCompleted(opRslt: ibas.IOperationResult<bo.Currency>): void {
                            if (opRslt.resultCode !== 0) {
                                next(new Error(opRslt.message));
                            } else {
                                if (that.editData === data) {
                                    if (opRslt.resultObjects.length > 0) {
                                        that.editData = opRslt.resultObjects.firstOrDefault();
                                        if (that.editData.system === ibas.emYesNo.YES) {
                                            ibas.config.set(ibas.strings.format("{0}|{1}",
                                                CONSOLE_ID, config.CONFIG_ITEM_SYSTEM_CURRENCY), that.editData.code);
                                        }
                                        if (that.editData.local === ibas.emYesNo.YES) {
                                            ibas.config.set(ibas.strings.format("{0}|{1}",
                                                CONSOLE_ID, config.CONFIG_ITEM_LOCAL_CURRENCY), that.editData.code);
                                        }
                                        that.view.showCurrency(that.editData);
                                    }
                                }
                                next();
                            }
                        }
                    });
                }, (error) => {
                    // 处理完成
                    if (error instanceof Error) {
                        this.messages(ibas.emMessageType.ERROR, error.message);
                    } else {
                        this.messages(ibas.emMessageType.SUCCESS,
                            ibas.i18n.prop("shell_data_save") + ibas.i18n.prop("shell_sucessful"));
                    }
                    this.busy(false);
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
                            that.editData.delete();
                            that.saveData([]);
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
                        that.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_cloned_new"));
                        that.viewShowed();
                    } else {
                        // 新建对象
                        that.editData = new bo.Currency();
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
        }
        /** 视图-货币 */
        export interface ICurrencyEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showCurrency(data: bo.Currency): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
        }
    }
}
