/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace accounting {
    export namespace app {
        /** 选择应用-费用结构 */
        export class CostStructureChooseApp extends ibas.BOChooseService<ICostStructureChooseView, bo.CostStructure> {
            /** 应用标识 */
            static APPLICATION_ID: string = "c248561c-aa5b-40e7-8c32-e9349f625883";
            /** 应用名称 */
            static APPLICATION_NAME: string = "accounting_app_coststructure_choose";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.CostStructure.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = CostStructureChooseApp.APPLICATION_ID;
                this.name = CostStructureChooseApp.APPLICATION_NAME;
                this.boCode = CostStructureChooseApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成
                super.viewShowed();
            }
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria): void {
                this.busy(true);
                if (ibas.objects.isNull(criteria)) {
                    criteria = new ibas.Criteria();
                }
                criteria.noChilds = true;
                let that: this = this;
                let boRepository: bo.BORepositoryAccounting = new bo.BORepositoryAccounting();
                boRepository.fetchCostStructure({
                    criteria: criteria,
                    onCompleted(opRslt: ibas.IOperationResult<bo.CostStructure>): void {
                        try {
                            that.busy(false);
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            if (opRslt.resultObjects.length === 1
                                && ibas.config.get(ibas.CONFIG_ITEM_AUTO_CHOOSE_DATA, true) && !that.isViewShowed()) {
                                // 仅一条数据，直接选择
                                that.chooseData(opRslt.resultObjects);
                            } else {
                                if (!that.isViewShowed()) {
                                    // 没显示视图，先显示
                                    that.show();
                                }
                                if (opRslt.resultObjects.length === 0) {
                                    that.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_data_fetched_none"));
                                }
                                that.view.showData(opRslt.resultObjects);
                            }
                        } catch (error) {
                            that.messages(error);
                        }
                    }
                });
                this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_fetching_data"));
            }
            /** 新建数据 */
            protected newData(): void {
                // 关闭自身
                this.destroy();
                // 调用编辑应用
                let app: CostStructureEditApp = new CostStructureEditApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run();
            }
        }
        /** 视图-费用结构 */
        export interface ICostStructureChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.CostStructure[]): void;
        }
        /** 费用结构选择服务映射 */
        export class CostStructureChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = CostStructureChooseApp.APPLICATION_ID;
                this.name = CostStructureChooseApp.APPLICATION_NAME;
                this.boCode = CostStructureChooseApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 创建服务实例 */
            create(): ibas.IBOChooseService<bo.CostStructure> {
                return new CostStructureChooseApp();
            }
        }
    }
}
