/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace accounting {
    export namespace app {
        /** 编辑应用-费用结构 */
        export class CostStructureEditApp extends ibas.BOEditApplication<ICostStructureEditView, bo.CostStructure> {
            /** 应用标识 */
            static APPLICATION_ID: string = "26fbb9be-6c4f-4a8c-b514-fc8af2f6de4d";
            /** 应用名称 */
            static APPLICATION_NAME: string = "accounting_app_coststructure_edit";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.CostStructure.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = CostStructureEditApp.APPLICATION_ID;
                this.name = CostStructureEditApp.APPLICATION_NAME;
                this.boCode = CostStructureEditApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
                this.view.deleteDataEvent = this.deleteData;
                this.view.chooseEntityEvent = this.chooseEntity;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成
                super.viewShowed();
                if (ibas.objects.isNull(this.editData)) {
                    // 创建编辑对象实例
                    this.editData = new bo.CostStructure();
                    this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_created_new"));
                }
                this.view.showCostStructure(this.editData);
            }
            run(data?: bo.CostStructure, onCompleted?: (data: bo.CostStructure) => void): void {
                this.editData = data;
                this.onCompleted = onCompleted;
                super.run.apply(this, arguments);
            }
            private onCompleted: (data: bo.CostStructure) => void;
            /** 保存数据 */
            protected saveData(): void {
                this.busy(true);
                let that: this = this;
                let boRepository: bo.BORepositoryAccounting = new bo.BORepositoryAccounting();
                boRepository.saveCostStructure({
                    beSaved: this.editData,
                    onCompleted(opRslt: ibas.IOperationResult<bo.CostStructure>): void {
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
            /** 选择产品资源事件 */
            private chooseEntity(): void {
                let that: this = this;
                // 调用选择服务
                if (this.editData.entityType === bo.emEntityType.ORGANIZATION) {
                    ibas.servicesManager.runChooseService<initialfantasy.bo.Organization>({
                        boCode: initialfantasy.bo.BO_CODE_ORGANIZATION,
                        criteria: [
                            new ibas.Condition(initialfantasy.bo.Organization.PROPERTY_ACTIVATED_NAME, ibas.emConditionOperation.EQUAL, ibas.emYesNo.YES)
                        ],
                        chooseType: ibas.emChooseType.SINGLE,
                        onCompleted(selecteds: ibas.IList<initialfantasy.bo.Organization>): void {
                            let selected: initialfantasy.bo.Organization = selecteds.firstOrDefault();
                            that.editData.entityCode = selected.code;
                            that.editData.name = ibas.i18n.prop("accounting_who's_cost", selected.name);

                        }
                    });
                } else if (this.editData.entityType === bo.emEntityType.PROJECT) {
                    ibas.servicesManager.runChooseService<bo.Project>({
                        boCode: bo.Project.BUSINESS_OBJECT_CODE,
                        criteria: [
                            new ibas.Condition(bo.Project.PROPERTY_CANCELED_NAME, ibas.emConditionOperation.NOT_EQUAL, ibas.emYesNo.YES)
                        ],
                        chooseType: ibas.emChooseType.SINGLE,
                        onCompleted(selecteds: ibas.IList<bo.Project>): void {
                            let selected: bo.Project = selecteds.firstOrDefault();
                            that.editData.entityCode = selected.code;
                            that.editData.name = ibas.i18n.prop("accounting_who's_cost", selected.name);
                        }
                    });
                }
            }
            public close(): void {
                super.close();
                if (this.onCompleted instanceof Function) {
                    this.onCompleted(this.editData);
                }
            }
        }
        /** 视图-费用结构 */
        export interface ICostStructureEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showCostStructure(data: bo.CostStructure): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 选择主体 */
            chooseEntityEvent: Function;
        }
    }
}
