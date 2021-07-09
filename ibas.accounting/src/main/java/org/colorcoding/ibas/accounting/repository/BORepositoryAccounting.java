package org.colorcoding.ibas.accounting.repository;

import org.colorcoding.ibas.accounting.bo.costiemjournal.CostItemJournal;
import org.colorcoding.ibas.accounting.bo.costiemjournal.ICostItemJournal;
import org.colorcoding.ibas.accounting.bo.costitem.CostItem;
import org.colorcoding.ibas.accounting.bo.costitem.ICostItem;
import org.colorcoding.ibas.accounting.bo.coststructure.CostStructure;
import org.colorcoding.ibas.accounting.bo.coststructure.ICostStructure;
import org.colorcoding.ibas.accounting.bo.dimension.Dimension;
import org.colorcoding.ibas.accounting.bo.dimension.IDimension;
import org.colorcoding.ibas.accounting.bo.postingperiod.IPeriodCategory;
import org.colorcoding.ibas.accounting.bo.postingperiod.IPostingPeriod;
import org.colorcoding.ibas.accounting.bo.postingperiod.PeriodCategory;
import org.colorcoding.ibas.accounting.bo.postingperiod.PostingPeriod;
import org.colorcoding.ibas.accounting.bo.project.IProject;
import org.colorcoding.ibas.accounting.bo.project.Project;
import org.colorcoding.ibas.accounting.bo.taxgroup.ITaxGroup;
import org.colorcoding.ibas.accounting.bo.taxgroup.TaxGroup;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.common.OperationResult;
import org.colorcoding.ibas.bobas.repository.BORepositoryServiceApplication;

/**
 * Accounting仓库
 */
public class BORepositoryAccounting extends BORepositoryServiceApplication
		implements IBORepositoryAccountingSvc, IBORepositoryAccountingApp {
	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-期间类型
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<PeriodCategory> fetchPeriodCategory(ICriteria criteria, String token) {
		return super.fetch(criteria, token, PeriodCategory.class);
	}

	/**
	 * 查询-期间类型（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<IPeriodCategory> fetchPeriodCategory(ICriteria criteria) {
		return new OperationResult<IPeriodCategory>(this.fetchPeriodCategory(criteria, this.getUserToken()));
	}

	/**
	 * 保存-期间类型
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<PeriodCategory> savePeriodCategory(PeriodCategory bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-期间类型（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<IPeriodCategory> savePeriodCategory(IPeriodCategory bo) {
		return new OperationResult<IPeriodCategory>(this.savePeriodCategory((PeriodCategory) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-过账期间
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<PostingPeriod> fetchPostingPeriod(ICriteria criteria, String token) {
		return super.fetch(criteria, token, PostingPeriod.class);
	}

	/**
	 * 查询-过账期间（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<IPostingPeriod> fetchPostingPeriod(ICriteria criteria) {
		return new OperationResult<IPostingPeriod>(this.fetchPostingPeriod(criteria, this.getUserToken()));
	}

	/**
	 * 保存-过账期间
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<PostingPeriod> savePostingPeriod(PostingPeriod bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-过账期间（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<IPostingPeriod> savePostingPeriod(IPostingPeriod bo) {
		return new OperationResult<IPostingPeriod>(this.savePostingPeriod((PostingPeriod) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-项目
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<Project> fetchProject(ICriteria criteria, String token) {
		return super.fetch(criteria, token, Project.class);
	}

	/**
	 * 查询-项目（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<IProject> fetchProject(ICriteria criteria) {
		return new OperationResult<IProject>(this.fetchProject(criteria, this.getUserToken()));
	}

	/**
	 * 保存-项目
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<Project> saveProject(Project bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-项目（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<IProject> saveProject(IProject bo) {
		return new OperationResult<IProject>(this.saveProject((Project) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-维度
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<Dimension> fetchDimension(ICriteria criteria, String token) {
		return super.fetch(criteria, token, Dimension.class);
	}

	/**
	 * 查询-维度（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<IDimension> fetchDimension(ICriteria criteria) {
		return new OperationResult<IDimension>(this.fetchDimension(criteria, this.getUserToken()));
	}

	/**
	 * 保存-维度
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<Dimension> saveDimension(Dimension bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-维度（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<IDimension> saveDimension(IDimension bo) {
		return new OperationResult<IDimension>(this.saveDimension((Dimension) bo, this.getUserToken()));
	} // --------------------------------------------------------------------------------------------//

	/**
	 * 查询-税收组
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<TaxGroup> fetchTaxGroup(ICriteria criteria, String token) {
		return super.fetch(criteria, token, TaxGroup.class);
	}

	/**
	 * 查询-税收组（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<ITaxGroup> fetchTaxGroup(ICriteria criteria) {
		return new OperationResult<ITaxGroup>(this.fetchTaxGroup(criteria, this.getUserToken()));
	}

	/**
	 * 保存-税收组
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<TaxGroup> saveTaxGroup(TaxGroup bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-税收组（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<ITaxGroup> saveTaxGroup(ITaxGroup bo) {
		return new OperationResult<ITaxGroup>(this.saveTaxGroup((TaxGroup) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-费用结构
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<CostStructure> fetchCostStructure(ICriteria criteria, String token) {
		return super.fetch(criteria, token, CostStructure.class);
	}

	/**
	 * 查询-费用结构（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<ICostStructure> fetchCostStructure(ICriteria criteria) {
		return new OperationResult<ICostStructure>(this.fetchCostStructure(criteria, this.getUserToken()));
	}

	/**
	 * 保存-费用结构
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<CostStructure> saveCostStructure(CostStructure bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-费用结构（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<ICostStructure> saveCostStructure(ICostStructure bo) {
		return new OperationResult<ICostStructure>(this.saveCostStructure((CostStructure) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-费用项目
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<CostItem> fetchCostItem(ICriteria criteria, String token) {
		return super.fetch(criteria, token, CostItem.class);
	}

	/**
	 * 查询-费用项目（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<ICostItem> fetchCostItem(ICriteria criteria) {
		return new OperationResult<ICostItem>(this.fetchCostItem(criteria, this.getUserToken()));
	}

	/**
	 * 保存-费用项目
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<CostItem> saveCostItem(CostItem bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-费用项目（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<ICostItem> saveCostItem(ICostItem bo) {
		return new OperationResult<ICostItem>(this.saveCostItem((CostItem) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-费用项目-日记账
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<CostItemJournal> fetchCostItemJournal(ICriteria criteria, String token) {
		return super.fetch(criteria, token, CostItemJournal.class);
	}

	/**
	 * 查询-费用项目-日记账（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<ICostItemJournal> fetchCostItemJournal(ICriteria criteria) {
		return new OperationResult<ICostItemJournal>(this.fetchCostItemJournal(criteria, this.getUserToken()));
	}

	/**
	 * 保存-费用项目-日记账
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<CostItemJournal> saveCostItemJournal(CostItemJournal bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-费用项目-日记账（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<ICostItemJournal> saveCostItemJournal(ICostItemJournal bo) {
		return new OperationResult<ICostItemJournal>(
				this.saveCostItemJournal((CostItemJournal) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//

}
