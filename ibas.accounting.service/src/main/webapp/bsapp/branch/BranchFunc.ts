/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace accounting {
    export namespace app {
        export class BranchFunc extends ibas.ModuleFunction {
            /** 功能标识 */
            static FUNCTION_ID = "ecb2686a-e8f7-467c-95ab-bfcc123cdfe0";
            /** 功能名称 */
            static FUNCTION_NAME = "accounting_func_branch";
            /** 构造函数 */
            constructor() {
                super();
                this.id = BranchFunc.FUNCTION_ID;
                this.name = BranchFunc.FUNCTION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView> {
                let app: BranchListApp = new BranchListApp();
                app.navigation = this.navigation;
                return app;
            }
        }
    }
}
