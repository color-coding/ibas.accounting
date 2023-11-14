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
            /** 选择视图-期间类型 */
            export class LedgerAccountSettingView extends ibas.DialogView implements app.ILedgerAccountSettingView {
                /** 选择过账期间总账科目科目事件 */
                chooseAccountEvent: Function;
                /** 保存事件 */
                saveEvent: Function;
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    return new sap.m.Dialog("", {
                        title: this.title,
                        type: sap.m.DialogType.Standard,
                        state: sap.ui.core.ValueState.None,
                        horizontalScrolling: false,
                        verticalScrolling: true,
                        contentWidth: "40%",
                        content: [
                            this.list = new sap.extension.m.List("", {
                                inset: false,
                                items: {
                                    path: "/rows",
                                    templateShareable: true,
                                    template: new sap.m.CustomListItem("", {
                                        highlight: {
                                            parts: [
                                                {
                                                    path: "isDirty",
                                                },
                                                {
                                                    path: "isNew",
                                                },
                                            ],
                                            formatter(isDirty: boolean, isNew: boolean): string {
                                                if (isNew) {
                                                    return sap.ui.core.MessageType.Warning;
                                                }
                                                return sap.ui.core.MessageType.Information;
                                            }
                                        },
                                        content: [
                                            new sap.ui.layout.form.SimpleForm("", {
                                                editable: true,
                                                columnsM: 1,
                                                columnsL: 1,
                                                columnsXL: 1,
                                                labelSpanS: 3,
                                                labelSpanM: 3,
                                                labelSpanL: 3,
                                                layout: sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout,
                                                content: [
                                                    /*
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_periodledgeraccount_name") }),
                                                    new sap.extension.m.Input("", {
                                                        editable: false,
                                                    }).bindProperty("bindingValue", {
                                                        path: "name",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 60
                                                        }),
                                                    }),
                                                    */
                                                    new sap.m.Toolbar("", {
                                                        content: [
                                                            new sap.extension.m.RepositoryTitle("", {
                                                                repository: bo.BORepositoryAccounting,
                                                                dataInfo: {
                                                                    type: bo.LedgerAccount,
                                                                    key: bo.LedgerAccount.PROPERTY_SIGN_NAME,
                                                                    text: bo.LedgerAccount.PROPERTY_DESCRIPTION_NAME
                                                                },
                                                            }).bindProperty("bindingValue", {
                                                                path: "ledger",
                                                                type: new sap.extension.data.Alphanumeric(),
                                                            }),
                                                        ]
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_periodledgeraccount_account") }),

                                                    new sap.m.HBox("", {
                                                        width: "100%",
                                                        height: "100%",
                                                        alignContent: sap.m.FlexAlignContent.Start,
                                                        alignItems: sap.m.FlexAlignItems.Center,
                                                        justifyContent: sap.m.FlexJustifyContent.Start,
                                                        renderType: sap.m.FlexRendertype.Bare,
                                                        items: [
                                                            new sap.extension.m.Input("", {
                                                                showValueHelp: true,
                                                                showValueLink: true,
                                                                valueHelpRequest: function (): void {
                                                                    that.fireViewEvents(that.chooseAccountEvent, this.getBindingContext().getObject());
                                                                },
                                                                valueLinkRequest: function (event: sap.ui.base.Event): void {
                                                                    ibas.servicesManager.runLinkService({
                                                                        boCode: bo.Account.BUSINESS_OBJECT_CODE,
                                                                        linkValue: event.getParameter("value")
                                                                    });
                                                                },
                                                                width: "45%",
                                                            }).bindProperty("bindingValue", {
                                                                path: "account",
                                                                type: new sap.extension.data.Alphanumeric({
                                                                    maxLength: 15
                                                                }),
                                                            }),
                                                            new sap.extension.m.RepositoryInput("", {
                                                                editable: false,
                                                                showValueLink: false,
                                                                repository: bo.BORepositoryAccounting,
                                                                dataInfo: {
                                                                    type: bo.Account,
                                                                    key: bo.Account.PROPERTY_CODE_NAME,
                                                                    text: bo.Account.PROPERTY_NAME_NAME
                                                                },
                                                                width: "55%",
                                                            }).bindProperty("bindingValue", {
                                                                path: "account",
                                                                type: new sap.extension.data.Alphanumeric(),
                                                            }).addStyleClass("sapUiTinyMarginBegin"),
                                                        ]
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_periodledgeraccount_remarks") }),
                                                    new sap.extension.m.TextArea("", {
                                                        rows: 2,
                                                    }).bindProperty("bindingValue", {
                                                        path: "remarks",
                                                        type: new sap.extension.data.Alphanumeric(),
                                                    }),
                                                ]
                                            }),
                                        ]
                                    })
                                },
                            })
                        ],
                        buttons: [
                            new sap.m.Button("", {
                                text: ibas.i18n.prop("shell_data_save"),
                                type: sap.m.ButtonType.Transparent,
                                press: function (): void {
                                    that.fireViewEvents(that.saveEvent);
                                }
                            }),
                            new sap.m.Button("", {
                                text: ibas.i18n.prop("shell_exit"),
                                type: sap.m.ButtonType.Transparent,
                                press: function (): void {
                                    that.fireViewEvents(that.closeEvent);
                                }
                            }),
                        ],
                    }).addStyleClass("sapUiNoContentPadding");
                }
                private list: sap.extension.m.List;
                /** 显示期间科目 */
                showLedgerAccounts(datas: bo.PeriodLedgerAccount[]): void {
                    this.list.setModel(new sap.extension.model.JSONModel({ rows: datas }));
                }
            }
        }
    }
}
