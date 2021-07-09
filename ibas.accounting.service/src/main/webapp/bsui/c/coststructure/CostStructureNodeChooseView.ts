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
            /** 选择视图-费用结构节点 */
            export class CostStructureNodeChooseView extends ibas.BOChooseView implements app.ICostStructureNodeChooseView {
                /** 返回查询的对象 */
                get queryTarget(): any {
                    return bo.CostStructure;
                }
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    this.list = new sap.extension.m.List("", {
                        growingThreshold: sap.extension.table.visibleRowCount(15),
                        mode: sap.m.ListMode.None,
                        items: {
                            path: "/rows",
                            templateShareable: false,
                            template: new sap.m.CustomListItem("", {
                                content: [
                                    new sap.extension.m.Tree("", {
                                        showNoData: false,
                                        headerToolbar: new sap.m.Toolbar("", {
                                            content: [
                                                new sap.m.Title("", {
                                                    text: {
                                                        path: "name",
                                                        type: new sap.extension.data.Alphanumeric()
                                                    },
                                                })
                                            ]
                                        }),
                                        items: {
                                            path: "costStructureNodes",
                                            parameters: {
                                                arrayNames: [
                                                    "costStructureNodes",
                                                ],
                                                numberOfExpandedLevels: 9,
                                            },
                                            filters: [
                                                new sap.ui.model.Filter("status", sap.ui.model.FilterOperator.EQ, bo.emCostStatus.OPEN)
                                            ],
                                            templateShareable: false,
                                            template: new sap.m.CustomTreeItem("", {
                                                type: sap.m.ListType.Active,
                                                content: [
                                                    new sap.m.HBox("", {
                                                        width: "100%",
                                                        height: "100%",
                                                        alignContent: sap.m.FlexAlignContent.Start,
                                                        alignItems: sap.m.FlexAlignItems.Center,
                                                        justifyContent: sap.m.FlexJustifyContent.Start,
                                                        renderType: sap.m.FlexRendertype.Bare,
                                                        items: [
                                                            new sap.m.CheckBox("", {
                                                                visible: {
                                                                    path: "costStructureNodes/length",
                                                                    formatter(data: number): boolean {
                                                                        if (data > 0) {
                                                                            return false;
                                                                        }
                                                                        return true;
                                                                    }
                                                                },
                                                                selected: {
                                                                    path: "preventOver",
                                                                    type: new sap.extension.data.YesNo()
                                                                },
                                                            }),
                                                            new sap.m.Text("", {
                                                                text: {
                                                                    path: "name",
                                                                    type: new sap.extension.data.Alphanumeric()
                                                                },
                                                            })
                                                        ]
                                                    })
                                                ],
                                                press(event: sap.ui.base.Event): void {
                                                    let listItem: any = event.getSource();
                                                    if (listItem instanceof sap.m.CustomTreeItem) {
                                                        let hbox: any = listItem.getContent()[0];
                                                        if (hbox instanceof sap.m.HBox) {
                                                            let check: any = hbox.getItems()[0];
                                                            if (check instanceof sap.m.CheckBox) {
                                                                check.setSelected(!check.getSelected());
                                                                if (check.getSelected() && that.chooseType === ibas.emChooseType.SINGLE) {
                                                                    for (let lsItem of that.list.getItems()) {
                                                                        if (lsItem instanceof sap.m.CustomListItem) {
                                                                            let tree: any = lsItem.getContent()[0];
                                                                            if (tree instanceof sap.m.Tree) {
                                                                                for (let tsItem of tree.getItems()) {
                                                                                    if (tsItem instanceof sap.m.CustomTreeItem) {
                                                                                        let tsBox: any = tsItem.getContent()[0];
                                                                                        if (tsBox instanceof sap.m.HBox) {
                                                                                            let tsCheck: any = tsBox.getItems()[0];
                                                                                            if (tsCheck instanceof sap.m.CheckBox) {
                                                                                                if (tsCheck.getSelected() && check !== tsCheck) {
                                                                                                    tsCheck.setSelected(false);
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }),
                                        }
                                    })
                                ],
                            })
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
                    return new sap.m.Dialog("", {
                        title: this.title,
                        type: sap.m.DialogType.Standard,
                        state: sap.ui.core.ValueState.None,
                        contentWidth: "40%",
                        contentHeight: "50%",
                        horizontalScrolling: true,
                        verticalScrolling: true,
                        stretch: ibas.config.get(ibas.CONFIG_ITEM_PLANTFORM) === ibas.emPlantform.PHONE ? true : false,
                        content: [
                            this.list
                        ],
                        buttons: [
                            new sap.m.Button("", {
                                text: ibas.i18n.prop("shell_data_choose"),
                                type: sap.m.ButtonType.Transparent,
                                press: function (): void {
                                    let selecteds: ibas.IList<bo.CostStructureNode> = new ibas.ArrayList<bo.CostStructureNode>();
                                    for (let lsItem of that.list.getItems()) {
                                        if (lsItem instanceof sap.m.CustomListItem) {
                                            let tree: any = lsItem.getContent()[0];
                                            if (tree instanceof sap.m.Tree) {
                                                for (let tsItem of tree.getItems()) {
                                                    if (tsItem instanceof sap.m.CustomTreeItem) {
                                                        let tsBox: any = tsItem.getContent()[0];
                                                        if (tsBox instanceof sap.m.HBox) {
                                                            let tsCheck: any = tsBox.getItems()[0];
                                                            if (tsCheck instanceof sap.m.CheckBox) {
                                                                if (tsCheck.getSelected()) {
                                                                    selecteds.add(tsCheck.getBindingContext().getObject());
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    if (selecteds.length > 0) {
                                        if (that.chooseType === ibas.emChooseType.SINGLE) {
                                            that.fireViewEvents(that.chooseDataEvent, selecteds.firstOrDefault());
                                        } else {
                                            that.fireViewEvents(that.chooseDataEvent, selecteds);
                                        }
                                    }
                                }
                            }),
                            new sap.m.Button("", {
                                text: ibas.i18n.prop("shell_exit"),
                                type: sap.m.ButtonType.Transparent,
                                press: function (): void {
                                    that.fireViewEvents(that.closeEvent);
                                }
                            }),
                        ]
                    }).addStyleClass("sapUiNoContentPadding");
                }
                private list: sap.extension.m.List;
                /** 显示数据 */
                showData(datas: bo.CostStructure[]): void {
                    let model: sap.ui.model.Model = this.list.getModel();
                    if (model instanceof sap.extension.model.JSONModel) {
                        // 已绑定过数据
                        model.addData(datas);
                    } else {
                        // 未绑定过数据
                        this.list.setModel(new sap.extension.model.JSONModel({ rows: datas }));
                    }
                    this.list.setBusy(false);
                }
                /** 记录上次查询条件，表格滚动时自动触发 */
                query(criteria: ibas.ICriteria): void {
                    super.query(criteria);
                    // 清除历史数据
                    if (this.isDisplayed) {
                        this.list.setBusy(true);
                        this.list.setModel(null);
                    }
                }
            }
        }
    }
}
