/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace accounting {
    export namespace ui {
        export namespace c {
            /** 查看视图-现金流项目 */
            export class CashFlowViewView extends ibas.BOViewView implements app.ICashFlowViewView {

                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    return this.page = new sap.extension.uxap.DataObjectPageLayout("", {
                        dataInfo: {
                            code: bo.CashFlow.BUSINESS_OBJECT_CODE,
                        },
                        headerTitle: new sap.uxap.ObjectPageHeader("", {
                            objectTitle: {
                                path: "name",
                                type: new sap.extension.data.Alphanumeric(),
                            },
                            objectSubtitle: {
                                path: "sign",
                                type: new sap.extension.data.Alphanumeric(),
                            },
                            navigationBar: new sap.m.Bar("", {
                                contentLeft: [
                                    new sap.m.Button("", {
                                        text: ibas.i18n.prop("shell_data_edit"),
                                        type: sap.m.ButtonType.Transparent,
                                        icon: "sap-icon://edit",
                                        visible: this.mode === ibas.emViewMode.VIEW ? false : true,
                                        press(): void {
                                            that.fireViewEvents(that.editDataEvent);
                                        }
                                    })
                                ],
                                contentRight: [
                                    new sap.m.Button("", {
                                        type: sap.m.ButtonType.Transparent,
                                        icon: "sap-icon://action",
                                        press(event: sap.ui.base.Event): void {
                                            ibas.servicesManager.showServices({
                                                proxy: new ibas.BOServiceProxy({
                                                    data: that.page.getModel().getData(),
                                                    converter: new bo.DataConverter(),
                                                }),
                                                displayServices(services: ibas.IServiceAgent[]): void {
                                                    if (ibas.objects.isNull(services) || services.length === 0) {
                                                        return;
                                                    }
                                                    let actionSheet: sap.m.ActionSheet = new sap.m.ActionSheet("", {
                                                        placement: sap.m.PlacementType.Bottom,
                                                        buttons: {
                                                            path: "/",
                                                            template: new sap.m.Button("", {
                                                                type: sap.m.ButtonType.Transparent,
                                                                text: {
                                                                    path: "name",
                                                                    type: new sap.extension.data.Alphanumeric(),
                                                                    formatter(data: string): string {
                                                                        return data ? ibas.i18n.prop(data) : "";
                                                                    }
                                                                },
                                                                icon: {
                                                                    path: "icon",
                                                                    type: new sap.extension.data.Alphanumeric(),
                                                                    formatter(data: string): string {
                                                                        return data ? data : "sap-icon://e-care";
                                                                    }
                                                                },
                                                                press(this: sap.m.Button): void {
                                                                    let service: ibas.IServiceAgent = this.getBindingContext().getObject();
                                                                    if (service) {
                                                                        service.run();
                                                                    }
                                                                }
                                                            })
                                                        }
                                                    });
                                                    actionSheet.setModel(new sap.extension.model.JSONModel(services));
                                                    actionSheet.openBy(event.getSource());
                                                }
                                            });
                                        }
                                    })
                                ]
                            }),
                            actions: [
                                new sap.extension.m.ObjectEnumStatus("", {
                                    title: ibas.i18n.prop("bo_cashflow_postable"),
                                    text: {
                                        path: "postable",
                                        type: new sap.extension.data.Enum({
                                            enumType: bo.emPostableType,
                                            describe: true,
                                        }),
                                    }
                                }),
                            ]
                        }),
                        headerContent: [
                            new sap.extension.m.ObjectAttribute("", {
                                title: ibas.i18n.prop("bo_cashflow_level"),
                                bindingValue: {
                                    path: "level",
                                    type: new sap.extension.data.Numeric(),
                                }
                            }),
                            new sap.extension.m.ObjectAttribute("", {
                                title: ibas.i18n.prop("bo_cashflow_parent"),
                                bindingValue: {
                                    path: "parent",
                                    type: new sap.extension.data.Numeric(),
                                }
                            }),
                        ],
                        sections: [
                            new sap.uxap.ObjectPageSection("", {
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_cashflow_remarks"),
                                                bindingValue: {
                                                    path: "remarks",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            }),
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_cashflow_external"),
                                                bindingValue: {
                                                    path: "external",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            }),
                                        ],
                                    })
                                ]
                            }),
                        ]
                    });
                }

                private page: sap.extension.uxap.ObjectPageLayout;

                /** 显示数据 */
                showCashFlow(data: bo.CashFlow): void {
                    this.page.setModel(new sap.extension.model.JSONModel(data));
                }
            }
        }
    }
}
