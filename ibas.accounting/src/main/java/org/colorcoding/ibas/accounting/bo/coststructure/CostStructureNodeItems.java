package org.colorcoding.ibas.accounting.bo.coststructure;

import java.beans.PropertyChangeEvent;

import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.accounting.MyConfiguration;
import org.colorcoding.ibas.bobas.bo.BusinessObjects;
import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.ISort;
import org.colorcoding.ibas.bobas.common.SortType;

/**
 * 费用结构-节点项目 集合
 */
@XmlType(name = CostStructureNodeItems.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@XmlSeeAlso({ CostStructureNodeItem.class })
public class CostStructureNodeItems extends BusinessObjects<ICostStructureNodeItem, ICostStructureNode>
		implements ICostStructureNodeItems {

	/**
	 * 业务对象名称
	 */
	public static final String BUSINESS_OBJECT_NAME = "CostStructureNodeItems";

	/**
	 * 序列化版本标记
	 */
	private static final long serialVersionUID = -2039024700027236197L;

	/**
	 * 构造方法
	 */
	public CostStructureNodeItems() {
		super();
	}

	/**
	 * 构造方法
	 * 
	 * @param parent 父项对象
	 */
	public CostStructureNodeItems(ICostStructureNode parent) {
		super(parent);
	}

	/**
	 * 元素类型
	 */
	public Class<?> getElementType() {
		return CostStructureNodeItem.class;
	}

	/**
	 * 创建费用结构-节点项目
	 * 
	 * @return 费用结构-节点项目
	 */
	public ICostStructureNodeItem create() {
		ICostStructureNodeItem item = new CostStructureNodeItem();
		if (this.add(item)) {
			return item;
		}
		return null;
	}

	@Override
	protected void afterAddItem(ICostStructureNodeItem item) {
		super.afterAddItem(item);
		item.setNodeId(this.getParent().getLineId());
		item.setCurrency(this.getParent().getCurrency());
	}

	@Override
	public ICriteria getElementCriteria() {
		ICriteria criteria = new Criteria();
		ICondition condition = criteria.getConditions().create();
		condition.setAlias(CostStructureNodeItem.PROPERTY_OBJECTKEY.getName());
		condition.setValue(this.getParent().getObjectKey());
		condition = criteria.getConditions().create();
		condition.setAlias(CostStructureNodeItem.PROPERTY_NODEID.getName());
		condition.setValue(this.getParent().getLineId());
		ISort sort = criteria.getSorts().create();
		sort.setAlias(CostStructureNodeItem.PROPERTY_OBJECTKEY.getName());
		sort.setSortType(SortType.ASCENDING);
		sort = criteria.getSorts().create();
		sort.setAlias(CostStructureNodeItem.PROPERTY_NODEID.getName());
		sort.setSortType(SortType.ASCENDING);
		return criteria;
	}

	@Override
	protected void onParentPropertyChanged(PropertyChangeEvent evt) {
		super.onParentPropertyChanged(evt);
		if (evt.getPropertyName().equalsIgnoreCase("LineId")) {
			for (ICostStructureNodeItem item : this) {
				item.setNodeId(this.getParent().getLineId());
			}
		}
	}
}
