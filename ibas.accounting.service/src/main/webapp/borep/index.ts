/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../api/index.ts" />
/// <reference path="./bo/PeriodCategory.ts" />
/// <reference path="./bo/PostingPeriod.ts" />
/// <reference path="./bo/Project.ts" />
/// <reference path="./bo/Dimension.ts" />
/// <reference path="./bo/TaxGroup.ts" />
/// <reference path="./bo/CostItem.ts" />
/// <reference path="./bo/CostStructure.ts" />
/// <reference path="./bo/Currency.ts" />
/// <reference path="./bo/Account.ts" />
/// <reference path="./bo/Branch.ts" />
/// <reference path="./bo/JournalEntry.ts" />
/// <reference path="./bo/PeriodLedgerAccount.ts" />
/// <reference path="./bo/LedgerAccount.ts" />
/// <reference path="./bo/LedgerConditionProperty.ts" />
/// <reference path="./bo/Bank.ts" />
/// <reference path="./bo/BankAccount.ts" />
/// <reference path="./bo/CurrencyRate.ts" />
/// <reference path="./bo/CashFlow.ts" />
/// <reference path="./bo/CashFlowAssignment.ts" />
/// <reference path="./DataConverter.ts" />
/// <reference path="./BORepository.ts" />
namespace accounting {
    export namespace bo {
        // 注册业务对象仓库到工厂
        boFactory.register(BO_REPOSITORY_ACCOUNTING, BORepositoryAccounting);
        // 注册业务对象到工厂
        boFactory.register(PeriodCategory.BUSINESS_OBJECT_CODE, PeriodCategory);
        boFactory.register(PostingPeriod.BUSINESS_OBJECT_CODE, PostingPeriod);
        boFactory.register(Project.BUSINESS_OBJECT_CODE, Project);
        boFactory.register(Dimension.BUSINESS_OBJECT_CODE, Dimension);
        boFactory.register(TaxGroup.BUSINESS_OBJECT_CODE, TaxGroup);
        boFactory.register(CostItem.BUSINESS_OBJECT_CODE, CostItem);
        boFactory.register(CostStructure.BUSINESS_OBJECT_CODE, CostStructure);
        boFactory.register(bo.BO_CODE_COSTSTRUCTURE_NODE, CostStructure);
        boFactory.register(Currency.BUSINESS_OBJECT_CODE, Currency);
        boFactory.register(Branch.BUSINESS_OBJECT_CODE, Branch);
        boFactory.register(JournalEntry.BUSINESS_OBJECT_CODE, JournalEntry);
        boFactory.register(LedgerAccount.BUSINESS_OBJECT_CODE, LedgerAccount);
        boFactory.register(PeriodLedgerAccount.BUSINESS_OBJECT_CODE, PeriodLedgerAccount);
        boFactory.register(Account.BUSINESS_OBJECT_CODE, Account);
        boFactory.register(LedgerConditionProperty.BUSINESS_OBJECT_CODE, LedgerConditionProperty);
        boFactory.register(Bank.BUSINESS_OBJECT_CODE, Bank);
        boFactory.register(BankAccount.BUSINESS_OBJECT_CODE, BankAccount);
        boFactory.register(CurrencyRate.BUSINESS_OBJECT_CODE, CurrencyRate);
        boFactory.register(CashFlow.BUSINESS_OBJECT_CODE, CashFlow);
        boFactory.register(CashFlowAssignment.BUSINESS_OBJECT_CODE, CashFlowAssignment);

    }
}
