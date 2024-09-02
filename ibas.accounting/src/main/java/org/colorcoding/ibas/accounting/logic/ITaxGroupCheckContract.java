package org.colorcoding.ibas.accounting.logic;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.logic.IBusinessLogicContract;

/**
 * 检查税及税率
 * 
 * @author Niuren.Zhu
 *
 */
public interface ITaxGroupCheckContract extends IBusinessLogicContract {

	/**
	 * 税码
	 * 
	 * @return
	 */
	String getTax();

	/**
	 * 税率
	 * @return
	 */
	BigDecimal getTaxRate();
}
