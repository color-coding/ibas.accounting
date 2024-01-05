/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace accounting {
    export namespace app {
        const PROPERTY_DATE: symbol = Symbol("date");
        export class CurrencyRateDay extends ibas.Bindable {
            constructor(date: Date) {
                super();
                this.date = date;
            }
            get date(): Date {
                return this[PROPERTY_DATE];
            }
            set date(value: Date) {
                this[PROPERTY_DATE] = value;
                this.firePropertyChanged("date");
            }
            addRate(data: bo.CurrencyRate): void {
                this[data.currency] = data;
            }
        }
        /** 编辑应用-货币汇率 */
        export class CurrencyRateApp extends ibas.ResidentApplication<ICurrencyRateView> {
            /** 应用标识 */
            static APPLICATION_ID: string = "1cb703a8-773b-4419-9ad6-8c625ace6ae6";
            /** 应用名称 */
            static APPLICATION_NAME: string = "accounting_app_currencyrate_edit";
            /** 构造函数 */
            constructor() {
                super();
                this.id = CurrencyRateApp.APPLICATION_ID;
                this.name = CurrencyRateApp.APPLICATION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
                this.view.selectYearMonthEvent = this.selectYearMonth;
                this.view.saveDataEvent = this.saveData;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成
                let criteria: ibas.ICriteria = new ibas.Criteria();
                let condition: ibas.ICondition = criteria.conditions.create();
                condition.alias = bo.Currency.PROPERTY_ACTIVATED_NAME;
                condition.value = ibas.emYesNo.YES.toString();
                let boRepository: bo.BORepositoryAccounting = new bo.BORepositoryAccounting();
                boRepository.fetchCurrency({
                    criteria: criteria,
                    onCompleted: (opRslt) => {
                        try {
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            let sysCurrency: string = config.get(config.CONFIG_ITEM_SYSTEM_CURRENCY);
                            let locCurrency: string = config.get(config.CONFIG_ITEM_LOCAL_CURRENCY);
                            for (let item of opRslt.resultObjects) {
                                if (sysCurrency && sysCurrency === item.code) {
                                    this.localCurrency = item;
                                }
                                if (locCurrency && locCurrency === item.code) {
                                    this.systemCurrency = item;
                                }
                            }
                            this.view.showLocalCurrency(this.systemCurrency);
                            this.view.showSystemCurrency(this.localCurrency);
                            this.currencies = opRslt.resultObjects.where(c => c.code !== this.localCurrency?.code);
                            this.view.showCurrencies(this.currencies);
                        } catch (error) {
                            this.messages(error);
                        }
                    }
                });
            }
            private localCurrency: bo.Currency;
            private systemCurrency: bo.Currency;
            private currencies: bo.Currency[];
            private currencyRates: CurrencyRateDay[];
            /** 保存数据 */
            protected saveData(): void {
                this.busy(true);
                let currencyRates: ibas.IList<bo.CurrencyRate> = new ibas.ArrayList<bo.CurrencyRate>();
                for (let data of this.currencyRates) {
                    for (let item in data) {
                        if (!item) {
                            continue;
                        }
                        let value: any = data[item];
                        if (value instanceof bo.CurrencyRate) {
                            if (!value.isDirty || !(value.rate > 0)) {
                                continue;
                            }
                            currencyRates.add(value);
                        }
                    }
                }
                let boRepository: bo.BORepositoryAccounting = new bo.BORepositoryAccounting();
                ibas.queues.execute(currencyRates,
                    (data, next) => {
                        boRepository.saveCurrencyRate({
                            beSaved: data,
                            onCompleted: (opRslt) => {
                                if (opRslt.resultCode !== 0) {
                                    next(new Error(opRslt.message));
                                } else {
                                    data.markOld();
                                    next();
                                }
                            }
                        });
                    },
                    (error) => {
                        this.busy(false);
                        if (error instanceof Error) {
                            this.messages(error);
                        } else {
                            this.messages(ibas.emMessageType.SUCCESS,
                                ibas.i18n.prop("shell_data_save") + ibas.i18n.prop("shell_sucessful"));
                        }
                    }
                );
                this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_saving_data"));
            }
            private selectYearMonth(year: number, month: number): void {
                if (ibas.strings.isEmpty(year) || ibas.strings.isEmpty(month)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("bo_currencyrate_date")
                    )); return;
                }
                year = ibas.numbers.valueOf(year);
                month = ibas.numbers.valueOf(month) + 1;
                let startDate: Date = ibas.dates.valueOf(ibas.strings.format("{0}-{1}-01", year,
                    ibas.strings.fill(month, 2, "0")));
                if (month === 12) {
                    month = 1;
                    year += 1;
                } else {
                    month += 1;
                }
                let endDate: Date = ibas.dates.valueOf(ibas.strings.format("{0}-{1}-01", year,
                    ibas.strings.fill(month, 2, "0")));
                endDate = ibas.dates.subtract(ibas.dates.emDifferenceType.DAY, endDate, 1);
                let criteria: ibas.ICriteria = new ibas.Criteria();
                let condition: ibas.ICondition = criteria.conditions.create();
                condition.alias = bo.CurrencyRate.PROPERTY_DATE_NAME;
                condition.operation = ibas.emConditionOperation.GRATER_EQUAL;
                condition.value = ibas.dates.toString(startDate, "yyyy-MM-dd");
                condition = criteria.conditions.create();
                condition.alias = bo.CurrencyRate.PROPERTY_DATE_NAME;
                condition.operation = ibas.emConditionOperation.LESS_EQUAL;
                condition.value = ibas.dates.toString(endDate, "yyyy-MM-dd");
                let boRepository: bo.BORepositoryAccounting = new bo.BORepositoryAccounting();
                boRepository.fetchCurrencyRate({
                    criteria: criteria,
                    onCompleted: (opRslt) => {
                        try {
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            this.currencyRates = new ibas.ArrayList<CurrencyRateDay>();
                            let currencyRate: bo.CurrencyRate;
                            for (let i: number = 0; i <= ibas.dates.difference(ibas.dates.emDifferenceType.DAY, endDate, startDate); i++) {
                                let dayRate: CurrencyRateDay = new CurrencyRateDay(
                                    ibas.dates.valueOf(ibas.strings.format("{0}-{1}-{2}",
                                        startDate.getFullYear(),
                                        ibas.strings.fill(startDate.getMonth() + 1, 2, "0"),
                                        ibas.strings.fill(i + 1, 2, "0")
                                    )));
                                for (let currency of this.currencies) {
                                    currencyRate = opRslt.resultObjects.firstOrDefault(c =>
                                        ibas.dates.compare(c.date, dayRate.date) === 0 && c.currency === currency.code);
                                    if (ibas.objects.isNull(currencyRate)) {
                                        currencyRate = new bo.CurrencyRate();
                                        currencyRate.currency = currency.code;
                                        currencyRate.date = dayRate.date;
                                    }
                                    dayRate.addRate(currencyRate);
                                }
                                this.currencyRates.push(dayRate);
                            }
                            this.view.showCurrencyRates(this.currencyRates);
                        } catch (error) {
                            this.messages(error);
                        }
                    }
                });

            }
        }
        /** 视图-货币汇率 */
        export interface ICurrencyRateView extends ibas.IResidentView {
            /** 显示本币 */
            showLocalCurrency(data: bo.Currency): void;
            /** 显示系统币 */
            showSystemCurrency(data: bo.Currency): void;
            /** 显示货币 */
            showCurrencies(datas: bo.Currency[]): void;
            /** 显示数据 */
            showCurrencyRates(datas: CurrencyRateDay[]): void;
            /** 选择年月份事件 */
            selectYearMonthEvent: Function;
            /** 保存事件 */
            saveDataEvent: Function;
        }
        export class CurrencyRateApplicationMapping extends ibas.ResidentApplicationMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = CurrencyRateApp.APPLICATION_ID;
                this.name = CurrencyRateApp.APPLICATION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            create(): ibas.ResidentApplication<ibas.IResidentView> {
                return new CurrencyRateApp();
            }
        }
    }
}
