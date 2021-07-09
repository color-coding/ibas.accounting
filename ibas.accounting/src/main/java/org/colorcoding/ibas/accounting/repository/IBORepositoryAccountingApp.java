package org.colorcoding.ibas.accounting.repository;

import org.colorcoding.ibas.accounting.bo.costiemjournal.ICostItemJournal;
import org.colorcoding.ibas.accounting.bo.costitem.ICostItem;
import org.colorcoding.ibas.accounting.bo.coststructure.ICostStructure;
import org.colorcoding.ibas.accounting.bo.dimension.IDimension;
import org.colorcoding.ibas.accounting.bo.postingperiod.IPeriodCategory;
import org.colorcoding.ibas.accounting.bo.postingperiod.IPostingPeriod;
import org.colorcoding.ibas.accounting.bo.project.IProject;
import org.colorcoding.ibas.accounting.bo.taxgroup.ITaxGroup;
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

}
