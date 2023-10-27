/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace accounting {
    export namespace app {
        export class JournalEntryFunc extends ibas.ModuleFunction {
            /** 功能标识 */
            static FUNCTION_ID = "927ef219-499f-4e45-af88-8094765f1a17";
            /** 功能名称 */
            static FUNCTION_NAME = "accounting_func_journalentry";
            /** 构造函数 */
            constructor() {
                super();
                this.id = JournalEntryFunc.FUNCTION_ID;
                this.name = JournalEntryFunc.FUNCTION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView> {
                let app: JournalEntryListApp = new JournalEntryListApp();
                app.navigation = this.navigation;
                return app;
            }
        }
    }
}
