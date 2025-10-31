package org.colorcoding.ibas.accounting.bo.cashflow;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.accounting.MyConfiguration;
import org.colorcoding.ibas.accounting.data.emPostableType;
import org.colorcoding.ibas.bobas.bo.BusinessObject;
import org.colorcoding.ibas.bobas.core.IPropertyInfo;
import org.colorcoding.ibas.bobas.data.DateTime;
import org.colorcoding.ibas.bobas.bo.BusinessObjectUnit;
import org.colorcoding.ibas.bobas.db.DbField;
import org.colorcoding.ibas.bobas.db.DbFieldType;

/**
* 现金流项目
* 
*/
@XmlAccessorType(XmlAccessType.NONE)
@XmlType(name = CashFlow.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@XmlRootElement(name = CashFlow.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@BusinessObjectUnit(code = CashFlow.BUSINESS_OBJECT_CODE)
public class CashFlow extends BusinessObject<CashFlow> implements ICashFlow {

	/**
	 * 序列化版本标记
	 */
	private static final long serialVersionUID = -4861793847951765398L;

	/**
	* 当前类型
	*/
	private static final Class<?> MY_CLASS = CashFlow.class;

	/**
	* 数据库表
	*/
	public static final String DB_TABLE_NAME = "${Company}_AC_OCFW";

	/**
	* 业务对象编码
	*/
	public static final String BUSINESS_OBJECT_CODE = "${Company}_AC_CASHFLOW";

	/**
	* 业务对象名称
	*/
	public static final String BUSINESS_OBJECT_NAME = "CashFlow";

	/**
	* 属性名称-标识
	*/
	private static final String PROPERTY_SIGN_NAME = "Sign";

	/**
	* 标识 属性
	*/
	@DbField(name = "Sign", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, uniqueKey = true)
	public static final IPropertyInfo<Integer> PROPERTY_SIGN = registerProperty(PROPERTY_SIGN_NAME, Integer.class,
			MY_CLASS);

	/**
	* 获取-标识
	* 
	* @return 值
	*/
	@XmlElement(name = PROPERTY_SIGN_NAME)
	public final Integer getSign() {
		return this.getProperty(PROPERTY_SIGN);
	}

	/**
	* 设置-标识
	* 
	* @param value 值
	*/
	public final void setSign(Integer value) {
		this.setProperty(PROPERTY_SIGN, value);
	}

	/**
	* 属性名称-名称
	*/
	private static final String PROPERTY_NAME_NAME = "Name";

	/**
	* 名称 属性
	*/
	@DbField(name = "Name", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_NAME = registerProperty(PROPERTY_NAME_NAME, String.class,
			MY_CLASS);

	/**
	* 获取-名称
	* 
	* @return 值
	*/
	@XmlElement(name = PROPERTY_NAME_NAME)
	public final String getName() {
		return this.getProperty(PROPERTY_NAME);
	}

	/**
	* 设置-名称
	* 
	* @param value 值
	*/
	public final void setName(String value) {
		this.setProperty(PROPERTY_NAME, value);
	}

	/**
	* 属性名称-上级项目
	*/
	private static final String PROPERTY_PARENT_NAME = "Parent";

	/**
	* 上级项目 属性
	*/
	@DbField(name = "Parent", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<Integer> PROPERTY_PARENT = registerProperty(PROPERTY_PARENT_NAME, Integer.class,
			MY_CLASS);

	/**
	* 获取-上级项目
	* 
	* @return 值
	*/
	@XmlElement(name = PROPERTY_PARENT_NAME)
	public final Integer getParent() {
		return this.getProperty(PROPERTY_PARENT);
	}

	/**
	* 设置-上级项目
	* 
	* @param value 值
	*/
	public final void setParent(Integer value) {
		this.setProperty(PROPERTY_PARENT, value);
	}

	/**
	* 属性名称-层级
	*/
	private static final String PROPERTY_LEVEL_NAME = "Level";

	/**
	* 层级 属性
	*/
	@DbField(name = "Level", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<Integer> PROPERTY_LEVEL = registerProperty(PROPERTY_LEVEL_NAME, Integer.class,
			MY_CLASS);

	/**
	* 获取-层级
	* 
	* @return 值
	*/
	@XmlElement(name = PROPERTY_LEVEL_NAME)
	public final Integer getLevel() {
		return this.getProperty(PROPERTY_LEVEL);
	}

	/**
	* 设置-层级
	* 
	* @param value 值
	*/
	public final void setLevel(Integer value) {
		this.setProperty(PROPERTY_LEVEL, value);
	}

	/**
	* 属性名称-外部编码
	*/
	private static final String PROPERTY_EXTERNAL_NAME = "External";

	/**
	* 外部编码 属性
	*/
	@DbField(name = "External", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_EXTERNAL = registerProperty(PROPERTY_EXTERNAL_NAME, String.class,
			MY_CLASS);

	/**
	* 获取-外部编码
	* 
	* @return 值
	*/
	@XmlElement(name = PROPERTY_EXTERNAL_NAME)
	public final String getExternal() {
		return this.getProperty(PROPERTY_EXTERNAL);
	}

	/**
	* 设置-外部编码
	* 
	* @param value 值
	*/
	public final void setExternal(String value) {
		this.setProperty(PROPERTY_EXTERNAL, value);
	}

	/**
	* 属性名称-传递类型
	*/
	private static final String PROPERTY_POSTABLE_NAME = "Postable";

	/**
	* 传递类型 属性
	*/
	@DbField(name = "Postable", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<emPostableType> PROPERTY_POSTABLE = registerProperty(PROPERTY_POSTABLE_NAME,
			emPostableType.class, MY_CLASS);

	/**
	* 获取-传递类型
	* 
	* @return 值
	*/
	@XmlElement(name = PROPERTY_POSTABLE_NAME)
	public final emPostableType getPostable() {
		return this.getProperty(PROPERTY_POSTABLE);
	}

	/**
	* 设置-传递类型
	* 
	* @param value 值
	*/
	public final void setPostable(emPostableType value) {
		this.setProperty(PROPERTY_POSTABLE, value);
	}

	/**
	* 属性名称-对象编号
	*/
	private static final String PROPERTY_OBJECTKEY_NAME = "ObjectKey";

	/**
	* 对象编号 属性
	*/
	@DbField(name = "ObjectKey", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = true)
	public static final IPropertyInfo<Integer> PROPERTY_OBJECTKEY = registerProperty(PROPERTY_OBJECTKEY_NAME,
			Integer.class, MY_CLASS);

	/**
	* 获取-对象编号
	* 
	* @return 值
	*/
	@XmlElement(name = PROPERTY_OBJECTKEY_NAME)
	public final Integer getObjectKey() {
		return this.getProperty(PROPERTY_OBJECTKEY);
	}

	/**
	* 设置-对象编号
	* 
	* @param value 值
	*/
	public final void setObjectKey(Integer value) {
		this.setProperty(PROPERTY_OBJECTKEY, value);
	}

	/**
	* 属性名称-对象类型
	*/
	private static final String PROPERTY_OBJECTCODE_NAME = "ObjectCode";

	/**
	* 对象类型 属性
	*/
	@DbField(name = "ObjectCode", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_OBJECTCODE = registerProperty(PROPERTY_OBJECTCODE_NAME,
			String.class, MY_CLASS);

	/**
	* 获取-对象类型
	* 
	* @return 值
	*/
	@XmlElement(name = PROPERTY_OBJECTCODE_NAME)
	public final String getObjectCode() {
		return this.getProperty(PROPERTY_OBJECTCODE);
	}

	/**
	* 设置-对象类型
	* 
	* @param value 值
	*/
	public final void setObjectCode(String value) {
		this.setProperty(PROPERTY_OBJECTCODE, value);
	}

	/**
	* 属性名称-创建日期
	*/
	private static final String PROPERTY_CREATEDATE_NAME = "CreateDate";

	/**
	* 创建日期 属性
	*/
	@DbField(name = "CreateDate", type = DbFieldType.DATE, table = DB_TABLE_NAME)
	public static final IPropertyInfo<DateTime> PROPERTY_CREATEDATE = registerProperty(PROPERTY_CREATEDATE_NAME,
			DateTime.class, MY_CLASS);

	/**
	* 获取-创建日期
	* 
	* @return 值
	*/
	@XmlElement(name = PROPERTY_CREATEDATE_NAME)
	public final DateTime getCreateDate() {
		return this.getProperty(PROPERTY_CREATEDATE);
	}

	/**
	* 设置-创建日期
	* 
	* @param value 值
	*/
	public final void setCreateDate(DateTime value) {
		this.setProperty(PROPERTY_CREATEDATE, value);
	}

	/**
	* 属性名称-创建时间
	*/
	private static final String PROPERTY_CREATETIME_NAME = "CreateTime";

	/**
	* 创建时间 属性
	*/
	@DbField(name = "CreateTime", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<Short> PROPERTY_CREATETIME = registerProperty(PROPERTY_CREATETIME_NAME,
			Short.class, MY_CLASS);

	/**
	* 获取-创建时间
	* 
	* @return 值
	*/
	@XmlElement(name = PROPERTY_CREATETIME_NAME)
	public final Short getCreateTime() {
		return this.getProperty(PROPERTY_CREATETIME);
	}

	/**
	* 设置-创建时间
	* 
	* @param value 值
	*/
	public final void setCreateTime(Short value) {
		this.setProperty(PROPERTY_CREATETIME, value);
	}

	/**
	* 属性名称-修改日期
	*/
	private static final String PROPERTY_UPDATEDATE_NAME = "UpdateDate";

	/**
	* 修改日期 属性
	*/
	@DbField(name = "UpdateDate", type = DbFieldType.DATE, table = DB_TABLE_NAME)
	public static final IPropertyInfo<DateTime> PROPERTY_UPDATEDATE = registerProperty(PROPERTY_UPDATEDATE_NAME,
			DateTime.class, MY_CLASS);

	/**
	* 获取-修改日期
	* 
	* @return 值
	*/
	@XmlElement(name = PROPERTY_UPDATEDATE_NAME)
	public final DateTime getUpdateDate() {
		return this.getProperty(PROPERTY_UPDATEDATE);
	}

	/**
	* 设置-修改日期
	* 
	* @param value 值
	*/
	public final void setUpdateDate(DateTime value) {
		this.setProperty(PROPERTY_UPDATEDATE, value);
	}

	/**
	* 属性名称-修改时间
	*/
	private static final String PROPERTY_UPDATETIME_NAME = "UpdateTime";

	/**
	* 修改时间 属性
	*/
	@DbField(name = "UpdateTime", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<Short> PROPERTY_UPDATETIME = registerProperty(PROPERTY_UPDATETIME_NAME,
			Short.class, MY_CLASS);

	/**
	* 获取-修改时间
	* 
	* @return 值
	*/
	@XmlElement(name = PROPERTY_UPDATETIME_NAME)
	public final Short getUpdateTime() {
		return this.getProperty(PROPERTY_UPDATETIME);
	}

	/**
	* 设置-修改时间
	* 
	* @param value 值
	*/
	public final void setUpdateTime(Short value) {
		this.setProperty(PROPERTY_UPDATETIME, value);
	}

	/**
	* 属性名称-实例号（版本）
	*/
	private static final String PROPERTY_LOGINST_NAME = "LogInst";

	/**
	* 实例号（版本） 属性
	*/
	@DbField(name = "LogInst", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<Integer> PROPERTY_LOGINST = registerProperty(PROPERTY_LOGINST_NAME, Integer.class,
			MY_CLASS);

	/**
	* 获取-实例号（版本）
	* 
	* @return 值
	*/
	@XmlElement(name = PROPERTY_LOGINST_NAME)
	public final Integer getLogInst() {
		return this.getProperty(PROPERTY_LOGINST);
	}

	/**
	* 设置-实例号（版本）
	* 
	* @param value 值
	*/
	public final void setLogInst(Integer value) {
		this.setProperty(PROPERTY_LOGINST, value);
	}

	/**
	* 属性名称-服务系列
	*/
	private static final String PROPERTY_SERIES_NAME = "Series";

	/**
	* 服务系列 属性
	*/
	@DbField(name = "Series", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<Integer> PROPERTY_SERIES = registerProperty(PROPERTY_SERIES_NAME, Integer.class,
			MY_CLASS);

	/**
	* 获取-服务系列
	* 
	* @return 值
	*/
	@XmlElement(name = PROPERTY_SERIES_NAME)
	public final Integer getSeries() {
		return this.getProperty(PROPERTY_SERIES);
	}

	/**
	* 设置-服务系列
	* 
	* @param value 值
	*/
	public final void setSeries(Integer value) {
		this.setProperty(PROPERTY_SERIES, value);
	}

	/**
	* 属性名称-数据源
	*/
	private static final String PROPERTY_DATASOURCE_NAME = "DataSource";

	/**
	* 数据源 属性
	*/
	@DbField(name = "DataSource", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_DATASOURCE = registerProperty(PROPERTY_DATASOURCE_NAME,
			String.class, MY_CLASS);

	/**
	* 获取-数据源
	* 
	* @return 值
	*/
	@XmlElement(name = PROPERTY_DATASOURCE_NAME)
	public final String getDataSource() {
		return this.getProperty(PROPERTY_DATASOURCE);
	}

	/**
	* 设置-数据源
	* 
	* @param value 值
	*/
	public final void setDataSource(String value) {
		this.setProperty(PROPERTY_DATASOURCE, value);
	}

	/**
	* 属性名称-创建用户
	*/
	private static final String PROPERTY_CREATEUSERSIGN_NAME = "CreateUserSign";

	/**
	* 创建用户 属性
	*/
	@DbField(name = "Creator", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<Integer> PROPERTY_CREATEUSERSIGN = registerProperty(PROPERTY_CREATEUSERSIGN_NAME,
			Integer.class, MY_CLASS);

	/**
	* 获取-创建用户
	* 
	* @return 值
	*/
	@XmlElement(name = PROPERTY_CREATEUSERSIGN_NAME)
	public final Integer getCreateUserSign() {
		return this.getProperty(PROPERTY_CREATEUSERSIGN);
	}

	/**
	* 设置-创建用户
	* 
	* @param value 值
	*/
	public final void setCreateUserSign(Integer value) {
		this.setProperty(PROPERTY_CREATEUSERSIGN, value);
	}

	/**
	* 属性名称-修改用户
	*/
	private static final String PROPERTY_UPDATEUSERSIGN_NAME = "UpdateUserSign";

	/**
	* 修改用户 属性
	*/
	@DbField(name = "Updator", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<Integer> PROPERTY_UPDATEUSERSIGN = registerProperty(PROPERTY_UPDATEUSERSIGN_NAME,
			Integer.class, MY_CLASS);

	/**
	* 获取-修改用户
	* 
	* @return 值
	*/
	@XmlElement(name = PROPERTY_UPDATEUSERSIGN_NAME)
	public final Integer getUpdateUserSign() {
		return this.getProperty(PROPERTY_UPDATEUSERSIGN);
	}

	/**
	* 设置-修改用户
	* 
	* @param value 值
	*/
	public final void setUpdateUserSign(Integer value) {
		this.setProperty(PROPERTY_UPDATEUSERSIGN, value);
	}

	/**
	* 属性名称-创建动作标识
	*/
	private static final String PROPERTY_CREATEACTIONID_NAME = "CreateActionId";

	/**
	* 创建动作标识 属性
	*/
	@DbField(name = "CreateActId", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_CREATEACTIONID = registerProperty(PROPERTY_CREATEACTIONID_NAME,
			String.class, MY_CLASS);

	/**
	* 获取-创建动作标识
	* 
	* @return 值
	*/
	@XmlElement(name = PROPERTY_CREATEACTIONID_NAME)
	public final String getCreateActionId() {
		return this.getProperty(PROPERTY_CREATEACTIONID);
	}

	/**
	* 设置-创建动作标识
	* 
	* @param value 值
	*/
	public final void setCreateActionId(String value) {
		this.setProperty(PROPERTY_CREATEACTIONID, value);
	}

	/**
	* 属性名称-更新动作标识
	*/
	private static final String PROPERTY_UPDATEACTIONID_NAME = "UpdateActionId";

	/**
	* 更新动作标识 属性
	*/
	@DbField(name = "UpdateActId", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_UPDATEACTIONID = registerProperty(PROPERTY_UPDATEACTIONID_NAME,
			String.class, MY_CLASS);

	/**
	* 获取-更新动作标识
	* 
	* @return 值
	*/
	@XmlElement(name = PROPERTY_UPDATEACTIONID_NAME)
	public final String getUpdateActionId() {
		return this.getProperty(PROPERTY_UPDATEACTIONID);
	}

	/**
	* 设置-更新动作标识
	* 
	* @param value 值
	*/
	public final void setUpdateActionId(String value) {
		this.setProperty(PROPERTY_UPDATEACTIONID, value);
	}

	/**
	* 属性名称-备注
	*/
	private static final String PROPERTY_REMARKS_NAME = "Remarks";

	/**
	* 备注 属性
	*/
	@DbField(name = "Remarks", type = DbFieldType.MEMO, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_REMARKS = registerProperty(PROPERTY_REMARKS_NAME, String.class,
			MY_CLASS);

	/**
	* 获取-备注
	* 
	* @return 值
	*/
	@XmlElement(name = PROPERTY_REMARKS_NAME)
	public final String getRemarks() {
		return this.getProperty(PROPERTY_REMARKS);
	}

	/**
	* 设置-备注
	* 
	* @param value 值
	*/
	public final void setRemarks(String value) {
		this.setProperty(PROPERTY_REMARKS, value);
	}

	/**
	* 初始化数据
	*/
	@Override
	protected void initialize() {
		super.initialize(); // 基类初始化，不可去除
		this.setObjectCode(MyConfiguration.applyVariables(BUSINESS_OBJECT_CODE));
		this.setPostable(emPostableType.TITLE);
	}

}
