package org.colorcoding.ibas.accounting.bo.journalentry;

import java.math.BigDecimal;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.accounting.MyConfiguration;
import org.colorcoding.ibas.bobas.bo.BusinessObject;
import org.colorcoding.ibas.bobas.core.IPropertyInfo;
import org.colorcoding.ibas.bobas.data.DateTime;
import org.colorcoding.ibas.bobas.data.emBOStatus;
import org.colorcoding.ibas.bobas.data.emDocumentStatus;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.mapping.DbField;
import org.colorcoding.ibas.bobas.mapping.DbFieldType;

/**
 * 日记账分录-行
 * 
 */
@XmlAccessorType(XmlAccessType.NONE)
@XmlType(name = JournalEntryLine.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
public class JournalEntryLine extends BusinessObject<JournalEntryLine> implements IJournalEntryLine {

	/**
	 * 序列化版本标记
	 */
	private static final long serialVersionUID = 4997603537861016625L;

	/**
	 * 当前类型
	 */
	private static final Class<?> MY_CLASS = JournalEntryLine.class;

	/**
	 * 数据库表
	 */
	public static final String DB_TABLE_NAME = "${Company}_AC_JDT1";

	/**
	 * 业务对象编码
	 */
	public static final String BUSINESS_OBJECT_CODE = "${Company}_AC_JOURNALENTRY";

	/**
	 * 业务对象名称
	 */
	public static final String BUSINESS_OBJECT_NAME = "JournalEntryLine";

	/**
	 * 属性名称-编码
	 */
	private static final String PROPERTY_DOCENTRY_NAME = "DocEntry";

	/**
	 * 编码 属性
	 */
	@DbField(name = "DocEntry", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = true)
	public static final IPropertyInfo<Integer> PROPERTY_DOCENTRY = registerProperty(PROPERTY_DOCENTRY_NAME,
			Integer.class, MY_CLASS);

	/**
	 * 获取-编码
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DOCENTRY_NAME)
	public final Integer getDocEntry() {
		return this.getProperty(PROPERTY_DOCENTRY);
	}

	/**
	 * 设置-编码
	 * 
	 * @param value 值
	 */
	public final void setDocEntry(Integer value) {
		this.setProperty(PROPERTY_DOCENTRY, value);
	}

	/**
	 * 属性名称-行号
	 */
	private static final String PROPERTY_LINEID_NAME = "LineId";

	/**
	 * 行号 属性
	 */
	@DbField(name = "LineId", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = true)
	public static final IPropertyInfo<Integer> PROPERTY_LINEID = registerProperty(PROPERTY_LINEID_NAME, Integer.class,
			MY_CLASS);

	/**
	 * 获取-行号
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_LINEID_NAME)
	public final Integer getLineId() {
		return this.getProperty(PROPERTY_LINEID);
	}

	/**
	 * 设置-行号
	 * 
	 * @param value 值
	 */
	public final void setLineId(Integer value) {
		this.setProperty(PROPERTY_LINEID, value);
	}

	/**
	 * 属性名称-显示顺序
	 */
	private static final String PROPERTY_VISORDER_NAME = "VisOrder";

	/**
	 * 显示顺序 属性
	 */
	@DbField(name = "VisOrder", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<Integer> PROPERTY_VISORDER = registerProperty(PROPERTY_VISORDER_NAME,
			Integer.class, MY_CLASS);

	/**
	 * 获取-显示顺序
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_VISORDER_NAME)
	public final Integer getVisOrder() {
		return this.getProperty(PROPERTY_VISORDER);
	}

	/**
	 * 设置-显示顺序
	 * 
	 * @param value 值
	 */
	public final void setVisOrder(Integer value) {
		this.setProperty(PROPERTY_VISORDER, value);
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
	 * 属性名称-状态
	 */
	private static final String PROPERTY_STATUS_NAME = "Status";

	/**
	 * 状态 属性
	 */
	@DbField(name = "Status", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<emBOStatus> PROPERTY_STATUS = registerProperty(PROPERTY_STATUS_NAME,
			emBOStatus.class, MY_CLASS);

	/**
	 * 获取-状态
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_STATUS_NAME)
	public final emBOStatus getStatus() {
		return this.getProperty(PROPERTY_STATUS);
	}

	/**
	 * 设置-状态
	 * 
	 * @param value 值
	 */
	public final void setStatus(emBOStatus value) {
		this.setProperty(PROPERTY_STATUS, value);
	}

	/**
	 * 属性名称-单据状态
	 */
	private static final String PROPERTY_LINESTATUS_NAME = "LineStatus";

	/**
	 * 单据状态 属性
	 */
	@DbField(name = "LineStatus", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<emDocumentStatus> PROPERTY_LINESTATUS = registerProperty(PROPERTY_LINESTATUS_NAME,
			emDocumentStatus.class, MY_CLASS);

	/**
	 * 获取-单据状态
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_LINESTATUS_NAME)
	public final emDocumentStatus getLineStatus() {
		return this.getProperty(PROPERTY_LINESTATUS);
	}

	/**
	 * 设置-单据状态
	 * 
	 * @param value 值
	 */
	public final void setLineStatus(emDocumentStatus value) {
		this.setProperty(PROPERTY_LINESTATUS, value);
	}

	/**
	 * 属性名称-类型
	 */
	private static final String PROPERTY_OBJECTCODE_NAME = "ObjectCode";

	/**
	 * 类型 属性
	 */
	@DbField(name = "ObjectCode", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_OBJECTCODE = registerProperty(PROPERTY_OBJECTCODE_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-类型
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_OBJECTCODE_NAME)
	public final String getObjectCode() {
		return this.getProperty(PROPERTY_OBJECTCODE);
	}

	/**
	 * 设置-类型
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
	 * 属性名称-版本
	 */
	private static final String PROPERTY_LOGINST_NAME = "LogInst";

	/**
	 * 版本 属性
	 */
	@DbField(name = "LogInst", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<Integer> PROPERTY_LOGINST = registerProperty(PROPERTY_LOGINST_NAME, Integer.class,
			MY_CLASS);

	/**
	 * 获取-版本
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_LOGINST_NAME)
	public final Integer getLogInst() {
		return this.getProperty(PROPERTY_LOGINST);
	}

	/**
	 * 设置-版本
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
	 * 属性名称-业务伙伴/科目代码
	 */
	private static final String PROPERTY_SHORTNAME_NAME = "ShortName";

	/**
	 * 业务伙伴/科目代码 属性
	 */
	@DbField(name = "ShortName", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_SHORTNAME = registerProperty(PROPERTY_SHORTNAME_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-业务伙伴/科目代码
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_SHORTNAME_NAME)
	public final String getShortName() {
		return this.getProperty(PROPERTY_SHORTNAME);
	}

	/**
	 * 设置-业务伙伴/科目代码
	 * 
	 * @param value 值
	 */
	public final void setShortName(String value) {
		this.setProperty(PROPERTY_SHORTNAME, value);
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
	 * 属性名称-借方金额（系统）
	 */
	private static final String PROPERTY_SYSTEMDEBIT_NAME = "SystemDebit";

	/**
	 * 借方金额（系统） 属性
	 */
	@DbField(name = "SysDebit", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME)
	public static final IPropertyInfo<BigDecimal> PROPERTY_SYSTEMDEBIT = registerProperty(PROPERTY_SYSTEMDEBIT_NAME,
			BigDecimal.class, MY_CLASS);

	/**
	 * 获取-借方金额（系统）
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_SYSTEMDEBIT_NAME)
	public final BigDecimal getSystemDebit() {
		return this.getProperty(PROPERTY_SYSTEMDEBIT);
	}

	/**
	 * 设置-借方金额（系统）
	 * 
	 * @param value 值
	 */
	public final void setSystemDebit(BigDecimal value) {
		this.setProperty(PROPERTY_SYSTEMDEBIT, value);
	}

	/**
	 * 属性名称-贷方金额（系统）
	 */
	private static final String PROPERTY_SYSTEMCREDIT_NAME = "SystemCredit";

	/**
	 * 贷方金额（系统） 属性
	 */
	@DbField(name = "SysCredit", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME)
	public static final IPropertyInfo<BigDecimal> PROPERTY_SYSTEMCREDIT = registerProperty(PROPERTY_SYSTEMCREDIT_NAME,
			BigDecimal.class, MY_CLASS);

	/**
	 * 获取-贷方金额（系统）
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_SYSTEMCREDIT_NAME)
	public final BigDecimal getSystemCredit() {
		return this.getProperty(PROPERTY_SYSTEMCREDIT);
	}

	/**
	 * 设置-贷方金额（系统）
	 * 
	 * @param value 值
	 */
	public final void setSystemCredit(BigDecimal value) {
		this.setProperty(PROPERTY_SYSTEMCREDIT, value);
	}

	/**
	 * 属性名称-系统币
	 */
	private static final String PROPERTY_SYSTEMCURRENCY_NAME = "SystemCurrency";

	/**
	 * 系统币 属性
	 */
	@DbField(name = "SysCurrency", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_SYSTEMCURRENCY = registerProperty(PROPERTY_SYSTEMCURRENCY_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-系统币
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_SYSTEMCURRENCY_NAME)
	public final String getSystemCurrency() {
		return this.getProperty(PROPERTY_SYSTEMCURRENCY);
	}

	/**
	 * 设置-系统币
	 * 
	 * @param value 值
	 */
	public final void setSystemCurrency(String value) {
		this.setProperty(PROPERTY_SYSTEMCURRENCY, value);
	}

	/**
	 * 属性名称-系统币汇率
	 */
	private static final String PROPERTY_SYSTEMRATE_NAME = "SystemRate";

	/**
	 * 系统币汇率 属性
	 */
	@DbField(name = "SysRate", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME)
	public static final IPropertyInfo<BigDecimal> PROPERTY_SYSTEMRATE = registerProperty(PROPERTY_SYSTEMRATE_NAME,
			BigDecimal.class, MY_CLASS);

	/**
	 * 获取-系统币汇率
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_SYSTEMRATE_NAME)
	public final BigDecimal getSystemRate() {
		return this.getProperty(PROPERTY_SYSTEMRATE);
	}

	/**
	 * 设置-系统币汇率
	 * 
	 * @param value 值
	 */
	public final void setSystemRate(BigDecimal value) {
		this.setProperty(PROPERTY_SYSTEMRATE, value);
	}

	/**
	 * 属性名称-借方金额（本币）
	 */
	private static final String PROPERTY_LOCALDEBIT_NAME = "LocalDebit";

	/**
	 * 借方金额（本币） 属性
	 */
	@DbField(name = "LclDebit", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME)
	public static final IPropertyInfo<BigDecimal> PROPERTY_LOCALDEBIT = registerProperty(PROPERTY_LOCALDEBIT_NAME,
			BigDecimal.class, MY_CLASS);

	/**
	 * 获取-借方金额（本币）
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_LOCALDEBIT_NAME)
	public final BigDecimal getLocalDebit() {
		return this.getProperty(PROPERTY_LOCALDEBIT);
	}

	/**
	 * 设置-借方金额（本币）
	 * 
	 * @param value 值
	 */
	public final void setLocalDebit(BigDecimal value) {
		this.setProperty(PROPERTY_LOCALDEBIT, value);
	}

	/**
	 * 属性名称-贷方金额（本币）
	 */
	private static final String PROPERTY_LOCALCREDIT_NAME = "LocalCredit";

	/**
	 * 贷方金额（本币） 属性
	 */
	@DbField(name = "LclCredit", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME)
	public static final IPropertyInfo<BigDecimal> PROPERTY_LOCALCREDIT = registerProperty(PROPERTY_LOCALCREDIT_NAME,
			BigDecimal.class, MY_CLASS);

	/**
	 * 获取-贷方金额（本币）
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_LOCALCREDIT_NAME)
	public final BigDecimal getLocalCredit() {
		return this.getProperty(PROPERTY_LOCALCREDIT);
	}

	/**
	 * 设置-贷方金额（本币）
	 * 
	 * @param value 值
	 */
	public final void setLocalCredit(BigDecimal value) {
		this.setProperty(PROPERTY_LOCALCREDIT, value);
	}

	/**
	 * 属性名称-本币
	 */
	private static final String PROPERTY_LOCALCURRENCY_NAME = "LocalCurrency";

	/**
	 * 本币 属性
	 */
	@DbField(name = "LclCurrency", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_LOCALCURRENCY = registerProperty(PROPERTY_LOCALCURRENCY_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-本币
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_LOCALCURRENCY_NAME)
	public final String getLocalCurrency() {
		return this.getProperty(PROPERTY_LOCALCURRENCY);
	}

	/**
	 * 设置-本币
	 * 
	 * @param value 值
	 */
	public final void setLocalCurrency(String value) {
		this.setProperty(PROPERTY_LOCALCURRENCY, value);
	}

	/**
	 * 属性名称-本币汇率
	 */
	private static final String PROPERTY_LOCALRATE_NAME = "LocalRate";

	/**
	 * 本币汇率 属性
	 */
	@DbField(name = "LclRate", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME)
	public static final IPropertyInfo<BigDecimal> PROPERTY_LOCALRATE = registerProperty(PROPERTY_LOCALRATE_NAME,
			BigDecimal.class, MY_CLASS);

	/**
	 * 获取-本币汇率
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_LOCALRATE_NAME)
	public final BigDecimal getLocalRate() {
		return this.getProperty(PROPERTY_LOCALRATE);
	}

	/**
	 * 设置-本币汇率
	 * 
	 * @param value 值
	 */
	public final void setLocalRate(BigDecimal value) {
		this.setProperty(PROPERTY_LOCALRATE, value);
	}

	/**
	 * 属性名称-税码
	 */
	private static final String PROPERTY_TAX_NAME = "Tax";

	/**
	 * 税码 属性
	 */
	@DbField(name = "Tax", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_TAX = registerProperty(PROPERTY_TAX_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-税码
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_TAX_NAME)
	public final String getTax() {
		return this.getProperty(PROPERTY_TAX);
	}

	/**
	 * 设置-税码
	 * 
	 * @param value 值
	 */
	public final void setTax(String value) {
		this.setProperty(PROPERTY_TAX, value);
	}

	/**
	 * 属性名称-税率
	 */
	private static final String PROPERTY_TAXRATE_NAME = "TaxRate";

	/**
	 * 税率 属性
	 */
	@DbField(name = "TaxRate", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME)
	public static final IPropertyInfo<BigDecimal> PROPERTY_TAXRATE = registerProperty(PROPERTY_TAXRATE_NAME,
			BigDecimal.class, MY_CLASS);

	/**
	 * 获取-税率
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_TAXRATE_NAME)
	public final BigDecimal getTaxRate() {
		return this.getProperty(PROPERTY_TAXRATE);
	}

	/**
	 * 设置-税率
	 * 
	 * @param value 值
	 */
	public final void setTaxRate(BigDecimal value) {
		this.setProperty(PROPERTY_TAXRATE, value);
	}

	/**
	 * 属性名称-基础总额
	 */
	private static final String PROPERTY_BASETOTAL_NAME = "BaseTotal";

	/**
	 * 基础总额 属性
	 */
	@DbField(name = "BaseTotal", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME)
	public static final IPropertyInfo<BigDecimal> PROPERTY_BASETOTAL = registerProperty(PROPERTY_BASETOTAL_NAME,
			BigDecimal.class, MY_CLASS);

	/**
	 * 获取-基础总额
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_BASETOTAL_NAME)
	public final BigDecimal getBaseTotal() {
		return this.getProperty(PROPERTY_BASETOTAL);
	}

	/**
	 * 设置-基础总额
	 * 
	 * @param value 值
	 */
	public final void setBaseTotal(BigDecimal value) {
		this.setProperty(PROPERTY_BASETOTAL, value);
	}

	/**
	 * 属性名称-分支
	 */
	private static final String PROPERTY_BRANCH_NAME = "Branch";

	/**
	 * 分支 属性
	 */
	@DbField(name = "Branch", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_BRANCH = registerProperty(PROPERTY_BRANCH_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-分支
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_BRANCH_NAME)
	public final String getBranch() {
		return this.getProperty(PROPERTY_BRANCH);
	}

	/**
	 * 设置-分支
	 * 
	 * @param value 值
	 */
	public final void setBranch(String value) {
		this.setProperty(PROPERTY_BRANCH, value);
	}

	/**
	 * 属性名称-项目代码
	 */
	private static final String PROPERTY_PROJECT_NAME = "Project";

	/**
	 * 项目代码 属性
	 */
	@DbField(name = "Project", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_PROJECT = registerProperty(PROPERTY_PROJECT_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-项目代码
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_PROJECT_NAME)
	public final String getProject() {
		return this.getProperty(PROPERTY_PROJECT);
	}

	/**
	 * 设置-项目代码
	 * 
	 * @param value 值
	 */
	public final void setProject(String value) {
		this.setProperty(PROPERTY_PROJECT, value);
	}

	/**
	 * 属性名称-分配规则1
	 */
	private static final String PROPERTY_DISTRIBUTIONRULE1_NAME = "DistributionRule1";

	/**
	 * 分配规则1 属性
	 */
	@DbField(name = "OcrCode1", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_DISTRIBUTIONRULE1 = registerProperty(
			PROPERTY_DISTRIBUTIONRULE1_NAME, String.class, MY_CLASS);

	/**
	 * 获取-分配规则1
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DISTRIBUTIONRULE1_NAME)
	public final String getDistributionRule1() {
		return this.getProperty(PROPERTY_DISTRIBUTIONRULE1);
	}

	/**
	 * 设置-分配规则1
	 * 
	 * @param value 值
	 */
	public final void setDistributionRule1(String value) {
		this.setProperty(PROPERTY_DISTRIBUTIONRULE1, value);
	}

	/**
	 * 属性名称-分配规则2
	 */
	private static final String PROPERTY_DISTRIBUTIONRULE2_NAME = "DistributionRule2";

	/**
	 * 分配规则2 属性
	 */
	@DbField(name = "OcrCode2", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_DISTRIBUTIONRULE2 = registerProperty(
			PROPERTY_DISTRIBUTIONRULE2_NAME, String.class, MY_CLASS);

	/**
	 * 获取-分配规则2
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DISTRIBUTIONRULE2_NAME)
	public final String getDistributionRule2() {
		return this.getProperty(PROPERTY_DISTRIBUTIONRULE2);
	}

	/**
	 * 设置-分配规则2
	 * 
	 * @param value 值
	 */
	public final void setDistributionRule2(String value) {
		this.setProperty(PROPERTY_DISTRIBUTIONRULE2, value);
	}

	/**
	 * 属性名称-分配规则3
	 */
	private static final String PROPERTY_DISTRIBUTIONRULE3_NAME = "DistributionRule3";

	/**
	 * 分配规则3 属性
	 */
	@DbField(name = "OcrCode3", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_DISTRIBUTIONRULE3 = registerProperty(
			PROPERTY_DISTRIBUTIONRULE3_NAME, String.class, MY_CLASS);

	/**
	 * 获取-分配规则3
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DISTRIBUTIONRULE3_NAME)
	public final String getDistributionRule3() {
		return this.getProperty(PROPERTY_DISTRIBUTIONRULE3);
	}

	/**
	 * 设置-分配规则3
	 * 
	 * @param value 值
	 */
	public final void setDistributionRule3(String value) {
		this.setProperty(PROPERTY_DISTRIBUTIONRULE3, value);
	}

	/**
	 * 属性名称-分配规则4
	 */
	private static final String PROPERTY_DISTRIBUTIONRULE4_NAME = "DistributionRule4";

	/**
	 * 分配规则4 属性
	 */
	@DbField(name = "OcrCode4", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_DISTRIBUTIONRULE4 = registerProperty(
			PROPERTY_DISTRIBUTIONRULE4_NAME, String.class, MY_CLASS);

	/**
	 * 获取-分配规则4
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DISTRIBUTIONRULE4_NAME)
	public final String getDistributionRule4() {
		return this.getProperty(PROPERTY_DISTRIBUTIONRULE4);
	}

	/**
	 * 设置-分配规则4
	 * 
	 * @param value 值
	 */
	public final void setDistributionRule4(String value) {
		this.setProperty(PROPERTY_DISTRIBUTIONRULE4, value);
	}

	/**
	 * 属性名称-分配规则5
	 */
	private static final String PROPERTY_DISTRIBUTIONRULE5_NAME = "DistributionRule5";

	/**
	 * 分配规则5 属性
	 */
	@DbField(name = "OcrCode5", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_DISTRIBUTIONRULE5 = registerProperty(
			PROPERTY_DISTRIBUTIONRULE5_NAME, String.class, MY_CLASS);

	/**
	 * 获取-分配规则5
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DISTRIBUTIONRULE5_NAME)
	public final String getDistributionRule5() {
		return this.getProperty(PROPERTY_DISTRIBUTIONRULE5);
	}

	/**
	 * 设置-分配规则5
	 * 
	 * @param value 值
	 */
	public final void setDistributionRule5(String value) {
		this.setProperty(PROPERTY_DISTRIBUTIONRULE5, value);
	}

	/**
	 * 属性名称-参考1
	 */
	private static final String PROPERTY_REFERENCE1_NAME = "Reference1";

	/**
	 * 参考1 属性
	 */
	@DbField(name = "Ref1", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_REFERENCE1 = registerProperty(PROPERTY_REFERENCE1_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-参考1
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_REFERENCE1_NAME)
	public final String getReference1() {
		return this.getProperty(PROPERTY_REFERENCE1);
	}

	/**
	 * 设置-参考1
	 * 
	 * @param value 值
	 */
	public final void setReference1(String value) {
		this.setProperty(PROPERTY_REFERENCE1, value);
	}

	/**
	 * 属性名称-参考2
	 */
	private static final String PROPERTY_REFERENCE2_NAME = "Reference2";

	/**
	 * 参考2 属性
	 */
	@DbField(name = "Ref2", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_REFERENCE2 = registerProperty(PROPERTY_REFERENCE2_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-参考2
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_REFERENCE2_NAME)
	public final String getReference2() {
		return this.getProperty(PROPERTY_REFERENCE2);
	}

	/**
	 * 设置-参考2
	 * 
	 * @param value 值
	 */
	public final void setReference2(String value) {
		this.setProperty(PROPERTY_REFERENCE2, value);
	}

	/**
	 * 属性名称-参考3
	 */
	private static final String PROPERTY_REFERENCE3_NAME = "Reference3";

	/**
	 * 参考3 属性
	 */
	@DbField(name = "Ref3", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_REFERENCE3 = registerProperty(PROPERTY_REFERENCE3_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-参考3
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_REFERENCE3_NAME)
	public final String getReference3() {
		return this.getProperty(PROPERTY_REFERENCE3);
	}

	/**
	 * 设置-参考3
	 * 
	 * @param value 值
	 */
	public final void setReference3(String value) {
		this.setProperty(PROPERTY_REFERENCE3, value);
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
