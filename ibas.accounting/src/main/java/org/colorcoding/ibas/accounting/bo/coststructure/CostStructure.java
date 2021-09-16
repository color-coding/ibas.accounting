package org.colorcoding.ibas.accounting.bo.coststructure;

import java.math.BigDecimal;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElementWrapper;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.accounting.MyConfiguration;
import org.colorcoding.ibas.accounting.data.emCostStatus;
import org.colorcoding.ibas.accounting.data.emEntityType;
import org.colorcoding.ibas.bobas.bo.BusinessObject;
import org.colorcoding.ibas.bobas.core.IPropertyInfo;
import org.colorcoding.ibas.bobas.data.DateTime;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.mapping.BusinessObjectUnit;
import org.colorcoding.ibas.bobas.mapping.DbField;
import org.colorcoding.ibas.bobas.mapping.DbFieldType;
import org.colorcoding.ibas.bobas.ownership.IDataOwnership;
import org.colorcoding.ibas.bobas.rule.IBusinessRule;
import org.colorcoding.ibas.bobas.rule.common.BusinessRuleSumElements;

/**
 * 费用结构
 * 
 */
@XmlAccessorType(XmlAccessType.NONE)
@XmlType(name = CostStructure.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@XmlRootElement(name = CostStructure.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@BusinessObjectUnit(code = CostStructure.BUSINESS_OBJECT_CODE)
public class CostStructure extends BusinessObject<CostStructure> implements ICostStructure, IDataOwnership {

	/**
	 * 序列化版本标记
	 */
	private static final long serialVersionUID = -6786617954948576542L;

	/**
	 * 当前类型
	 */
	private static final Class<?> MY_CLASS = CostStructure.class;

	/**
	 * 数据库表
	 */
	public static final String DB_TABLE_NAME = "${Company}_AC_OCST";

	/**
	 * 业务对象编码
	 */
	public static final String BUSINESS_OBJECT_CODE = "${Company}_AC_COSTSTRU";

	/**
	 * 业务对象名称
	 */
	public static final String BUSINESS_OBJECT_NAME = "CostStructure";

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
	 * 属性名称-主体类型
	 */
	private static final String PROPERTY_ENTITYTYPE_NAME = "EntityType";

	/**
	 * 主体类型 属性
	 */
	@DbField(name = "EntityType", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<emEntityType> PROPERTY_ENTITYTYPE = registerProperty(PROPERTY_ENTITYTYPE_NAME,
			emEntityType.class, MY_CLASS);

	/**
	 * 获取-主体类型
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_ENTITYTYPE_NAME)
	public final emEntityType getEntityType() {
		return this.getProperty(PROPERTY_ENTITYTYPE);
	}

	/**
	 * 设置-主体类型
	 * 
	 * @param value 值
	 */
	public final void setEntityType(emEntityType value) {
		this.setProperty(PROPERTY_ENTITYTYPE, value);
	}

	/**
	 * 属性名称-主体编码
	 */
	private static final String PROPERTY_ENTITYCODE_NAME = "EntityCode";

	/**
	 * 主体编码 属性
	 */
	@DbField(name = "EntityCode", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_ENTITYCODE = registerProperty(PROPERTY_ENTITYCODE_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-主体编码
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_ENTITYCODE_NAME)
	public final String getEntityCode() {
		return this.getProperty(PROPERTY_ENTITYCODE);
	}

	/**
	 * 设置-主体编码
	 * 
	 * @param value 值
	 */
	public final void setEntityCode(String value) {
		this.setProperty(PROPERTY_ENTITYCODE, value);
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
	 * 属性名称-状态
	 */
	private static final String PROPERTY_STATUS_NAME = "Status";

	/**
	 * 状态 属性
	 */
	@DbField(name = "Status", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<emCostStatus> PROPERTY_STATUS = registerProperty(PROPERTY_STATUS_NAME,
			emCostStatus.class, MY_CLASS);

	/**
	 * 获取-状态
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_STATUS_NAME)
	public final emCostStatus getStatus() {
		return this.getProperty(PROPERTY_STATUS);
	}

	/**
	 * 设置-状态
	 * 
	 * @param value 值
	 */
	public final void setStatus(emCostStatus value) {
		this.setProperty(PROPERTY_STATUS, value);
	}

	/**
	 * 属性名称-取消
	 */
	private static final String PROPERTY_CANCELED_NAME = "Canceled";

	/**
	 * 取消 属性
	 */
	@DbField(name = "Canceled", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<emYesNo> PROPERTY_CANCELED = registerProperty(PROPERTY_CANCELED_NAME,
			emYesNo.class, MY_CLASS);

	/**
	 * 获取-取消
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_CANCELED_NAME)
	public final emYesNo getCanceled() {
		return this.getProperty(PROPERTY_CANCELED);
	}

	/**
	 * 设置-取消
	 * 
	 * @param value 值
	 */
	public final void setCanceled(emYesNo value) {
		this.setProperty(PROPERTY_CANCELED, value);
	}

	/**
	 * 属性名称-预算可结转
	 */
	private static final String PROPERTY_TRANSFERABLE_NAME = "Transferable";

	/**
	 * 预算可结转 属性
	 */
	@DbField(name = "Transferable", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<emYesNo> PROPERTY_TRANSFERABLE = registerProperty(PROPERTY_TRANSFERABLE_NAME,
			emYesNo.class, MY_CLASS);

	/**
	 * 获取-预算可结转
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_TRANSFERABLE_NAME)
	public final emYesNo getTransferable() {
		return this.getProperty(PROPERTY_TRANSFERABLE);
	}

	/**
	 * 设置-预算可结转
	 * 
	 * @param value 值
	 */
	public final void setTransferable(emYesNo value) {
		this.setProperty(PROPERTY_TRANSFERABLE, value);
	}

	/**
	 * 属性名称-起始日期
	 */
	private static final String PROPERTY_STARTDATE_NAME = "StartDate";

	/**
	 * 起始日期 属性
	 */
	@DbField(name = "StartDate", type = DbFieldType.DATE, table = DB_TABLE_NAME)
	public static final IPropertyInfo<DateTime> PROPERTY_STARTDATE = registerProperty(PROPERTY_STARTDATE_NAME,
			DateTime.class, MY_CLASS);

	/**
	 * 获取-起始日期
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_STARTDATE_NAME)
	public final DateTime getStartDate() {
		return this.getProperty(PROPERTY_STARTDATE);
	}

	/**
	 * 设置-起始日期
	 * 
	 * @param value 值
	 */
	public final void setStartDate(DateTime value) {
		this.setProperty(PROPERTY_STARTDATE, value);
	}

	/**
	 * 属性名称-结束日期
	 */
	private static final String PROPERTY_ENDDATE_NAME = "EndDate";

	/**
	 * 结束日期 属性
	 */
	@DbField(name = "EndDate", type = DbFieldType.DATE, table = DB_TABLE_NAME)
	public static final IPropertyInfo<DateTime> PROPERTY_ENDDATE = registerProperty(PROPERTY_ENDDATE_NAME,
			DateTime.class, MY_CLASS);

	/**
	 * 获取-结束日期
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_ENDDATE_NAME)
	public final DateTime getEndDate() {
		return this.getProperty(PROPERTY_ENDDATE);
	}

	/**
	 * 设置-结束日期
	 * 
	 * @param value 值
	 */
	public final void setEndDate(DateTime value) {
		this.setProperty(PROPERTY_ENDDATE, value);
	}

	/**
	 * 属性名称-预算总计
	 */
	private static final String PROPERTY_BUDGET_NAME = "Budget";

	/**
	 * 预算总计 属性
	 */
	@DbField(name = "Budget", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME)
	public static final IPropertyInfo<BigDecimal> PROPERTY_BUDGET = registerProperty(PROPERTY_BUDGET_NAME,
			BigDecimal.class, MY_CLASS);

	/**
	 * 获取-预算总计
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_BUDGET_NAME)
	public final BigDecimal getBudget() {
		return this.getProperty(PROPERTY_BUDGET);
	}

	/**
	 * 设置-预算总计
	 * 
	 * @param value 值
	 */
	public final void setBudget(BigDecimal value) {
		this.setProperty(PROPERTY_BUDGET, value);
	}

	/**
	 * 属性名称-已发生总计
	 */
	private static final String PROPERTY_INCURRED_NAME = "Incurred";

	/**
	 * 已发生总计 属性
	 */
	@DbField(name = "Incurred", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME)
	public static final IPropertyInfo<BigDecimal> PROPERTY_INCURRED = registerProperty(PROPERTY_INCURRED_NAME,
			BigDecimal.class, MY_CLASS);

	/**
	 * 获取-已发生总计
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_INCURRED_NAME)
	public final BigDecimal getIncurred() {
		return this.getProperty(PROPERTY_INCURRED);
	}

	/**
	 * 设置-已发生总计
	 * 
	 * @param value 值
	 */
	public final void setIncurred(BigDecimal value) {
		this.setProperty(PROPERTY_INCURRED, value);
	}

	/**
	 * 属性名称-已锁定总计
	 */
	private static final String PROPERTY_LOCKED_NAME = "Locked";

	/**
	 * 已锁定总计 属性
	 */
	@DbField(name = "Locked", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME)
	public static final IPropertyInfo<BigDecimal> PROPERTY_LOCKED = registerProperty(PROPERTY_LOCKED_NAME,
			BigDecimal.class, MY_CLASS);

	/**
	 * 获取-已锁定总计
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_LOCKED_NAME)
	public final BigDecimal getLocked() {
		return this.getProperty(PROPERTY_LOCKED);
	}

	/**
	 * 设置-已锁定总计
	 * 
	 * @param value 值
	 */
	public final void setLocked(BigDecimal value) {
		this.setProperty(PROPERTY_LOCKED, value);
	}

	/**
	 * 属性名称-货币
	 */
	private static final String PROPERTY_CURRENCY_NAME = "Currency";

	/**
	 * 货币 属性
	 */
	@DbField(name = "Currency", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_CURRENCY = registerProperty(PROPERTY_CURRENCY_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-货币
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_CURRENCY_NAME)
	public final String getCurrency() {
		return this.getProperty(PROPERTY_CURRENCY);
	}

	/**
	 * 设置-货币
	 * 
	 * @param value 值
	 */
	public final void setCurrency(String value) {
		this.setProperty(PROPERTY_CURRENCY, value);
	}

	/**
	 * 属性名称-数据所有者
	 */
	private static final String PROPERTY_DATAOWNER_NAME = "DataOwner";

	/**
	 * 数据所有者 属性
	 */
	@DbField(name = "DataOwner", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Integer> PROPERTY_DATAOWNER = registerProperty(PROPERTY_DATAOWNER_NAME,
			Integer.class, MY_CLASS);

	/**
	 * 获取-数据所有者
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DATAOWNER_NAME)
	public final Integer getDataOwner() {
		return this.getProperty(PROPERTY_DATAOWNER);
	}

	/**
	 * 设置-数据所有者
	 * 
	 * @param value 值
	 */
	public final void setDataOwner(Integer value) {
		this.setProperty(PROPERTY_DATAOWNER, value);
	}

	/**
	 * 属性名称-数据所属组织
	 */
	private static final String PROPERTY_ORGANIZATION_NAME = "Organization";

	/**
	 * 数据所属组织 属性
	 */
	@DbField(name = "OrgCode", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_ORGANIZATION = registerProperty(PROPERTY_ORGANIZATION_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-数据所属组织
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_ORGANIZATION_NAME)
	public final String getOrganization() {
		return this.getProperty(PROPERTY_ORGANIZATION);
	}

	/**
	 * 设置-数据所属组织
	 * 
	 * @param value 值
	 */
	public final void setOrganization(String value) {
		this.setProperty(PROPERTY_ORGANIZATION, value);
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
	 * 属性名称-费用结构-节点
	 */
	private static final String PROPERTY_COSTSTRUCTURENODES_NAME = "CostStructureNodes";

	/**
	 * 费用结构-节点的集合属性
	 * 
	 */
	public static final IPropertyInfo<ICostStructureNodes> PROPERTY_COSTSTRUCTURENODES = registerProperty(
			PROPERTY_COSTSTRUCTURENODES_NAME, ICostStructureNodes.class, MY_CLASS);

	/**
	 * 获取-费用结构-节点集合
	 * 
	 * @return 值
	 */
	@XmlElementWrapper(name = PROPERTY_COSTSTRUCTURENODES_NAME)
	@XmlElement(name = CostStructureNode.BUSINESS_OBJECT_NAME, type = CostStructureNode.class)
	public final ICostStructureNodes getCostStructureNodes() {
		return this.getProperty(PROPERTY_COSTSTRUCTURENODES);
	}

	/**
	 * 设置-费用结构-节点集合
	 * 
	 * @param value 值
	 */
	public final void setCostStructureNodes(ICostStructureNodes value) {
		this.setProperty(PROPERTY_COSTSTRUCTURENODES, value);
	}

	@Override
	public Integer getId() {
		return -1;
	}

	/**
	 * 初始化数据
	 */
	@Override
	protected void initialize() {
		super.initialize();// 基类初始化，不可去除
		this.setCostStructureNodes(new CostStructureNodes(this));
		this.setObjectCode(MyConfiguration.applyVariables(BUSINESS_OBJECT_CODE));
		this.setStatus(emCostStatus.OPEN);
		this.setTransferable(emYesNo.NO);
	}

	@Override
	protected IBusinessRule[] registerRules() {
		// 注册的业务规则
		return new IBusinessRule[] {
				// 计算合计 预算
				new BusinessRuleSumElements(PROPERTY_BUDGET, PROPERTY_COSTSTRUCTURENODES,
						CostStructureNodeItem.PROPERTY_BUDGET),
				// 计算合计 锁定
				new BusinessRuleSumElements(PROPERTY_LOCKED, PROPERTY_COSTSTRUCTURENODES,
						CostStructureNodeItem.PROPERTY_LOCKED),
				// 计算合计 消耗
				new BusinessRuleSumElements(PROPERTY_INCURRED, PROPERTY_COSTSTRUCTURENODES,
						CostStructureNodeItem.PROPERTY_INCURRED),

		};
	}
}
