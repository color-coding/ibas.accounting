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
            /** 查看视图-分类账 */
            export class LedgerAccountDeterminationView extends ibas.View implements app.ILedgerAccountDeterminationView {
                /** 选中总账科目事件 */
                selectLedgerAccountEvent: Function;
                /** 选择过账期间总账科目科目事件 */
                choosePostingPeriodAccountAccountEvent: Function;
                /** 创建过账期间总账科目事件 */
                createPostingPeriodAccountEvent: Function;
                /** 删除账期间总账科目科目事件 */
                deletePostingPeriodAccountEvent: Function;
                /** 保存过账期间总账科目事件 */
                savePostingPeriodAccountEvent: Function;
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    return this.split = new sap.m.SplitContainer("", {
                        masterPages: [
                            this.ledgerPage = new sap.extension.m.Page("", {
                                showHeader: false,
                                content: {
                                    path: "/",
                                    templateShareable: false,
                                    template: new sap.extension.m.List("", {
                                        inset: false,
                                        backgroundDesign: sap.m.BackgroundDesign.Transparent,
                                        mode: sap.m.ListMode.SingleSelectLeft,
                                        headerToolbar: new sap.m.Toolbar("", {
                                            content: [
                                                new sap.m.Title("", {
                                                    level: sap.ui.core.TitleLevel.H5,
                                                    titleStyle: sap.ui.core.TitleLevel.H5,
                                                    text: {
                                                        path: "group",
                                                        formatter(data: any): string {
                                                            if (data) {
                                                                return ibas.i18n.prop(ibas.strings.format("bo_ledgeraccount_group_{0}", data).toLowerCase());
                                                            }
                                                            return "UNKNOWN";
                                                        }
                                                    }
                                                })
                                            ]
                                        }),
                                        items: {
                                            path: "items",
                                            templateShareable: false,
                                            template: new sap.m.StandardListItem("", {
                                                title: {
                                                    path: "description",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            }),
                                        },
                                        selectionChange(oEvent: sap.ui.base.Event): void {
                                            for (let item of that.ledgerPage.getContent()) {
                                                if (item === oEvent.getSource()) {
                                                    continue;
                                                }
                                                if (item instanceof sap.m.List) {
                                                    item.removeSelections(true);
                                                }
                                            }
                                            let oItem: any = oEvent.getParameter("listItem");
                                            that.fireViewEvents(that.selectLedgerAccountEvent,
                                                oItem.getBindingContext()?.getObject(),
                                                that.periodSelect.getSelectedItem()?.getBindingContext()?.getObject());
                                        },
                                    }),
                                },
                                subHeader: new sap.m.Toolbar("", {
                                    design: sap.m.ToolbarDesign.Transparent,
                                    content: [
                                        new sap.m.Label("", {
                                            text: ibas.i18n.prop("bo_periodledgeraccount_period"),
                                        }),
                                        this.periodSelect = new sap.extension.m.Select("", {
                                            width: "100%",
                                            items: {
                                                path: "/",
                                                templateShareable: false,
                                                template: new sap.extension.m.SelectItem("", {
                                                    key: {
                                                        path: "objectKey",
                                                        data: new sap.extension.data.Alphanumeric(),
                                                    },
                                                    text: {
                                                        path: "name",
                                                        data: new sap.extension.data.Alphanumeric(),
                                                    }
                                                })
                                            }
                                        }),
                                        new sap.m.Button("", {
                                            icon: "sap-icon://refresh",
                                            press(): void {
                                                for (let list of that.ledgerPage.getContent()) {
                                                    if (list instanceof sap.extension.m.List) {
                                                        let selected: any = list.getSelecteds().firstOrDefault();
                                                        if (!ibas.objects.isNull(selected)) {
                                                            that.fireViewEvents(that.selectLedgerAccountEvent, selected,
                                                                that.periodSelect.getSelectedItem()?.getBindingContext()?.getObject());
                                                            break;
                                                        }
                                                    }
                                                }
                                            }
                                        })
                                    ]
                                }),
                            })
                        ],
                        detailPages: [
                            this.accountPage = new sap.extension.m.Page("", {
                                showHeader: false,
                                content: [
                                    new sap.m.IllustratedMessage("", {
                                        illustrationType: sap.m.IllustratedMessageType.NoData
                                    }),
                                    new sap.extension.m.List("", {
                                        visible: false,
                                        inset: false,
                                        items: {
                                            path: "/",
                                            templateShareable: true,
                                            sorter: [
                                                new sap.ui.model.Sorter("order", false)
                                            ],
                                            template: new sap.m.CustomListItem("", {
                                                highlight: {
                                                    parts: [
                                                        {
                                                            path: "isDirty",
                                                        },
                                                        {
                                                            path: "activated",
                                                        },
                                                    ],
                                                    formatter(isDirty: boolean, activated: ibas.emYesNo): string {
                                                        if (isDirty) {
                                                            return sap.ui.core.MessageType.Warning;
                                                        }
                                                        if (activated === ibas.emYesNo.NO) {
                                                            return sap.ui.core.MessageType.Error;
                                                        }
                                                        return sap.ui.core.MessageType.Information;
                                                    }
                                                },
                                                content: [
                                                    new sap.m.Panel("", {
                                                        expandable: true,
                                                        expanded: {
                                                            path: "isNew",
                                                            mode: sap.ui.model.BindingMode.OneTime,
                                                        },
                                                        headerToolbar: new sap.m.Toolbar("", {
                                                            content: [
                                                                new sap.m.Title("", {
                                                                    text: {
                                                                        path: "order",
                                                                        formatter(data: any): string {
                                                                            return ibas.strings.format("# {0}", data > 0 ? data : "0");
                                                                        }
                                                                    },
                                                                }),
                                                                new sap.m.Text("", {
                                                                    text: {
                                                                        path: "name",
                                                                        type: new sap.extension.data.Alphanumeric(),
                                                                    },
                                                                }),
                                                                new sap.m.ToolbarSpacer(),
                                                                new sap.extension.m.Text("", {
                                                                    bindingValue: {
                                                                        path: "account",
                                                                        type: new sap.extension.data.Alphanumeric(),
                                                                    },
                                                                }),
                                                                new sap.extension.m.RepositoryText("", {
                                                                    repository: bo.BORepositoryAccounting,
                                                                    dataInfo: {
                                                                        type: bo.Account,
                                                                        key: bo.Account.PROPERTY_CODE_NAME,
                                                                        text: bo.Account.PROPERTY_NAME_NAME
                                                                    },
                                                                    bindingValue: {
                                                                        path: "account",
                                                                        type: new sap.extension.data.Alphanumeric(),
                                                                    },
                                                                }),
                                                                new sap.m.ToolbarSeparator(),
                                                                new sap.m.Button("", {
                                                                    type: sap.m.ButtonType.Transparent,
                                                                    icon: "sap-icon://delete",
                                                                    press(): void {
                                                                        that.fireViewEvents(that.deletePostingPeriodAccountEvent, this.getBindingContext().getObject());
                                                                    }
                                                                }),
                                                            ]
                                                        }),
                                                        content: [
                                                            new sap.ui.layout.cssgrid.CSSGrid("", {
                                                                gridTemplateColumns: "40% 60%",
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
                                                                            new sap.m.Label("", { text: ibas.i18n.prop("bo_periodledgeraccount_name") }),
                                                                            new sap.extension.m.Input("", {
                                                                            }).bindProperty("bindingValue", {
                                                                                path: "name",
                                                                                type: new sap.extension.data.Alphanumeric({
                                                                                    maxLength: 100
                                                                                }),
                                                                            }),
                                                                            new sap.m.Label("", { text: ibas.i18n.prop("bo_periodledgeraccount_activated") }),
                                                                            new sap.extension.m.EnumSelect("", {
                                                                                enumType: ibas.emYesNo,
                                                                            }).bindProperty("bindingValue", {
                                                                                path: "activated",
                                                                                type: new sap.extension.data.YesNo,
                                                                            }),
                                                                            new sap.m.Label("", { text: ibas.i18n.prop("bo_periodledgeraccount_account_code") }),
                                                                            new sap.extension.m.Input("", {
                                                                                showValueHelp: true,
                                                                                showValueLink: true,
                                                                                valueHelpRequest: function (): void {
                                                                                    that.fireViewEvents(that.choosePostingPeriodAccountAccountEvent, this.getBindingContext().getObject());
                                                                                },
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
                                                                            }),
                                                                            new sap.m.Label("", { text: ibas.i18n.prop("bo_periodledgeraccount_account_name") }),
                                                                            new sap.extension.m.RepositoryInput("", {
                                                                                editable: false,
                                                                                showValueLink: false,
                                                                                repository: bo.BORepositoryAccounting,
                                                                                dataInfo: {
                                                                                    type: bo.Account,
                                                                                    key: bo.Account.PROPERTY_CODE_NAME,
                                                                                    text: bo.Account.PROPERTY_NAME_NAME
                                                                                },
                                                                            }).bindProperty("bindingValue", {
                                                                                path: "account",
                                                                                type: new sap.extension.data.Alphanumeric(),
                                                                            }),
                                                                            new sap.m.Label("", { text: ibas.i18n.prop("bo_periodledgeraccount_remarks") }),
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
                                                                                visibleRowCount: 4,
                                                                                chooseType: ibas.emChooseType.NONE,
                                                                                rows: {
                                                                                    path: "periodLedgerAccountConditions",
                                                                                    filters: [
                                                                                        new sap.ui.model.Filter("isDeleted", sap.ui.model.FilterOperator.NE, true)
                                                                                    ],
                                                                                    sorter: {
                                                                                        path: "visOrder",
                                                                                        descending: false
                                                                                    },
                                                                                },
                                                                                columns: [
                                                                                    new sap.extension.table.DataColumn("", {
                                                                                        label: ibas.i18n.prop("bo_periodledgeraccountcondition_relationship"),
                                                                                        template: new sap.extension.m.EnumSelect("", {
                                                                                            enumType: ibas.emConditionRelationship
                                                                                        }).bindProperty("bindingValue", {
                                                                                            path: "relationship",
                                                                                            type: new sap.extension.data.Enum({
                                                                                                enumType: ibas.emConditionRelationship
                                                                                            })
                                                                                        }),
                                                                                        width: "7rem",
                                                                                    }),
                                                                                    new sap.extension.table.DataColumn("", {
                                                                                        label: ibas.i18n.prop("bo_periodledgeraccountcondition_bracketopen"),
                                                                                        template: new sap.extension.m.RepeatCharSelect("", {
                                                                                            repeatText: "(",
                                                                                            maxCount: 5,
                                                                                        }).bindProperty("bindingValue", {
                                                                                            path: "bracketOpen",
                                                                                            type: "sap.ui.model.type.Integer"
                                                                                        }),
                                                                                        width: "7rem",
                                                                                    }),
                                                                                    new sap.extension.table.DataColumn("", {
                                                                                        label: ibas.i18n.prop("bo_periodledgeraccountcondition_propertyname"),
                                                                                        template: new sap.extension.m.EnumSelect("", {
                                                                                            enumType: app.emLedgerAccountConditionProperty
                                                                                        }).bindProperty("bindingValue", {
                                                                                            path: "propertyName",
                                                                                            type: new sap.extension.data.Alphanumeric()
                                                                                        }),
                                                                                        width: "10rem",
                                                                                    }),
                                                                                    new sap.extension.table.DataColumn("", {
                                                                                        label: ibas.i18n.prop("bo_periodledgeraccountcondition_operation"),
                                                                                        template: new sap.extension.m.EnumSelect("", {
                                                                                            enumType: ibas.emConditionOperation
                                                                                        }).bindProperty("bindingValue", {
                                                                                            path: "operation",
                                                                                            type: new sap.extension.data.Enum({
                                                                                                enumType: ibas.emConditionOperation
                                                                                            })
                                                                                        }),
                                                                                        width: "8rem",
                                                                                    }),
                                                                                    new sap.extension.table.DataColumn("", {
                                                                                        label: ibas.i18n.prop("bo_periodledgeraccountcondition_value"),
                                                                                        template: new sap.extension.m.Input("", {
                                                                                        }).bindProperty("bindingValue", {
                                                                                            path: "value",
                                                                                            type: new sap.extension.data.Alphanumeric({
                                                                                                maxLength: 30
                                                                                            })
                                                                                        }),
                                                                                        width: "10rem",
                                                                                    }),
                                                                                    new sap.extension.table.DataColumn("", {
                                                                                        label: ibas.i18n.prop("bo_periodledgeraccountcondition_bracketclose"),
                                                                                        template: new sap.extension.m.RepeatCharSelect("", {
                                                                                            repeatText: ")",
                                                                                            maxCount: 5,
                                                                                        }).bindProperty("bindingValue", {
                                                                                            path: "bracketClose",
                                                                                            type: "sap.ui.model.type.Integer"
                                                                                        }),
                                                                                        width: "7rem",
                                                                                    }),
                                                                                ],
                                                                                sortProperty: "visOrder",
                                                                                rowActionCount: 1,
                                                                                rowActionTemplate: new sap.ui.table.RowAction("", {
                                                                                    items: [
                                                                                        new sap.ui.table.RowActionItem("", {
                                                                                            icon: "sap-icon://delete",
                                                                                            press: function (this: sap.m.Button): void {
                                                                                                let data: any = this.getBindingContext().getObject();
                                                                                                if (data instanceof bo.PeriodLedgerAccountCondition) {
                                                                                                    if (data.isNew) {
                                                                                                        let parent: any = this.getParent().getParent().getParent().getBindingContext().getObject();
                                                                                                        if (parent instanceof bo.PeriodLedgerAccount) {
                                                                                                            parent.periodLedgerAccountConditions.remove(data);
                                                                                                        }
                                                                                                    } else {
                                                                                                        data.delete();
                                                                                                    }
                                                                                                    this.getBindingContext().getModel().refresh(true);
                                                                                                }
                                                                                            },
                                                                                        }),
                                                                                    ]
                                                                                }),
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
                                                                                                let data: any = this.getBindingContext().getObject();
                                                                                                if (data instanceof bo.PeriodLedgerAccount) {
                                                                                                    let item: any = data.periodLedgerAccountConditions.create();
                                                                                                    this.getBindingContext().getModel().refresh(true);
                                                                                                }
                                                                                            },
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                        ]
                                                                    }),
                                                                ]
                                                            }),
                                                        ]
                                                    }),
                                                ]
                                            })
                                        },
                                        dragDropConfig: [
                                            new sap.ui.core.dnd.DragDropInfo("", {
                                                sourceAggregation: "items",
                                                targetAggregation: "items",
                                                dropPosition: sap.ui.core.dnd.DropPosition.Between,
                                                dropLayout: sap.ui.core.dnd.DropLayout.Vertical,
                                                drop(event: sap.ui.base.Event): void {
                                                    let dragged: bo.PeriodLedgerAccount = event.getParameter("draggedControl")?.getBindingContext()?.getObject();
                                                    let dropped: bo.PeriodLedgerAccount = event.getParameter("droppedControl")?.getBindingContext()?.getObject();
                                                    let dropPosition: string = event.getParameter("dropPosition");
                                                    let table: any = (<any>event.getSource())?.getDropTarget();
                                                    if (table instanceof sap.m.List) {
                                                        let index: number = 1;
                                                        for (let item of table.getItems()) {
                                                            let row: bo.PeriodLedgerAccount = item.getBindingContext()?.getObject();
                                                            if (ibas.objects.isNull(row)) {
                                                                continue;
                                                            }
                                                            if (dragged === row) {
                                                                continue;
                                                            } else if (dropped === row) {
                                                                if (dropPosition === "Before") {
                                                                    dragged.order = index;
                                                                    index++;
                                                                    dropped.order = index;
                                                                    index++;
                                                                } else if (dropPosition === "After") {
                                                                    dropped.order = index;
                                                                    index++;
                                                                    dragged.order = index;
                                                                    index++;
                                                                }
                                                            } else {
                                                                row.order = index;
                                                                index++;
                                                            }
                                                        }
                                                        if (index > 1) {
                                                            table.getModel().refresh(true);
                                                        }
                                                    }
                                                },
                                            })
                                        ],
                                    })
                                ],
                                subHeader: new sap.m.Toolbar("", {
                                    content: [
                                        new sap.m.Button("", {
                                            type: sap.m.ButtonType.Transparent,
                                            icon: "sap-icon://navigation-right-arrow",
                                            press: function (this: sap.m.Button): void {
                                                if (this.getIcon() === "sap-icon://navigation-right-arrow") {
                                                    for (let pItem of that.accountPage.getContent()) {
                                                        if (pItem instanceof sap.m.List) {
                                                            for (let vItem of pItem.getItems()) {
                                                                if (vItem instanceof sap.m.CustomListItem) {
                                                                    for (let lItem of vItem.getContent()) {
                                                                        if (lItem instanceof sap.m.Panel) {
                                                                            lItem.setExpanded(true);
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                    this.setIcon("sap-icon://navigation-down-arrow");
                                                } else {
                                                    for (let pItem of that.accountPage.getContent()) {
                                                        if (pItem instanceof sap.m.List) {
                                                            for (let vItem of pItem.getItems()) {
                                                                if (vItem instanceof sap.m.CustomListItem) {
                                                                    for (let lItem of vItem.getContent()) {
                                                                        if (lItem instanceof sap.m.Panel) {
                                                                            lItem.setExpanded(false);
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                    this.setIcon("sap-icon://navigation-right-arrow");
                                                }
                                            }
                                        }),
                                        new sap.m.ToolbarSeparator(),
                                        new sap.m.SearchField("", {
                                            search(this: sap.m.SearchField): void {
                                                let content: string;
                                                let search: string = this.getValue();
                                                if (search) {
                                                    search = search.trim().toLowerCase();
                                                }
                                                for (let item of that.accountPage.getContent()) {
                                                    if (item instanceof sap.m.List) {
                                                        for (let cItem of item.getItems()) {
                                                            if (cItem instanceof sap.m.CustomListItem) {
                                                                cItem.setVisible(true);
                                                                if (ibas.strings.isEmpty(search)) {
                                                                    continue;
                                                                }
                                                                let done: boolean = false;
                                                                for (let pItem of (<sap.m.Panel>cItem.getContent()[0]).getHeaderToolbar().getContent()) {
                                                                    if (pItem instanceof sap.m.Text) {
                                                                        content = pItem.getText(true); if (content && content.toLowerCase().indexOf(search) >= 0) {
                                                                            done = true;
                                                                            break;
                                                                        }
                                                                    }
                                                                }
                                                                if (done) {
                                                                    continue;
                                                                }
                                                                cItem.setVisible(false);
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }),
                                        new sap.m.ToolbarSpacer(),
                                        new sap.m.ToolbarSeparator(),
                                        new sap.m.Button("", {
                                            type: sap.m.ButtonType.Transparent,
                                            icon: "sap-icon://create",
                                            press(): void {
                                                let ledger: any;
                                                let period: any = that.periodSelect.getSelectedItem()?.getBindingContext()?.getObject();
                                                for (let item of that.ledgerPage.getContent()) {
                                                    if (item instanceof sap.extension.m.List) {
                                                        ledger = item.getSelecteds().firstOrDefault();
                                                    }
                                                    if (!ibas.objects.isNull(ledger)) {
                                                        break;
                                                    }
                                                }
                                                that.fireViewEvents(that.createPostingPeriodAccountEvent, ledger, period);
                                            }
                                        }),
                                        new sap.m.ToolbarSeparator(),
                                        new sap.m.Button("", {
                                            type: sap.m.ButtonType.Transparent,
                                            icon: "sap-icon://save",
                                            press(): void {
                                                that.fireViewEvents(that.savePostingPeriodAccountEvent);
                                            }
                                        }),
                                    ]
                                })
                            }),
                        ],
                    });
                }

                private split: sap.m.SplitContainer;
                private periodSelect: sap.extension.m.Select;
                private ledgerPage: sap.extension.m.Page;
                private accountPage: sap.extension.m.Page;

                showPostingPeriods(datas: bo.PeriodCategory[]): void {
                    this.periodSelect.setModel(new sap.extension.model.JSONModel(datas));
                }
                showLedgerAccounts(datas: bo.LedgerAccount[]): void {
                    let groups: ibas.IList<GroupLedgerAccount> = new ibas.ArrayList<GroupLedgerAccount>();
                    for (let item of datas) {
                        let group: GroupLedgerAccount = groups.firstOrDefault(c => c.group === item.group);
                        if (ibas.objects.isNull(group)) {
                            group = new GroupLedgerAccount();
                            group.group = item.group;
                            group.items = new ibas.ArrayList<bo.LedgerAccount>();
                            groups.add(group);
                        }
                        group.items.push(item);
                    }
                    this.ledgerPage.setModel(new sap.extension.model.JSONModel(groups));
                }
                showPostingPeriodAccounts(datas: bo.PeriodLedgerAccount[] | bo.PeriodLedgerAccount): void {
                    if (this.accountPage.getContent().length > 1) {
                        this.accountPage.removeContent(0);
                        for (let item of this.accountPage.getContent()) {
                            if (item.getVisible()) {
                                continue;
                            }
                            item.setVisible(true);
                        }
                    }
                    if (datas instanceof Array) {
                        this.accountPage.setModel(new sap.extension.model.JSONModel(datas));
                    } else {
                        let model: sap.extension.model.JSONModel = this.accountPage.getModel();
                        model.addData(datas);
                        model.refresh();
                    }
                }
            }
        }
        class GroupLedgerAccount {
            group: string;
            items: bo.LedgerAccount[];
        }
    }
}
