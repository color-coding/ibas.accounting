package org.colorcoding.ibas.accounting.bo.coststructure;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.bo.IBOSimpleLine;
import org.colorcoding.ibas.bobas.data.DateTime;
import org.colorcoding.ibas.bobas.data.emYesNo;

/**
 * 费用结构-节点项目 接口
 * 
 */
public interface ICostStructureNodeItem extends IBOSimpleLine {

	/**
	 * 获取-对象编号
	 * 
	 * @return 值
	 */
	Integer getObjectKey();

	/**
	 * 设置-对象编号
	 * 
	 * @param value 值
	 */
	void setObjectKey(Integer value);

	/**
	 * 获取-对象行号
	 * 
	 * @return 值
	 */
	Integer getLineId();

	/**
	 * 设置-对象行号
	 * 
	 * @param value 值
	 */
	void setLineId(Integer value);

	/**
	 * 获取-对象类型
	 * 
	 * @return 值
	 */
	String getObjectCode();

	/**
	 * 设置-对象类型
	 * 
	 * @param value 值
	 */
	void setObjectCode(String value);

	/**
	 * 获取-实例号
	 * 
	 * @return 值
	 */
	Integer getLogInst();

	/**
	 * 设置-实例号
	 * 
	 * @param value 值
	 */
	void setLogInst(Integer value);

	/**
	 * 获取-数据源
	 * 
	 * @return 值
	 */
	String getDataSource();

	/**
	 * 设置-数据源
	 * 
	 * @param value 值
	 */
	void setDataSource(String value);

	/**
	 * 获取-创建日期
	 * 
	 * @return 值
	 */
	DateTime getCreateDate();

	/**
	 * 设置-创建日期
	 * 
	 * @param value 值
	 */
	void setCreateDate(DateTime value);

	/**
	 * 获取-创建时间
	 * 
	 * @return 值
	 */
	Short getCreateTime();

	/**
	 * 设置-创建时间
	 * 
	 * @param value 值
	 */
	void setCreateTime(Short value);

	/**
	 * 获取-更新日期
	 * 
	 * @return 值
	 */
	DateTime getUpdateDate();

	/**
	 * 设置-更新日期
	 * 
	 * @param value 值
	 */
	void setUpdateDate(DateTime value);

	/**
	 * 获取-更新时间
	 * 
	 * @return 值
	 */
	Short getUpdateTime();

	/**
	 * 设置-更新时间
	 * 
	 * @param value 值
	 */
	void setUpdateTime(Short value);

	/**
	 * 获取-创建用户
	 * 
	 * @return 值
	 */
	Integer getCreateUserSign();

	/**
	 * 设置-创建用户
	 * 
	 * @param value 值
	 */
	void setCreateUserSign(Integer value);

	/**
	 * 获取-更新用户
	 * 
	 * @return 值
	 */
	Integer getUpdateUserSign();

	/**
	 * 设置-更新用户
	 * 
	 * @param value 值
	 */
	void setUpdateUserSign(Integer value);

	/**
	 * 获取-创建动作标识
	 * 
	 * @return 值
	 */
	String getCreateActionId();

	/**
	 * 设置-创建动作标识
	 * 
	 * @param value 值
	 */
	void setCreateActionId(String value);

	/**
	 * 获取-更新动作标识
	 * 
	 * @return 值
	 */
	String getUpdateActionId();

	/**
	 * 设置-更新动作标识
	 * 
	 * @param value 值
	 */
	void setUpdateActionId(String value);

	/**
	 * 获取-节点
	 * 
	 * @return 值
	 */
	Integer getNodeId();

	/**
	 * 设置-节点
	 * 
	 * @param value 值
	 */
	void setNodeId(Integer value);

	/**
	 * 获取-项目
	 * 
	 * @return 值
	 */
	String getItem();

	/**
	 * 设置-项目
	 * 
	 * @param value 值
	 */
	void setItem(String value);

	/**
	 * 获取-名称
	 * 
	 * @return 值
	 */
	String getName();

	/**
	 * 设置-名称
	 * 
	 * @param value 值
	 */
	void setName(String value);

	/**
	 * 获取-预算金额
	 * 
	 * @return 值
	 */
	BigDecimal getBudget();

	/**
	 * 设置-预算金额
	 * 
	 * @param value 值
	 */
	void setBudget(BigDecimal value);

	/**
	 * 获取-货币
	 * 
	 * @return 值
	 */
	String getCurrency();

	/**
	 * 设置-货币
	 * 
	 * @param value 值
	 */
	void setCurrency(String value);

	/**
	 * 获取-已发生金额
	 * 
	 * @return 值
	 */
	BigDecimal getIncurred();

	/**
	 * 设置-已发生金额
	 * 
	 * @param value 值
	 */
	void setIncurred(BigDecimal value);

	/**
	 * 获取-已锁定金额
	 * 
	 * @return 值
	 */
	BigDecimal getLocked();

	/**
	 * 设置-已锁定金额
	 * 
	 * @param value 值
	 */
	void setLocked(BigDecimal value);

	/**
	 * 获取-阻止超预算
	 * 
	 * @return 值
	 */
	emYesNo getPreventOver();

	/**
	 * 设置-阻止超预算
	 * 
	 * @param value 值
	 */
	void setPreventOver(emYesNo value);

	/**
	 * 获取-追加的项目
	 * 
	 * @return 值
	 */
	emYesNo getAdditional();

	/**
	 * 设置-追加的项目
	 * 
	 * @param value 值
	 */
	void setAdditional(emYesNo value);

	/**
	 * 获取-备注
	 * 
	 * @return 值
	 */
	String getRemarks();

	/**
	 * 设置-备注
	 * 
	 * @param value 值
	 */
	void setRemarks(String value);

}
