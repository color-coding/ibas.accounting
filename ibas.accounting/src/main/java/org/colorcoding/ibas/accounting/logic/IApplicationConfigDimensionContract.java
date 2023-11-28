package org.colorcoding.ibas.accounting.logic;

import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.logic.IBusinessLogicContract;

/**
 * 应用程序配置-维度契约
 * 
 * @author Niuren.Zhu
 *
 */
public interface IApplicationConfigDimensionContract extends IBusinessLogicContract {

	/**
	 * 获取-维度
	 * 
	 * @return 值
	 */
	String getDimension();

	/**
	 * 获取-说明
	 * 
	 * @return 值
	 */
	String getDescription();

	/**
	 * 获取-激活
	 * 
	 * @return 值
	 */
	emYesNo getActivated();
}
