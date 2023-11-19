package org.colorcoding.ibas.accounting.logic;

import org.colorcoding.ibas.bobas.core.IBORepository;
import org.colorcoding.ibas.bobas.logic.BusinessLogic;

/**
 * 业务逻辑服务信息
 */
public interface IBusinessLogicServiceInformation {

	/**
	 * 类型
	 * 
	 * @return
	 */
	Class<?> getType();

	/**
	 * 实例
	 * 
	 * @return
	 */
	BusinessLogic<?, ?> getInstance();

	/**
	 * 业务仓库
	 * 
	 * @return
	 */
	IBORepository getRepository();
}
