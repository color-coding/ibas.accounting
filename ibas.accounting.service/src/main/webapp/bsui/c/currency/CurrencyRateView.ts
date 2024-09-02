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
            /** 编辑视图-货币汇率 */
            export class CurrencyRateView extends ibas.ResidentView implements app.ICurrencyRateView {
                /** 选择年月份事件 */
                selectYearMonthEvent: Function;
                /** 保存事件 */
                saveDataEvent: Function;

                /** 绘制工具条视图 */
                drawBar(): any {
                    let that: this = this;
                    return new sap.m.Button("", {
                        tooltip: this.title,
                        icon: "sap-icon://collections-insight",
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
                    this.table = new sap.extension.table.Table("", {
                        visibleRowCount: sap.extension.table.visibleRowCount(15),
                        rows: "{/}",
                        columns: [
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_currencyrate_date"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("bindingValue", {
                                    path: "date",
                                    type: new sap.extension.data.Date(),
                                }),
                                width: "8rem",
                            })
                        ],
                        rowSettingsTemplate: new sap.ui.table.RowSettings("", {
                        }).bindProperty("highlight", {
                            path: "date",
                            formatter(value: any): string {
                                if (ibas.dates.equals(ibas.dates.today(), value)) {
                                    return sap.ui.core.MessageType.Success;
                                } else {
                                    return sap.ui.core.MessageType.None;
                                }
                            }
                        }),
                    });
                    return this.dialog = new sap.m.Dialog("", {
                        title: this.title,
                        type: sap.m.DialogType.Standard,
                        state: sap.ui.core.ValueState.None,
                        horizontalScrolling: true,
                        verticalScrolling: true,
                        content: [
                            new sap.m.VBox("", {
                                items: [
                                    this.currencyToolbar = new sap.m.Toolbar("", {
                                        visible: false,
                                        content: [
                                        ]
                                    }),
                                    this.table
                                ],
                            }),
                        ],
                        buttons: [
                            new sap.m.Button("", {
                                type: sap.m.ButtonType.Transparent,
                                text: ibas.i18n.prop("accounting_export"),
                                icon: "sap-icon://action",
                                press: function (): void {
                                    let datas: any = that.table.getModel().getData();
                                    if (datas instanceof Array) {
                                        let table: ibas.DataTable;
                                        let column: ibas.DataTableColumn;
                                        for (let data of datas) {
                                            if (data instanceof app.CurrencyRateDay) {
                                                if (ibas.objects.isNull(table)) {
                                                    table = new ibas.DataTable();
                                                    table.name = "currency_rates";
                                                    table.description = ibas.i18n.prop("bo_currencyrate");
                                                    column = new ibas.DataTableColumn();
                                                    column.name = "date";
                                                    column.description = ibas.i18n.prop("bo_currencyrate_date");
                                                    table.columns.add(column);
                                                    for (let property in data) {
                                                        if (property) {
                                                            column = new ibas.DataTableColumn();
                                                            column.name = property;
                                                            if (column.name === "date") {
                                                                column.description = ibas.i18n.prop("bo_currencyrate_date");
                                                            }
                                                            table.columns.add(column);
                                                        }
                                                    }
                                                }
                                                let row: ibas.DataTableRow = new ibas.DataTableRow();
                                                for (let col of table.columns) {
                                                    if (col.name === "date") {
                                                        row.cells.add(ibas.dates.toString(data.date, "yyyy-MM-dd"));
                                                    } else {
                                                        row.cells.add(data[col.name]?.rate);
                                                    }
                                                }
                                                table.rows.add(row);
                                            }
                                        }
                                        ibas.servicesManager.runApplicationService({
                                            proxy: new importexport.app.DataTableServiceProxy({
                                                data: table
                                            }),
                                        });
                                    }
                                }
                            }),
                            new sap.m.Button("", {
                                type: sap.m.ButtonType.Transparent,
                                text: ibas.i18n.prop("accounting_import"),
                                icon: "sap-icon://cause",
                                press: function (event: sap.ui.base.Event): void {
                                    ibas.servicesManager.runApplicationService<any, ibas.DataTable>({
                                        proxy: new importexport.app.FileParsingServiceProxy({
                                            outType: "table"
                                        }),
                                        onCompleted(result: any): void {
                                            try {
                                                let datas: any = that.table.getModel().getData();
                                                if (datas instanceof Array && result instanceof ibas.DataTable) {
                                                    let dateCol: number = -1;
                                                    for (let data of datas) {
                                                        if (!(dateCol >= 0)) {
                                                            dateCol = result.columns.findIndex(c => c.name === ibas.i18n.prop("bo_currencyrate_date"));
                                                        }
                                                        if (!(dateCol >= 0)) {
                                                            throw new Error(ibas.i18n.prop("sys_unrecognized_data"));
                                                        }
                                                        for (let row of result.rows) {
                                                            if (ibas.dates.equals(ibas.dates.valueOf(row.cells[dateCol]), data.date)) {
                                                                for (let property in data) {
                                                                    if (property) {
                                                                        for (let i: number = 0; i < result.columns.length; i++) {
                                                                            let col: ibas.DataTableColumn = result.columns[i];
                                                                            if (col.name === property) {
                                                                                let value: number = ibas.numbers.valueOf(row.cells[i]);
                                                                                if (value > 0) {
                                                                                    data[property].rate = value;
                                                                                    break;
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                                break;
                                                            }
                                                        }
                                                    }
                                                    that.table.getModel().refresh(false);
                                                }
                                            } catch (error) {
                                                that.application.viewShower.messages({
                                                    title: that.application.description,
                                                    message: error.message,
                                                    type: ibas.emMessageType.ERROR
                                                });
                                            }
                                        }
                                    });
                                }
                            }),
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
                    }).addStyleClass("sapUiNoContentPadding");
                }

                private dialog: sap.m.Dialog;
                private table: sap.extension.table.Table;
                private currencyToolbar: sap.m.Toolbar;
                private yearSelect: sap.m.Select;
                private monthSelect: sap.m.Select;
                private localCurrency: bo.Currency;

                showLocalCurrency(data: bo.Currency): void {
                    if (data instanceof bo.Currency) {
                        this.currencyToolbar.setVisible(true);
                        this.currencyToolbar.addContent(new sap.m.Label("", {
                            text: ibas.i18n.prop("bo_currency_local"),
                            showColon: true,
                        }).addStyleClass("sapUiTinyMarginBegin"));
                        this.currencyToolbar.addContent(new sap.m.Text("", {
                            text: ibas.strings.format("{0} {1}", data.code, data.name),
                        }).addStyleClass("sapUiSmallMarginEnd"));
                    }
                    this.localCurrency = data;
                }
                showSystemCurrency(data: bo.Currency): void {
                    if (data instanceof bo.Currency) {
                        this.currencyToolbar.setVisible(true);
                        this.currencyToolbar.addContent(new sap.m.Label("", {
                            text: ibas.i18n.prop("bo_currency_system"),
                            showColon: true,
                        }).addStyleClass("sapUiTinyMarginBegin"));
                        this.currencyToolbar.addContent(new sap.m.Text("", {
                            text: ibas.strings.format("{0} {1}", data.code, data.name),
                        }).addStyleClass("sapUiSmallMarginEnd"));
                    }
                }
                showCurrencies(datas: bo.Currency[]): void {
                    this.currencyToolbar.addContent(new sap.m.ToolbarSpacer());
                    let that: this = this;
                    this.monthSelect = new sap.extension.m.Select("", {
                        change(): void {
                            that.fireViewEvents(that.selectYearMonthEvent, that.yearSelect.getSelectedKey(), that.monthSelect.getSelectedKey());
                        }
                    });
                    let count: number = 0;
                    for (let item of ibas.i18n.prop("accounting_year_months").split(",")) {
                        this.monthSelect.addItem(new sap.extension.m.SelectItem("", {
                            key: String(count),
                            text: item
                        }));
                        count++;
                    }
                    this.currencyToolbar.addContent(this.monthSelect);
                    this.monthSelect.setSelectedKey(String(ibas.dates.today().getMonth()));
                    this.yearSelect = new sap.extension.m.Select("", {
                        change(): void {
                            that.fireViewEvents(that.selectYearMonthEvent, that.yearSelect.getSelectedKey(), that.monthSelect.getSelectedKey());
                        }
                    }).addStyleClass("sapUiTinyMarginEnd");
                    count = 5;
                    let year: number = ibas.dates.today().getFullYear();
                    for (let i: number = 0; i < count; i++) {
                        this.yearSelect.addItem(new sap.extension.m.SelectItem("", {
                            key: String(year + i - count),
                            text: String(year + i - count),
                        }));
                    }
                    for (let i: number = 0; i < count; i++) {
                        this.yearSelect.addItem(new sap.extension.m.SelectItem("", {
                            key: year + i,
                            text: year + i,
                        }));
                    }
                    this.currencyToolbar.addContent(this.yearSelect);
                    this.yearSelect.setSelectedKey(year.toString());
                    for (let data of datas) {
                        this.table.addColumn(new sap.extension.table.DataColumn("", {
                            label: data.code,
                            tooltip: ibas.strings.format("{0} - {1}", data.code, data.name),
                            template: new sap.extension.m.Input("", {
                                textAlign: sap.ui.core.TextAlign.Right,
                                tooltip: {
                                    path: "",
                                    formatter(this: sap.m.Input, data: any): string {
                                        if (ibas.objects.isNull(data)) {
                                            return undefined;
                                        }
                                        let paths: string[] = this.getBindingPath("bindingValue")?.split("/");
                                        if (paths.length === 2) {
                                            return ibas.strings.format("{0}/{1} = {2}",
                                                paths[0],
                                                that.localCurrency?.code,
                                                data[paths[0]][paths[1]]);
                                        }
                                        return undefined;
                                    },
                                }
                            }).bindProperty("bindingValue", {
                                path: ibas.strings.format("{0}/rate", data.code),
                                type: new sap.extension.data.Rate(),
                            }),
                            width: "8rem",
                        }));
                    }
                    this.fireViewEvents(this.selectYearMonthEvent, this.yearSelect.getSelectedKey(), this.monthSelect.getSelectedKey());
                }
                showCurrencyRates(datas: app.CurrencyRateDay[]): void {
                    this.table.setModel(new sap.extension.model.JSONModel(datas));
                    let today: Date = ibas.dates.today();
                    for (let i: number = 0; i < datas.length; i++) {
                        if (ibas.dates.equals(datas[i].date, today)) {
                            setTimeout(() => {
                                this.table.setFirstVisibleRow(i);
                            }, 100);
                            break;
                        }
                    }
                }
            }
        }
    }
}
