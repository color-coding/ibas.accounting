package org.colorcoding.ibas.accounting.bo.coststructure;

import java.math.BigDecimal;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElementWrapper;
import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.accounting.MyConfiguration;
import org.colorcoding.ibas.accounting.data.emCostStatus;
import org.colorcoding.ibas.accounting.rule.BusinessRulePreventOver;
import org.colorcoding.ibas.bobas.bo.BusinessObject;
import org.colorcoding.ibas.bobas.core.IPropertyInfo;
import org.colorcoding.ibas.bobas.data.DateTime;
import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.mapping.DbField;
import org.colorcoding.ibas.bobas.mapping.DbFieldType;
import org.colorcoding.ibas.bobas.rule.IBusinessRule;
import org.colorcoding.ibas.bobas.rule.common.BusinessRuleSumElements;
import org.colorcoding.ibas.bobas.rule.common.BusinessRuleSummation;

/**
 * 费用结构-节点
 * 
 */
@XmlAccessorType(XmlAccessType.NONE)
@XmlType(name = CostStructureNode.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
public class CostStructureNode extends BusinessObject<CostStructureNode> implements ICostStructureNode {

	/**
	 * 序列化版本标记
	 */
	private static final long serialVersionUID = -7766832124136612742L;

	/**
	 * 当前类型
	 */
	private static final Class<?> MY_CLASS = CostStructureNode.class;

	/**
	 * 数据库表
	 */
	public static final String DB_TABLE_NAME = "${Company}_AC_CST1";

	/**
	 * 业务对象编码
	 */
	public static final String BUSINESS_OBJECT_CODE = "${Company}_AC_COSTSTRU";

	/**
	 * 业务对象名称
	 */
	public static final String BUSINESS_OBJECT_NAME = "CostStructureNode";

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
	 * 属性名称-对象行号
	 */
	private static final String PROPERTY_LINEID_NAME = "LineId";

	/**
	 * 对象行号 属性
	 */
	@DbField(name = "LineId", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = true)
	public static final IPropertyInfo<Integer> PROPERTY_LINEID = registerProperty(PROPERTY_LINEID_NAME, Integer.class,
			MY_CLASS);

	/**
	 * 获取-对象行号
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_LINEID_NAME)
	public final Integer getLineId() {
		return this.getProperty(PROPERTY_LINEID);
	}

	/**
	 * 设置-对象行号
	 * 
	 * @param value 值
	 */
	public final void setLineId(Integer value) {
		this.setProperty(PROPERTY_LINEID, value);
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
	 * 属性名称-实例号
	 */
	private static final String PROPERTY_LOGINST_NAME = "LogInst";

	/**
	 * 实例号 属性
	 */
	@DbField(name = "LogInst", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<Integer> PROPERTY_LOGINST = registerProperty(PROPERTY_LOGINST_NAME, Integer.class,
			MY_CLASS);

	/**
	 * 获取-实例号
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_LOGINST_NAME)
	public final Integer getLogInst() {
		return this.getProperty(PROPERTY_LOGINST);
	}

	/**
	 * 设置-实例号
	 * 
	 * @param value 值
	 */
	public final void setLogInst(Integer value) {
		this.setProperty(PROPERTY_LOGINST, value);
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
	 * 属性名称-更新日期
	 */
	private static final String PROPERTY_UPDATEDATE_NAME = "UpdateDate";

	/**
	 * 更新日期 属性
	 */
	@DbField(name = "UpdateDate", type = DbFieldType.DATE, table = DB_TABLE_NAME)
	public static final IPropertyInfo<DateTime> PROPERTY_UPDATEDATE = registerProperty(PROPERTY_UPDATEDATE_NAME,
			DateTime.class, MY_CLASS);

	/**
	 * 获取-更新日期
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_UPDATEDATE_NAME)
	public final DateTime getUpdateDate() {
		return this.getProperty(PROPERTY_UPDATEDATE);
	}

	/**
	 * 设置-更新日期
	 * 
	 * @param value 值
	 */
	public final void setUpdateDate(DateTime value) {
		this.setProperty(PROPERTY_UPDATEDATE, value);
	}

	/**
	 * 属性名称-更新时间
	 */
	private static final String PROPERTY_UPDATETIME_NAME = "UpdateTime";

	/**
	 * 更新时间 属性
	 */
	@DbField(name = "UpdateTime", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<Short> PROPERTY_UPDATETIME = registerProperty(PROPERTY_UPDATETIME_NAME,
			Short.class, MY_CLASS);

	/**
	 * 获取-更新时间
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_UPDATETIME_NAME)
	public final Short getUpdateTime() {
		return this.getProperty(PROPERTY_UPDATETIME);
	}

	/**
	 * 设置-更新时间
	 * 
	 * @param value 值
	 */
	public final void setUpdateTime(Short value) {
		this.setProperty(PROPERTY_UPDATETIME, value);
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
	 * 属性名称-更新用户
	 */
	private static final String PROPERTY_UPDATEUSERSIGN_NAME = "UpdateUserSign";

	/**
	 * 更新用户 属性
	 */
	@DbField(name = "Updator", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<Integer> PROPERTY_UPDATEUSERSIGN = registerProperty(PROPERTY_UPDATEUSERSIGN_NAME,
			Integer.class, MY_CLASS);

	/**
	 * 获取-更新用户
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_UPDATEUSERSIGN_NAME)
	public final Integer getUpdateUserSign() {
		return this.getProperty(PROPERTY_UPDATEUSERSIGN);
	}

	/**
	 * 设置-更新用户
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
	 * 属性名称-父项
	 */
	private static final String PROPERTY_PARENTID_NAME = "ParentId";

	/**
	 * 父项 属性
	 */
	@DbField(name = "ParentId", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<Integer> PROPERTY_PARENTID = registerProperty(PROPERTY_PARENTID_NAME,
			Integer.class, MY_CLASS);

	/**
	 * 获取-父项
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_PARENTID_NAME)
	public final Integer getParentId() {
		return this.getProperty(PROPERTY_PARENTID);
	}

	/**
	 * 设置-父项
	 * 
	 * @param value 值
	 */
	public final void setParentId(Integer value) {
		this.setProperty(PROPERTY_PARENTID, value);
	}

	/**
	 * 属性名称-顺序
	 */
	private static final String PROPERTY_VISORDER_NAME = "VisOrder";

	/**
	 * 顺序 属性
	 */
	@DbField(name = "VisOrder", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<Integer> PROPERTY_VISORDER = registerProperty(PROPERTY_VISORDER_NAME,
			Integer.class, MY_CLASS);

	/**
	 * 获取-顺序
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_VISORDER_NAME)
	public final Integer getVisOrder() {
		return this.getProperty(PROPERTY_VISORDER);
	}

	/**
	 * 设置-顺序
	 * 
	 * @param value 值
	 */
	public final void setVisOrder(Integer value) {
		this.setProperty(PROPERTY_VISORDER, value);
	}

	/**
	 * 属性名称-标识
	 */
	private static final String PROPERTY_SIGN_NAME = "Sign";

	/**
	 * 标识 属性
	 */
	@DbField(name = "Sign", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_SIGN = registerProperty(PROPERTY_SIGN_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-标识
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_SIGN_NAME)
	public final String getSign() {
		return this.getProperty(PROPERTY_SIGN);
	}

	/**
	 * 设置-标识
	 * 
	 * @param value 值
	 */
	public final void setSign(String value) {
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
	 * 属性名称-预算金额
	 */
	private static final String PROPERTY_BUDGET_NAME = "Budget";

	/**
	 * 预算金额 属性
	 */
	@DbField(name = "Budget", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME)
	public static final IPropertyInfo<BigDecimal> PROPERTY_BUDGET = registerProperty(PROPERTY_BUDGET_NAME,
			BigDecimal.class, MY_CLASS);

	/**
	 * 获取-预算金额
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_BUDGET_NAME)
	public final BigDecimal getBudget() {
		return this.getProperty(PROPERTY_BUDGET);
	}

	/**
	 * 设置-预算金额
	 * 
	 * @param value 值
	 */
	public final void setBudget(BigDecimal value) {
		this.setProperty(PROPERTY_BUDGET, value);
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
	 * 属性名称-已发生金额
	 */
	private static final String PROPERTY_INCURRED_NAME = "Incurred";

	/**
	 * 已发生金额 属性
	 */
	@DbField(name = "Incurred", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME)
	public static final IPropertyInfo<BigDecimal> PROPERTY_INCURRED = registerProperty(PROPERTY_INCURRED_NAME,
			BigDecimal.class, MY_CLASS);

	/**
	 * 获取-已发生金额
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_INCURRED_NAME)
	public final BigDecimal getIncurred() {
		return this.getProperty(PROPERTY_INCURRED);
	}

	/**
	 * 设置-已发生金额
	 * 
	 * @param value 值
	 */
	public final void setIncurred(BigDecimal value) {
		this.setProperty(PROPERTY_INCURRED, value);
	}

	/**
	 * 属性名称-已锁定金额
	 */
	private static final String PROPERTY_LOCKED_NAME = "Locked";

	/**
	 * 已锁定金额 属性
	 */
	@DbField(name = "Locked", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME)
	public static final IPropertyInfo<BigDecimal> PROPERTY_LOCKED = registerProperty(PROPERTY_LOCKED_NAME,
			BigDecimal.class, MY_CLASS);

	/**
	 * 获取-已锁定金额
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_LOCKED_NAME)
	public final BigDecimal getLocked() {
		return this.getProperty(PROPERTY_LOCKED);
	}

	/**
	 * 设置-已锁定金额
	 * 
	 * @param value 值
	 */
	public final void setLocked(BigDecimal value) {
		this.setProperty(PROPERTY_LOCKED, value);
	}

	/**
	 * 属性名称-阻止超预算
	 */
	private static final String PROPERTY_PREVENTOVER_NAME = "PreventOver";

	/**
	 * 阻止超预算 属性
	 */
	@DbField(name = "PreventOver", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<emYesNo> PROPERTY_PREVENTOVER = registerProperty(PROPERTY_PREVENTOVER_NAME,
			emYesNo.class, MY_CLASS);

	/**
	 * 获取-阻止超预算
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_PREVENTOVER_NAME)
	public final emYesNo getPreventOver() {
		return this.getProperty(PROPERTY_PREVENTOVER);
	}

	/**
	 * 设置-阻止超预算
	 * 
	 * @param value 值
	 */
	public final void setPreventOver(emYesNo value) {
		this.setProperty(PROPERTY_PREVENTOVER, value);
	}

	/**
	 * 属性名称-限制费用项目
	 */
	private static final String PROPERTY_RESTRICTEDITEM_NAME = "RestrictedItem";

	/**
	 * 限制费用项目 属性
	 */
	@DbField(name = "Restricted", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<emYesNo> PROPERTY_RESTRICTEDITEM = registerProperty(PROPERTY_RESTRICTEDITEM_NAME,
			emYesNo.class, MY_CLASS);

	/**
	 * 获取-限制费用项目
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_RESTRICTEDITEM_NAME)
	public final emYesNo getRestrictedItem() {
		return this.getProperty(PROPERTY_RESTRICTEDITEM);
	}

	/**
	 * 设置-限制费用项目
	 * 
	 * @param value 值
	 */
	public final void setRestrictedItem(emYesNo value) {
		this.setProperty(PROPERTY_RESTRICTEDITEM, value);
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
	 * 属性名称-费用结构-节点项目
	 */
	private static final String PROPERTY_COSTSTRUCTURENODEITEMS_NAME = "CostStructureNodeItems";

	/**
	 * 费用结构-节点项目的集合属性
	 * 
	 */
	public static final IPropertyInfo<ICostStructureNodeItems> PROPERTY_COSTSTRUCTURENODEITEMS = registerProperty(
			PROPERTY_COSTSTRUCTURENODEITEMS_NAME, ICostStructureNodeItems.class, MY_CLASS);

	/**
	 * 获取-费用结构-节点项目集合
	 * 
	 * @return 值
	 */
	@XmlElementWrapper(name = PROPERTY_COSTSTRUCTURENODEITEMS_NAME)
	@XmlElement(name = CostStructureNodeItem.BUSINESS_OBJECT_NAME, type = CostStructureNodeItem.class)
	public final ICostStructureNodeItems getCostStructureNodeItems() {
		return this.getProperty(PROPERTY_COSTSTRUCTURENODEITEMS);
	}

	/**
	 * 设置-费用结构-节点项目集合
	 * 
	 * @param value 值
	 */
	public final void setCostStructureNodeItems(ICostStructureNodeItems value) {
		this.setProperty(PROPERTY_COSTSTRUCTURENODEITEMS, value);
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
		return this.getLineId();
	}

	/**
	 * 初始化数据
	 */
	@Override
	protected void initialize() {
		super.initialize();// 基类初始化，不可去除
		this.setCostStructureNodeItems(new CostStructureNodeItems(this));
		this.setCostStructureNodes(new CostStructureNodes(this));
		this.setObjectCode(MyConfiguration.applyVariables(BUSINESS_OBJECT_CODE));
		this.setStatus(emCostStatus.OPEN);

	}
	

	/**
	 * 属性名称-项目的行总计-预算
	 */
	private static final String PROPERTY_BUDGETITEMTOTAL_NAME = "BudgetItemTotal";

	/**
	 * 项目的行总计-预算 属性
	 */
	public static final IPropertyInfo<BigDecimal> PROPERTY_BUDGETITEMTOTAL = registerProperty(
			PROPERTY_BUDGETITEMTOTAL_NAME, BigDecimal.class, MY_CLASS);

	/**
	 * 获取-项目的行总计-预算
	 * 
	 * @return 值
	 */
	public final BigDecimal getBudgetItemTotal() {
		return this.getProperty(PROPERTY_BUDGETITEMTOTAL);
	}

	/**
	 * 设置-项目的行总计-预算
	 * 
	 * @param value 值
	 */
	final void setBudgetItemTotal(BigDecimal value) {
		this.setProperty(PROPERTY_BUDGETITEMTOTAL, value);
	}

	/**
	 * 属性名称-节点的行总计-预算
	 */
	private static final String PROPERTY_BUDGETNODETOTAL_NAME = "BudgetNodeTotal";

	/**
	 * 节点的行总计-预算 属性
	 */
	public static final IPropertyInfo<BigDecimal> PROPERTY_BUDGETNODETOTAL = registerProperty(
			PROPERTY_BUDGETNODETOTAL_NAME, BigDecimal.class, MY_CLASS);

	/**
	 * 获取-节点的行总计-预算
	 * 
	 * @return 值
	 */
	public final BigDecimal getBudgetNodeTotal() {
		return this.getProperty(PROPERTY_BUDGETNODETOTAL);
	}

	/**
	 * 设置-节点的行总计-预算
	 * 
	 * @param value 值
	 */
	final void setBudgetNodeTotal(BigDecimal value) {
		this.setProperty(PROPERTY_BUDGETNODETOTAL, value);
	}

	/**
	 * 属性名称-项目的行总计-锁定
	 */
	private static final String PROPERTY_LOCKEDITEMTOTAL_NAME = "LockedItemTotal";

	/**
	 * 项目的行总计-锁定 属性
	 */
	public static final IPropertyInfo<BigDecimal> PROPERTY_LOCKEDITEMTOTAL = registerProperty(
			PROPERTY_LOCKEDITEMTOTAL_NAME, BigDecimal.class, MY_CLASS);

	/**
	 * 获取-项目的行总计-锁定
	 * 
	 * @return 值
	 */
	public final BigDecimal getLockedItemTotal() {
		return this.getProperty(PROPERTY_LOCKEDITEMTOTAL);
	}

	/**
	 * 设置-项目的行总计-锁定
	 * 
	 * @param value 值
	 */
	final void setLockedItemTotal(BigDecimal value) {
		this.setProperty(PROPERTY_LOCKEDITEMTOTAL, value);
	}

	/**
	 * 属性名称-节点的行总计-锁定
	 */
	private static final String PROPERTY_LOCKEDNODETOTAL_NAME = "LockedNodeTotal";

	/**
	 * 节点的行总计-锁定 属性
	 */
	public static final IPropertyInfo<BigDecimal> PROPERTY_LOCKEDNODETOTAL = registerProperty(
			PROPERTY_LOCKEDNODETOTAL_NAME, BigDecimal.class, MY_CLASS);

	/**
	 * 获取-节点的行总计-锁定
	 * 
	 * @return 值
	 */
	public final BigDecimal getLockedNodeTotal() {
		return this.getProperty(PROPERTY_LOCKEDNODETOTAL);
	}

	/**
	 * 设置-节点的行总计-锁定
	 * 
	 * @param value 值
	 */
	final void setLockedNodeTotal(BigDecimal value) {
		this.setProperty(PROPERTY_LOCKEDNODETOTAL, value);
	}

	/**
	 * 属性名称-项目的行总计-发生
	 */
	private static final String PROPERTY_INCURREDITEMTOTAL_NAME = "IncurredItemTotal";

	/**
	 * 项目的行总计-发生 属性
	 */
	public static final IPropertyInfo<BigDecimal> PROPERTY_INCURREDITEMTOTAL = registerProperty(
			PROPERTY_INCURREDITEMTOTAL_NAME, BigDecimal.class, MY_CLASS);

	/**
	 * 获取-项目的行总计-发生
	 * 
	 * @return 值
	 */
	public final BigDecimal getIncurredItemTotal() {
		return this.getProperty(PROPERTY_INCURREDITEMTOTAL);
	}

	/**
	 * 设置-项目的行总计-发生
	 * 
	 * @param value 值
	 */
	final void setIncurredItemTotal(BigDecimal value) {
		this.setProperty(PROPERTY_INCURREDITEMTOTAL, value);
	}

	/**
	 * 属性名称-节点的行总计-发生
	 */
	private static final String PROPERTY_INCURREDNODETOTAL_NAME = "IncurredNodeTotal";

	/**
	 * 节点的行总计-发生 属性
	 */
	public static final IPropertyInfo<BigDecimal> PROPERTY_INCURREDNODETOTAL = registerProperty(
			PROPERTY_INCURREDNODETOTAL_NAME, BigDecimal.class, MY_CLASS);

	/**
	 * 获取-节点的行总计-发生
	 * 
	 * @return 值
	 */
	public final BigDecimal getIncurredNodeTotal() {
		return this.getProperty(PROPERTY_INCURREDNODETOTAL);
	}

	/**
	 * 设置-节点的行总计-发生
	 * 
	 * @param value 值
	 */
	final void setIncurredNodeTotal(BigDecimal value) {
		this.setProperty(PROPERTY_INCURREDNODETOTAL, value);
	}

	@Override
	public void reset() {
		super.reset();
		this.setBudgetItemTotal(Decimal.ZERO);
		this.setBudgetNodeTotal(Decimal.ZERO);
		this.setLockedItemTotal(Decimal.ZERO);
		this.setLockedNodeTotal(Decimal.ZERO);
		this.setIncurredItemTotal(Decimal.ZERO);
		this.setIncurredNodeTotal(Decimal.ZERO);
	}

	@Override
	protected IBusinessRule[] registerRules() {
		// 注册的业务规则
		return new IBusinessRule[] {
				// 计算项目-行总计-预算
				new BusinessRuleSumElements(PROPERTY_BUDGETITEMTOTAL , PROPERTY_COSTSTRUCTURENODEITEMS,
						CostStructureNodeItem.PROPERTY_BUDGET),
				// 计算节点-行总计-预算
				new BusinessRuleSumElements(PROPERTY_BUDGETNODETOTAL , PROPERTY_COSTSTRUCTURENODES,
						CostStructureNode.PROPERTY_BUDGET),
				// 计算合计 预算
				new BusinessRuleSummation(CostStructureNode.PROPERTY_BUDGET,
						 CostStructureNode.PROPERTY_BUDGETNODETOTAL,CostStructureNode.PROPERTY_BUDGETITEMTOTAL),

				// 计算项目-行总计-锁定
				new BusinessRuleSumElements(PROPERTY_LOCKEDITEMTOTAL , PROPERTY_COSTSTRUCTURENODEITEMS,
						CostStructureNodeItem.PROPERTY_LOCKED),
				// 计算节点-行总计-锁定
				new BusinessRuleSumElements(PROPERTY_LOCKEDNODETOTAL , PROPERTY_COSTSTRUCTURENODES,
						CostStructureNode.PROPERTY_LOCKED),
				// 计算合计 锁定
				new BusinessRuleSummation(CostStructureNode.PROPERTY_LOCKED,
						 CostStructureNode.PROPERTY_LOCKEDNODETOTAL,CostStructureNode.PROPERTY_LOCKEDITEMTOTAL),
				
				// 计算项目-行总计-消耗
				new BusinessRuleSumElements(PROPERTY_INCURREDITEMTOTAL , PROPERTY_COSTSTRUCTURENODEITEMS,
						CostStructureNodeItem.PROPERTY_INCURRED),
				// 计算节点-行总计-消耗
				new BusinessRuleSumElements(PROPERTY_INCURREDNODETOTAL , PROPERTY_COSTSTRUCTURENODES,
						CostStructureNode.PROPERTY_INCURRED),
				// 计算合计 消耗
				new BusinessRuleSummation(CostStructureNode.PROPERTY_INCURRED,
						 CostStructureNode.PROPERTY_INCURREDNODETOTAL,CostStructureNode.PROPERTY_INCURREDITEMTOTAL),
				
				// 超出检查
				new BusinessRulePreventOver(CostStructureNode.PROPERTY_PREVENTOVER, CostStructureNode.PROPERTY_BUDGET,
						CostStructureNode.PROPERTY_LOCKED, CostStructureNode.PROPERTY_INCURRED,
						CostStructureNode.PROPERTY_NAME)

		};
	}

}
