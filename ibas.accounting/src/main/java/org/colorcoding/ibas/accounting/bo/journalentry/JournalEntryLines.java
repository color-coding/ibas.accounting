package org.colorcoding.ibas.accounting.bo.journalentry;

import java.beans.PropertyChangeEvent;

import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.accounting.MyConfiguration;
import org.colorcoding.ibas.bobas.bo.BusinessObjects;
import org.colorcoding.ibas.bobas.common.ICriteria;

/**
 * 日记账分录-行 集合
 */
@XmlType(name = JournalEntryLines.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@XmlSeeAlso({ JournalEntryLine.class })
public class JournalEntryLines extends BusinessObjects<IJournalEntryLine, IJournalEntry> implements IJournalEntryLines {

	/**
	 * 业务对象名称
	 */
	public static final String BUSINESS_OBJECT_NAME = "JournalEntryLines";

	/**
	 * 序列化版本标记
	 */
	private static final long serialVersionUID = 5705366577026383161L;

	/**
	 * 构造方法
	 */
	public JournalEntryLines() {
		super();
	}

	/**
	 * 构造方法
	 * 
	 * @param parent 父项对象
	 */
	public JournalEntryLines(IJournalEntry parent) {
		super(parent);
	}

	/**
	 * 元素类型
	 */
	public Class<?> getElementType() {
		return JournalEntryLine.class;
	}

	/**
	 * 创建日记账分录-行
	 * 
	 * @return 日记账分录-行
	 */
	public IJournalEntryLine create() {
		IJournalEntryLine item = new JournalEntryLine();
		if (this.add(item)) {
			return item;
		}
		return null;
	}

	@Override
	protected void afterAddItem(IJournalEntryLine item) {
		super.afterAddItem(item);
	}

	@Override
	public ICriteria getElementCriteria() {
		ICriteria criteria = super.getElementCriteria();
		return criteria;
	}

	@Override
	protected void onParentPropertyChanged(PropertyChangeEvent evt) {
		super.onParentPropertyChanged(evt);
	}
}
