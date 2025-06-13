package org.colorcoding.ibas.accounting.bo.account;

import java.math.BigDecimal;

import org.colorcoding.ibas.accounting.data.emPostableType;
import org.colorcoding.ibas.bobas.bo.IBOMasterData;
import org.colorcoding.ibas.bobas.data.DateTime;
import org.colorcoding.ibas.bobas.data.emYesNo;

/**
* 科目 接口
* 
*/
public interface IAccount extends IBOMasterData {

	/**
	* 获取-编码
	* 
	* @return 值
	*/
	String getCode();

	/**
	* 设置-编码
	* 
	* @param value 值
	*/
	void setCode(String value);

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
	* 获取-外文名称
	* 
	* @return 值
	*/
	String getForeignName();

	/**
	* 设置-外文名称
	* 
	* @param value 值
	*/
	void setForeignName(String value);

	/**
	* 获取-上级科目
	* 
	* @return 值
	*/
	String getParent();

	/**
	* 设置-上级科目
	* 
	* @param value 值
	*/
	void setParent(String value);

	/**
	* 获取-层级
	* 
	* @return 值
	*/
	Integer getLevel();

	/**
	* 设置-层级
	* 
	* @param value 值
	*/
	void setLevel(Integer value);

	/**
	* 获取-外部编码
	* 
	* @return 值
	*/
	String getExternal();

	/**
	* 设置-外部编码
	* 
	* @param value 值
	*/
	void setExternal(String value);

	/**
	* 获取-机密
	* 
	* @return 值
	*/
	emYesNo getProtected();

	/**
	* 设置-机密
	* 
	* @param value 值
	*/
	void setProtected(emYesNo value);

	/**
	* 获取-传递类型
	* 
	* @return 值
	*/
	emPostableType getPostable();

	/**
	* 设置-传递类型
	* 
	* @param value 值
	*/
	void setPostable(emPostableType value);

	/**
	* 获取-控制科目
	* 
	* @return 值
	*/
	emYesNo getControl();

	/**
	* 设置-控制科目
	* 
	* @param value 值
	*/
	void setControl(emYesNo value);

	/**
	* 获取-现金科目
	* 
	* @return 值
	*/
	emYesNo getCash();

	/**
	* 设置-现金科目
	* 
	* @param value 值
	*/
	void setCash(emYesNo value);

	/**
	* 获取-现金流相关
	* 
	* @return 值
	*/
	emYesNo getCashFlowRelevant();

	/**
	* 设置-现金流相关
	* 
	* @param value 值
	*/
	void setCashFlowRelevant(emYesNo value);

	/**
	* 获取-生效日期
	* 
	* @return 值
	*/
	DateTime getValidDate();

	/**
	* 设置-生效日期
	* 
	* @param value 值
	*/
	void setValidDate(DateTime value);

	/**
	* 获取-失效日期
	* 
	* @return 值
	*/
	DateTime getInvalidDate();

	/**
	* 设置-失效日期
	* 
	* @param value 值
	*/
	void setInvalidDate(DateTime value);

	/**
	* 获取-余额
	* 
	* @return 值
	*/
	BigDecimal getBalance();

	/**
	* 设置-余额
	* 
	* @param value 值
	*/
	void setBalance(BigDecimal value);

	/**
	* 获取-币种
	* 
	* @return 值
	*/
	String getCurrency();

	/**
	* 设置-币种
	* 
	* @param value 值
	*/
	void setCurrency(String value);

	/**
	* 获取-分支
	* 
	* @return 值
	*/
	String getBranch();

	/**
	* 设置-分支
	* 
	* @param value 值
	*/
	void setBranch(String value);

	/**
	* 获取-对象编号
	* 
	* @return 值
	*/
	Integer getDocEntry();

	/**
	* 设置-对象编号
	* 
	* @param value 值
	*/
	void setDocEntry(Integer value);

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
