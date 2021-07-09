/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace accounting {
    export namespace app {
        export class CostStructureFunc extends ibas.ModuleFunction {
            /** 功能标识 */
            static FUNCTION_ID = "9c4ed7a5-13ed-43ef-b422-27620370aac2";
            /** 功能名称 */
            static FUNCTION_NAME = "accounting_func_coststructure";
            /** 构造函数 */
            constructor() {
                super();
                this.id = CostStructureFunc.FUNCTION_ID;
                this.name = CostStructureFunc.FUNCTION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView> {
                let app: CostStructureListApp = new CostStructureListApp();
                app.navigation = this.navigation;
                return app;
            }
        }
    }
}
