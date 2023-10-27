/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace accounting {
    export namespace app {
        export class AccountFunc extends ibas.ModuleFunction {
            /** 功能标识 */
            static FUNCTION_ID = "f24caa87-7e0d-471f-840c-385fe79b9376";
            /** 功能名称 */
            static FUNCTION_NAME = "accounting_func_account";
            /** 构造函数 */
            constructor() {
                super();
                this.id = AccountFunc.FUNCTION_ID;
                this.name = AccountFunc.FUNCTION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView> {
                let app: AccountTreeApp = new AccountTreeApp();
                app.navigation = this.navigation;
                return app;
            }
        }
    }
}
