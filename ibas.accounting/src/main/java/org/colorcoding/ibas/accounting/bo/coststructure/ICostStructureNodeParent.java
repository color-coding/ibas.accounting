package org.colorcoding.ibas.accounting.bo.coststructure;

import org.colorcoding.ibas.bobas.bo.IBusinessObject;

public interface ICostStructureNodeParent extends IBusinessObject {

	/**
	 * 组标识
	 * 
	 * @return
	 */
	Integer getObjectKey();

	/**
	 * 标识
	 * 
	 * @return
	 */
	Integer getId();

	/**
	 * 获取-费用结构-节点集合
	 * 
	 * @return 值
	 */
	ICostStructureNodes getCostStructureNodes();

	/**
	 * 设置-费用结构-节点集合
	 * 
	 * @param value 值
	 */
	void setCostStructureNodes(ICostStructureNodes value);
}
