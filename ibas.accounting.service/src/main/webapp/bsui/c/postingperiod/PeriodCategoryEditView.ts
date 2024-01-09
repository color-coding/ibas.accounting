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
            /** 编辑视图-期间类型 */
            export class PeriodCategoryEditView extends ibas.BOEditView implements app.IPeriodCategoryEditView {
                /** 删除数据事件 */
                deleteDataEvent: Function;
                /** 新建数据事件，参数1：是否克隆 */
                createDataEvent: Function;
                /** 添加过账期间事件 */
                addPostingPeriodEvent: Function;
                /** 移除过账期间事件 */
                removePostingPeriodEvent: Function;
                /** 添加过账期间项目事件 */
                addPostingPeriodItemEvent: Function;
                /** 移除过账期间项目事件 */
                removePostingPeriodItemEvent: Function;

                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    this.leftForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_periodcategory_name") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "/name",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 10
                                }),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_periodcategory_status") }),
                            new sap.extension.m.EnumSelect("", {
                                enumType: bo.emPeriodStatus
                            }).bindProperty("bindingValue", {
                                path: "/status",
                                type: new sap.extension.data.Enum({
                                    enumType: bo.emPeriodStatus
                                }),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_periodcategory_startdate") }),
                            new sap.extension.m.DatePicker("", {
                            }).bindProperty("bindingValue", {
                                path: "/startDate",
                                type: new sap.extension.data.Date(),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_periodcategory_enddate") }),
                            new sap.extension.m.DatePicker("", {
                            }).bindProperty("bindingValue", {
                                path: "/endDate",
                                type: new sap.extension.data.Date(),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_periodcategory_remarks") }),
                            new sap.extension.m.TextArea("", {
                                rows: 3,
                            }).bindProperty("bindingValue", {
                                path: "/remarks",
                                type: new sap.extension.data.Alphanumeric(),
                            }),
                        ]
                    });
                    this.rightList = new sap.extension.m.List("", {
                        chooseType: ibas.emChooseType.NONE,
                        mode: sap.m.ListMode.None,
                        growing: false,
                        items: {
                            path: "/rows",
                            template: new sap.m.CustomListItem("", {
                                content: [
                                    new sap.m.Panel("", {
                                        expandable: true,
                                        expanded: false,
                                        backgroundDesign: sap.m.BackgroundDesign.Translucent,
                                        accessibleRole: sap.m.PanelAccessibleRole.Form,
                                        headerToolbar: new sap.m.Toolbar("", {
                                            content: [
                                                new sap.extension.m.Input("", {
                                                }).bindProperty("bindingValue", {
                                                    path: "name",
                                                    type: new sap.extension.data.Alphanumeric({
                                                        maxLength: 10
                                                    })
                                                }),
                                                new sap.m.ToolbarSpacer(""),
                                                new sap.m.Button("", {
                                                    type: sap.m.ButtonType.Transparent,
                                                    icon: "sap-icon://delete",
                                                    press: function (this: sap.m.Button, event: sap.ui.base.Event): void {
                                                        let source: any = event.getSource();
                                                        if (source instanceof sap.m.Button) {
                                                            that.fireViewEvents(that.removePostingPeriodEvent, this.getBindingContext().getObject());
                                                        }
                                                    }
                                                }),
                                            ]
                                        }),
                                        content: [
                                            new sap.m.FlexBox("", {
                                                justifyContent: sap.m.FlexJustifyContent.Start,
                                                renderType: sap.m.FlexRendertype.Bare,
                                                items: [
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
                                                            new sap.m.Label("", { text: ibas.i18n.prop("bo_postingperiod_order") }),
                                                            new sap.extension.m.Input("", {
                                                                editable: false,
                                                            }).bindProperty("bindingValue", {
                                                                path: "order",
                                                                type: new sap.extension.data.Numeric()
                                                            }),
                                                            new sap.m.Label("", { text: ibas.i18n.prop("bo_postingperiod_status") }),
                                                            new sap.extension.m.EnumSelect("", {
                                                                enumType: bo.emPeriodStatus
                                                            }).bindProperty("bindingValue", {
                                                                path: "status",
                                                                type: new sap.extension.data.Enum({
                                                                    enumType: bo.emPeriodStatus
                                                                }),
                                                            }),
                                                            new sap.m.Label("", { text: ibas.i18n.prop("bo_postingperiod_startdate") }),
                                                            new sap.extension.m.DatePicker("", {
                                                            }).bindProperty("bindingValue", {
                                                                path: "startDate",
                                                                type: new sap.extension.data.Date()
                                                            }),
                                                            new sap.m.Label("", { text: ibas.i18n.prop("bo_postingperiod_enddate") }),
                                                            new sap.extension.m.DatePicker("", {
                                                            }).bindProperty("bindingValue", {
                                                                path: "endDate",
                                                                type: new sap.extension.data.Date()
                                                            }),
                                                            new sap.m.Label("", { text: ibas.i18n.prop("bo_postingperiod_remarks") }),
                                                            new sap.extension.m.TextArea("", {
                                                                rows: 3,
                                                            }).bindProperty("bindingValue", {
                                                                path: "remarks",
                                                                type: new sap.extension.data.Alphanumeric(),
                                                            }),
                                                        ]
                                                    }),
                                                    new sap.ui.layout.form.SimpleForm("", {
                                                        editable: true,
                                                        content: [
                                                            new sap.extension.table.Table("", {
                                                                chooseType: ibas.emChooseType.NONE,
                                                                visibleRowCount: 4,
                                                                footer: new sap.m.Bar("", {
                                                                    translucent: true,
                                                                    design: sap.m.BarDesign.Footer,
                                                                    contentMiddle: [
                                                                        new sap.m.Button("", {
                                                                            width: "100%",
                                                                            icon: "sap-icon://add",
                                                                            text: ibas.i18n.prop("shell_data_add"),
                                                                            type: sap.m.ButtonType.Transparent,
                                                                            press: function (this: sap.m.Button): void {
                                                                                let table: any = this.getParent().getParent();
                                                                                if (table instanceof sap.extension.table.Table) {
                                                                                    that.fireViewEvents(that.addPostingPeriodItemEvent, this.getBindingContext().getObject());
                                                                                }
                                                                            }
                                                                        }),
                                                                    ]
                                                                }),
                                                                rowActionCount: 1,
                                                                rowActionTemplate: new sap.ui.table.RowAction("", {
                                                                    items: [
                                                                        new sap.ui.table.RowActionItem("", {
                                                                            icon: "sap-icon://delete",
                                                                            press: function (oEvent: any): void {
                                                                                that.fireViewEvents(that.removePostingPeriodItemEvent, this.getBindingContext().getObject());
                                                                            },
                                                                        }),
                                                                    ]
                                                                }),
                                                                rows: {
                                                                    path: "postingPeriodItems",
                                                                    filters: [
                                                                        new sap.ui.model.Filter("isDeleted", sap.ui.model.FilterOperator.NE, true)
                                                                    ]
                                                                },
                                                                columns: [
                                                                    new sap.extension.table.Column("", {
                                                                        label: ibas.i18n.prop("bo_postingperioditem_documenttype"),
                                                                        template: new sap.extension.m.Text("", {
                                                                        }).bindProperty("bindingValue", {
                                                                            path: "documentType",
                                                                            type: new sap.extension.data.Alphanumeric(),
                                                                        }),
                                                                        width: "60%",
                                                                    }),
                                                                    new sap.extension.table.Column("", {
                                                                        label: ibas.i18n.prop("bo_postingperioditem_document"),
                                                                        template: new sap.extension.m.RepositoryText("", {
                                                                            repository: initialfantasy.bo.BORepositoryInitialFantasy,
                                                                            dataInfo: {
                                                                                type: initialfantasy.bo.BOInformation,
                                                                                key: initialfantasy.bo.BOInformation.PROPERTY_CODE_NAME,
                                                                                text: initialfantasy.bo.BOInformation.PROPERTY_DESCRIPTION_NAME
                                                                            },
                                                                        }).bindProperty("bindingValue", {
                                                                            path: "documentType",
                                                                            type: new sap.extension.data.Alphanumeric(),
                                                                        }),
                                                                        width: "40%",
                                                                    }),
                                                                    new sap.extension.table.Column("", {
                                                                        label: ibas.i18n.prop("bo_postingperioditem_status"),
                                                                        template: new sap.extension.m.EnumSelect("", {
                                                                            enumType: bo.emPeriodStatus
                                                                        }).bindProperty("bindingValue", {
                                                                            path: "status",
                                                                            type: new sap.extension.data.Enum({
                                                                                enumType: bo.emPeriodStatus
                                                                            }),
                                                                        }),
                                                                    }),
                                                                ],
                                                            })
                                                        ]
                                                    }),
                                                ]
                                            })
                                        ],
                                    })
                                ],
                                type: sap.m.ListType.Inactive
                            })
                        }
                    });
                    return new sap.extension.m.Page("", {
                        showHeader: false,
                        subHeader: new sap.m.Toolbar("", {
                            content: [
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_data_save"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://save",
                                    press: function (): void {
                                        that.fireViewEvents(that.saveDataEvent);
                                    }
                                }),
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_data_delete"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://delete",
                                    press: function (): void {
                                        that.fireViewEvents(that.deleteDataEvent);
                                    }
                                }),
                            ]
                        }),
                        content: [
                            new sap.m.SplitContainer("", {
                                masterPages: [
                                    new sap.m.Page("", {
                                        showHeader: false,
                                        content: [
                                            this.leftForm
                                        ]
                                    }),
                                ],
                                detailPages: [
                                    new sap.m.Page("", {
                                        showHeader: false,
                                        floatingFooter: true,
                                        content: [
                                            new sap.m.Toolbar("", {
                                                content: [
                                                    new sap.m.Button("", {
                                                        type: sap.m.ButtonType.Transparent,
                                                        icon: "sap-icon://navigation-right-arrow",
                                                        press: function (event: sap.ui.base.Event): void {
                                                            let source: any = event.getSource();
                                                            if (source instanceof sap.m.Button) {
                                                                if (source.getIcon() === "sap-icon://navigation-right-arrow") {
                                                                    source.setIcon("sap-icon://navigation-down-arrow");
                                                                    ibas.queues.execute(that.rightList.getItems(),
                                                                        (item, next) => {
                                                                            if (item instanceof sap.m.CustomListItem) {
                                                                                let panel: any = item.getContent()[0];
                                                                                if (panel instanceof sap.m.Panel) {
                                                                                    setTimeout(() => {
                                                                                        panel.setExpanded(true);
                                                                                        next();
                                                                                    }, 70);
                                                                                    return;
                                                                                }
                                                                            }
                                                                            next();
                                                                        },
                                                                    );
                                                                } else {
                                                                    source.setIcon("sap-icon://navigation-right-arrow");
                                                                    ibas.queues.execute(that.rightList.getItems(),
                                                                        (item, next) => {
                                                                            if (item instanceof sap.m.CustomListItem) {
                                                                                let panel: any = item.getContent()[0];
                                                                                if (panel instanceof sap.m.Panel) {
                                                                                    setTimeout(() => {
                                                                                        panel.setExpanded(false);
                                                                                        next();
                                                                                    }, 70);
                                                                                    return;
                                                                                }
                                                                            }
                                                                            next();
                                                                        },
                                                                    );
                                                                }
                                                            }
                                                        }
                                                    }),
                                                    new sap.m.Title("", {
                                                        text: ibas.i18n.prop("bo_postingperiod"),
                                                    }),
                                                    new sap.m.ToolbarSpacer(""),
                                                    new sap.m.MenuButton("", {
                                                        buttonMode: sap.m.MenuButtonMode.Split,
                                                        useDefaultActionOnly: true,
                                                        menuPosition: sap.ui.core.Popup.Dock.EndBottom,
                                                        text: ibas.i18n.prop("shell_data_add"),
                                                        width: "6rem",
                                                        menu: new sap.m.Menu("", {
                                                            items: [
                                                                new sap.m.MenuItem("", {
                                                                    text: ibas.i18n.prop("accounting_postingperiod_12_months"),
                                                                    press: function (): void {
                                                                        that.fireViewEvents(that.addPostingPeriodEvent, "12months");
                                                                    }
                                                                }),
                                                                new sap.m.MenuItem("", {
                                                                    text: ibas.i18n.prop("accounting_postingperiod_4_quarters"),
                                                                    press: function (): void {
                                                                        that.fireViewEvents(that.addPostingPeriodEvent, "4quarters");
                                                                    }
                                                                })
                                                            ],
                                                        }),
                                                        defaultAction: function (): void {
                                                            that.fireViewEvents(that.addPostingPeriodEvent);
                                                        }
                                                    }),
                                                ]
                                            }),
                                            this.rightList,
                                        ],
                                    }),
                                ],
                            })
                        ]
                    });
                }

                private leftForm: sap.ui.layout.form.SimpleForm;
                private rightList: sap.extension.m.List;

                /** 显示数据 */
                showPeriodCategory(data: bo.PeriodCategory): void {
                    this.leftForm.setModel(new sap.extension.model.JSONModel(data));
                }
                /** 显示过账期间 */
                showPostingPeriods(datas: bo.PostingPeriod[]): void {
                    this.rightList.setModel(new sap.extension.model.JSONModel({ rows: datas }));
                }
                /** 显示过账期间项目 */
                showPostingPeriodItems(data: bo.PostingPeriod): void {
                    let model: any = this.rightList.getModel();
                    if (model instanceof sap.extension.model.JSONModel) {
                        model.refresh(true);
                    }
                }
            }
        }
    }
}
