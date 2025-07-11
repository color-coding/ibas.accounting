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
            /** 编辑视图-日记账分录 */
            export class JournalEntryEditView extends ibas.BOEditView implements app.IJournalEntryEditView {
                /** 删除数据事件 */
                deleteDataEvent: Function;
                /** 新建数据事件，参数1：是否克隆 */
                createDataEvent: Function;
                /** 添加日记账分录-行事件 */
                addJournalEntryLineEvent: Function;
                /** 删除日记账分录-行事件 */
                removeJournalEntryLineEvent: Function;
                /** 选择日记账分录-行科目事件 */
                chooseJournalEntryLineAccountEvent: Function;
                /** 选择日记账分录-行业务伙伴/科目事件 */
                chooseJournalEntryLineShortNameEvent: Function;
                /** 选择日记账分录-行成本中心事件 */
                chooseJournalEntryLineDistributionRuleEvent: Function;
                /** 冲销分录事件 */
                reverseJournalEntryEvent: Function;

                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    let formTop: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.m.Toolbar("", { visible: false }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_journalentry_basedocument") }),
                            new sap.extension.m.Input("", {
                                editable: false,
                                showValueLink: true,
                                valueLinkRequest(): void {
                                    let data: any = this.getBindingContext().getObject();
                                    if (data instanceof bo.JournalEntry && data.baseDocumentEntry > 0) {
                                        ibas.servicesManager.runLinkService({
                                            boCode: data.baseDocumentType,
                                            linkValue: data.baseDocumentEntry.toString(),
                                        });
                                    }
                                }
                            }).bindProperty("bindingValue", {
                                parts: [
                                    {
                                        path: "baseDocumentType",
                                        type: new sap.extension.data.Alphanumeric(),
                                    },
                                    {
                                        path: "baseDocumentEntry",
                                        type: new sap.extension.data.Numeric(),
                                    },
                                ],
                                formatter(type: string, entry: number): string {
                                    if (ibas.strings.isEmpty(type)) {
                                        return "";
                                    }
                                    return ibas.businessobjects.describe(ibas.strings.format("{[{0}].[DocEntry = {1}]}", type, entry));
                                }
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_journalentry_reference1") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "reference1",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 100
                                }),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_journalentry_reference2") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "reference2",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 200
                                }),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_journalentry_reference3") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "reference3",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 200
                                }),
                            }),
                            new sap.m.Toolbar("", { visible: false }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_journalentry_docentry") }),
                            new sap.extension.m.Input("", {
                                editable: false,
                            }).bindProperty("bindingValue", {
                                path: "docEntry",
                                type: new sap.extension.data.Numeric(),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_journalentry_documentstatus") }),
                            new sap.extension.m.Select("", {
                                items: [
                                    new sap.extension.m.SelectItem("", {
                                        key: ibas.emDocumentStatus.PLANNED,
                                        text: ibas.enums.describe(ibas.emDocumentStatus, ibas.emDocumentStatus.PLANNED),
                                        enabled: true,
                                    }),
                                    new sap.extension.m.SelectItem("", {
                                        key: ibas.emDocumentStatus.RELEASED,
                                        text: ibas.enums.describe(ibas.emDocumentStatus, ibas.emDocumentStatus.RELEASED),
                                        enabled: true,
                                    }),
                                    new sap.extension.m.SelectItem("", {
                                        key: ibas.emDocumentStatus.FINISHED,
                                        text: ibas.enums.describe(ibas.emDocumentStatus, ibas.emDocumentStatus.FINISHED),
                                        enabled: false,
                                    }),
                                    new sap.extension.m.SelectItem("", {
                                        key: ibas.emDocumentStatus.CLOSED,
                                        text: ibas.enums.describe(ibas.emDocumentStatus, ibas.emDocumentStatus.CLOSED),
                                        enabled: false,
                                    })
                                ],
                                editable: {
                                    parts: [
                                        {
                                            path: "documentStatus",
                                        },
                                        {
                                            path: "isNew",
                                        }
                                    ],
                                    formatter(data: any, isNew: any): boolean {
                                        if (isNew === true) {
                                            return true;
                                        }
                                        if (data === ibas.emDocumentStatus.PLANNED) {
                                            return true;
                                        }
                                        return false;
                                    }
                                }
                            }).bindProperty("bindingValue", {
                                path: "documentStatus",
                                type: new sap.extension.data.DocumentStatus()
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_journalentry_postingdate") }),
                            new sap.extension.m.DatePicker("", {
                            }).bindProperty("bindingValue", {
                                path: "postingDate",
                                type: new sap.extension.data.Date(),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_journalentry_documentdate") }),
                            new sap.extension.m.DatePicker("", {
                            }).bindProperty("bindingValue", {
                                path: "documentDate",
                                type: new sap.extension.data.Date(),
                            }),
                        ]
                    });
                    let formJournalEntryLine: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("bo_journalentryline") }),
                            this.tableJournalEntryLine = new sap.extension.table.DataTable("", {
                                enableSelectAll: false,
                                visibleRowCount: sap.extension.table.visibleRowCount(8),
                                dataInfo: {
                                    code: bo.JournalEntry.BUSINESS_OBJECT_CODE,
                                    name: bo.JournalEntryLine.name
                                },
                                toolbar: new sap.m.Toolbar("", {
                                    content: [
                                        new sap.m.MenuButton("", {
                                            type: sap.m.ButtonType.Transparent,
                                            icon: "sap-icon://add",
                                            text: ibas.i18n.prop("shell_data_add"),
                                            menu: new sap.m.Menu("", {
                                                items: [
                                                    new sap.m.MenuItem("", {
                                                        text: ibas.i18n.prop("shell_data_add_line"),
                                                        press: function (): void {
                                                            that.fireViewEvents(that.addJournalEntryLineEvent);
                                                        }
                                                    }),
                                                    new sap.m.MenuItem("", {
                                                        text: ibas.i18n.prop("bo_journalentryline_account"),
                                                        press: function (): void {
                                                            that.fireViewEvents(that.addJournalEntryLineEvent, "ACCOUNT");
                                                        },
                                                    }),
                                                    new sap.m.MenuItem("", {
                                                        text: ibas.i18n.prop("bo_journalentryline_customer"),
                                                        press: function (): void {
                                                            that.fireViewEvents(that.addJournalEntryLineEvent, "CUSTOMER");
                                                        },
                                                    }),
                                                    new sap.m.MenuItem("", {
                                                        text: ibas.i18n.prop("bo_journalentryline_supplier"),
                                                        press: function (): void {
                                                            that.fireViewEvents(that.addJournalEntryLineEvent, "SUPPLIER");
                                                        },
                                                    }),
                                                ]
                                            })
                                        }),
                                        new sap.m.Button("", {
                                            text: ibas.i18n.prop("shell_data_remove"),
                                            type: sap.m.ButtonType.Transparent,
                                            icon: "sap-icon://less",
                                            press(): void {
                                                that.fireViewEvents(that.removeJournalEntryLineEvent, that.tableJournalEntryLine.getSelecteds());
                                            }
                                        })
                                    ]
                                }),
                                rows: "{/rows}",
                                columns: [
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_journalentryline_lineid"),
                                        template: new sap.extension.m.Text("", {
                                        }).bindProperty("bindingValue", {
                                            path: "lineId",
                                            type: new sap.extension.data.Numeric(),
                                        }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_journalentryline_account"),
                                        template: new sap.extension.m.Input("", {
                                            showValueHelp: true,
                                            valueHelpRequest: function (): void {
                                                that.fireViewEvents(that.chooseJournalEntryLineAccountEvent,
                                                    // 获取当前对象
                                                    this.getBindingContext().getObject()
                                                );
                                            },
                                            showValueLink: true,
                                            valueLinkRequest: function (event: sap.ui.base.Event): void {
                                                ibas.servicesManager.runLinkService({
                                                    boCode: bo.Account.BUSINESS_OBJECT_CODE,
                                                    linkValue: event.getParameter("value")
                                                });
                                            }
                                        }).bindProperty("bindingValue", {
                                            path: "account",
                                            type: new sap.extension.data.Alphanumeric({
                                                maxLength: 15
                                            }),
                                        }).bindProperty("editable", {
                                            path: "referenced",
                                            formatter(data: any): boolean {
                                                return data === ibas.emYesNo.YES ? false : true;
                                            }
                                        }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_journalentryline_shortname"),
                                        template: new sap.extension.m.Input("", {
                                            showValueHelp: true,
                                            showSuggestion: true,
                                            valueHelpRequest: function (): void {
                                                let data: any = this.getBindingContext().getObject();
                                                let popover: sap.m.Popover = new sap.m.Popover("", {
                                                    placement: sap.m.PlacementType.HorizontalPreferredRight,
                                                    contentWidth: "auto",
                                                    contentHeight: "auto",
                                                    showHeader: false,
                                                    verticalScrolling: false,
                                                    modal: false,
                                                    content: [
                                                        new sap.m.List("", {
                                                            items: [
                                                                new sap.m.ActionListItem("", {
                                                                    text: ibas.i18n.prop("bo_journalentryline_account"),
                                                                    press: function (this: sap.m.Button): void {
                                                                        if (popover?.isOpen()) {
                                                                            popover.destroy();
                                                                        }
                                                                        that.fireViewEvents(that.chooseJournalEntryLineShortNameEvent, data, "ACCOUNT");
                                                                    },
                                                                    highlight: sap.ui.core.MessageType.Information,
                                                                    unread: true,
                                                                }),
                                                                new sap.m.ActionListItem("", {
                                                                    text: ibas.i18n.prop("bo_journalentryline_customer"),
                                                                    press: function (this: sap.m.Button): void {
                                                                        if (popover?.isOpen()) {
                                                                            popover.destroy();
                                                                        }
                                                                        that.fireViewEvents(that.chooseJournalEntryLineShortNameEvent, data, "CUSTOMER");
                                                                    },
                                                                    highlight: sap.ui.core.MessageType.Warning,
                                                                    unread: true,
                                                                }),
                                                                new sap.m.ActionListItem("", {
                                                                    text: ibas.i18n.prop("bo_journalentryline_supplier"),
                                                                    press: function (this: sap.m.Button): void {
                                                                        if (popover?.isOpen()) {
                                                                            popover.destroy();
                                                                        }
                                                                        that.fireViewEvents(that.chooseJournalEntryLineShortNameEvent, data, "SUPPLIER");
                                                                    },
                                                                    highlight: sap.ui.core.MessageType.Success,
                                                                    unread: true,
                                                                }),
                                                            ]
                                                        })
                                                    ]
                                                });
                                                popover.openBy(this, true);
                                            },
                                            showValueLink: true,
                                            valueLinkRequest: function (event: sap.ui.base.Event): void {
                                                ibas.servicesManager.runLinkService({
                                                    boCode: bo.Account.BUSINESS_OBJECT_CODE,
                                                    linkValue: event.getParameter("value")
                                                });
                                            }
                                        }).bindProperty("bindingValue", {
                                            path: "shortName",
                                            type: new sap.extension.data.Alphanumeric({
                                                maxLength: 20
                                            }),
                                        }).bindProperty("editable", {
                                            path: "referenced",
                                            formatter(data: any): boolean {
                                                return data === ibas.emYesNo.YES ? false : true;
                                            }
                                        }),
                                        width: "12rem",
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_journalentryline_shortdescription"),
                                        template: new sap.extension.m.ConversionText("", {
                                            convert(event: sap.ui.base.Event): void {
                                                let source: any = sap.ui.getCore().byId(event.getParameter("id"));
                                                let data: any = source.getBindingContext()?.getObject();
                                                if (data instanceof bo.JournalEntryLine) {
                                                    if (!ibas.strings.isEmpty(data.shortName)) {
                                                        if (data.account === data.shortName) {
                                                            // 查科目
                                                            let criteria: ibas.Criteria = new ibas.Criteria();
                                                            criteria.result = 1;
                                                            let condition: ibas.ICondition = criteria.conditions.create();
                                                            condition.alias = bo.Account.PROPERTY_CODE_NAME;
                                                            condition.value = data.account;
                                                            let boRepository: bo.BORepositoryAccounting = new bo.BORepositoryAccounting();
                                                            boRepository.fetchAccount({
                                                                criteria: criteria,
                                                                onCompleted: (opRslt) => {
                                                                    if (opRslt.resultObjects.length > 0) {
                                                                        source.setText(opRslt.resultObjects.firstOrDefault().name);
                                                                    }
                                                                }
                                                            });
                                                        } else {
                                                            // 查业务伙伴
                                                            let criteria: ibas.Criteria = new ibas.Criteria();
                                                            criteria.result = 1;
                                                            let condition: ibas.ICondition = criteria.conditions.create();
                                                            condition.alias = bo.Account.PROPERTY_CODE_NAME;
                                                            condition.value = data.shortName;
                                                            let boRepository: bo.BORepositoryAccounting = new bo.BORepositoryAccounting();
                                                            boRepository.fetchBusinessPartner({
                                                                criteria: criteria,
                                                                onCompleted: (opRslt) => {
                                                                    if (opRslt.resultObjects.length > 0) {
                                                                        source.setText(opRslt.resultObjects.firstOrDefault().name);
                                                                    }
                                                                }
                                                            });
                                                        }
                                                    }
                                                }
                                            }
                                        }).bindProperty("bindingValue", {
                                            path: "shortName",
                                            type: new sap.extension.data.Alphanumeric({
                                                maxLength: 20
                                            }),
                                        }),
                                        width: "16rem",
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_journalentryline_debit"),
                                        template: new sap.extension.m.Input("", {
                                        }).bindProperty("bindingValue", {
                                            path: "debit",
                                            type: new sap.extension.data.Sum(),
                                        }).bindProperty("editable", {
                                            path: "referenced",
                                            formatter(data: any): boolean {
                                                return data === ibas.emYesNo.YES ? false : true;
                                            }
                                        }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_journalentryline_credit"),
                                        template: new sap.extension.m.Input("", {
                                        }).bindProperty("bindingValue", {
                                            path: "credit",
                                            type: new sap.extension.data.Sum(),
                                        }).bindProperty("editable", {
                                            path: "referenced",
                                            formatter(data: any): boolean {
                                                return data === ibas.emYesNo.YES ? false : true;
                                            }
                                        }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_journalentryline_cashflow"),
                                        template: new sap.extension.m.RepositorySelect("", {
                                            repository: bo.BORepositoryAccounting,
                                            dataInfo: {
                                                type: bo.CashFlow,
                                                key: bo.CashFlow.PROPERTY_SIGN_NAME,
                                                text: bo.CashFlow.PROPERTY_NAME_NAME
                                            },
                                            criteria: [
                                                new ibas.Condition(bo.CashFlow.PROPERTY_POSTABLE_NAME, ibas.emConditionOperation.EQUAL, bo.emPostableType.ACTIVE)
                                            ],
                                        }).bindProperty("bindingValue", {
                                            path: "cashFlow",
                                            type: new sap.extension.data.Numeric(),
                                        }),
                                        width: "14rem"
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_journalentryline_distributionrule1"),
                                        template: new sap.extension.m.Input("", {
                                            showValueHelp: true,
                                            valueHelpRequest(): void {
                                                that.fireViewEvents(that.chooseJournalEntryLineDistributionRuleEvent,
                                                    accounting.app.emDimensionType.DIMENSION_1, this.getBindingContext().getObject());
                                            }
                                        }).bindProperty("bindingValue", {
                                            path: "distributionRule1",
                                            type: new sap.extension.data.Alphanumeric({
                                                maxLength: 8
                                            }),
                                        }),
                                        visible: accounting.config.isEnableDimension(accounting.app.emDimensionType.DIMENSION_1)
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_journalentryline_distributionrule2"),
                                        template: new sap.extension.m.Input("", {
                                            showValueHelp: true,
                                            valueHelpRequest(): void {
                                                that.fireViewEvents(that.chooseJournalEntryLineDistributionRuleEvent,
                                                    accounting.app.emDimensionType.DIMENSION_2, this.getBindingContext().getObject());
                                            }
                                        }).bindProperty("bindingValue", {
                                            path: "distributionRule2",
                                            type: new sap.extension.data.Alphanumeric({
                                                maxLength: 8
                                            }),
                                        }),
                                        visible: accounting.config.isEnableDimension(accounting.app.emDimensionType.DIMENSION_2)
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_journalentryline_distributionrule3"),
                                        template: new sap.extension.m.Input("", {
                                            showValueHelp: true,
                                            valueHelpRequest(): void {
                                                that.fireViewEvents(that.chooseJournalEntryLineDistributionRuleEvent,
                                                    accounting.app.emDimensionType.DIMENSION_3, this.getBindingContext().getObject());
                                            }
                                        }).bindProperty("bindingValue", {
                                            path: "distributionRule3",
                                            type: new sap.extension.data.Alphanumeric({
                                                maxLength: 8
                                            }),
                                        }),
                                        visible: accounting.config.isEnableDimension(accounting.app.emDimensionType.DIMENSION_3)
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_journalentryline_distributionrule4"),
                                        template: new sap.extension.m.Input("", {
                                            showValueHelp: true,
                                            valueHelpRequest(): void {
                                                that.fireViewEvents(that.chooseJournalEntryLineDistributionRuleEvent,
                                                    accounting.app.emDimensionType.DIMENSION_4, this.getBindingContext().getObject());
                                            }
                                        }).bindProperty("bindingValue", {
                                            path: "distributionRule4",
                                            type: new sap.extension.data.Alphanumeric({
                                                maxLength: 8
                                            }),
                                        }),
                                        visible: accounting.config.isEnableDimension(accounting.app.emDimensionType.DIMENSION_4)
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_journalentryline_distributionrule5"),
                                        template: new sap.extension.m.Input("", {
                                            showValueHelp: true,
                                            valueHelpRequest(): void {
                                                that.fireViewEvents(that.chooseJournalEntryLineDistributionRuleEvent,
                                                    accounting.app.emDimensionType.DIMENSION_5, this.getBindingContext().getObject());
                                            }
                                        }).bindProperty("bindingValue", {
                                            path: "distributionRule5",
                                            type: new sap.extension.data.Alphanumeric({
                                                maxLength: 8
                                            }),
                                        }),
                                        visible: accounting.config.isEnableDimension(accounting.app.emDimensionType.DIMENSION_5)
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_journalentryline_reference3"),
                                        template: new sap.extension.m.Input("", {
                                        }).bindProperty("bindingValue", {
                                            path: "reference3",
                                            type: new sap.extension.data.Alphanumeric({
                                                maxLength: 200
                                            }),
                                        }),
                                    }),
                                ]
                            }),
                        ]
                    });
                    let formBottom: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.m.Toolbar("", { visible: false }),
                            new sap.m.Label("", {
                                required: true,
                                visible: accounting.config.isEnableBranch(),
                                text: ibas.i18n.prop("bo_journalentry_branch"),
                            }),
                            new sap.extension.m.DataBranchInput("", {
                                showValueHelp: true,
                                visible: accounting.config.isEnableBranch(),
                            }).bindProperty("bindingValue", {
                                path: "branch",
                                type: new sap.extension.data.Alphanumeric()
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_journalentry_project") }),
                            new sap.extension.m.SelectionInput("", {
                                showValueHelp: true,
                                repository: bo.BORepositoryAccounting,
                                dataInfo: {
                                    type: bo.Project,
                                    key: bo.Project.PROPERTY_CODE_NAME,
                                    text: bo.Project.PROPERTY_NAME_NAME
                                },
                                criteria: [
                                    new ibas.Condition(bo.Project.PROPERTY_DELETED_NAME, ibas.emConditionOperation.NOT_EQUAL, ibas.emYesNo.YES.toString())
                                ]
                            }).bindProperty("bindingValue", {
                                path: "project",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 20
                                }),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_journalentry_remarks") }),
                            new sap.extension.m.TextArea("", {
                                rows: 3,
                            }).bindProperty("bindingValue", {
                                path: "remarks",
                                type: new sap.extension.data.Alphanumeric(),
                            }),
                            new sap.m.Toolbar("", { visible: false }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_journalentry_documenttotal") }),
                            new sap.extension.m.Input("", {
                                editable: false,
                            }).bindProperty("bindingValue", {
                                path: "documentTotal",
                                type: new sap.extension.data.Sum(),
                            }),
                            new sap.extension.m.CurrencySelect("", {
                                editable: false,
                            }).bindProperty("bindingValue", {
                                path: "documentCurrency",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 8
                                }),
                            }),
                        ]
                    });
                    return this.page = new sap.extension.m.DataPage("", {
                        showHeader: false,
                        dataInfo: {
                            code: bo.JournalEntry.BUSINESS_OBJECT_CODE,
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
                                new sap.m.ToolbarSeparator(""),
                                new sap.extension.m.MenuButton("", {
                                    autoHide: true,
                                    text: ibas.i18n.prop("shell_quick_to"),
                                    icon: "sap-icon://generate-shortcut",
                                    type: sap.m.ButtonType.Transparent,
                                    menu: new sap.m.Menu("", {
                                        items: [
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("accounting_reverse_journalentry"),
                                                icon: "sap-icon://doc-attachment",
                                                press: function (): void {
                                                    that.fireViewEvents(that.reverseJournalEntryEvent);
                                                },
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
                            formJournalEntryLine,
                            formBottom,
                        ]
                    });
                }

                private page: sap.extension.m.Page;
                private tableJournalEntryLine: sap.extension.table.Table;

                /** 显示数据 */
                showJournalEntry(data: bo.JournalEntry): void {
                    this.page.setModel(new sap.extension.model.JSONModel(data));
                    // 改变页面状态
                    sap.extension.pages.changeStatus(this.page);
                }
                /** 显示数据-日记账分录-行 */
                showJournalEntryLines(datas: bo.JournalEntryLine[]): void {
                    this.tableJournalEntryLine.setModel(new sap.extension.model.JSONModel({ rows: datas }));
                }
            }
        }
    }
}
