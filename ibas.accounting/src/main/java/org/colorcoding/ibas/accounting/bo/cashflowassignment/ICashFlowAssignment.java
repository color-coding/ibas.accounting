package org.colorcoding.ibas.accounting.bo.cashflowassignment;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.bo.IBOSimple;
import org.colorcoding.ibas.bobas.data.DateTime;

/**
* 现金流分配 接口
* 
*/
public interface ICashFlowAssignment extends IBOSimple {

	/**
	* 获取-基于类型
	* 
	* @return 值
	*/
	String getBaseDocumentType();

	/**
	* 设置-基于类型
	* 
	* @param value 值
	*/
	void setBaseDocumentType(String value);

	/**
	* 获取-基于标识
	* 
	* @return 值
	*/
	Integer getBaseDocumentEntry();

	/**
	* 设置-基于标识
	* 
	* @param value 值
	*/
	void setBaseDocumentEntry(Integer value);

	/**
	* 获取-基于行号
	* 
	* @return 值
	*/
	Integer getBaseDocumentLineId();

	/**
	* 设置-基于行号
	* 
	* @param value 值
	*/
	void setBaseDocumentLineId(Integer value);

	/**
	* 获取-科目
	* 
	* @return 值
	*/
	String getAccount();

	/**
	* 设置-科目
	* 
	* @param value 值
	*/
	void setAccount(String value);

	/**
	* 获取-借方金额
	* 
	* @return 值
	*/
	BigDecimal getDebit();

	/**
	* 设置-借方金额
	* 
	* @param value 值
	*/
	void setDebit(BigDecimal value);

	/**
	* 获取-贷方金额
	* 
	* @return 值
	*/
	BigDecimal getCredit();

	/**
	* 设置-贷方金额
	* 
	* @param value 值
	*/
	void setCredit(BigDecimal value);

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
	* 获取-过账日期
	* 
	* @return 值
	*/
	DateTime getPostingDate();

	/**
	* 设置-过账日期
	* 
	* @param value 值
	*/
	void setPostingDate(DateTime value);

	/**
	* 获取-起息日期
	* 
	* @return 值
	*/
	DateTime getValueDate();

	/**
	* 设置-起息日期
	* 
	* @param value 值
	*/
	void setValueDate(DateTime value);

	/**
	* 获取-现金流项目
	* 
	* @return 值
	*/
	Integer getCashFlow();

	/**
	* 设置-现金流项目
	* 
	* @param value 值
	*/
	void setCashFlow(Integer value);

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
	* 获取-修改日期
	* 
	* @return 值
	*/
	DateTime getUpdateDate();

	/**
	* 设置-修改日期
	* 
	* @param value 值
	*/
	void setUpdateDate(DateTime value);

	/**
	* 获取-修改时间
	* 
	* @return 值
	*/
	Short getUpdateTime();

	/**
	* 设置-修改时间
	* 
	* @param value 值
	*/
	void setUpdateTime(Short value);

	/**
	* 获取-实例号（版本）
	* 
	* @return 值
	*/
	Integer getLogInst();

	/**
	* 设置-实例号（版本）
	* 
	* @param value 值
	*/
	void setLogInst(Integer value);

	/**
	* 获取-服务系列
	* 
	* @return 值
	*/
	Integer getSeries();

	/**
	* 设置-服务系列
	* 
	* @param value 值
	*/
	void setSeries(Integer value);

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
	* 获取-修改用户
	* 
	* @return 值
	*/
	Integer getUpdateUserSign();

	/**
	* 设置-修改用户
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
