package org.colorcoding.ibas.accounting.repository;

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

}
