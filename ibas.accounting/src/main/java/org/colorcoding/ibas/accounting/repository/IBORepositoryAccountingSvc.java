package org.colorcoding.ibas.accounting.repository;

import org.colorcoding.ibas.accounting.bo.account.Account;
import org.colorcoding.ibas.accounting.bo.bank.Bank;
import org.colorcoding.ibas.accounting.bo.bank.BankAccount;
import org.colorcoding.ibas.accounting.bo.branch.Branch;
import org.colorcoding.ibas.accounting.bo.costiemjournal.CostItemJournal;
import org.colorcoding.ibas.accounting.bo.costitem.CostItem;
import org.colorcoding.ibas.accounting.bo.coststructure.CostStructure;
import org.colorcoding.ibas.accounting.bo.currency.Currency;
import org.colorcoding.ibas.accounting.bo.dimension.Dimension;
import org.colorcoding.ibas.accounting.bo.journalentry.JournalEntry;
import org.colorcoding.ibas.accounting.bo.ledgeraccount.LedgerAccount;
import org.colorcoding.ibas.accounting.bo.ledgeraccount.LedgerConditionProperty;
import org.colorcoding.ibas.accounting.bo.ledgeraccount.PeriodLedgerAccount;
import org.colorcoding.ibas.accounting.bo.postingperiod.PeriodCategory;
import org.colorcoding.ibas.accounting.bo.postingperiod.PostingPeriod;
import org.colorcoding.ibas.accounting.bo.project.Project;
import org.colorcoding.ibas.accounting.bo.taxgroup.TaxGroup;
import org.colorcoding.ibas.accounting.data.emCostStatus;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.OperationResult;
import org.colorcoding.ibas.bobas.repository.IBORepositorySmartService;

/**
 * Accounting仓库服务
 */
public interface IBORepositoryAccountingSvc extends IBORepositorySmartService {
	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-期间类型
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	OperationResult<PeriodCategory> fetchPeriodCategory(ICriteria criteria, String token);

	/**
	 * 保存-期间类型
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	OperationResult<PeriodCategory> savePeriodCategory(PeriodCategory bo, String token);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-过账期间
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	OperationResult<PostingPeriod> fetchPostingPeriod(ICriteria criteria, String token);

	/**
	 * 保存-过账期间
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	OperationResult<PostingPeriod> savePostingPeriod(PostingPeriod bo, String token);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-项目
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	OperationResult<Project> fetchProject(ICriteria criteria, String token);

	/**
	 * 保存-项目
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	OperationResult<Project> saveProject(Project bo, String token);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-维度
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	OperationResult<Dimension> fetchDimension(ICriteria criteria, String token);

	/**
	 * 保存-维度
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	OperationResult<Dimension> saveDimension(Dimension bo, String token);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-税收组
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	OperationResult<TaxGroup> fetchTaxGroup(ICriteria criteria, String token);

	/**
	 * 保存-税收组
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	OperationResult<TaxGroup> saveTaxGroup(TaxGroup bo, String token);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-费用结构
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	OperationResult<CostStructure> fetchCostStructure(ICriteria criteria, String token);

	/**
	 * 保存-费用结构
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	OperationResult<CostStructure> saveCostStructure(CostStructure bo, String token);

	/**
	 * 结算-费用结构
	 * 
	 * @param structure 费用结构
	 * @param node      费用节点
	 * @param action    操作
	 * @param token     口令
	 * @return 操作结果
	 */
	OperationResult<CostStructure> closeCostStructure(Integer structure, Integer node, emCostStatus action,
			String token);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-费用项目
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	OperationResult<CostItem> fetchCostItem(ICriteria criteria, String token);

	/**
	 * 保存-费用项目
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	OperationResult<CostItem> saveCostItem(CostItem bo, String token);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-费用项目-日记账
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	OperationResult<CostItemJournal> fetchCostItemJournal(ICriteria criteria, String token);

	/**
	 * 保存-费用项目-日记账
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	OperationResult<CostItemJournal> saveCostItemJournal(CostItemJournal bo, String token);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-货币
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	OperationResult<Currency> fetchCurrency(ICriteria criteria, String token);

	/**
	 * 保存-货币
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	OperationResult<Currency> saveCurrency(Currency bo, String token);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-科目
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	OperationResult<Account> fetchAccount(ICriteria criteria, String token);

	/**
	 * 保存-科目
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	OperationResult<Account> saveAccount(Account bo, String token);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-分支
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	OperationResult<Branch> fetchBranch(ICriteria criteria, String token);

	/**
	 * 保存-分支
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	OperationResult<Branch> saveBranch(Branch bo, String token);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-日记账分录
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	OperationResult<JournalEntry> fetchJournalEntry(ICriteria criteria, String token);

	/**
	 * 保存-日记账分录
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	OperationResult<JournalEntry> saveJournalEntry(JournalEntry bo, String token);

	// --------------------------------------------------------------------------------------------//

	/**
	 * 查询-分类账
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	OperationResult<LedgerAccount> fetchLedgerAccount(ICriteria criteria, String token);

	/**
	 * 保存-分类账
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	OperationResult<LedgerAccount> saveLedgerAccount(LedgerAccount bo, String token);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-期间-分类账
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	OperationResult<PeriodLedgerAccount> fetchPeriodLedgerAccount(ICriteria criteria, String token);

	/**
	 * 保存-期间-分类账
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	OperationResult<PeriodLedgerAccount> savePeriodLedgerAccount(PeriodLedgerAccount bo, String token);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-分类账条件属性
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	OperationResult<LedgerConditionProperty> fetchLedgerConditionProperty(ICriteria criteria, String token);

	/**
	 * 保存-分类账条件属性
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	OperationResult<LedgerConditionProperty> saveLedgerConditionProperty(LedgerConditionProperty bo, String token);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-银行
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	OperationResult<Bank> fetchBank(ICriteria criteria, String token);

	/**
	 * 保存-银行
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	OperationResult<Bank> saveBank(Bank bo, String token);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-银行账户
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	OperationResult<BankAccount> fetchBankAccount(ICriteria criteria, String token);

	/**
	 * 保存-银行账户
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	OperationResult<BankAccount> saveBankAccount(BankAccount bo, String token);
	// --------------------------------------------------------------------------------------------//

}
