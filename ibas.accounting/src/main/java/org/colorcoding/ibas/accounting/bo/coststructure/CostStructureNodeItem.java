package org.colorcoding.ibas.accounting.bo.coststructure;

import java.math.BigDecimal;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.accounting.MyConfiguration;
import org.colorcoding.ibas.accounting.rule.BusinessRulePreventOver;
import org.colorcoding.ibas.bobas.bo.BusinessObject;
import org.colorcoding.ibas.bobas.bo.IBOUserFields;
import org.colorcoding.ibas.bobas.core.IPropertyInfo;
import org.colorcoding.ibas.bobas.data.DateTime;
import org.colorcoding.ibas.bobas.common.Decimals;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.db.DbField;
import org.colorcoding.ibas.bobas.db.DbFieldType;
import org.colorcoding.ibas.bobas.rule.IBusinessRule;

/**
 * 费用结构-节点项目
 * 
 */
@XmlAccessorType(XmlAccessType.NONE)
@XmlType(name = CostStructureNodeItem.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
public class CostStructureNodeItem extends BusinessObject<CostStructureNodeItem>
		implements ICostStructureNodeItem, IBOUserFields {

	/**
	 * 序列化版本标记
	 */
	private static final long serialVersionUID = 4048948622572466600L;

	/**
	 * 当前类型
	 */
	private static final Class<?> MY_CLASS = CostStructureNodeItem.class;

	/**
	 * 数据库表
	 */
	public static final String DB_TABLE_NAME = "${Company}_AC_CST11";

	/**
	 * 业务对象编码
	 */
	public static final String BUSINESS_OBJECT_CODE = "${Company}_AC_COSTSTRU";

	/**
	 * 业务对象名称
	 */
	public static final String BUSINESS_OBJECT_NAME = "CostStructureNodeItem";

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
	 * 属性名称-节点
	 */
	private static final String PROPERTY_NODEID_NAME = "NodeId";

	/**
	 * 节点 属性
	 */
	@DbField(name = "NodeId", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<Integer> PROPERTY_NODEID = registerProperty(PROPERTY_NODEID_NAME, Integer.class,
			MY_CLASS);

	/**
	 * 获取-节点
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_NODEID_NAME)
	public final Integer getNodeId() {
		return this.getProperty(PROPERTY_NODEID);
	}

	/**
	 * 设置-节点
	 * 
	 * @param value 值
	 */
	public final void setNodeId(Integer value) {
		this.setProperty(PROPERTY_NODEID, value);
	}

	/**
	 * 属性名称-项目
	 */
	private static final String PROPERTY_ITEM_NAME = "Item";

	/**
	 * 项目 属性
	 */
	@DbField(name = "Item", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_ITEM = registerProperty(PROPERTY_ITEM_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-项目
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_ITEM_NAME)
	public final String getItem() {
		return this.getProperty(PROPERTY_ITEM);
	}

	/**
	 * 设置-项目
	 * 
	 * @param value 值
	 */
	public final void setItem(String value) {
		this.setProperty(PROPERTY_ITEM, value);
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
	 * 属性名称-追加的项目
	 */
	private static final String PROPERTY_ADDITIONAL_NAME = "Additional";

	/**
	 * 追加的项目 属性
	 */
	@DbField(name = "Additional", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<emYesNo> PROPERTY_ADDITIONAL = registerProperty(PROPERTY_ADDITIONAL_NAME,
			emYesNo.class, MY_CLASS);

	/**
	 * 获取-追加的项目
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_ADDITIONAL_NAME)
	public final emYesNo getAdditional() {
		return this.getProperty(PROPERTY_ADDITIONAL);
	}

	/**
	 * 设置-追加的项目
	 * 
	 * @param value 值
	 */
	public final void setAdditional(emYesNo value) {
		this.setProperty(PROPERTY_ADDITIONAL, value);
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

	@Override
	protected IBusinessRule[] registerRules() {
		// 注册的业务规则
		return new IBusinessRule[] {
				// 超出检查
				new BusinessRulePreventOver(CostStructureNodeItem.PROPERTY_PREVENTOVER,
						CostStructureNodeItem.PROPERTY_BUDGET, CostStructureNodeItem.PROPERTY_LOCKED,
						CostStructureNodeItem.PROPERTY_INCURRED, CostStructureNodeItem.PROPERTY_NAME)

		};
	}

	@Override
	protected void reset() {
		super.reset();
		this.setBudget(Decimals.VALUE_ZERO);
		this.setIncurred(Decimals.VALUE_ZERO);
		this.setLocked(Decimals.VALUE_ZERO);
	}
}
