/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../../index.d.ts" />
/// <reference path="./project/index.ts" />
/// <reference path="./taxgroup/index.ts" />
/// <reference path="./coststructure/index.ts" />
/// <reference path="./costitem/index.ts" />
namespace accounting {
    export namespace ui {
        /** 视图导航 */
        export class Navigation extends ibas.ViewNavigation {
            /**
             * 创建实例
             * @param id 应用id
             */
            protected newView(id: string): ibas.IView {
                let view: ibas.IView = null;
                switch (id) {
                    case app.ProjectChooseApp.APPLICATION_ID:
                        view = new m.ProjectChooseView();
                        break;
                    case app.ProjectViewApp.APPLICATION_ID:
                        view = new m.ProjectViewView();
                        break;
                    case app.TaxGroupChooseApp.APPLICATION_ID:
                        view = new m.TaxGroupChooseView();
                        break;
                    case app.CostStructureChooseApp.APPLICATION_ID:
                        view = new m.CostStructureChooseView();
                        break;
                    case app.CostStructureNodeChooseApp.APPLICATION_ID:
                        view = new c.CostStructureNodeChooseView();
                        break;
                    case app.CostItemChooseApp.APPLICATION_ID:
                        view = new m.CostItemChooseView();
                        break;
                    default:
                        break;
                }
                return view;
            }
        }
    }
}
