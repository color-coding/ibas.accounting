/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../../index.d.ts" />
/// <reference path="./postingperiod/index.ts" />
/// <reference path="./project/index.ts" />
/// <reference path="./dimension/index.ts" />
/// <reference path="./taxgroup/index.ts" />
/// <reference path="./coststructure/index.ts" />
/// <reference path="./currency/index.ts" />
/// <reference path="./costitem/index.ts" />
/// <reference path="./account/index.ts" />
/// <reference path="./branch/index.ts" />
/// <reference path="./journalentry/index.ts" />
/// <reference path="./ledgeraccount/index.ts" />
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
                    case app.PeriodCategoryListApp.APPLICATION_ID:
                        view = new c.PeriodCategoryListView();
                        break;
                    case app.PostingPeriodChooseApp.APPLICATION_ID:
                        view = new c.PostingPeriodChooseView();
                        break;
                    case app.PeriodCategoryEditApp.APPLICATION_ID:
                        view = new c.PeriodCategoryEditView();
                        break;
                    case app.PeriodCategoryChooseApp.APPLICATION_ID:
                        view = new c.PeriodCategoryChooseView();
                        break;
                    case app.ProjectListApp.APPLICATION_ID:
                        view = new c.ProjectListView();
                        break;
                    case app.ProjectChooseApp.APPLICATION_ID:
                        view = new c.ProjectChooseView();
                        break;
                    case app.ProjectEditApp.APPLICATION_ID:
                        view = new c.ProjectEditView();
                        break;
                    case app.ProjectViewApp.APPLICATION_ID:
                        view = new c.ProjectViewView();
                        break;
                    case app.DimensionListApp.APPLICATION_ID:
                        view = new c.DimensionListView();
                        break;
                    case app.DimensionChooseApp.APPLICATION_ID:
                        view = new c.DimensionChooseView();
                        break;
                    case app.DimensionEditApp.APPLICATION_ID:
                        view = new c.DimensionEditView();
                        break;
                    case app.DimensionDataService.APPLICATION_ID:
                        view = new c.DimensionDataView();
                        break;
                    case app.TaxGroupListApp.APPLICATION_ID:
                        view = new c.TaxGroupListView();
                        break;
                    case app.TaxGroupChooseApp.APPLICATION_ID:
                        view = new c.TaxGroupChooseView();
                        break;
                    case app.TaxGroupEditApp.APPLICATION_ID:
                        view = new c.TaxGroupEditView();
                        break;
                    case app.CostStructureListApp.APPLICATION_ID:
                        view = new c.CostStructureListView();
                        break;
                    case app.CostStructureChooseApp.APPLICATION_ID:
                        view = new c.CostStructureChooseView();
                        break;
                    case app.CostStructureNodeChooseApp.APPLICATION_ID:
                        view = new c.CostStructureNodeChooseView();
                        break;
                    case app.CostItemListApp.APPLICATION_ID:
                        view = new c.CostItemListView();
                        break;
                    case app.CostItemChooseApp.APPLICATION_ID:
                        view = new c.CostItemChooseView();
                        break;
                    case app.CostItemEditApp.APPLICATION_ID:
                        view = new c.CostItemEditView();
                        break;
                    case app.CostStructureEditApp.APPLICATION_ID:
                        view = new c.CostStructureEditView();
                        break;
                    case app.CurrencyListApp.APPLICATION_ID:
                        view = new c.CurrencyListView();
                        break;
                    case app.CurrencyChooseApp.APPLICATION_ID:
                        view = new c.CurrencyChooseView();
                        break;
                    case app.CurrencyEditApp.APPLICATION_ID:
                        view = new c.CurrencyEditView();
                        break;
                    case app.AccountListApp.APPLICATION_ID:
                        view = new c.AccountListView();
                        break;
                    case app.AccountChooseApp.APPLICATION_ID:
                        view = new c.AccountChooseView();
                        break;
                    case app.AccountViewApp.APPLICATION_ID:
                        view = new c.AccountViewView();
                        break;
                    case app.AccountEditApp.APPLICATION_ID:
                        view = new c.AccountEditView();
                        break;
                    case app.AccountTreeApp.APPLICATION_ID:
                        view = new c.AccountTreeView();
                        break;
                    case app.BranchListApp.APPLICATION_ID:
                        view = new c.BranchListView();
                        break;
                    case app.BranchChooseApp.APPLICATION_ID:
                        view = new c.BranchChooseView();
                        break;
                    case app.BranchViewApp.APPLICATION_ID:
                        view = new c.BranchViewView();
                        break;
                    case app.BranchEditApp.APPLICATION_ID:
                        view = new c.BranchEditView();
                        break;
                    case app.BranchSettingApp.APPLICATION_ID:
                        view = new c.BranchSettingView();
                        break;
                    case app.JournalEntryListApp.APPLICATION_ID:
                        view = new c.JournalEntryListView();
                        break;
                    case app.JournalEntryChooseApp.APPLICATION_ID:
                        view = new c.JournalEntryChooseView();
                        break;
                    case app.JournalEntryViewApp.APPLICATION_ID:
                        view = new c.JournalEntryViewView();
                        break;
                    case app.JournalEntryEditApp.APPLICATION_ID:
                        view = new c.JournalEntryEditView();
                        break;
                    case app.LedgerAccountDeterminationApp.APPLICATION_ID:
                        view = new c.LedgerAccountDeterminationView();
                        break;
                    case app.LedgerAccountSettingService.APPLICATION_ID:
                        view = new c.LedgerAccountSettingView();
                        break;
                    case app.BankListApp.APPLICATION_ID:
                        view = new c.BankListView();
                        break;
                    case app.BankChooseApp.APPLICATION_ID:
                        view = new c.BankChooseView();
                        break;
                    case app.BankViewApp.APPLICATION_ID:
                        view = new c.BankViewView();
                        break;
                    case app.BankEditApp.APPLICATION_ID:
                        view = new c.BankEditView();
                        break;
                    case app.BankAccountListApp.APPLICATION_ID:
                        view = new c.BankAccountListView();
                        break;
                    case app.BankAccountChooseApp.APPLICATION_ID:
                        view = new c.BankAccountChooseView();
                        break;
                    case app.BankAccountViewApp.APPLICATION_ID:
                        view = new c.BankAccountViewView();
                        break;
                    case app.BankAccountEditApp.APPLICATION_ID:
                        view = new c.BankAccountEditView();
                        break;
                    case app.CurrencyRateApp.APPLICATION_ID:
                        view = new c.CurrencyRateView();
                        break;
                    default:
                        break;
                }
                return view;
            }
        }
    }
}
