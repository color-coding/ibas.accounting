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
            /** 编辑视图-费用结构 */
            export class CostStructureEditView extends ibas.DialogView implements app.ICostStructureEditView {
                saveDataEvent: Function;
                /** 删除数据事件 */
                deleteDataEvent: Function;
                /** 新建数据事件，参数1：是否克隆 */
                createDataEvent: Function;
                /** 选择主体 */
                chooseEntityEvent: Function;

                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    this.formTop = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_coststructure_entitycode") }),
                            new sap.extension.m.Input("", {
                                showValueHelp: true,
                                valueHelpRequest: function (): void {
                                    that.fireViewEvents(that.chooseEntityEvent);
                                }
                            }).bindProperty("bindingValue", {
                                path: "entityCode",
                                type: new sap.extension.data.Alphanumeric(),
                            }),
                            new sap.extension.m.EnumSelect("", {
                                enumType: bo.emEntityType
                            }).bindProperty("bindingValue", {
                                path: "entityType",
                                type: new sap.extension.data.Enum({
                                    enumType: bo.emEntityType
                                }),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_coststructure_name") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "name",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 100
                                }),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_coststructure_status") }),
                            new sap.extension.m.EnumSelect("", {
                                enumType: bo.emCostStatus
                            }).bindProperty("bindingValue", {
                                path: "status",
                                type: new sap.extension.data.Enum({
                                    enumType: bo.emCostStatus
                                }),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_coststructure_canceled") }),
                            new sap.extension.m.EnumSelect("", {
                                enumType: ibas.emYesNo
                            }).bindProperty("bindingValue", {
                                path: "canceled",
                                type: new sap.extension.data.YesNo(),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_coststructure_startdate") }),
                            new sap.extension.m.DatePicker("", {
                            }).bindProperty("bindingValue", {
                                path: "startDate",
                                type: new sap.extension.data.Date(),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_coststructure_enddate") }),
                            new sap.extension.m.DatePicker("", {
                            }).bindProperty("bindingValue", {
                                path: "endDate",
                                type: new sap.extension.data.Date(),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_coststructure_dataowner") }),
                            new sap.extension.m.DataOwnerInput("", {
                                showValueHelp: true,
                            }).bindProperty("bindingValue", {
                                path: "dataOwner",
                                type: new sap.extension.data.Numeric()
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_coststructure_organization") }),
                            new sap.extension.m.DataOrganizationInput("", {
                                showValueHelp: true,
                            }).bindProperty("bindingValue", {
                                path: "organization",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 8
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_coststructure_remarks") }),
                            new sap.extension.m.TextArea("", {
                                rows: 3,
                            }).bindProperty("bindingValue", {
                                path: "remarks",
                                type: new sap.extension.data.Alphanumeric(),
                            }),
                        ]
                    });
                    return new sap.m.Dialog("", {
                        title: this.title,
                        contentWidth: "60%",
                        //  contentHeight: "60%",
                        type: sap.m.DialogType.Standard,
                        stretch: ibas.config.get(ibas.CONFIG_ITEM_PLANTFORM) === ibas.emPlantform.PHONE ? true : false,
                        horizontalScrolling: true,
                        verticalScrolling: true,
                        content: [
                            this.formTop
                        ],
                        buttons: [
                            new sap.m.Button("", {
                                text: ibas.i18n.prop("shell_data_save"),
                                type: sap.m.ButtonType.Transparent,
                                press: function (): void {
                                    that.fireViewEvents(that.saveDataEvent);
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
                    });
                }
                private formTop: sap.ui.layout.form.SimpleForm;
                /** 显示数据 */
                showCostStructure(data: bo.CostStructure): void {
                    this.formTop.bindObject("/");
                    this.formTop.setModel(new sap.extension.model.JSONModel(data));
                }
            }
        }
    }
}
