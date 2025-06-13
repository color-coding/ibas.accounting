/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace accounting {
    export namespace app {
        export class CashFlowFunc extends ibas.ModuleFunction {
            /** 功能标识 */
            static FUNCTION_ID = "e76da836-8a13-442c-a650-a6f4c37a7a17";
            /** 功能名称 */
            static FUNCTION_NAME = "accounting_func_cashflow";
            /** 构造函数 */
            constructor() {
                super();
                this.id = CashFlowFunc.FUNCTION_ID;
                this.name = CashFlowFunc.FUNCTION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView> {
                let app: CashFlowListApp = new CashFlowListApp();
                app.navigation = this.navigation;
                return app;
            }
        }
    }
}
