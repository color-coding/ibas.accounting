package org.colorcoding.ibas.accounting.logic;

import org.colorcoding.ibas.bobas.logic.IBusinessLogicContract;

/**
 * 应用程序配置-本币契约
 * 
 * @author Niuren.Zhu
 *
 */
public interface IApplicationConfigLocalCurrencyContract extends IBusinessLogicContract {

	/**
	 * 获取-币种
	 * 
	 * @return 值
	 */
	String getCurrency();
}
