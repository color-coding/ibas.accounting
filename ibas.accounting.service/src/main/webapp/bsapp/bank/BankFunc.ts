/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace accounting {
    export namespace app {
        export class BankFunc extends ibas.ModuleFunction {
            /** 功能标识 */
            static FUNCTION_ID = "3e0b5f3b-5284-4f66-8c06-8ba0dfad6499";
            /** 功能名称 */
            static FUNCTION_NAME = "accounting_func_bank";
            /** 构造函数 */
            constructor() {
                super();
                this.id = BankFunc.FUNCTION_ID;
                this.name = BankFunc.FUNCTION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView> {
                let app: BankListApp = new BankListApp();
                app.navigation = this.navigation;
                return app;
            }
        }
    }
}
