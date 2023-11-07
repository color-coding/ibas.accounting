/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace accounting {
    export namespace app {
        export class LedgerAccountDeterminationFunc extends ibas.ModuleFunction {
            /** 功能标识 */
            static FUNCTION_ID = "47b9d0e9-577d-4d4f-8dcd-b39459f1affe";
            /** 功能名称 */
            static FUNCTION_NAME = "accounting_func_ledgeraccountdetermination";
            /** 构造函数 */
            constructor() {
                super();
                this.id = LedgerAccountDeterminationFunc.FUNCTION_ID;
                this.name = LedgerAccountDeterminationFunc.FUNCTION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView> {
                let app: LedgerAccountDeterminationApp = new LedgerAccountDeterminationApp();
                app.navigation = this.navigation;
                return app;
            }
        }
    }
}
