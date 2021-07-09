/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace accounting {
    export namespace app {
        export class CostItemFunc extends ibas.ModuleFunction {
            /** 功能标识 */
            static FUNCTION_ID = "7cac8c08-2405-42a1-a0ce-657aa0ebc58a";
            /** 功能名称 */
            static FUNCTION_NAME = "accounting_func_costitem";
            /** 构造函数 */
            constructor() {
                super();
                this.id = CostItemFunc.FUNCTION_ID;
                this.name = CostItemFunc.FUNCTION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView> {
                let app: CostItemListApp = new CostItemListApp();
                app.navigation = this.navigation;
                return app;
            }
        }
    }
}
