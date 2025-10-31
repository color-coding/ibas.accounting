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
            /** 编辑视图-分支 */
            export class BranchEditView extends ibas.BOEditView implements app.IBranchEditView {
                /** 删除数据事件 */
                deleteDataEvent: Function;
                /** 新建数据事件，参数1：是否克隆 */
                createDataEvent: Function;
                /** 选择银行事件 */
                chooseBankEvent: Function;
                /** 选择银行账号事件 */
                chooseBankAccountEvent: Function;

                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    let formTop: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.m.Toolbar("", { visible: false }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_branch_code") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "code",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 20
                                })
                            }).bindProperty("editable", {
                                path: "series",
                                formatter(data: any): any {
                                    return data > 0 ? false : true;
                                }
                            }),
                            new sap.extension.m.SeriesSelect("", {
                                objectCode: bo.BO_CODE_BRANCH,
                            }).bindProperty("bindingValue", {
                                path: "series",
                                type: new sap.extension.data.Numeric()
                            }).bindProperty("editable", {
                                path: "isNew",
                                formatter(data: any): any {
                                    return data === false ? false : true;
                                }
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_branch_name") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "name",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 100
                                }),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_branch_foreignname") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "foreignName",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 200
                                }),
                            }),
                            new sap.m.Toolbar("", { visible: false }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_branch_activated") }),
                            new sap.extension.m.EnumSelect("", {
                                enumType: ibas.emYesNo
                            }).bindProperty("bindingValue", {
                                path: "activated",
                                type: new sap.extension.data.YesNo(),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_branch_validdate") }),
                            new sap.extension.m.DatePicker("", {
                            }).bindProperty("bindingValue", {
                                path: "validDate",
                                type: new sap.extension.data.Date(),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_branch_invaliddate") }),
                            new sap.extension.m.DatePicker("", {
                            }).bindProperty("bindingValue", {
                                path: "invalidDate",
                                type: new sap.extension.data.Date(),
                            }),
                        ]
                    });
                    let formMiddle: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.m.IconTabBar("", {
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
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_branch_main") }),
                                                    new sap.extension.m.EnumSelect("", {
                                                        enumType: ibas.emYesNo
                                                    }).bindProperty("bindingValue", {
                                                        path: "main",
                                                        type: new sap.extension.data.YesNo(),
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_branch_customer") }),
                                                    new sap.extension.m.Input("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "customer",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 20
                                                        }),
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_branch_supplier") }),
                                                    new sap.extension.m.Input("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "supplier",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 20
                                                        }),
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_branch_warehouse") }),
                                                    new sap.extension.m.Input("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "warehouse",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 8
                                                        }),
                                                    }),
                                                    new sap.m.Toolbar("", { visible: false }),
                                                    new sap.m.Label("", {
                                                        text: ibas.i18n.prop("bo_branch_address")
                                                    }),
                                                    new sap.extension.m.AddressArea("", {
                                                        countryVisible: true,
                                                        zipCodeVisible: false,
                                                    }).bindProperty("country", {
                                                        path: "country",
                                                    }).bindProperty("province", {
                                                        path: "province",
                                                    }).bindProperty("city", {
                                                        path: "city",
                                                    }).bindProperty("district", {
                                                        path: "district",
                                                    }).bindProperty("street", {
                                                        path: "street",
                                                    }).bindProperty("zipCode", {
                                                        path: "zipCode",
                                                    }),
                                                ]
                                            })
                                        ]
                                    }),
                                    new sap.m.IconTabFilter("", {
                                        text: ibas.i18n.prop("accounting_title_invoices"),
                                        content: [
                                            new sap.ui.layout.form.SimpleForm("", {
                                                editable: true,
                                                content: [
                                                    new sap.m.Toolbar("", { visible: false }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_branch_taxid") }),
                                                    new sap.extension.m.Input("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "taxId",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 30
                                                        })
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_branch_invoicetitle") }),
                                                    new sap.extension.m.Input("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "invoiceTitle",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 100
                                                        }),
                                                    }),
                                                    new sap.m.Toolbar("", { visible: false }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_branch_bank") }),
                                                    new sap.extension.m.Input("", {
                                                        showValueHelp: true,
                                                        valueHelpRequest(): void {
                                                            that.fireViewEvents(that.chooseBankEvent);
                                                        },
                                                        valueHelpOnly: false,
                                                    }).bindProperty("bindingValue", {
                                                        path: "bank",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 60
                                                        }),
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_branch_bankaccount") }),
                                                    new sap.extension.m.Input("", {
                                                        showValueHelp: true,
                                                        valueHelpRequest(): void {
                                                            that.fireViewEvents(that.chooseBankAccountEvent);
                                                        },
                                                        valueHelpOnly: false,
                                                    }).bindProperty("bindingValue", {
                                                        path: "bankAccount",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 60
                                                        }),
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_branch_invoiceaddress") }),
                                                    new sap.m.FlexBox("", {
                                                        width: "100%",
                                                        justifyContent: sap.m.FlexJustifyContent.Start,
                                                        renderType: sap.m.FlexRendertype.Bare,
                                                        items: [
                                                            new sap.extension.m.Input("", {
                                                            }).bindProperty("bindingValue", {
                                                                path: "invoiceAddress",
                                                                type: new sap.extension.data.Alphanumeric({
                                                                    maxLength: 200
                                                                }),
                                                            }),
                                                            new sap.m.Button("", {
                                                                type: sap.m.ButtonType.Default,
                                                                icon: "sap-icon://create",
                                                                press: function (event: any): void {
                                                                    let source: sap.m.Button = <sap.m.Button>event.getSource();
                                                                    if (source instanceof sap.m.Button) {
                                                                        let popover: sap.m.Popover = new sap.m.Popover("", {
                                                                            showHeader: false,
                                                                            placement: sap.m.PlacementType.Left,
                                                                            enableScrolling: false,
                                                                            horizontalScrolling: false,
                                                                            contentWidth: "auto",
                                                                            contentHeight: "auto",
                                                                            content: [
                                                                                new sap.ui.layout.form.SimpleForm("", {
                                                                                    content: [
                                                                                        new sap.extension.m.AddressArea("", {
                                                                                            countryVisible: false,
                                                                                            zipCodeVisible: false,
                                                                                            addressChange: function (event: sap.ui.base.Event): void {
                                                                                                let address: string = event.getParameter("address");
                                                                                                if (!ibas.strings.isEmpty(address)) {
                                                                                                    (<any>source.getParent()).getItems()[0].setBindingValue(address);
                                                                                                }
                                                                                            }
                                                                                        }),
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        });
                                                                        popover.addStyleClass("sapMOTAPopover sapTntToolHeaderPopover");
                                                                        popover.openBy(event.getSource(), true);
                                                                    }
                                                                },
                                                            }).addStyleClass("sapUiTinyMarginBegin"),
                                                        ]
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_branch_invoicetelephone") }),
                                                    new sap.extension.m.Input("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "invoiceTelephone",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 20
                                                        }),
                                                    }),
                                                ]
                                            })
                                        ]
                                    }),
                                ]
                            })
                        ]
                    });
                    let formBottom: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.m.Toolbar("", { visible: false }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_branch_remarks") }),
                            new sap.extension.m.TextArea("", {
                                rows: 3,
                            }).bindProperty("bindingValue", {
                                path: "remarks",
                                type: new sap.extension.data.Alphanumeric(),
                            }),
                            new sap.m.Toolbar("", { visible: false }),
                        ]
                    });
                    return this.page = new sap.extension.m.DataPage("", {
                        showHeader: false,
                        dataInfo: {
                            code: bo.Branch.BUSINESS_OBJECT_CODE,
                        },
                        subHeader: new sap.m.Toolbar("", {
                            content: [
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_data_save"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://save",
                                    press(): void {
                                        that.fireViewEvents(that.saveDataEvent);
                                    }
                                }),
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_data_delete"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://delete",
                                    press(): void {
                                        that.fireViewEvents(that.deleteDataEvent);
                                    }
                                }),
                                new sap.m.ToolbarSeparator(""),
                                new sap.m.MenuButton("", {
                                    text: ibas.strings.format("{0}/{1}",
                                        ibas.i18n.prop("shell_data_new"), ibas.i18n.prop("shell_data_clone")),
                                    icon: "sap-icon://create",
                                    type: sap.m.ButtonType.Transparent,
                                    menu: new sap.m.Menu("", {
                                        items: [
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("shell_data_new"),
                                                icon: "sap-icon://create",
                                                press(): void {
                                                    // 创建新的对象
                                                    that.fireViewEvents(that.createDataEvent, false);
                                                }
                                            }),
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("shell_data_clone"),
                                                icon: "sap-icon://copy",
                                                press(): void {
                                                    // 复制当前对象
                                                    that.fireViewEvents(that.createDataEvent, true);
                                                }
                                            }),
                                        ],
                                    })
                                }),
                                new sap.m.ToolbarSpacer(""),
                                new sap.m.Button("", {
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://action",
                                    press: function (event: any): void {
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
                        content: [
                            formTop,
                            formMiddle,
                            formBottom,
                        ]
                    });
                }

                private page: sap.extension.m.Page;

                /** 显示数据 */
                showBranch(data: bo.Branch): void {
                    this.page.setModel(new sap.extension.model.JSONModel(data));
                    // 改变页面状态
                    sap.extension.pages.changeStatus(this.page);
                }
            }
        }
    }
}
