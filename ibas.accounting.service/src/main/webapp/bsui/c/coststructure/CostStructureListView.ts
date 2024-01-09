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
            /** 列表视图-费用结构 */
            export class CostStructureListView extends ibas.BOQueryViewWithPanel implements app.ICostStructureListView {
                /** 返回查询的对象 */
                get queryTarget(): any {
                    return bo.CostStructure;
                }
                newDataEvent: Function;
                viewDataEvent: Function;
                /** 保存数据事件 */
                saveDataEvent: Function;
                /** 编辑数据，参数：目标数据 */
                editDataEvent: Function;
                /** 删除数据事件，参数：删除对象集合 */
                deleteDataEvent: Function;
                /** 结算费用节点 */
                closeCostStructureNodeEvent: Function;
                /** 复制其他费用结构节点 */
                copyCostStructureNodesEvent: Function;
                /** 添加费用结构节点 */
                addCostStructureNodeEvent: Function;
                /** 移除费用结构节点 */
                removeCostStructureNodeEvent: Function;
                /** 添加费用结构节点项目 */
                addCostStructureNodeItemEvent: Function;
                /** 移除费用结构节点点项目 */
                removeCostStructureNodeItemEvent: Function;
                viewCostItemsBudgetEvent: Function;
                viewCostItemsLockedEvent: Function;
                viewCostItemsIncurredEvent: Function;
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    this.entityList = new sap.extension.m.List("", {
                        inset: false,
                        growing: true,
                        growingThreshold: ibas.config.get(openui5.utils.CONFIG_ITEM_LIST_TABLE_VISIBLE_ROW_COUNT, 15),
                        growingScrollToLoad: true,
                        mode: sap.m.ListMode.SingleSelectMaster,
                        items: {
                            path: "/rows",
                            templateShareable: false,
                            template: new sap.m.ObjectListItem("", {
                                title: "{name}",
                                firstStatus: new sap.m.ObjectStatus("", {
                                    text: {
                                        parts: [
                                            {
                                                path: "canceled",
                                                type: new sap.extension.data.YesNo(),
                                            },
                                            {
                                                path: "status",
                                                type: new sap.extension.data.Enum({
                                                    enumType: bo.emCostStatus,
                                                }),
                                            },
                                        ],
                                        formatter(canceled: ibas.emYesNo, status: bo.emCostStatus): string {
                                            if (ibas.enums.equals(ibas.emYesNo, canceled, ibas.emYesNo.YES)) {
                                                return ibas.i18n.prop("shell_data_cancel");
                                            }
                                            return ibas.enums.describe(bo.emCostStatus, ibas.enums.valueOf(bo.emCostStatus, status));
                                        },
                                    },
                                    state: {
                                        parts: [
                                            {
                                                path: "canceled",
                                                type: new sap.extension.data.YesNo(),
                                            },
                                            {
                                                path: "status",
                                                type: new sap.extension.data.Enum({
                                                    enumType: bo.emCostStatus,
                                                }),
                                            },
                                        ],
                                        formatter(canceled: ibas.emYesNo, status: bo.emCostStatus): string {
                                            if (ibas.enums.equals(ibas.emYesNo, canceled, ibas.emYesNo.YES)) {
                                                return sap.ui.core.ValueState.Error;
                                            }
                                            if (ibas.enums.equals(bo.emCostStatus, status, bo.emCostStatus.OPEN)) {
                                                return sap.ui.core.ValueState.Information;
                                            }
                                            if (ibas.enums.equals(bo.emCostStatus, status, bo.emCostStatus.FROZEN)) {
                                                return sap.ui.core.ValueState.Warning;
                                            }
                                            if (ibas.enums.equals(bo.emCostStatus, status, bo.emCostStatus.CLOSED)) {
                                                return sap.ui.core.ValueState.Success;
                                            }
                                        },
                                    },
                                }),
                                attributes: [
                                    new sap.extension.m.ObjectAttribute("", {
                                        title: {
                                            path: "entityType",
                                            formatter(data: bo.emEntityType): string {
                                                if (data === bo.emEntityType.ORGANIZATION) {
                                                    return ibas.i18n.prop(["bo_organization", "bo_organization_code"]);
                                                } else if (data === bo.emEntityType.PROJECT) {
                                                    return ibas.i18n.prop(["bo_project", "bo_project_code"]);
                                                }
                                                return ibas.i18n.prop("bo_coststructure_entitycode");
                                            }
                                        },
                                    }).bindProperty("bindingValue", {
                                        path: "entityCode",
                                        type: new sap.extension.data.Alphanumeric(),
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        title: ibas.i18n.prop("bo_coststructure_startdate"),
                                        visible: {
                                            path: "startDate",
                                            formatter(data: Date): boolean {
                                                return ibas.objects.isNull(data) ? false : true;
                                            }
                                        },
                                    }).bindProperty("bindingValue", {
                                        path: "startDate",
                                        type: new sap.extension.data.Date(),
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        title: ibas.i18n.prop("bo_coststructure_enddate"),
                                        visible: {
                                            path: "endDate",
                                            formatter(data: Date): boolean {
                                                return ibas.objects.isNull(data) ? false : true;
                                            }
                                        },
                                    }).bindProperty("bindingValue", {
                                        path: "endDate",
                                        type: new sap.extension.data.Date(),
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        title: ibas.i18n.prop("bo_coststructure_remarks"),
                                    }).bindProperty("bindingValue", {
                                        path: "remarks",
                                        type: new sap.extension.data.Alphanumeric(),
                                    }),
                                ],
                                type: sap.m.ListType.Active
                            }),
                        },
                        selectionChange(oEvent: sap.ui.base.Event): void {
                            let oItem: any = oEvent.getParameter("listItem");
                            that.fireViewEvents(that.viewDataEvent, oItem.getBindingContext().getObject());
                        },
                        nextDataSet(event: sap.ui.base.Event): void {
                            // 查询下一个数据集
                            let data: any = event.getParameter("data");
                            if (ibas.objects.isNull(data)) {
                                return;
                            }
                            if (ibas.objects.isNull(that.lastCriteria)) {
                                return;
                            }
                            let criteria: ibas.ICriteria = that.lastCriteria.next(data);
                            if (ibas.objects.isNull(criteria)) {
                                return;
                            }
                            ibas.logger.log(ibas.emMessageLevel.DEBUG, "result: {0}", criteria.toString());
                            that.fireViewEvents(that.fetchDataEvent, criteria);
                        }
                    });
                    this.budgetPage = new sap.extension.m.Page("", {
                        showHeader: false,
                        subHeader: new sap.m.Toolbar("", {
                            content: [
                                new sap.m.Button("", {
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://navigation-right-arrow",
                                    press: function (this: sap.m.Button): void {
                                        if (this.getIcon() === "sap-icon://navigation-right-arrow") {
                                            that.nodeList.expandToLevel(99);
                                            this.setIcon("sap-icon://navigation-down-arrow");
                                        } else {
                                            that.nodeList.collapseAll();
                                            this.setIcon("sap-icon://navigation-right-arrow");
                                        }
                                    }
                                }),
                                new sap.m.Label("", {
                                    showColon: true,
                                    text: ibas.i18n.prop("bo_coststructure_name"),
                                }),
                                new sap.extension.m.Input("", {
                                    width: "25rem",
                                }).bindProperty("bindingValue", {
                                    path: "/name",
                                    type: new sap.extension.data.Alphanumeric({
                                        maxLength: 200
                                    }),
                                }),
                                new sap.extension.m.EnumSelect("", {
                                    enumType: bo.emCostStatus,
                                    items: [
                                        new sap.extension.m.SelectItem("", {
                                            key: bo.emCostStatus.OPEN,
                                            text: ibas.enums.describe(bo.emCostStatus, bo.emCostStatus.OPEN),
                                        }),
                                        new sap.extension.m.SelectItem("", {
                                            key: bo.emCostStatus.FROZEN,
                                            text: ibas.enums.describe(bo.emCostStatus, bo.emCostStatus.FROZEN),
                                        }),
                                        new sap.extension.m.SelectItem("", {
                                            enabled: false,
                                            key: bo.emCostStatus.CLOSED,
                                            text: ibas.enums.describe(bo.emCostStatus, bo.emCostStatus.CLOSED),
                                        })
                                    ],
                                    editable: {
                                        path: "/status",
                                        formatter(data: any): boolean {
                                            return data === bo.emCostStatus.CLOSED ? false : true;
                                        }
                                    }
                                }).bindProperty("bindingValue", {
                                    path: "/status",
                                    type: new sap.extension.data.Enum({
                                        enumType: bo.emCostStatus,
                                    }),
                                }),
                                new sap.m.MenuButton("", {
                                    text: ibas.i18n.prop("accounting_edit_more"),
                                    type: sap.m.ButtonType.Transparent,
                                    buttonMode: sap.m.MenuButtonMode.Split,
                                    menuPosition: sap.ui.core.Popup.Dock.EndBottom,
                                    useDefaultActionOnly: true,
                                    menu: new sap.m.Menu("", {
                                        items: [
                                        ],
                                    }),
                                    defaultAction(this: sap.m.MenuButton): void {
                                        that.fireViewEvents(that.editDataEvent, (<any>this.getModel()).getData());
                                    }
                                }),
                                new sap.m.ToolbarSpacer(),
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_data_save"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://save",
                                    press: function (): void {
                                        that.fireViewEvents(that.saveDataEvent);
                                    }
                                }),
                                new sap.m.ToolbarSeparator(),
                                new sap.m.MenuButton("", {
                                    text: ibas.i18n.prop("accounting_add_node"),
                                    type: sap.m.ButtonType.Transparent,
                                    buttonMode: sap.m.MenuButtonMode.Split,
                                    menuPosition: sap.ui.core.Popup.Dock.EndBottom,
                                    useDefaultActionOnly: true,
                                    icon: "sap-icon://add-folder",
                                    menu: new sap.m.Menu("", {
                                        items: [
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("accounting_add_node_by_organization"),
                                                press(): void {
                                                    that.fireViewEvents(that.addCostStructureNodeEvent, undefined, app.emNodeType.ORGANIZATION);
                                                }
                                            }),
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("accounting_copy_other_structure"),
                                                press(): void {
                                                    that.fireViewEvents(that.copyCostStructureNodesEvent);
                                                }
                                            })
                                        ],
                                    }),
                                    enabled: {
                                        path: "/status",
                                        formatter(data: any): boolean {
                                            return data === bo.emCostStatus.CLOSED ? false : true;
                                        }
                                    },
                                    defaultAction(this: sap.m.MenuButton): void {
                                        that.fireViewEvents(that.addCostStructureNodeEvent);
                                    }
                                }),
                            ]
                        }),
                        content: [
                            this.nodeList = new sap.extension.m.Tree("", {
                                items: {
                                    path: "/",
                                    parameters: {
                                        arrayNames: [
                                            "costStructureNodes",
                                        ]
                                    },
                                    templateShareable: false,
                                    template: new sap.m.CustomTreeItem("", {
                                        type: sap.m.ListType.Inactive,
                                        content: [
                                            new sap.m.VBox("", {
                                                width: "100%",
                                                height: "100%",
                                                justifyContent: sap.m.FlexJustifyContent.Start,
                                                renderType: sap.m.FlexRendertype.Bare,
                                                items: [
                                                    new sap.m.HBox("", {
                                                        justifyContent: sap.m.FlexJustifyContent.Start,
                                                        renderType: sap.m.FlexRendertype.Bare,
                                                        items: [
                                                            new sap.m.Toolbar("", {
                                                                width: "100%",
                                                                design: sap.m.ToolbarDesign.Transparent,
                                                                style: sap.m.ToolbarStyle.Clear,
                                                                content: [
                                                                    new sap.ui.core.Icon("", {
                                                                        size: "1.5rem",
                                                                        width: "2rem",
                                                                        src: {
                                                                            path: "status",
                                                                            mode: sap.ui.model.BindingMode.OneWay,
                                                                            formatter(data: bo.emCostStatus): string {
                                                                                if (data === bo.emCostStatus.OPEN) {
                                                                                    return "sap-icon://write-new-document";
                                                                                } else if (data === bo.emCostStatus.FROZEN) {
                                                                                    return "sap-icon://permission";
                                                                                } else if (data === bo.emCostStatus.CLOSED) {
                                                                                    return "sap-icon://complete";
                                                                                }
                                                                                return undefined;
                                                                            }
                                                                        },
                                                                        color: {
                                                                            path: "status",
                                                                            mode: sap.ui.model.BindingMode.OneWay,
                                                                            formatter(data: bo.emCostStatus): string {
                                                                                if (data === bo.emCostStatus.OPEN) {
                                                                                    return sap.ui.core.IconColor.Default;
                                                                                } else if (data === bo.emCostStatus.FROZEN) {
                                                                                    return sap.ui.core.IconColor.Critical;
                                                                                } else if (data === bo.emCostStatus.CLOSED) {
                                                                                    return sap.ui.core.IconColor.Positive;
                                                                                }
                                                                                return undefined;
                                                                            }
                                                                        },
                                                                    }),
                                                                    new sap.m.Title("", {
                                                                        text: {
                                                                            path: "name",
                                                                            type: new sap.extension.data.Alphanumeric()
                                                                        },
                                                                        width: "20%",
                                                                    }),
                                                                    new sap.m.ToolbarSpacer(),
                                                                    new sap.m.GenericTag("", {
                                                                        design: sap.m.GenericTagDesign.StatusIconHidden,
                                                                        text: ibas.i18n.prop("bo_coststructurenode_available"),
                                                                        value: new sap.m.ObjectNumber("", {
                                                                            number: {
                                                                                path: "",
                                                                                formatter(data: any): number {
                                                                                    if (data instanceof bo.CostStructureNode) {
                                                                                        return sap.extension.data.formatValue(sap.extension.data.Sum, data.available(), "string");
                                                                                    }
                                                                                    return NaN;
                                                                                }
                                                                            },
                                                                            unit: {
                                                                                path: "currency",
                                                                                type: new sap.extension.data.Alphanumeric()
                                                                            },
                                                                        }),
                                                                        status: sap.ui.core.ValueState.Success,
                                                                    }),
                                                                    new sap.m.GenericTag("", {
                                                                        design: sap.m.GenericTagDesign.StatusIconHidden,
                                                                        text: ibas.i18n.prop("bo_coststructurenode_locked"),
                                                                        value: new sap.m.ObjectNumber("", {
                                                                            number: {
                                                                                path: "locked",
                                                                                type: new sap.extension.data.Sum()
                                                                            },
                                                                            unit: {
                                                                                path: "currency",
                                                                                type: new sap.extension.data.Alphanumeric()
                                                                            },
                                                                        }),
                                                                        status: sap.ui.core.ValueState.Warning,
                                                                    }),
                                                                    new sap.m.GenericTag("", {
                                                                        design: sap.m.GenericTagDesign.StatusIconHidden,
                                                                        text: ibas.i18n.prop("bo_coststructurenode_incurred"),
                                                                        value: new sap.m.ObjectNumber("", {
                                                                            number: {
                                                                                path: "incurred",
                                                                                type: new sap.extension.data.Sum()
                                                                            },
                                                                            unit: {
                                                                                path: "currency",
                                                                                type: new sap.extension.data.Alphanumeric()
                                                                            },
                                                                        }),
                                                                        status: sap.ui.core.ValueState.Error,
                                                                    }),
                                                                    new sap.m.ToolbarSeparator(),
                                                                    new sap.m.ToolbarSeparator(),
                                                                    new sap.m.Button("", {
                                                                        icon: "sap-icon://add",
                                                                        type: sap.m.ButtonType.Transparent,
                                                                        press(this: sap.m.Button): void {
                                                                            let data: any = this.getBindingContext().getObject();
                                                                            if (data instanceof bo.CostStructureNode) {
                                                                                let parent: any = this.getParent().getParent();
                                                                                if (parent instanceof sap.m.VBox) {
                                                                                    parent.getItems()[1].setVisible(false);
                                                                                    let toolbar: any = this.getParent();
                                                                                    if (toolbar instanceof sap.m.Toolbar) {
                                                                                        let button: any = toolbar.getContent()[toolbar.getContent().length - 1];
                                                                                        if (button instanceof sap.m.Button) {
                                                                                            button.setIcon("sap-icon://expand");
                                                                                        }
                                                                                    }
                                                                                }
                                                                                that.fireViewEvents(that.addCostStructureNodeEvent, data);
                                                                            }
                                                                        },
                                                                    }),
                                                                    new sap.m.Button("", {
                                                                        icon: "sap-icon://less",
                                                                        type: sap.m.ButtonType.Transparent,
                                                                        press(this: sap.m.Button): void {
                                                                            let data: any = this.getBindingContext().getObject();
                                                                            if (data instanceof bo.CostStructureNode) {
                                                                                let parent: any = this.getParent().getParent();
                                                                                if (parent instanceof sap.m.VBox) {
                                                                                    parent.getItems()[1].setVisible(false);
                                                                                    let toolbar: any = this.getParent();
                                                                                    if (toolbar instanceof sap.m.Toolbar) {
                                                                                        let button: any = toolbar.getContent()[toolbar.getContent().length - 1];
                                                                                        if (button instanceof sap.m.Button) {
                                                                                            button.setIcon("sap-icon://expand");
                                                                                        }
                                                                                    }
                                                                                }
                                                                                that.fireViewEvents(that.removeCostStructureNodeEvent, data);
                                                                            }
                                                                        }
                                                                    }),
                                                                    new sap.m.ToolbarSeparator(),
                                                                    new sap.m.Button("", {
                                                                        icon: "sap-icon://expand",
                                                                        type: sap.m.ButtonType.Transparent,
                                                                        press(this: sap.m.Button): void {
                                                                            if (this.getIcon() === "sap-icon://expand") {
                                                                                let parent: any = this.getParent().getParent().getParent();
                                                                                if (parent instanceof sap.m.VBox) {
                                                                                    let box: any = parent.getItems()[1];
                                                                                    if (box instanceof sap.m.HBox) {
                                                                                        let data: any = parent.getBindingContext().getObject();
                                                                                        if (data instanceof bo.CostStructureNode) {
                                                                                            let form: sap.ui.layout.form.SimpleForm = that.nodeForm();
                                                                                            form.setModel(new sap.extension.model.JSONModel(data));
                                                                                            box.addItem(form);
                                                                                            let table: sap.ui.table.Table = that.nodeItemTable();
                                                                                            table.setModel(new sap.extension.model.JSONModel(data.costStructureNodeItems));
                                                                                            box.addItem(new sap.ui.layout.form.SimpleForm("", {
                                                                                                editable: true,
                                                                                                content: [
                                                                                                    table
                                                                                                ]
                                                                                            }));
                                                                                            if (data.status === bo.emCostStatus.CLOSED) {
                                                                                                let footer: any = table.getFooter();
                                                                                                if (footer instanceof sap.m.FlexBox) {
                                                                                                    footer.setVisible(false);
                                                                                                }
                                                                                            }
                                                                                            that.nodes.set(data, box);
                                                                                            this.setIcon("sap-icon://collapse");
                                                                                        }
                                                                                    }
                                                                                }
                                                                            } else {
                                                                                let parent: any = this.getParent().getParent().getParent();
                                                                                if (parent instanceof sap.m.VBox) {
                                                                                    let box: any = parent.getItems()[1];
                                                                                    if (box instanceof sap.m.HBox) {
                                                                                        let data: any = parent.getBindingContext().getObject();
                                                                                        if (data instanceof bo.CostStructureNode) {
                                                                                            that.nodes.delete(data);
                                                                                            box.destroyItems();
                                                                                            this.setIcon("sap-icon://expand");
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        },
                                                                    }),
                                                                ]
                                                            }),
                                                        ]
                                                    }),
                                                    new sap.m.HBox("", {
                                                        justifyContent: sap.m.FlexJustifyContent.Start,
                                                        renderType: sap.m.FlexRendertype.Bare,
                                                        items: [
                                                        ]
                                                    }),
                                                ]
                                            }),
                                        ]
                                    }),
                                },
                            })
                        ],
                        floatingFooter: true,
                        footer: new sap.m.Toolbar("", {
                            content: [
                                new sap.m.Label("", {
                                    showColon: true,
                                    text: ibas.i18n.prop("bo_coststructure_budget")
                                }),
                                new sap.extension.m.Text("", {
                                    text: {
                                        parts: [
                                            {
                                                path: "/budget",
                                                type: new sap.extension.data.Sum()
                                            },
                                            {
                                                path: "/currency",
                                                type: new sap.extension.data.Alphanumeric()
                                            }
                                        ]
                                    }
                                }),
                                new sap.m.ToolbarSpacer(),
                                new sap.m.GenericTag("", {
                                    design: sap.m.GenericTagDesign.StatusIconHidden,
                                    text: ibas.i18n.prop("bo_coststructure_available"),
                                    value: new sap.m.ObjectNumber("", {
                                        number: {
                                            path: "/",
                                            formatter(data: any): number {
                                                if (data instanceof bo.CostStructure) {
                                                    return sap.extension.data.formatValue(sap.extension.data.Sum, data.available(), "string");
                                                }
                                                return NaN;
                                            }
                                        },
                                        unit: {
                                            path: "/currency",
                                            type: new sap.extension.data.Alphanumeric()
                                        },
                                    }),
                                    status: sap.ui.core.ValueState.Success,
                                    press(this: sap.m.GenericTag): void {
                                        that.fireViewEvents(that.viewCostItemsBudgetEvent);
                                    }
                                }),
                                new sap.m.GenericTag("", {
                                    design: sap.m.GenericTagDesign.StatusIconHidden,
                                    text: ibas.i18n.prop("bo_coststructure_locked"),
                                    value: new sap.m.ObjectNumber("", {
                                        number: {
                                            path: "/locked",
                                            type: new sap.extension.data.Sum()
                                        },
                                        unit: {
                                            path: "/currency",
                                            type: new sap.extension.data.Alphanumeric()
                                        },
                                    }),
                                    status: sap.ui.core.ValueState.Warning,
                                    press(this: sap.m.GenericTag): void {
                                        that.fireViewEvents(that.viewCostItemsLockedEvent);
                                    }
                                }),
                                new sap.m.GenericTag("", {
                                    design: sap.m.GenericTagDesign.StatusIconHidden,
                                    text: ibas.i18n.prop("bo_coststructure_incurred"),
                                    value: new sap.m.ObjectNumber("", {
                                        number: {
                                            path: "/incurred",
                                            type: new sap.extension.data.Sum()
                                        },
                                        unit: {
                                            path: "/currency",
                                            type: new sap.extension.data.Alphanumeric()
                                        },
                                    }),
                                    status: sap.ui.core.ValueState.Error,
                                    press(this: sap.m.GenericTag): void {
                                        that.fireViewEvents(that.viewCostItemsIncurredEvent);
                                    }
                                })
                            ]
                        }),
                    });
                    return this.split = new sap.m.SplitContainer("", {
                        masterPages: [
                            new sap.extension.m.Page("", {
                                showHeader: false,
                                floatingFooter: true,
                                footer: new sap.m.Toolbar("", {
                                    content: [
                                        new sap.m.ToolbarSpacer(""),
                                        new sap.m.Button("", {
                                            text: ibas.i18n.prop("shell_data_new"),
                                            type: sap.m.ButtonType.Transparent,
                                            icon: "sap-icon://create",
                                            press: function (): void {
                                                that.fireViewEvents(that.editDataEvent);
                                            }
                                        }),
                                        new sap.m.Button("", {
                                            text: ibas.i18n.prop("shell_data_delete"),
                                            type: sap.m.ButtonType.Transparent,
                                            icon: "sap-icon://delete",
                                            press: function (): void {
                                                that.fireViewEvents(that.deleteDataEvent, that.entityList.getSelecteds());
                                            }
                                        })
                                    ]
                                }),
                                content: [
                                    this.entityList,
                                ]
                            })
                        ],
                        detailPages: [
                            new sap.extension.m.Page("", {
                                showHeader: false,
                                content: [
                                    new sap.m.MessagePage("", {
                                        text: ibas.i18n.prop("accounting_please_selected_structure"),
                                        description: "",
                                        showHeader: false,
                                        showNavButton: false,
                                        textDirection: sap.ui.core.TextDirection.Inherit
                                    })
                                ]
                            }),
                            this.budgetPage
                        ],
                    });
                }
                private nodes: Map<bo.CostStructureNode, sap.m.VBox> = new Map<bo.CostStructureNode, sap.m.VBox>();
                private nodeForm(): sap.ui.layout.form.SimpleForm {
                    let that: this = this;
                    return new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        backgroundDesign: sap.ui.layout.BackgroundDesign.Solid,
                        layout: sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout,
                        labelSpanXL: 4,
                        labelSpanL: 4,
                        labelSpanM: 4,
                        labelSpanS: 4,
                        content: [
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_coststructurenode_name") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "/name",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 100
                                }),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_coststructurenode_status") }),
                            new sap.extension.m.EnumSelect("", {
                                enumType: bo.emCostStatus,
                                items: [
                                    new sap.extension.m.SelectItem("", {
                                        key: bo.emCostStatus.OPEN,
                                        text: ibas.enums.describe(bo.emCostStatus, bo.emCostStatus.OPEN),
                                    }),
                                    new sap.extension.m.SelectItem("", {
                                        key: bo.emCostStatus.FROZEN,
                                        text: ibas.enums.describe(bo.emCostStatus, bo.emCostStatus.FROZEN),
                                    }),
                                    new sap.extension.m.SelectItem("", {
                                        enabled: false,
                                        key: bo.emCostStatus.CLOSED,
                                        text: ibas.enums.describe(bo.emCostStatus, bo.emCostStatus.CLOSED),
                                    })
                                ],
                                editable: {
                                    path: "/status",
                                    formatter(data: any): boolean {
                                        return data === bo.emCostStatus.CLOSED ? false : true;
                                    }
                                }
                            }).bindProperty("bindingValue", {
                                path: "/status",
                                type: new sap.extension.data.Enum({
                                    enumType: bo.emCostStatus
                                }),
                            }),
                            new sap.m.Button("", {
                                icon: "sap-icon://paid-leave",
                                type: sap.m.ButtonType.Negative,
                                text: ibas.enums.describe(bo.emCostStatus, bo.emCostStatus.CLOSED),
                                press(this: sap.m.Button): void {
                                    that.fireViewEvents(that.closeCostStructureNodeEvent, (<any>this.getModel())?.getData());
                                },
                                enabled: {
                                    path: "/status",
                                    formatter(data: any): boolean {
                                        return data === bo.emCostStatus.CLOSED ? false : true;
                                    }
                                }
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_coststructurenode_preventover") }),
                            new sap.extension.m.EnumSelect("", {
                                enumType: ibas.emYesNo
                            }).bindProperty("bindingValue", {
                                path: "/preventOver",
                                type: new sap.extension.data.Enum({
                                    enumType: ibas.emYesNo
                                }),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_coststructurenode_restricteditem") }),
                            new sap.extension.m.EnumSelect("", {
                                enumType: ibas.emYesNo
                            }).bindProperty("bindingValue", {
                                path: "/restrictedItem",
                                type: new sap.extension.data.Enum({
                                    enumType: ibas.emYesNo
                                }),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_coststructurenode_budget") }),
                            new sap.extension.m.Input("", {

                                editable: false,
                            }).bindProperty("bindingValue", {
                                path: "/budget",
                                type: new sap.extension.data.Sum(),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_coststructurenode_locked") }),
                            new sap.extension.m.Input("", {

                                editable: false,
                            }).bindProperty("bindingValue", {
                                path: "/locked",
                                type: new sap.extension.data.Sum(),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_coststructurenode_incurred") }),
                            new sap.extension.m.Input("", {

                                editable: false,
                            }).bindProperty("bindingValue", {
                                path: "/incurred",
                                type: new sap.extension.data.Sum(),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_coststructurenode_teammembers") }),
                            new sap.extension.m.SelectionInput("", {
                                showValueHelp: true,
                                chooseType: ibas.emChooseType.MULTIPLE,
                                repository: initialfantasy.bo.BORepositoryInitialFantasy,
                                dataInfo: {
                                    type: initialfantasy.bo.User,
                                    key: initialfantasy.bo.User.PROPERTY_DOCENTRY_NAME,
                                    text: initialfantasy.bo.User.PROPERTY_NAME_NAME
                                },
                                criteria: [
                                    new ibas.Condition(initialfantasy.bo.User.PROPERTY_ACTIVATED_NAME, ibas.emConditionOperation.EQUAL, ibas.emYesNo.YES)
                                ]
                            }).bindProperty("bindingValue", {
                                path: "/teamMembers",
                                type: new sap.extension.data.Alphanumeric()
                            }),
                        ]
                    });
                }
                private nodeItemTable(): sap.extension.table.Table {
                    let that: this = this;
                    return new sap.extension.table.Table("", {
                        visibleRowCount: 5,
                        rowActionCount: 1,
                        selectionMode: sap.ui.table.SelectionMode.None,
                        rowActionTemplate: [
                            new sap.ui.table.RowAction("", {
                                items: [
                                    new sap.ui.table.RowActionItem("", {
                                        type: sap.ui.table.RowActionType.Delete,
                                        tooltip: ibas.i18n.prop("shell_data_delete"),
                                        press: function (this: sap.ui.table.RowActionItem): void {
                                            let parent: any =
                                                this.getParent().getParent().getParent().getParent().getParent().getParent().getParent().getBindingContext().getObject();
                                            if (parent instanceof bo.CostStructureNode) {
                                                let data: any = this.getBindingContext().getObject();
                                                if (data instanceof bo.CostStructureNodeItem) {
                                                    that.fireViewEvents(that.removeCostStructureNodeItemEvent, parent, data);
                                                }
                                            }
                                        }
                                    }),
                                ]
                            })
                        ],
                        footer: new sap.m.FlexBox("", {
                            justifyContent: sap.m.FlexJustifyContent.Center,
                            renderType: sap.m.FlexRendertype.Bare,
                            items: [
                                new sap.m.Button("", {
                                    width: "100%",
                                    icon: "sap-icon://add",
                                    text: ibas.i18n.prop("shell_data_add"),
                                    type: sap.m.ButtonType.Transparent,
                                    press: function (this: sap.m.Button): void {
                                        let data: any =
                                            this.getParent().getParent().getParent().getParent().getParent().getParent().getParent().getBindingContext().getObject();
                                        if (data instanceof bo.CostStructureNode) {
                                            that.fireViewEvents(that.addCostStructureNodeItemEvent, data);
                                        }
                                    }
                                }),
                            ],
                            visible: {
                                path: "",
                                formatter(data: any): boolean {
                                    return data instanceof bo.CostStructureNode
                                        && data.costStructureNodes.length > 0 ? false : true;
                                }
                            }
                        }),
                        rows: {
                            path: "/",
                            filters: [
                                new sap.ui.model.Filter("isDeleted", sap.ui.model.FilterOperator.NE, true)
                            ]
                        },
                        columns: [
                            new sap.ui.table.Column("", {
                                label: ibas.i18n.prop("bo_coststructurenodeitem_name"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("bindingValue", {
                                    path: "name",
                                    type: new sap.extension.data.Alphanumeric()
                                }),
                                width: "25%",
                            }),
                            new sap.ui.table.Column("", {
                                label: ibas.i18n.prop("bo_coststructurenodeitem_budget"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("bindingValue", {
                                    path: "budget",
                                    type: new sap.extension.data.Sum()
                                }),
                                width: "25%",
                            }),
                            new sap.ui.table.Column("", {
                                label: ibas.i18n.prop("bo_coststructurenodeitem_lock"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("bindingValue", {
                                    path: "locked",
                                    type: new sap.extension.data.Sum(),
                                }),
                                width: "20%",
                            }),
                            new sap.ui.table.Column("", {
                                label: ibas.i18n.prop("bo_coststructurenodeitem_incur"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("bindingValue", {
                                    path: "incurred",
                                    type: new sap.extension.data.Sum(),
                                }),
                                width: "20%",
                            }),
                            new sap.ui.table.Column("", {
                                label: ibas.i18n.prop("bo_coststructurenodeitem_prevent"),
                                template: new sap.extension.m.CheckBox("", {
                                    width: "100%",
                                }).bindProperty("bindingValue", {
                                    path: "preventOver",
                                    type: new sap.extension.data.YesNo(),
                                }),
                                width: "10%",
                            }),
                        ]
                    });
                }
                private split: sap.m.SplitContainer;
                private entityList: sap.extension.m.List;
                private budgetPage: sap.extension.m.Page;
                private nodeList: sap.extension.m.Tree;
                /** 显示数据 */
                showData(datas: bo.CostStructure[]): void {
                    let model: sap.ui.model.Model = this.entityList.getModel();
                    if (model instanceof sap.extension.model.JSONModel) {
                        // 已绑定过数据
                        model.addData(datas);
                    } else {
                        // 未绑定过数据
                        this.entityList.setModel(new sap.extension.model.JSONModel({ rows: datas }));
                    }
                    this.entityList.setBusy(false);
                }
                /** 记录上次查询条件，表格滚动时自动触发 */
                query(criteria: ibas.ICriteria): void {
                    super.query(criteria);
                    // 清除历史数据
                    if (this.isDisplayed) {
                        this.entityList.setBusy(true);
                        this.entityList.setModel(null);
                    }
                }
                /** 嵌入查询面板 */
                embedded(view: any): void {
                    if (view instanceof sap.m.Toolbar) {
                        view.setDesign(sap.m.ToolbarDesign.Transparent);
                        view.setStyle(sap.m.ToolbarStyle.Clear);
                        view.setHeight("100%");
                    }
                    let page: any = this.split.getMasterPages()[0];
                    if (page instanceof sap.m.Page) {
                        page.addHeaderContent(view);
                        page.setShowHeader(true);
                    }
                }
                /** 显示费用结构 */
                showCostStructure(data: bo.CostStructure): void {
                    if (data instanceof bo.CostStructure) {
                        if (this.split.getDetailPages().length > 1) {
                            this.split.removeDetailPage(0);
                        }
                        let toolbar: any = this.budgetPage.getSubHeader();
                        if (toolbar instanceof sap.m.Toolbar) {
                            toolbar.setModel(new sap.extension.model.JSONModel(data));
                        }
                        toolbar = this.budgetPage.getFooter();
                        if (toolbar instanceof sap.m.Toolbar) {
                            toolbar.setModel(new sap.extension.model.JSONModel(data));
                        }
                    } else {
                        if (this.split.getDetailPages().length === 1) {
                            this.split.insertDetailPage(new sap.m.Page("", {
                                showHeader: false,
                                content: [
                                    new sap.m.MessagePage("", {
                                        text: ibas.i18n.prop("accounting_please_selected_structure"),
                                        description: "",
                                        showHeader: false,
                                        showNavButton: false,
                                        textDirection: sap.ui.core.TextDirection.Inherit
                                    })
                                ]
                            }), 0);
                        }
                        let toolbar: any = this.budgetPage.getSubHeader();
                        if (toolbar instanceof sap.m.Toolbar) {
                            toolbar.setModel(null);
                        }
                        toolbar = this.budgetPage.getFooter();
                        if (toolbar instanceof sap.m.Toolbar) {
                            toolbar.setModel(null);
                        }
                    }
                }
                /** 显示费用结构节点 */
                showCostStructureNodes(datas: bo.CostStructureNode[] | bo.CostStructureNode): void {
                    if (datas instanceof Array) {
                        if (this.nodeList.getModel()) {
                            this.nodeList.destroyItems();
                        }
                        this.nodeList.setModel(new sap.extension.model.JSONModel(datas));
                    } else if (datas instanceof bo.CostStructureNode) {
                        let model: any = this.nodeList.getModel();
                        if (model instanceof sap.ui.model.json.JSONModel) {
                            model.refresh(true);
                        }
                    } else {
                        this.nodeList.setModel(null);
                    }
                }
                /** 显示费用结构节点 */
                showCostStructureNodeItems(data: bo.CostStructureNode): void {
                    let box: any = this.nodes.get(data);
                    if (box instanceof sap.m.HBox) {
                        for (let hItem of box.getItems()) {
                            if (hItem instanceof sap.ui.layout.form.SimpleForm && hItem.getContent().length < 2) {
                                let model: any = hItem.getContent()[0]?.getModel();
                                if (model instanceof sap.ui.model.json.JSONModel) {
                                    if (model.getData() === data.costStructureNodeItems) {
                                        model.refresh(true);
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
                showCostItemsBudget(datas: bo.CostStructureNodeItem[]): void {
                    let nodes: ibas.IList<Node> = new ibas.ArrayList<Node>();
                    for (let item of datas) {
                        let node: Node = nodes.firstOrDefault(c => c.code === item.item);
                        if (ibas.objects.isNull(node)) {
                            node = new Node();
                            node.code = item.item;
                            node.amount = 0;
                            node.currency = item.currency;
                            nodes.add(node);
                        }
                        node.amount += item.budget;
                    }
                    let toolbar: any = this.budgetPage.getFooter();
                    if (toolbar instanceof sap.m.Toolbar) {
                        this.showCostItems(nodes, toolbar.getContent()[3]);
                    }
                }
                showCostItemsLocked(datas: bo.CostStructureNodeItem[]): void {
                    let nodes: ibas.IList<Node> = new ibas.ArrayList<Node>();
                    for (let item of datas) {
                        let node: Node = nodes.firstOrDefault(c => c.code === item.item);
                        if (ibas.objects.isNull(node)) {
                            node = new Node();
                            node.code = item.item;
                            node.amount = 0;
                            node.currency = item.currency;
                            nodes.add(node);
                        }
                        node.amount += item.budget;
                    }
                    let toolbar: any = this.budgetPage.getFooter();
                    if (toolbar instanceof sap.m.Toolbar) {
                        this.showCostItems(nodes, toolbar.getContent()[4]);
                    }
                }
                showCostItemsIncurred(datas: bo.CostStructureNodeItem[]): void {
                    let nodes: ibas.IList<Node> = new ibas.ArrayList<Node>();
                    for (let item of datas) {
                        let node: Node = nodes.firstOrDefault(c => c.code === item.item);
                        if (ibas.objects.isNull(node)) {
                            node = new Node();
                            node.code = item.item;
                            node.amount = 0;
                            node.currency = item.currency;
                            nodes.add(node);
                        }
                        node.amount += item.budget;
                    }
                    let toolbar: any = this.budgetPage.getFooter();
                    if (toolbar instanceof sap.m.Toolbar) {
                        this.showCostItems(nodes, toolbar.getContent()[5]);
                    }
                }
                showCostItems(nodes: Node[], pos: any): void {
                    let list: sap.extension.m.List = new sap.extension.m.List("", {
                        mode: sap.m.ListMode.None,
                        items: {
                            path: "/",
                            template: new sap.m.CustomListItem("", {
                                content: [
                                    new sap.m.HBox("", {
                                        height: "100%",
                                        renderType: sap.m.FlexRendertype.Bare,
                                        alignItems: sap.m.FlexAlignItems.Stretch,
                                        justifyContent: sap.m.FlexJustifyContent.SpaceAround,
                                        items: [
                                            new sap.extension.m.RepositoryText("", {
                                                textAlign: sap.ui.core.TextAlign.Left,
                                                repository: accounting.bo.BORepositoryAccounting,
                                                dataInfo: {
                                                    type: accounting.bo.CostItem,
                                                    key: accounting.bo.CostItem.PROPERTY_CODE_NAME,
                                                    text: accounting.bo.CostItem.PROPERTY_NAME_NAME
                                                },
                                            }).bindProperty("bindingValue", {
                                                path: "code",
                                                type: new sap.extension.data.Alphanumeric({
                                                    maxLength: 8
                                                }),
                                            }).addStyleClass("sapUiSmallMarginBegin sapUiSmallMarginTopBottom"),
                                            new sap.extension.m.Text("", {
                                                textAlign: sap.ui.core.TextAlign.Right,
                                            }).bindProperty("bindingValue", {
                                                parts: [
                                                    {
                                                        path: "amount",
                                                        type: new sap.extension.data.Sum(),

                                                    },
                                                    {
                                                        path: "currency",
                                                        type: new sap.extension.data.Alphanumeric(),

                                                    }
                                                ]
                                            }).addStyleClass("sapUiSmallMarginBegin sapUiSmallMarginEnd sapUiSmallMarginTopBottom"),
                                        ]
                                    }),
                                ],
                                type: sap.m.ListType.Inactive,
                            })
                        },
                    });
                    new sap.m.Popover("", {
                        modal: false,
                        showArrow: true,
                        showHeader: false,
                        placement: sap.m.PlacementType.Top,
                        offsetX: -10,
                        offsetY: -12,
                        content: [
                            list.setModel(new sap.extension.model.JSONModel(nodes))
                        ]
                    }).openBy(
                        pos,
                        false
                    );
                }
            }
        }
        class Node {
            code: string;
            amount: number;
            currency: string;
        }
    }
}
