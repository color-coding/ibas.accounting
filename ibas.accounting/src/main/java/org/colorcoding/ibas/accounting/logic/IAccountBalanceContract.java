package org.colorcoding.ibas.accounting.logic;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.logic.IBusinessLogicContract;

/**
 * 科目余额契约
 */
public interface IAccountBalanceContract extends IBusinessLogicContract {

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
}
