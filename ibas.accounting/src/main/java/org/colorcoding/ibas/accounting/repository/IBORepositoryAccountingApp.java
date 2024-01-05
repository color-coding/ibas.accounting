package org.colorcoding.ibas.accounting.repository;

import org.colorcoding.ibas.accounting.bo.account.IAccount;
import org.colorcoding.ibas.accounting.bo.bank.IBank;
import org.colorcoding.ibas.accounting.bo.bank.IBankAccount;
import org.colorcoding.ibas.accounting.bo.branch.IBranch;
import org.colorcoding.ibas.accounting.bo.costiemjournal.ICostItemJournal;
import org.colorcoding.ibas.accounting.bo.costitem.ICostItem;
import org.colorcoding.ibas.accounting.bo.coststructure.ICostStructure;
import org.colorcoding.ibas.accounting.bo.currency.ICurrency;
import org.colorcoding.ibas.accounting.bo.currency.ICurrencyRate;
import org.colorcoding.ibas.accounting.bo.dimension.IDimension;
import org.colorcoding.ibas.accounting.bo.journalentry.IJournalEntry;
import org.colorcoding.ibas.accounting.bo.ledgeraccount.ILedgerAccount;
import org.colorcoding.ibas.accounting.bo.ledgeraccount.ILedgerConditionProperty;
import org.colorcoding.ibas.accounting.bo.ledgeraccount.IPeriodLedgerAccount;
import org.colorcoding.ibas.accounting.bo.postingperiod.IPeriodCategory;
import org.colorcoding.ibas.accounting.bo.postingperiod.IPostingPeriod;
import org.colorcoding.ibas.accounting.bo.project.IProject;
import org.colorcoding.ibas.accounting.bo.taxgroup.ITaxGroup;
import org.colorcoding.ibas.accounting.data.emCostStatus;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.repository.IBORepositoryApplication;

/**
 * Accounting仓库应用
 */
public interface IBORepositoryAccountingApp extends IBORepositoryApplication {
	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-期间类型
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	IOperationResult<IPeriodCategory> fetchPeriodCategory(ICriteria criteria);

	/**
	 * 保存-期间类型
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	IOperationResult<IPeriodCategory> savePeriodCategory(IPeriodCategory bo);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-过账期间
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	IOperationResult<IPostingPeriod> fetchPostingPeriod(ICriteria criteria);

	/**
	 * 保存-过账期间
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	IOperationResult<IPostingPeriod> savePostingPeriod(IPostingPeriod bo);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-项目
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	IOperationResult<IProject> fetchProject(ICriteria criteria);

	/**
	 * 保存-项目
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	IOperationResult<IProject> saveProject(IProject bo);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-维度
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	IOperationResult<IDimension> fetchDimension(ICriteria criteria);

	/**
	 * 保存-维度
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	IOperationResult<IDimension> saveDimension(IDimension bo);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-税收组
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	IOperationResult<ITaxGroup> fetchTaxGroup(ICriteria criteria);

	/**
	 * 保存-税收组
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	IOperationResult<ITaxGroup> saveTaxGroup(ITaxGroup bo);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-费用结构
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	IOperationResult<ICostStructure> fetchCostStructure(ICriteria criteria);

	/**
	 * 保存-费用结构
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	IOperationResult<ICostStructure> saveCostStructure(ICostStructure bo);

	/**
	 * 结算-费用结构
	 * 
	 * @param structure 费用结构
	 * @param node      费用节点
	 * @param action    操作
	 * @return 操作结果
	 */
	IOperationResult<ICostStructure> closeCostStructure(Integer structure, Integer node, emCostStatus action);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-费用项目
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	IOperationResult<ICostItem> fetchCostItem(ICriteria criteria);

	/**
	 * 保存-费用项目
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	IOperationResult<ICostItem> saveCostItem(ICostItem bo);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-费用项目-日记账
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	IOperationResult<ICostItemJournal> fetchCostItemJournal(ICriteria criteria);

	/**
	 * 保存-费用项目-日记账
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	IOperationResult<ICostItemJournal> saveCostItemJournal(ICostItemJournal bo);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-货币
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	IOperationResult<ICurrency> fetchCurrency(ICriteria criteria);

	/**
	 * 保存-货币
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	IOperationResult<ICurrency> saveCurrency(ICurrency bo);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-科目
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	IOperationResult<IAccount> fetchAccount(ICriteria criteria);

	/**
	 * 保存-科目
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	IOperationResult<IAccount> saveAccount(IAccount bo);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-分支
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	IOperationResult<IBranch> fetchBranch(ICriteria criteria);

	/**
	 * 保存-分支
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	IOperationResult<IBranch> saveBranch(IBranch bo);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-日记账分录
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	IOperationResult<IJournalEntry> fetchJournalEntry(ICriteria criteria);

	/**
	 * 保存-日记账分录
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	IOperationResult<IJournalEntry> saveJournalEntry(IJournalEntry bo);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-分类账
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	IOperationResult<ILedgerAccount> fetchLedgerAccount(ICriteria criteria);

	/**
	 * 保存-分类账
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	IOperationResult<ILedgerAccount> saveLedgerAccount(ILedgerAccount bo);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-期间-分类账
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	IOperationResult<IPeriodLedgerAccount> fetchPeriodLedgerAccount(ICriteria criteria);

	/**
	 * 保存-期间-分类账
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	IOperationResult<IPeriodLedgerAccount> savePeriodLedgerAccount(IPeriodLedgerAccount bo);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-分类账条件属性
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	IOperationResult<ILedgerConditionProperty> fetchLedgerConditionProperty(ICriteria criteria);

	/**
	 * 保存-分类账条件属性
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	IOperationResult<ILedgerConditionProperty> saveLedgerConditionProperty(ILedgerConditionProperty bo);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-银行
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	IOperationResult<IBank> fetchBank(ICriteria criteria);

	/**
	 * 保存-银行
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	IOperationResult<IBank> saveBank(IBank bo);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-银行账户
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	IOperationResult<IBankAccount> fetchBankAccount(ICriteria criteria);

	/**
	 * 保存-银行账户
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	IOperationResult<IBankAccount> saveBankAccount(IBankAccount bo);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-货币汇率
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	IOperationResult<ICurrencyRate> fetchCurrencyRate(ICriteria criteria);

	/**
	 * 保存-货币汇率
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	IOperationResult<ICurrencyRate> saveCurrencyRate(ICurrencyRate bo);

	// --------------------------------------------------------------------------------------------//

}
