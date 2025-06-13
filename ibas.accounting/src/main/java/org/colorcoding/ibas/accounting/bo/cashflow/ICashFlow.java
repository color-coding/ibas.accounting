package org.colorcoding.ibas.accounting.bo.cashflow;

import org.colorcoding.ibas.accounting.data.emPostableType;
import org.colorcoding.ibas.bobas.bo.IBOSimple;
import org.colorcoding.ibas.bobas.data.DateTime;

/**
* 现金流项目 接口
* 
*/
public interface ICashFlow extends IBOSimple {

	/**
	* 获取-标识
	* 
	* @return 值
	*/
	Integer getSign();

	/**
	* 设置-标识
	* 
	* @param value 值
	*/
	void setSign(Integer value);

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
	* 获取-上级项目
	* 
	* @return 值
	*/
	Integer getParent();

	/**
	* 设置-上级项目
	* 
	* @param value 值
	*/
	void setParent(Integer value);

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
