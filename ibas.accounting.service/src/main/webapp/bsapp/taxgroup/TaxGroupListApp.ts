/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace accounting {
    export namespace app {
        /** 列表应用-税收组 */
        export class TaxGroupListApp extends ibas.BOListApplication<ITaxGroupListView, bo.TaxGroup> {
            /** 应用标识 */
            static APPLICATION_ID: string = "514e0ce6-312a-45aa-bc91-94a25121a9d3";
            /** 应用名称 */
            static APPLICATION_NAME: string = "accounting_app_taxgroup_list";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.TaxGroup.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = TaxGroupListApp.APPLICATION_ID;
                this.name = TaxGroupListApp.APPLICATION_NAME;
                this.boCode = TaxGroupListApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
                this.view.editDataEvent = this.editData;
                this.view.deleteDataEvent = this.deleteData;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成
                super.viewShowed();
            }
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria): void {
                this.busy(true);
                let that: this = this;
                let boRepository: bo.BORepositoryAccounting = new bo.BORepositoryAccounting();
                boRepository.fetchTaxGroup({
                    criteria: criteria,
                    onCompleted(opRslt: ibas.IOperationResult<bo.TaxGroup>): void {
                        try {
                            that.busy(false);
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            if (!that.isViewShowed()) {
                                // 没显示视图，先显示
                                that.show();
                            }
                            if (opRslt.resultObjects.length === 0) {
                                that.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_data_fetched_none"));
                            }
                            that.view.showData(opRslt.resultObjects);
                        } catch (error) {
                            that.messages(error);
                        }
                    }
                });
                this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_fetching_data"));
            }
            /** 新建数据 */
            protected newData(): void {
                let app: TaxGroupEditApp = new TaxGroupEditApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run();
            }
            /** 查看数据，参数：目标数据 */
            protected viewData(data: bo.TaxGroup): void {
            }
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.TaxGroup): void {
                // 检查目标数据
                if (ibas.objects.isNull(data)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("shell_data_edit")
                    ));
                    return;
                }
                let app: TaxGroupEditApp = new TaxGroupEditApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run(data);
            }
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.TaxGroup | bo.TaxGroup[]): void {
                let beDeleteds: ibas.IList<bo.TaxGroup> = ibas.arrays.create(data);
                // 没有选择删除的对象
                if (beDeleteds.length === 0) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("shell_data_delete")
                    ));
                    return;
                }
                // 标记删除对象
                beDeleteds.forEach((value) => {
                    if (value.referenced === ibas.emYesNo.YES) {
                        this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_referenced", value));
                        return;
                    }
                    value.delete();
                });
                let that: this = this;
                this.messages({
                    type: ibas.emMessageType.QUESTION,
                    title: ibas.i18n.prop(this.name),
                    message: ibas.i18n.prop("shell_multiple_data_delete_continue", beDeleteds.length),
                    actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
                    onCompleted(action: ibas.emMessageAction): void {
                        if (action !== ibas.emMessageAction.YES) {
                            return;
                        }
                        let boRepository: bo.BORepositoryAccounting = new bo.BORepositoryAccounting();
                        ibas.queues.execute(beDeleteds, (data, next) => {
                            // 处理数据
                            if (data.isDeleted === true) {
                                boRepository.saveTaxGroup({
                                    beSaved: data,
                                    onCompleted(opRslt: ibas.IOperationResult<bo.TaxGroup>): void {
                                        if (opRslt.resultCode !== 0) {
                                            next(new Error(ibas.i18n.prop("shell_data_delete_error", data, opRslt.message)));
                                        } else {
                                            next();
                                        }
                                    }
                                });
                            }
                        }, (error) => {
                            // 处理完成
                            if (error instanceof Error) {
                                that.messages(ibas.emMessageType.ERROR, error.message);
                            } else {
                                that.messages(ibas.emMessageType.SUCCESS,
                                    ibas.i18n.prop("shell_data_delete") + ibas.i18n.prop("shell_sucessful"));
                            }
                            that.busy(false);
                        });
                        that.busy(true);
                    }
                });
            }
        }
        /** 视图-税收组 */
        export interface ITaxGroupListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.TaxGroup[]): void;
        }
    }
}
