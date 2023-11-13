package org.colorcoding.ibas.accounting.bo.ledgeraccount;

import java.beans.PropertyChangeEvent;

import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.accounting.MyConfiguration;
import org.colorcoding.ibas.bobas.bo.BusinessObjects;
import org.colorcoding.ibas.bobas.common.ICriteria;

/**
 * 期间-分类账-条件 集合
 */
@XmlType(name = PeriodLedgerAccountConditions.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@XmlSeeAlso({ PeriodLedgerAccountCondition.class })
public class PeriodLedgerAccountConditions extends BusinessObjects<IPeriodLedgerAccountCondition, IPeriodLedgerAccount>
		implements IPeriodLedgerAccountConditions {

	/**
	 * 业务对象名称
	 */
	public static final String BUSINESS_OBJECT_NAME = "PeriodLedgerAccountConditions";

	/**
	 * 序列化版本标记
	 */
	private static final long serialVersionUID = 5223635315354460960L;

	/**
	 * 构造方法
	 */
	public PeriodLedgerAccountConditions() {
		super();
	}

	/**
	 * 构造方法
	 * 
	 * @param parent 父项对象
	 */
	public PeriodLedgerAccountConditions(IPeriodLedgerAccount parent) {
		super(parent);
	}

	/**
	 * 元素类型
	 */
	public Class<?> getElementType() {
		return PeriodLedgerAccountCondition.class;
	}

	/**
	 * 创建期间-分类账-条件
	 * 
	 * @return 期间-分类账-条件
	 */
	public IPeriodLedgerAccountCondition create() {
		IPeriodLedgerAccountCondition item = new PeriodLedgerAccountCondition();
		if (this.add(item)) {
			return item;
		}
		return null;
	}

	@Override
	protected void afterAddItem(IPeriodLedgerAccountCondition item) {
		super.afterAddItem(item);
		// TODO 设置关联值
	}

	@Override
	public ICriteria getElementCriteria() {
		ICriteria criteria = super.getElementCriteria();
		// TODO 添加关联查询条件
		return criteria;
	}

	@Override
	protected void onParentPropertyChanged(PropertyChangeEvent evt) {
		super.onParentPropertyChanged(evt);
		// TODO 设置关联值
	}
}
