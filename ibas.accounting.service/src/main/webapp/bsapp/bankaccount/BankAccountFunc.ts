/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace accounting {
    export namespace app {
        export class BankAccountFunc extends ibas.ModuleFunction {
            /** 功能标识 */
            static FUNCTION_ID = "ecd5ae97-5efd-41ea-9ba0-cc9ffb3f7742";
            /** 功能名称 */
            static FUNCTION_NAME = "accounting_func_bankaccount";
            /** 构造函数 */
            constructor() {
                super();
                this.id = BankAccountFunc.FUNCTION_ID;
                this.name = BankAccountFunc.FUNCTION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView> {
                let app: BankAccountListApp = new BankAccountListApp();
                app.navigation = this.navigation;
                return app;
            }
        }
    }
}
