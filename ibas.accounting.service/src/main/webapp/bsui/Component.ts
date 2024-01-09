/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace accounting {
    export namespace ui {
        export namespace component {
            /** 补充币种控件方法 */
            sap.extension.m.CurrencyRateSelect.prototype.loadCurrencyRate = function (this: sap.extension.m.CurrencyRateSelect, done: (result: number) => void): void {
                let criteria: ibas.Criteria = new ibas.Criteria();
                let condition: ibas.ICondition = criteria.conditions.create();
                condition.alias = accounting.bo.CurrencyRate.PROPERTY_CURRENCY_NAME;
                condition.value = this.getCurrency();
                condition = criteria.conditions.create();
                condition.alias = accounting.bo.CurrencyRate.PROPERTY_DATE_NAME;
                condition.value = ibas.dates.toString(this.getDate(), "yyyy-MM-dd");
                let boRepository: accounting.bo.BORepositoryAccounting = new accounting.bo.BORepositoryAccounting();
                boRepository.fetchCurrencyRate({
                    criteria: criteria,
                    onCompleted: (opRslt) => {
                        for (let item of opRslt.resultObjects) {
                            done(item.rate);
                        }
                    }
                });
            };
        }
    }
}