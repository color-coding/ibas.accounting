/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace accounting {
    export namespace app {
        export class CurrencyFunc extends ibas.ModuleFunction {
            /** 功能标识 */
            static FUNCTION_ID = "396a6046-b256-4659-9bc4-37a212a7df5b";
            /** 功能名称 */
            static FUNCTION_NAME = "accounting_func_currency";
            /** 构造函数 */
            constructor() {
                super();
                this.id = CurrencyFunc.FUNCTION_ID;
                this.name = CurrencyFunc.FUNCTION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView> {
                let app: CurrencyListApp = new CurrencyListApp();
                app.navigation = this.navigation;
                return app;
            }
        }
    }
}
