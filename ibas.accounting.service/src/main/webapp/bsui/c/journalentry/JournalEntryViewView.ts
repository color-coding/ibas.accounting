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
            /** 查看视图-日记账分录 */
            export class JournalEntryViewView extends ibas.BOViewView implements app.IJournalEntryViewView {

                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    this.tableJournalEntryLine = new sap.extension.m.DataTable("", {
                        autoPopinMode: true,
                        dataInfo: {
                            code: bo.JournalEntry.BUSINESS_OBJECT_CODE,
                            name: bo.JournalEntryLine.name
                        },
                        columns: [
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_journalentryline_lineid"),
                                width: "4rem",
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_journalentryline_account"),
                                width: "8rem",
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_journalentryline_shortname"),
                                width: "10rem",
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_journalentryline_shortdescription"),
                                width: "14rem",
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_journalentryline_debit"),
                                width: "12rem",
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_journalentryline_credit"),
                                width: "12rem",
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_journalentryline_distributionrule1"),
                                visible: accounting.config.isEnableDimension(accounting.app.emDimensionType.DIMENSION_1),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_journalentryline_distributionrule2"),
                                visible: accounting.config.isEnableDimension(accounting.app.emDimensionType.DIMENSION_2),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_journalentryline_distributionrule3"),
                                visible: accounting.config.isEnableDimension(accounting.app.emDimensionType.DIMENSION_3),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_journalentryline_distributionrule4"),
                                visible: accounting.config.isEnableDimension(accounting.app.emDimensionType.DIMENSION_4),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_journalentryline_distributionrule5"),
                                visible: accounting.config.isEnableDimension(accounting.app.emDimensionType.DIMENSION_5),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_journalentryline_reference3"),
                            }),
                        ],
                        items: {
                            path: "/rows",
                            template: new sap.m.ColumnListItem("", {
                                cells: [
                                    new sap.extension.m.ObjectAttribute("", {
                                        bindingValue: {
                                            path: "lineId",
                                            type: new sap.extension.data.Numeric(),
                                        }
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        bindingValue: {
                                            path: "account",
                                            type: new sap.extension.data.Alphanumeric(),
                                        },
                                        showValueLink: true,
                                        valueLinkRequest: function (event: sap.ui.base.Event): void {
                                            ibas.servicesManager.runLinkService({
                                                boCode: bo.Account.BUSINESS_OBJECT_CODE,
                                                linkValue: event.getParameter("value")
                                            });
                                        }
                                    }),
                                    new sap.extension.m.ConversionObjectAttribute("", {
                                        bindingValue: {
                                            path: "shortName",
                                            type: new sap.extension.data.Alphanumeric(),
                                        }
                                    }),
                                    new sap.extension.m.ConversionText("", {
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
                                        },
                                        bindingValue: {
                                            path: "shortName",
                                            type: new sap.extension.data.Alphanumeric(),
                                        }
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        bindingValue: {
                                            parts: [
                                                {
                                                    path: "debit",
                                                    type: new sap.extension.data.Sum(),
                                                }, {
                                                    path: "currency",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            ]
                                        }
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        bindingValue: {
                                            parts: [
                                                {
                                                    path: "credit",
                                                    type: new sap.extension.data.Sum(),
                                                }, {
                                                    path: "currency",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            ]
                                        }
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        bindingValue: {
                                            path: "distributionRule1",
                                            type: new sap.extension.data.Alphanumeric(),
                                        },
                                        visible: accounting.config.isEnableDimension(accounting.app.emDimensionType.DIMENSION_1),
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        bindingValue: {
                                            path: "distributionRule2",
                                            type: new sap.extension.data.Alphanumeric(),
                                        },
                                        visible: accounting.config.isEnableDimension(accounting.app.emDimensionType.DIMENSION_2),
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        bindingValue: {
                                            path: "distributionRule3",
                                            type: new sap.extension.data.Alphanumeric(),
                                        },
                                        visible: accounting.config.isEnableDimension(accounting.app.emDimensionType.DIMENSION_3),
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        bindingValue: {
                                            path: "distributionRule4",
                                            type: new sap.extension.data.Alphanumeric(),
                                        },
                                        visible: accounting.config.isEnableDimension(accounting.app.emDimensionType.DIMENSION_4),
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        bindingValue: {
                                            path: "distributionRule5",
                                            type: new sap.extension.data.Alphanumeric(),
                                        },
                                        visible: accounting.config.isEnableDimension(accounting.app.emDimensionType.DIMENSION_5),
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        bindingValue: {
                                            path: "reference3",
                                            type: new sap.extension.data.Alphanumeric(),
                                        }
                                    }),
                                ]
                            }),
                        }
                    });
                    return this.page = new sap.extension.uxap.DataObjectPageLayout("", {
                        dataInfo: {
                            code: bo.JournalEntry.BUSINESS_OBJECT_CODE,
                        },
                        headerTitle: new sap.uxap.ObjectPageHeader("", {
                            objectTitle: {
                                path: "docEntry",
                                type: new sap.extension.data.Numeric(),
                                formatter(data: string): any {
                                    return ibas.strings.format("# {0}", data);
                                }
                            },
                            objectSubtitle: {
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
                                new sap.extension.m.ObjectNumber("", {
                                    textAlign: sap.ui.core.TextAlign.Right,
                                    tooltip: ibas.i18n.prop("bo_account_balance"),
                                    number: {
                                        path: "documentTotal",
                                        type: new sap.extension.data.Sum()
                                    },
                                    unit: {
                                        path: "documentCurrency",
                                        type: new sap.extension.data.Alphanumeric()
                                    },
                                    state: {
                                        path: "dataSource",
                                        formatter(data: any): sap.ui.core.ValueState {
                                            return data === "JES-OFF" ? sap.ui.core.ValueState.Error : sap.ui.core.ValueState.None;
                                        }
                                    }
                                }).addStyleClass("sapMObjectNumberLarge"),
                            ]
                        }),
                        headerContent: [
                            new sap.ui.layout.VerticalLayout("", {
                                width: "30%",
                                content: [
                                    new sap.extension.m.RepositoryObjectAttribute("", {
                                        title: ibas.i18n.prop("bo_journalentry_branch"),
                                        repository: bo.BORepositoryAccounting,
                                        dataInfo: {
                                            type: bo.Branch,
                                            key: bo.Branch.PROPERTY_CODE_NAME,
                                            text: bo.Branch.PROPERTY_NAME_NAME
                                        },
                                        bindingValue: {
                                            path: "branch",
                                            type: new sap.extension.data.Alphanumeric(),
                                        }
                                    }),
                                    new sap.extension.m.RepositoryObjectAttribute("", {
                                        title: ibas.i18n.prop("bo_journalentry_project"),
                                        repository: bo.BORepositoryAccounting,
                                        dataInfo: {
                                            type: bo.Project,
                                            key: bo.Project.PROPERTY_CODE_NAME,
                                            text: bo.Project.PROPERTY_NAME_NAME
                                        },
                                        bindingValue: {
                                            path: "project",
                                            type: new sap.extension.data.Alphanumeric(),
                                        }
                                    }),
                                ]
                            }),
                            new sap.ui.layout.VerticalLayout("", {
                                width: "30%",
                                content: [
                                    new sap.extension.m.ObjectAttribute("", {
                                        title: ibas.i18n.prop("bo_journalentry_documentdate"),
                                        bindingValue: {
                                            path: "documentDate",
                                            type: new sap.extension.data.Date(),
                                        }
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        title: ibas.i18n.prop("bo_journalentry_postingdate"),
                                        bindingValue: {
                                            path: "postingDate",
                                            type: new sap.extension.data.Date(),
                                        }
                                    }),
                                ]
                            }),
                        ],
                        sections: [
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("bo_journalentryline"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            this.tableJournalEntryLine
                                        ],
                                    })
                                ]
                            }),
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("accounting_title_others"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_journalentry_remarks"),
                                                bindingValue: {
                                                    path: "remarks",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            }),
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_journalentry_reference1"),
                                                bindingValue: {
                                                    path: "reference1",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            }),
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_journalentry_reference2"),
                                                bindingValue: {
                                                    path: "reference2",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            }),
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_journalentry_reference3"),
                                                bindingValue: {
                                                    path: "reference3",
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
                private tableJournalEntryLine: sap.extension.m.Table;

                /** 显示数据 */
                showJournalEntry(data: bo.JournalEntry): void {
                    this.page.setModel(new sap.extension.model.JSONModel(data));
                }
                /** 显示数据-日记账分录-行 */
                showJournalEntryLines(datas: bo.JournalEntryLine[]): void {
                    this.tableJournalEntryLine.setModel(new sap.extension.model.JSONModel({ rows: datas }));
                }
            }
        }
    }
}
