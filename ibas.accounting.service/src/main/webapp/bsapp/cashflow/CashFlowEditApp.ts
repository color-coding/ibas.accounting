/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace accounting {
    export namespace app {
        /** 编辑应用-现金流项目 */
        export class CashFlowEditApp extends ibas.BOEditApplication<ICashFlowEditView, bo.CashFlow> {
            /** 应用标识 */
            static APPLICATION_ID: string = "2c430cc8-9901-472b-a5c7-8d09a4ab9b32";
            /** 应用名称 */
            static APPLICATION_NAME: string = "accounting_app_cashflow_edit";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.CashFlow.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = CashFlowEditApp.APPLICATION_ID;
                this.name = CashFlowEditApp.APPLICATION_NAME;
                this.boCode = CashFlowEditApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
                this.view.deleteDataEvent = this.deleteData;
                this.view.createDataEvent = this.createData;
                this.view.chooseParentEvent = this.chooseParent;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成
                super.viewShowed();
                if (ibas.objects.isNull(this.editData)) {
                    // 创建编辑对象实例
                    this.editData = new bo.CashFlow();
                    this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_created_new"));
                }
                this.view.showCashFlow(this.editData);
            }
            run(): void;
            run(data: bo.CashFlow): void;
            run(): void {
                if (arguments[0] instanceof bo.CashFlow) {
                    let data: bo.CashFlow = arguments[0];
                    if (data.isNew) {
                        this.editData = data;
                        this.show();
                    } else {
                        let criteria: ibas.ICriteria = data.criteria();
                        if (criteria?.conditions.length > 0) {
                            // 有效的查询对象查询
                            let that: this = this;
                            let boRepository: bo.BORepositoryAccounting = new bo.BORepositoryAccounting();
                            boRepository.fetchCashFlow({
                                criteria: criteria,
                                onCompleted(opRslt: ibas.IOperationResult<bo.CashFlow>): void {
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
                boRepository.saveCashFlow({
                    beSaved: this.editData,
                    onCompleted(opRslt: ibas.IOperationResult<bo.CashFlow>): void {
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
                            that.editData.delete();
                            that.saveData();
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
                        that.editData = new bo.CashFlow();
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
            protected chooseParent(): void {
                let that: this = this;
                let criteria: ibas.Criteria = new ibas.Criteria();
                let condition: ibas.ICondition = criteria.conditions.create();
                condition.alias = bo.CashFlow.PROPERTY_SIGN_NAME;
                condition.value = this.editData.sign.toString();
                condition = criteria.conditions.create();
                condition.alias = bo.CashFlow.PROPERTY_POSTABLE_NAME;
                condition.value = bo.emPostableType.ACTIVE.toString();

                ibas.servicesManager.runChooseService<bo.CashFlow>({
                    boCode: bo.CashFlow.BUSINESS_OBJECT_CODE,
                    criteria: criteria,
                    onCompleted(selecteds: ibas.IList<bo.CashFlow>): void {
                        for (let selected of selecteds) {
                            that.editData.parent = selected.sign;
                            that.editData.level = selected.level + 1;
                        }
                    }
                });
            }
        }
        /** 视图-现金流项目 */
        export interface ICashFlowEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showCashFlow(data: bo.CashFlow): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 选择父项事件 */
            chooseParentEvent: Function;
        }
    }
}
