/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace accounting {
    export namespace app {
        /** 编辑应用-税收组 */
        export class TaxGroupEditApp extends ibas.BOEditApplication<ITaxGroupEditView, bo.TaxGroup> {
            /** 应用标识 */
            static APPLICATION_ID: string = "5baba666-09d9-47e5-ba4b-d2d37de5d35c";
            /** 应用名称 */
            static APPLICATION_NAME: string = "accounting_app_taxgroup_edit";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.TaxGroup.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = TaxGroupEditApp.APPLICATION_ID;
                this.name = TaxGroupEditApp.APPLICATION_NAME;
                this.boCode = TaxGroupEditApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
                this.view.deleteDataEvent = this.deleteData;
                this.view.createDataEvent = this.createData;
                this.view.chooseLedgerAccountEvent = this.chooseLedgerAccount;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成
                super.viewShowed();
                if (ibas.objects.isNull(this.editData)) {
                    // 创建编辑对象实例
                    this.editData = new bo.TaxGroup();
                    this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_created_new"));
                }
                this.view.showTaxGroup(this.editData);
            }
            run(): void;
            run(data: bo.TaxGroup): void;
            run(): void {
                let that: this = this;
                if (ibas.objects.instanceOf(arguments[0], bo.TaxGroup)) {
                    let data: bo.TaxGroup = arguments[0];
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
                        boRepository.fetchTaxGroup({
                            criteria: criteria,
                            onCompleted(opRslt: ibas.IOperationResult<bo.TaxGroup>): void {
                                let data: bo.TaxGroup;
                                if (opRslt.resultCode === 0) {
                                    data = opRslt.resultObjects.firstOrDefault();
                                }
                                if (ibas.objects.instanceOf(data, bo.TaxGroup)) {
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
            protected saveData(): void {
                this.busy(true);
                let that: this = this;
                let boRepository: bo.BORepositoryAccounting = new bo.BORepositoryAccounting();
                boRepository.saveTaxGroup({
                    beSaved: this.editData,
                    onCompleted(opRslt: ibas.IOperationResult<bo.TaxGroup>): void {
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
                if (this.editData.referenced === ibas.emYesNo.YES) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_referenced", this.editData));
                    return;
                }
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
                        that.editData = new bo.TaxGroup();
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
            /** 选择总账科目事件 */
            private chooseLedgerAccount(): void {
                if (ibas.objects.isNull(this.editData) || this.editData.isDirty) {
                    throw new Error(ibas.i18n.prop("shell_data_saved_first"));
                }
                if (this.editData.category === bo.emTaxGroupCategory.INPUT) {
                    ibas.servicesManager.runApplicationService<ILedgerAccountSettingContract>({
                        proxy: new LedgerAccountSettingServiceProxy({
                            objectCode: this.editData.objectCode,
                            description: ibas.strings.format("{0} - {1}", this.editData.code, this.editData.name),
                            settings: [
                                {
                                    // 进项税科目
                                    ledger: "GL-AC-06",
                                    conditions: [
                                        new ibas.Condition(emLedgerAccountConditionProperty.Tax, ibas.emConditionOperation.EQUAL, this.editData.code)
                                    ]
                                },
                            ]
                        }),
                    });
                } else if (this.editData.category === bo.emTaxGroupCategory.OUTPUT) {
                    ibas.servicesManager.runApplicationService<ILedgerAccountSettingContract>({
                        proxy: new LedgerAccountSettingServiceProxy({
                            objectCode: this.editData.objectCode,
                            description: ibas.strings.format("{0} - {1}", this.editData.code, this.editData.name),
                            settings: [
                                {
                                    // 销项税科目
                                    ledger: "GL-AC-07",
                                    conditions: [
                                        new ibas.Condition(emLedgerAccountConditionProperty.Tax, ibas.emConditionOperation.EQUAL, this.editData.code)
                                    ]
                                },
                            ]
                        }),
                    });
                }
            }
        }
        /** 视图-税收组 */
        export interface ITaxGroupEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showTaxGroup(data: bo.TaxGroup): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 选择总账科目事件 */
            chooseLedgerAccountEvent: Function;
        }
    }
}
