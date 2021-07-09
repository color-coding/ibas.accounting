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
 * 费用结构-节点 集合
 */
@XmlType(name = CostStructureNodes.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@XmlSeeAlso({ CostStructureNode.class })
public class CostStructureNodes extends BusinessObjects<ICostStructureNode, ICostStructureNodeParent>
		implements ICostStructureNodes {

	/**
	 * 业务对象名称
	 */
	public static final String BUSINESS_OBJECT_NAME = "CostStructureNodes";

	/**
	 * 序列化版本标记
	 */
	private static final long serialVersionUID = 7054327511886134613L;

	/**
	 * 构造方法
	 */
	public CostStructureNodes() {
		super();
	}

	/**
	 * 构造方法
	 * 
	 * @param parent 父项对象
	 */
	public CostStructureNodes(ICostStructureNodeParent parent) {
		super(parent);
	}

	/**
	 * 元素类型
	 */
	public Class<?> getElementType() {
		return CostStructureNode.class;
	}

	/**
	 * 创建费用结构-节点
	 * 
	 * @return 费用结构-节点
	 */
	public ICostStructureNode create() {
		ICostStructureNode item = new CostStructureNode();
		if (this.add(item)) {
			return item;
		}
		return null;
	}

	@Override
	protected void afterAddItem(ICostStructureNode item) {
		super.afterAddItem(item);
		item.setParentId(this.getParent().getId());
	}

	@Override
	public ICriteria getElementCriteria() {
		ICriteria criteria = new Criteria();
		ICondition condition = criteria.getConditions().create();
		condition.setAlias(CostStructureNode.PROPERTY_OBJECTKEY.getName());
		condition.setValue(this.getParent().getObjectKey());
		condition = criteria.getConditions().create();
		condition.setAlias(CostStructureNode.PROPERTY_PARENTID.getName());
		condition.setValue(this.getParent().getId());
		ISort sort = criteria.getSorts().create();
		sort.setAlias(CostStructureNode.PROPERTY_OBJECTKEY.getName());
		sort.setSortType(SortType.ASCENDING);
		sort = criteria.getSorts().create();
		sort.setAlias(CostStructureNode.PROPERTY_VISORDER.getName());
		sort.setSortType(SortType.ASCENDING);
		return criteria;
	}

	@Override
	protected void onParentPropertyChanged(PropertyChangeEvent evt) {
		super.onParentPropertyChanged(evt);
		if (evt.getPropertyName().equalsIgnoreCase("LineId")) {
			for (ICostStructureNode item : this) {
				item.setParentId(this.getParent().getId());
			}
		}
	}
}
