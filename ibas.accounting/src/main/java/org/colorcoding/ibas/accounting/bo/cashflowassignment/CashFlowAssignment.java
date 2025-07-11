package org.colorcoding.ibas.accounting.bo.cashflowassignment;

import java.math.BigDecimal;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.accounting.MyConfiguration;
import org.colorcoding.ibas.bobas.bo.BusinessObject;
import org.colorcoding.ibas.bobas.core.IPropertyInfo;
import org.colorcoding.ibas.bobas.data.DateTime;
import org.colorcoding.ibas.bobas.mapping.BusinessObjectUnit;
import org.colorcoding.ibas.bobas.mapping.DbField;
import org.colorcoding.ibas.bobas.mapping.DbFieldType;

/**
* 现金流分配
* 
*/
@XmlAccessorType(XmlAccessType.NONE)
@XmlType(name = CashFlowAssignment.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@XmlRootElement(name = CashFlowAssignment.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@BusinessObjectUnit(code = CashFlowAssignment.BUSINESS_OBJECT_CODE)
public class CashFlowAssignment extends BusinessObject<CashFlowAssignment> implements ICashFlowAssignment {

	/**
	 * 序列化版本标记
	 */
	private static final long serialVersionUID = 1062607541878127820L;

	/**
	* 当前类型
	*/
	private static final Class<?> MY_CLASS = CashFlowAssignment.class;

	/**
	* 数据库表
	*/
	public static final String DB_TABLE_NAME = "${Company}_AC_OCFT";

	/**
	* 业务对象编码
	*/
	public static final String BUSINESS_OBJECT_CODE = "${Company}_AC_CFWASSIGN";

	/**
	* 业务对象名称
	*/
	public static final String BUSINESS_OBJECT_NAME = "CashFlowAssignment";

	/**
	* 属性名称-基于类型
	*/
	private static final String PROPERTY_BASEDOCUMENTTYPE_NAME = "BaseDocumentType";

	/**
	* 基于类型 属性
	*/
	@DbField(name = "BaseType", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, uniqueKey = true)
	public static final IPropertyInfo<String> PROPERTY_BASEDOCUMENTTYPE = registerProperty(
			PROPERTY_BASEDOCUMENTTYPE_NAME, String.class, MY_CLASS);

	/**
	* 获取-基于类型
	* 
	* @return 值
	*/
	@XmlElement(name = PROPERTY_BASEDOCUMENTTYPE_NAME)
	public final String getBaseDocumentType() {
		return this.getProperty(PROPERTY_BASEDOCUMENTTYPE);
	}

	/**
	* 设置-基于类型
	* 
	* @param value 值
	*/
	public final void setBaseDocumentType(String value) {
		this.setProperty(PROPERTY_BASEDOCUMENTTYPE, value);
	}

	/**
	* 属性名称-基于标识
	*/
	private static final String PROPERTY_BASEDOCUMENTENTRY_NAME = "BaseDocumentEntry";

	/**
	* 基于标识 属性
	*/
	@DbField(name = "BaseEntry", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, uniqueKey = true)
	public static final IPropertyInfo<Integer> PROPERTY_BASEDOCUMENTENTRY = registerProperty(
			PROPERTY_BASEDOCUMENTENTRY_NAME, Integer.class, MY_CLASS);

	/**
	* 获取-基于标识
	* 
	* @return 值
	*/
	@XmlElement(name = PROPERTY_BASEDOCUMENTENTRY_NAME)
	public final Integer getBaseDocumentEntry() {
		return this.getProperty(PROPERTY_BASEDOCUMENTENTRY);
	}

	/**
	* 设置-基于标识
	* 
	* @param value 值
	*/
	public final void setBaseDocumentEntry(Integer value) {
		this.setProperty(PROPERTY_BASEDOCUMENTENTRY, value);
	}

	/**
	* 属性名称-基于行号
	*/
	private static final String PROPERTY_BASEDOCUMENTLINEID_NAME = "BaseDocumentLineId";

	/**
	* 基于行号 属性
	*/
	@DbField(name = "BaseLine", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, uniqueKey = true)
	public static final IPropertyInfo<Integer> PROPERTY_BASEDOCUMENTLINEID = registerProperty(
			PROPERTY_BASEDOCUMENTLINEID_NAME, Integer.class, MY_CLASS);

	/**
	* 获取-基于行号
	* 
	* @return 值
	*/
	@XmlElement(name = PROPERTY_BASEDOCUMENTLINEID_NAME)
	public final Integer getBaseDocumentLineId() {
		return this.getProperty(PROPERTY_BASEDOCUMENTLINEID);
	}

	/**
	* 设置-基于行号
	* 
	* @param value 值
	*/
	public final void setBaseDocumentLineId(Integer value) {
		this.setProperty(PROPERTY_BASEDOCUMENTLINEID, value);
	}

	/**
	* 属性名称-科目
	*/
	private static final String PROPERTY_ACCOUNT_NAME = "Account";

	/**
	* 科目 属性
	*/
	@DbField(name = "Account", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_ACCOUNT = registerProperty(PROPERTY_ACCOUNT_NAME, String.class,
			MY_CLASS);

	/**
	* 获取-科目
	* 
	* @return 值
	*/
	@XmlElement(name = PROPERTY_ACCOUNT_NAME)
	public final String getAccount() {
		return this.getProperty(PROPERTY_ACCOUNT);
	}

	/**
	* 设置-科目
	* 
	* @param value 值
	*/
	public final void setAccount(String value) {
		this.setProperty(PROPERTY_ACCOUNT, value);
	}

	/**
	* 属性名称-借方金额
	*/
	private static final String PROPERTY_DEBIT_NAME = "Debit";

	/**
	* 借方金额 属性
	*/
	@DbField(name = "Debit", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME)
	public static final IPropertyInfo<BigDecimal> PROPERTY_DEBIT = registerProperty(PROPERTY_DEBIT_NAME,
			BigDecimal.class, MY_CLASS);

	/**
	* 获取-借方金额
	* 
	* @return 值
	*/
	@XmlElement(name = PROPERTY_DEBIT_NAME)
	public final BigDecimal getDebit() {
		return this.getProperty(PROPERTY_DEBIT);
	}

	/**
	* 设置-借方金额
	* 
	* @param value 值
	*/
	public final void setDebit(BigDecimal value) {
		this.setProperty(PROPERTY_DEBIT, value);
	}

	/**
	* 属性名称-贷方金额
	*/
	private static final String PROPERTY_CREDIT_NAME = "Credit";

	/**
	* 贷方金额 属性
	*/
	@DbField(name = "Credit", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME)
	public static final IPropertyInfo<BigDecimal> PROPERTY_CREDIT = registerProperty(PROPERTY_CREDIT_NAME,
			BigDecimal.class, MY_CLASS);

	/**
	* 获取-贷方金额
	* 
	* @return 值
	*/
	@XmlElement(name = PROPERTY_CREDIT_NAME)
	public final BigDecimal getCredit() {
		return this.getProperty(PROPERTY_CREDIT);
	}

	/**
	* 设置-贷方金额
	* 
	* @param value 值
	*/
	public final void setCredit(BigDecimal value) {
		this.setProperty(PROPERTY_CREDIT, value);
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
	* 属性名称-过账日期
	*/
	private static final String PROPERTY_POSTINGDATE_NAME = "PostingDate";

	/**
	* 过账日期 属性
	*/
	@DbField(name = "DocDate", type = DbFieldType.DATE, table = DB_TABLE_NAME)
	public static final IPropertyInfo<DateTime> PROPERTY_POSTINGDATE = registerProperty(PROPERTY_POSTINGDATE_NAME,
			DateTime.class, MY_CLASS);

	/**
	* 获取-过账日期
	* 
	* @return 值
	*/
	@XmlElement(name = PROPERTY_POSTINGDATE_NAME)
	public final DateTime getPostingDate() {
		return this.getProperty(PROPERTY_POSTINGDATE);
	}

	/**
	* 设置-过账日期
	* 
	* @param value 值
	*/
	public final void setPostingDate(DateTime value) {
		this.setProperty(PROPERTY_POSTINGDATE, value);
	}

	/**
	* 属性名称-起息日期
	*/
	private static final String PROPERTY_VALUEDATE_NAME = "ValueDate";

	/**
	* 起息日期 属性
	*/
	@DbField(name = "ValueDate", type = DbFieldType.DATE, table = DB_TABLE_NAME)
	public static final IPropertyInfo<DateTime> PROPERTY_VALUEDATE = registerProperty(PROPERTY_VALUEDATE_NAME,
			DateTime.class, MY_CLASS);

	/**
	* 获取-起息日期
	* 
	* @return 值
	*/
	@XmlElement(name = PROPERTY_VALUEDATE_NAME)
	public final DateTime getValueDate() {
		return this.getProperty(PROPERTY_VALUEDATE);
	}

	/**
	* 设置-起息日期
	* 
	* @param value 值
	*/
	public final void setValueDate(DateTime value) {
		this.setProperty(PROPERTY_VALUEDATE, value);
	}

	/**
	* 属性名称-现金流项目
	*/
	private static final String PROPERTY_CASHFLOW_NAME = "CashFlow";

	/**
	* 现金流项目 属性
	*/
	@DbField(name = "CashFlow", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<Integer> PROPERTY_CASHFLOW = registerProperty(PROPERTY_CASHFLOW_NAME,
			Integer.class, MY_CLASS);

	/**
	* 获取-现金流项目
	* 
	* @return 值
	*/
	@XmlElement(name = PROPERTY_CASHFLOW_NAME)
	public final Integer getCashFlow() {
		return this.getProperty(PROPERTY_CASHFLOW);
	}

	/**
	* 设置-现金流项目
	* 
	* @param value 值
	*/
	public final void setCashFlow(Integer value) {
		this.setProperty(PROPERTY_CASHFLOW, value);
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
		super.initialize();// 基类初始化，不可去除
		this.setObjectCode(MyConfiguration.applyVariables(BUSINESS_OBJECT_CODE));

	}

}
