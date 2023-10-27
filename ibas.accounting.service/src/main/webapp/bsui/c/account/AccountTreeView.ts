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
            /** 视图-科目 */
            export class AccountTreeView extends ibas.BOViewView implements app.IAccountTreeView {
                /** 显示组 */
                viewGroupEvent: Function;
                /** 添加科目事件 */
                addAccountEvent: Function;
                /** 添加科目事件 */
                removeAccountEvent: Function;
                /** 保存科目事件 */
                saveAccountEvent: Function;
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    this.accountList = new sap.extension.m.Tree("", {
                        mode: sap.m.ListMode.SingleSelectLeft,
                        items: {
                            path: "/",
                            parameters: {
                                arrayNames: [
                                    "nodes",
                                ]
                            },
                            templateShareable: false,
                            template: new sap.m.StandardTreeItem("", {
                                title: {
                                    parts: [
                                        {
                                            path: "code",
                                            type: new sap.extension.data.Alphanumeric(),
                                        },
                                        {
                                            path: "name",
                                            type: new sap.extension.data.Alphanumeric(),
                                        },
                                        {
                                            path: "active",
                                            // type: new sap.extension.data.YesNo(),
                                        },
                                    ],
                                    formatter(code: string, name: string, active: ibas.emYesNo): string {
                                        let builder: ibas.StringBuilder = new ibas.StringBuilder();
                                        builder.map(null, "");
                                        builder.map(undefined, "");
                                        if (active !== ibas.emYesNo.YES) {
                                            builder.append(name);
                                        } else {
                                            builder.append(code);
                                            builder.append(" - ");
                                            builder.append(name);
                                        }
                                        return builder.toString();
                                    }
                                },
                                highlight: {
                                    path: "data/isDirty",
                                    formatter(data: any): any {
                                        return data === true ? sap.ui.core.MessageType.Warning : sap.ui.core.MessageType.Information;
                                    },
                                },
                                type: sap.m.ListType.Inactive,
                            }),
                        },
                        selectionChange(oEvent: sap.ui.base.Event): void {
                            let oItem: any = oEvent.getParameter("listItem");
                            that.fireViewEvents(that.viewGroupEvent, oItem.getBindingContext().getObject());
                        },
                    });
                    return this.split = new sap.m.SplitContainer("", {
                        masterPages: [
                            new sap.extension.m.Page("", {
                                showHeader: false,
                                enableScrolling: true,
                                content: [
                                    this.accountList,
                                ],
                                subHeader: new sap.m.Toolbar("", {
                                    content: [
                                        new sap.m.SearchField("", {
                                            search(event: sap.ui.base.Event): void {
                                                let searchText: string = event.getParameter("query");
                                                that.accountList.expandToLevel(99);
                                                for (let item of that.accountList.getItems()) {
                                                    item.setVisible(true);
                                                    if (!ibas.strings.isEmpty(searchText)) {
                                                        if (item instanceof sap.m.StandardTreeItem) {
                                                            if (item.getTitle() && item.getTitle().indexOf(searchText) >= 0) {
                                                                while (!ibas.objects.isNull((<any>item).getParentNode())) {
                                                                    item = (<any>item).getParentNode();
                                                                    item.setVisible(true);
                                                                }
                                                                continue;
                                                            }
                                                            item.setVisible(false);
                                                        }
                                                    }
                                                }
                                            }
                                        }),
                                        new sap.m.ToolbarSeparator(),
                                        new sap.m.Button("", {
                                            type: sap.m.ButtonType.Reject,
                                            icon: "sap-icon://sys-cancel",
                                            press(): void {
                                                that.fireViewEvents(that.removeAccountEvent, that.accountList.getSelecteds().firstOrDefault());
                                            }
                                        }),
                                        new sap.m.MenuButton("", {
                                            icon: "sap-icon://sys-add",
                                            type: sap.m.ButtonType.Accept,
                                            menuPosition: sap.ui.core.Popup.Dock.EndBottom,
                                            menu: new sap.m.Menu("", {
                                                items: [
                                                    new sap.m.MenuItem("", {
                                                        text: ibas.i18n.prop("bo_account"),
                                                        icon: "sap-icon://to-be-reviewed",
                                                        press(): void {
                                                            that.fireViewEvents(that.addAccountEvent, that.accountList.getSelecteds().firstOrDefault());
                                                        }
                                                    }),
                                                    new sap.m.MenuItem("", {
                                                        text: ibas.i18n.prop("bo_account_title"),
                                                        icon: "sap-icon://text",
                                                        press(): void {
                                                            that.fireViewEvents(that.addAccountEvent, that.accountList.getSelecteds().firstOrDefault(), "TEXT");
                                                        }
                                                    }),
                                                ],
                                            })
                                        }),
                                    ]
                                }),
                                floatingFooter: true,
                                footer: new sap.m.Toolbar("", {
                                    content: [
                                        new sap.m.MenuButton("", {
                                            icon: "sap-icon://feeder-arrow",
                                            type: sap.m.ButtonType.Transparent,
                                            menuPosition: sap.ui.core.Popup.Dock.EndBottom,
                                            menu: new sap.m.Menu("", {
                                                items: [
                                                    new sap.m.MenuItem("", {
                                                        text: ibas.i18n.prop("accounting_expand_to_level", 1),
                                                        press(): void {
                                                            that.accountList.collapseAll();
                                                        }
                                                    }),
                                                    new sap.m.MenuItem("", {
                                                        text: ibas.i18n.prop("accounting_expand_to_level", 2),
                                                        press(this: sap.m.MenuItem): void {
                                                            that.accountList.collapseAll();
                                                            that.accountList.expandToLevel((<sap.m.Menu>this.getParent()).indexOfItem(this) + 1);
                                                        }
                                                    }),
                                                    new sap.m.MenuItem("", {
                                                        text: ibas.i18n.prop("accounting_expand_to_level", 3),
                                                        press(this: sap.m.MenuItem): void {
                                                            that.accountList.collapseAll();
                                                            that.accountList.expandToLevel((<sap.m.Menu>this.getParent()).indexOfItem(this) + 1);
                                                        }
                                                    }),
                                                    new sap.m.MenuItem("", {
                                                        text: ibas.i18n.prop("accounting_expand_to_level", 4),
                                                        press(this: sap.m.MenuItem): void {
                                                            that.accountList.collapseAll();
                                                            that.accountList.expandToLevel((<sap.m.Menu>this.getParent()).indexOfItem(this) + 1);
                                                        }
                                                    }),
                                                    new sap.m.MenuItem("", {
                                                        text: ibas.i18n.prop("accounting_expand_to_level", 5),
                                                        press(this: sap.m.MenuItem): void {
                                                            that.accountList.collapseAll();
                                                            that.accountList.expandToLevel((<sap.m.Menu>this.getParent()).indexOfItem(this) + 1);
                                                        }
                                                    }),
                                                ],
                                            })
                                        }),
                                        new sap.m.ToolbarSpacer(),
                                        new sap.m.Button("", {
                                            type: sap.m.ButtonType.Transparent,
                                            icon: "sap-icon://save",
                                            press(): void {
                                                that.fireViewEvents(that.saveAccountEvent);
                                            }
                                        }),
                                    ]
                                }),
                            })
                        ],
                        detailPages: [
                            this.accountForm = new sap.extension.m.Page("", {
                                showHeader: false,
                                content: [
                                    new sap.m.IllustratedMessage("", {
                                        illustrationType: sap.m.IllustratedMessageType.NoData
                                    }),
                                    new sap.ui.layout.form.SimpleForm("", {
                                        visible: false,
                                        editable: true,
                                        content: [
                                            new sap.m.Toolbar("", { visible: false }),
                                            new sap.m.Label("", { text: ibas.i18n.prop("bo_account_code") }),
                                            new sap.extension.m.Input("", {
                                                editable: {
                                                    path: "isNew",
                                                }
                                            }).bindProperty("bindingValue", {
                                                path: "code",
                                                type: new sap.extension.data.Alphanumeric({
                                                    maxLength: 15
                                                }),
                                            }),
                                            new sap.m.Label("", { text: ibas.i18n.prop("bo_account_name") }),
                                            new sap.extension.m.Input("", {
                                            }).bindProperty("bindingValue", {
                                                path: "name",
                                                type: new sap.extension.data.Alphanumeric({
                                                    maxLength: 100
                                                }),
                                            }),
                                            new sap.m.Label("", { text: ibas.i18n.prop("bo_account_balance") }),
                                            new sap.extension.m.Input("", {
                                                editable: false,
                                            }).bindProperty("bindingValue", {
                                                path: "balance",
                                                type: new sap.extension.data.Sum(),
                                            }),
                                            new sap.extension.m.CurrencySelect("", {
                                                editable: {
                                                    path: "balance",
                                                    formatter(data: any): boolean {
                                                        return data > 0 ? false : true;
                                                    }
                                                }
                                            }).bindProperty("bindingValue", {
                                                path: "currency",
                                                type: new sap.extension.data.Alphanumeric({
                                                    maxLength: 8
                                                }),
                                            }),
                                            new sap.m.Toolbar("", { visible: false }),
                                            new sap.m.Label("", { text: ibas.i18n.prop("bo_account_level") }),
                                            new sap.extension.m.Input("", {
                                                editable: false,
                                            }).bindProperty("bindingValue", {
                                                path: "level",
                                                type: new sap.extension.data.Numeric(),
                                            }),
                                            new sap.m.Label("", { text: ibas.i18n.prop("bo_account_active") }),
                                            new sap.extension.m.EnumSelect("", {
                                                enumType: ibas.emYesNo
                                            }).bindProperty("bindingValue", {
                                                path: "active",
                                                type: new sap.extension.data.YesNo(),
                                            }),
                                        ]
                                    }),
                                    new sap.m.IconTabBar("", {
                                        visible: false,
                                        headerBackgroundDesign: sap.m.BackgroundDesign.Transparent,
                                        backgroundDesign: sap.m.BackgroundDesign.Transparent,
                                        expandable: false,
                                        items: [
                                            new sap.m.IconTabFilter("", {
                                                text: ibas.i18n.prop("accounting_title_general"),
                                                content: [
                                                    new sap.ui.layout.form.SimpleForm("", {
                                                        editable: true,
                                                        content: [
                                                            new sap.m.Toolbar("", { visible: false }),
                                                            new sap.m.Label("", { text: ibas.i18n.prop("bo_account_foreignname") }),
                                                            new sap.extension.m.Input("", {
                                                            }).bindProperty("bindingValue", {
                                                                path: "foreignName",
                                                                type: new sap.extension.data.Alphanumeric({
                                                                    maxLength: 200
                                                                }),
                                                            }),
                                                            new sap.m.Label("", { text: ibas.i18n.prop("bo_account_external") }),
                                                            new sap.extension.m.Input("", {
                                                            }).bindProperty("bindingValue", {
                                                                path: "external",
                                                                type: new sap.extension.data.Alphanumeric({
                                                                    maxLength: 100
                                                                }),
                                                            }),
                                                            new sap.m.Label("", { text: ibas.i18n.prop("bo_account_validdate") }),
                                                            new sap.extension.m.DatePicker("", {
                                                            }).bindProperty("bindingValue", {
                                                                path: "validDate",
                                                                type: new sap.extension.data.Date(),
                                                            }),
                                                            new sap.m.Label("", { text: ibas.i18n.prop("bo_account_invaliddate") }),
                                                            new sap.extension.m.DatePicker("", {
                                                            }).bindProperty("bindingValue", {
                                                                path: "invalidDate",
                                                                type: new sap.extension.data.Date(),
                                                            }),
                                                            new sap.m.Toolbar("", { visible: false }),
                                                            new sap.m.Label("", { text: ibas.i18n.prop("bo_account_protected") }),
                                                            new sap.extension.m.EnumSelect("", {
                                                                enumType: ibas.emYesNo
                                                            }).bindProperty("bindingValue", {
                                                                path: "protected",
                                                                type: new sap.extension.data.YesNo(),
                                                            }),
                                                            new sap.m.Label("", { text: ibas.i18n.prop("bo_account_control") }),
                                                            new sap.extension.m.EnumSelect("", {
                                                                enumType: ibas.emYesNo
                                                            }).bindProperty("bindingValue", {
                                                                path: "control",
                                                                type: new sap.extension.data.YesNo(),
                                                            }),
                                                            new sap.m.Label("", { text: ibas.i18n.prop("bo_account_cash") }),
                                                            new sap.extension.m.EnumSelect("", {
                                                                enumType: ibas.emYesNo
                                                            }).bindProperty("bindingValue", {
                                                                path: "cash",
                                                                type: new sap.extension.data.YesNo(),
                                                            }),
                                                            new sap.m.Label("", { text: ibas.i18n.prop("bo_account_cashflowrelevant") }),
                                                            new sap.extension.m.EnumSelect("", {
                                                                enumType: ibas.emYesNo
                                                            }).bindProperty("bindingValue", {
                                                                path: "cashFlowRelevant",
                                                                type: new sap.extension.data.YesNo(),
                                                            }),
                                                        ]
                                                    })
                                                ]
                                            }),
                                        ]
                                    }),
                                ],
                            }),
                        ],
                    });
                }

                private split: sap.m.SplitContainer;
                private accountList: sap.extension.m.Tree;
                private accountForm: sap.extension.m.Page;

                /** 显示科目组 */
                showGroups(datas: app.AccountNode[]): void {
                    let oldDatas: app.AccountNode[] = this.accountList.getModel()?.getData();
                    if (oldDatas !== datas) {
                        this.accountList.setModel(new sap.extension.model.JSONModel(datas));
                    } else {
                        this.accountList.getModel().refresh(true);
                    }
                }
                /** 显示科目 */
                showAccount(data: bo.Account): void {
                    if (this.accountForm.getContent().length > 2) {
                        this.accountForm.removeContent(0);
                        for (let item of this.accountForm.getContent()) {
                            if (item.getVisible()) {
                                continue;
                            }
                            item.setVisible(true);
                        }
                    }
                    this.accountForm.setModel(new sap.extension.model.JSONModel(data));
                }
            }
        }
    }
}
