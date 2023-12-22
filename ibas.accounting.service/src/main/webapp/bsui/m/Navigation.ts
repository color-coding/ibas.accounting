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
/// <reference path="./currency/index.ts" />
/// <reference path="./costitem/index.ts" />
/// <reference path="./account/index.ts" />
/// <reference path="./branch/index.ts" />
/// <reference path="./journalentry/index.ts" />
/// <reference path="./bank/index.ts" />
/// <reference path="./bankaccount/index.ts" />
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
                    case app.ProjectListApp.APPLICATION_ID:
                        view = new m.ProjectListView();
                        break;
                    case app.ProjectChooseApp.APPLICATION_ID:
                        view = new m.ProjectChooseView();
                        break;
                    case app.ProjectEditApp.APPLICATION_ID:
                        view = new m.ProjectEditView();
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
                    case app.CurrencyChooseApp.APPLICATION_ID:
                        view = new m.CurrencyChooseView();
                        break;
                    case app.BranchSettingApp.APPLICATION_ID:
                        view = new m.BranchSettingView();
                        break;
                    case app.BankChooseApp.APPLICATION_ID:
                        view = new m.BankChooseView();
                        break;
                    case app.BankAccountChooseApp.APPLICATION_ID:
                        view = new m.BankAccountChooseView();
                        break;
                    default:
                        break;
                }
                return view;
            }
        }
    }
}
