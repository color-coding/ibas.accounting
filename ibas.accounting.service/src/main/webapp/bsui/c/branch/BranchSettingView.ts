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
            /** 选择视图-分支 */
            export class BranchSettingView extends ibas.ResidentView implements app.IBranchSettingView {
                // 设置
                setEvent: Function;

                drawBar(): any {
                    let that: this = this;
                    return new sap.m.Button("", {
                        tooltip: this.title,
                        icon: "sap-icon://tree",
                        type: sap.m.ButtonType.Transparent,
                        press: function (): void {
                            if (!that.isDisplayed) {
                                that.fireViewEvents(that.showFullViewEvent);
                            }
                        }
                    });
                }

                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    this.table = new sap.extension.m.List("", {
                        chooseType: ibas.emChooseType.SINGLE,
                        mode: sap.m.ListMode.SingleSelectLeft,
                        items: {
                            path: "/rows",
                            template: new sap.m.StandardListItem("", {
                                title: {
                                    path: "code",
                                    type: new sap.extension.data.Alphanumeric(),
                                },
                                description: {
                                    path: "name",
                                    type: new sap.extension.data.Alphanumeric(),
                                },
                            }),
                        },
                    });
                    return new sap.m.Dialog("", {
                        title: this.title,
                        type: sap.m.DialogType.Standard,
                        state: sap.ui.core.ValueState.None,
                        stretch: ibas.config.get(ibas.CONFIG_ITEM_PLANTFORM) === ibas.emPlantform.PHONE ? true : false,
                        content: [
                            this.table
                        ],
                        buttons: [
                            new sap.m.Button("", {
                                text: ibas.i18n.prop("shell_data_choose"),
                                type: sap.m.ButtonType.Transparent,
                                press(): void {
                                    that.fireViewEvents(that.setEvent, that.table.getSelecteds().firstOrDefault());
                                }
                            }),
                            new sap.m.Button("", {
                                text: ibas.i18n.prop("shell_exit"),
                                type: sap.m.ButtonType.Transparent,
                                press(): void {
                                    that.fireViewEvents(that.closeEvent);
                                }
                            }),
                        ],
                    }).addStyleClass("sapUiNoContentPadding");
                }
                private table: sap.extension.m.List;
                /** 显示数据 */
                showBranchs(datas: bo.Branch[]): void {
                    this.table.setModel(new sap.extension.model.JSONModel({ rows: datas }));
                    let branch: string = ibas.variablesManager.getValue(ibas.VARIABLE_NAME_USER_BRANCH);
                    if (!ibas.strings.isEmpty(branch)) {
                        for (let item of this.table.getItems()) {
                            let data: any = item.getBindingContext().getObject();
                            if (data instanceof bo.Branch) {
                                if (data.code === branch) {
                                    this.table.setSelectedItem(item);
                                    break;
                                }
                            }
                        }
                    } else {
                        if (this.table.getItems().length > 0) {
                            this.table.setSelectedItem(this.table.getItems()[0]);
                        }
                    }
                }
            }
        }
    }
}
