package org.colorcoding.ibas.accounting.bo.branch;

import org.colorcoding.ibas.bobas.bo.IBOMasterData;
import org.colorcoding.ibas.bobas.data.DateTime;
import org.colorcoding.ibas.bobas.data.emYesNo;

/**
 * 分支 接口
 * 
 */
public interface IBranch extends IBOMasterData {

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
	 * 获取-激活
	 * 
	 * @return 值
	 */
	emYesNo getActivated();

	/**
	 * 设置-激活
	 * 
	 * @param value 值
	 */
	void setActivated(emYesNo value);

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
	 * 获取-主要的
	 * 
	 * @return 值
	 */
	emYesNo getMain();

	/**
	 * 设置-主要的
	 * 
	 * @param value 值
	 */
	void setMain(emYesNo value);

	/**
	 * 获取-客户
	 * 
	 * @return 值
	 */
	String getCustomer();

	/**
	 * 设置-客户
	 * 
	 * @param value 值
	 */
	void setCustomer(String value);

	/**
	 * 获取-供应商
	 * 
	 * @return 值
	 */
	String getSupplier();

	/**
	 * 设置-供应商
	 * 
	 * @param value 值
	 */
	void setSupplier(String value);

	/**
	 * 获取-仓库
	 * 
	 * @return 值
	 */
	String getWarehouse();

	/**
	 * 设置-仓库
	 * 
	 * @param value 值
	 */
	void setWarehouse(String value);

	/**
	 * 获取-街道
	 * 
	 * @return 值
	 */
	String getStreet();

	/**
	 * 设置-街道
	 * 
	 * @param value 值
	 */
	void setStreet(String value);

	/**
	 * 获取-县/区
	 * 
	 * @return 值
	 */
	String getDistrict();

	/**
	 * 设置-县/区
	 * 
	 * @param value 值
	 */
	void setDistrict(String value);

	/**
	 * 获取-市
	 * 
	 * @return 值
	 */
	String getCity();

	/**
	 * 设置-市
	 * 
	 * @param value 值
	 */
	void setCity(String value);

	/**
	 * 获取-省
	 * 
	 * @return 值
	 */
	String getProvince();

	/**
	 * 设置-省
	 * 
	 * @param value 值
	 */
	void setProvince(String value);

	/**
	 * 获取-国
	 * 
	 * @return 值
	 */
	String getCountry();

	/**
	 * 设置-国
	 * 
	 * @param value 值
	 */
	void setCountry(String value);

	/**
	 * 获取-邮编
	 * 
	 * @return 值
	 */
	String getZipCode();

	/**
	 * 设置-邮编
	 * 
	 * @param value 值
	 */
	void setZipCode(String value);

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
	 * 获取-已引用
	 * 
	 * @return 值
	 */
	emYesNo getReferenced();

	/**
	 * 设置-已引用
	 * 
	 * @param value 值
	 */
	void setReferenced(emYesNo value);

	/**
	 * 获取-删除的
	 * 
	 * @return 值
	 */
	emYesNo getDeleted();

	/**
	 * 设置-删除的
	 * 
	 * @param value 值
	 */
	void setDeleted(emYesNo value);

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
