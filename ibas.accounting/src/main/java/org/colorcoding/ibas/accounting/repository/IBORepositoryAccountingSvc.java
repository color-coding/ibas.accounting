package org.colorcoding.ibas.accounting.repository;

import org.colorcoding.ibas.accounting.bo.costiemjournal.CostItemJournal;
import org.colorcoding.ibas.accounting.bo.costitem.CostItem;
import org.colorcoding.ibas.accounting.bo.coststructure.CostStructure;
import org.colorcoding.ibas.accounting.bo.dimension.Dimension;
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

}
