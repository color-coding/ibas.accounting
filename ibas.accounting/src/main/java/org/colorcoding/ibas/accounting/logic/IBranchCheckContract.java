package org.colorcoding.ibas.accounting.logic;

import org.colorcoding.ibas.bobas.logic.IBusinessLogicContract;

/**
 * 检查分支契约
 * 
 * @author Niuren.Zhu
 *
 */
public interface IBranchCheckContract extends IBusinessLogicContract {

	/**
	 * 分支
	 * 
	 * @return
	 */
	String getBranch();

}
