package org.colorcoding.ibas.accounting.logic;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.data.DateTime;
import org.colorcoding.ibas.bobas.logic.IBusinessLogicContract;

/**
 * 现金流分配契约
 */
public interface ICashFlowAssignmentContract extends IBusinessLogicContract {

	/**
	 * 单据类型
	 *
	 * @return
	 */
	String getDocumentType();

	/**
	 * 单据号
	 *
	 * @return
	 */
	Integer getDocumentEntry();

	/**
	 * 单据行号
	 *
	 * @return
	 */
	Integer getDocumentLineId();

	/**
	 * 获取-科目
	 * 
	 * @return 值
	 */
	String getAccount();

	/**
	 * 获取-借方金额
	 * 
	 * @return 值
	 */
	BigDecimal getDebit();

	/**
	 * 获取-贷方金额
	 * 
	 * @return 值
	 */
	BigDecimal getCredit();

	/**
	 * 获取-货币
	 * 
	 * @return 值
	 */
	String getCurrency();

	/**
	* 获取-现金流项目
	* 
	* @return 值
	*/
	Integer getCashFlow();

	/**
	* 获取-过账日期
	* 
	* @return 值
	*/
	DateTime getPostingDate();
}
