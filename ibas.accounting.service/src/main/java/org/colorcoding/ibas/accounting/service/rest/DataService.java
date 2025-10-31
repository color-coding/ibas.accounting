package org.colorcoding.ibas.accounting.service.rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.colorcoding.ibas.accounting.MyConfiguration;
import org.colorcoding.ibas.accounting.bo.account.Account;
import org.colorcoding.ibas.accounting.bo.bank.Bank;
import org.colorcoding.ibas.accounting.bo.bank.BankAccount;
import org.colorcoding.ibas.accounting.bo.branch.Branch;
import org.colorcoding.ibas.accounting.bo.cashflow.CashFlow;
import org.colorcoding.ibas.accounting.bo.cashflowassignment.CashFlowAssignment;
import org.colorcoding.ibas.accounting.bo.costitem.CostItem;
import org.colorcoding.ibas.accounting.bo.coststructure.CostStructure;
import org.colorcoding.ibas.accounting.bo.currency.Currency;
import org.colorcoding.ibas.accounting.bo.currency.CurrencyRate;
import org.colorcoding.ibas.accounting.bo.dimension.Dimension;
import org.colorcoding.ibas.accounting.bo.journalentry.JournalEntry;
import org.colorcoding.ibas.accounting.bo.ledgeraccount.LedgerAccount;
import org.colorcoding.ibas.accounting.bo.ledgeraccount.LedgerConditionProperty;
import org.colorcoding.ibas.accounting.bo.ledgeraccount.PeriodLedgerAccount;
import org.colorcoding.ibas.accounting.bo.postingperiod.PeriodCategory;
import org.colorcoding.ibas.accounting.bo.postingperiod.PostingPeriod;
import org.colorcoding.ibas.accounting.bo.project.Project;
import org.colorcoding.ibas.accounting.bo.taxgroup.TaxGroup;
import org.colorcoding.ibas.accounting.data.DataConvert;
import org.colorcoding.ibas.accounting.data.emCostStatus;
import org.colorcoding.ibas.accounting.repository.BORepositoryAccounting;
import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.OperationResult;
import org.colorcoding.ibas.bobas.common.Strings;

/**
 * Accounting 数据服务JSON
 */
@Path("data")
public class DataService extends BORepositoryAccounting {
	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-期间类型
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchPeriodCategory")
	public OperationResult<PeriodCategory> fetchPeriodCategory(Criteria criteria,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.fetchPeriodCategory(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-期间类型
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("savePeriodCategory")
	public OperationResult<PeriodCategory> savePeriodCategory(PeriodCategory bo,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.savePeriodCategory(bo, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-过账期间
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchPostingPeriod")
	public OperationResult<PostingPeriod> fetchPostingPeriod(Criteria criteria,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.fetchPostingPeriod(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-过账期间
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("savePostingPeriod")
	public OperationResult<PostingPeriod> savePostingPeriod(PostingPeriod bo,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.savePostingPeriod(bo, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-项目
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchProject")
	public OperationResult<Project> fetchProject(Criteria criteria, @HeaderParam("authorization") String authorization,
			@QueryParam("token") String token) {
		return super.fetchProject(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-项目
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("saveProject")
	public OperationResult<Project> saveProject(Project bo, @HeaderParam("authorization") String authorization,
			@QueryParam("token") String token) {
		return super.saveProject(bo, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-维度
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchDimension")
	public OperationResult<Dimension> fetchDimension(Criteria criteria,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.fetchDimension(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-维度
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("saveDimension")
	public OperationResult<Dimension> saveDimension(Dimension bo, @HeaderParam("authorization") String authorization,
			@QueryParam("token") String token) {
		return super.saveDimension(bo, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-税收组
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchTaxGroup")
	public OperationResult<TaxGroup> fetchTaxGroup(Criteria criteria,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.fetchTaxGroup(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-税收组
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("saveTaxGroup")
	public OperationResult<TaxGroup> saveTaxGroup(TaxGroup bo, @HeaderParam("authorization") String authorization,
			@QueryParam("token") String token) {
		return super.saveTaxGroup(bo, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-费用结构
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchCostStructure")
	public OperationResult<CostStructure> fetchCostStructure(Criteria criteria,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.fetchCostStructure(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-费用结构
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("saveCostStructure")
	public OperationResult<CostStructure> saveCostStructure(CostStructure bo,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.saveCostStructure(bo, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 结算-费用结构
	 * 
	 * @param structure 费用结构
	 * @param node      费用节点
	 * @param action    操作
	 * @param token     口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("closeCostStructure")
	public OperationResult<CostStructure> closeCostStructure(@QueryParam("structure") String structure,
			@QueryParam("node") String node, @QueryParam("action") String action,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.closeCostStructure(Strings.isNullOrEmpty(structure) ? -1 : Integer.valueOf(structure),
				Strings.isNullOrEmpty(node) ? -1 : Integer.valueOf(node),
				Strings.isNullOrEmpty(action) ? emCostStatus.CLOSED : DataConvert.convert(emCostStatus.class, action),
				MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-费用项目
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchCostItem")
	public OperationResult<CostItem> fetchCostItem(Criteria criteria,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.fetchCostItem(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-费用项目
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("saveCostItem")
	public OperationResult<CostItem> saveCostItem(CostItem bo, @HeaderParam("authorization") String authorization,
			@QueryParam("token") String token) {
		return super.saveCostItem(bo, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-货币
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchCurrency")
	public OperationResult<Currency> fetchCurrency(Criteria criteria,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.fetchCurrency(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-货币
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("saveCurrency")
	public OperationResult<Currency> saveCurrency(Currency bo, @HeaderParam("authorization") String authorization,
			@QueryParam("token") String token) {
		return super.saveCurrency(bo, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-科目
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchAccount")
	public OperationResult<Account> fetchAccount(Criteria criteria, @HeaderParam("authorization") String authorization,
			@QueryParam("token") String token) {
		return super.fetchAccount(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-科目
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("saveAccount")
	public OperationResult<Account> saveAccount(Account bo, @HeaderParam("authorization") String authorization,
			@QueryParam("token") String token) {
		return super.saveAccount(bo, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-分支
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchBranch")
	public OperationResult<Branch> fetchBranch(Criteria criteria, @HeaderParam("authorization") String authorization,
			@QueryParam("token") String token) {
		return super.fetchBranch(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-分支
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("saveBranch")
	public OperationResult<Branch> saveBranch(Branch bo, @HeaderParam("authorization") String authorization,
			@QueryParam("token") String token) {
		return super.saveBranch(bo, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-日记账分录
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchJournalEntry")
	public OperationResult<JournalEntry> fetchJournalEntry(Criteria criteria,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.fetchJournalEntry(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-日记账分录
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("saveJournalEntry")
	public OperationResult<JournalEntry> saveJournalEntry(JournalEntry bo,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.saveJournalEntry(bo, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-分类账
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchLedgerAccount")
	public OperationResult<LedgerAccount> fetchLedgerAccount(Criteria criteria,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.fetchLedgerAccount(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 查询-期间-分类账
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchPeriodLedgerAccount")
	public OperationResult<PeriodLedgerAccount> fetchPeriodLedgerAccount(Criteria criteria,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.fetchPeriodLedgerAccount(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-期间-分类账
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("savePeriodLedgerAccount")
	public OperationResult<PeriodLedgerAccount> savePeriodLedgerAccount(PeriodLedgerAccount bo,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.savePeriodLedgerAccount(bo, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-分类账条件属性
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchLedgerConditionProperty")
	public OperationResult<LedgerConditionProperty> fetchLedgerConditionProperty(Criteria criteria,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.fetchLedgerConditionProperty(criteria, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-银行
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchBank")
	public OperationResult<Bank> fetchBank(Criteria criteria, @HeaderParam("authorization") String authorization,
			@QueryParam("token") String token) {
		return super.fetchBank(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-银行
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("saveBank")
	public OperationResult<Bank> saveBank(Bank bo, @HeaderParam("authorization") String authorization,
			@QueryParam("token") String token) {
		return super.saveBank(bo, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-银行账户
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchBankAccount")
	public OperationResult<BankAccount> fetchBankAccount(Criteria criteria,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.fetchBankAccount(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-银行账户
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("saveBankAccount")
	public OperationResult<BankAccount> saveBankAccount(BankAccount bo,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.saveBankAccount(bo, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-货币汇率
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchCurrencyRate")
	public OperationResult<CurrencyRate> fetchCurrencyRate(Criteria criteria,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.fetchCurrencyRate(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-货币汇率
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("saveCurrencyRate")
	public OperationResult<CurrencyRate> saveCurrencyRate(CurrencyRate bo,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.saveCurrencyRate(bo, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-现金流项目
	 * @param criteria 查询
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchCashFlow")
	public OperationResult<CashFlow> fetchCashFlow(Criteria criteria,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.fetchCashFlow(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-现金流项目
	 * @param bo 对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("saveCashFlow")
	public OperationResult<CashFlow> saveCashFlow(CashFlow bo, @HeaderParam("authorization") String authorization,
			@QueryParam("token") String token) {
		return super.saveCashFlow(bo, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-现金流分配
	 * @param criteria 查询
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchCashFlowAssignment")
	public OperationResult<CashFlowAssignment> fetchCashFlowAssignment(Criteria criteria,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.fetchCashFlowAssignment(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-现金流分配
	 * @param bo 对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("saveCashFlowAssignment")
	public OperationResult<CashFlowAssignment> saveCashFlowAssignment(CashFlowAssignment bo,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.saveCashFlowAssignment(bo, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//

}
