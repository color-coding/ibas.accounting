package org.colorcoding.ibas.accounting.logic;

import java.math.BigDecimal;

import org.colorcoding.ibas.accounting.data.emJournalCategory;
import org.colorcoding.ibas.bobas.logic.IBusinessLogicContract;

/**
 * 费用结构契约
 * 
 * @author Niuren.Zhu
 *
 */
public interface ICostStructureContract extends IBusinessLogicContract {

	/**
	 * 费用结构
	 *
	 * @return
	 */
	Integer getStructure();

	/**
	 * 费用节点
	 *
	 * @return
	 */
	Integer getStructureNode();

	/**
	 * 获取-类别
	 * 
	 * @return 值
	 */
	emJournalCategory getCategory();

	/**
	 * 获取-项目
	 * 
	 * @return 值
	 */
	String getItem();

	/**
	 * 获取-金额
	 * 
	 * @return 值
	 */
	BigDecimal getAmount();
}
