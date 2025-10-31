package org.colorcoding.ibas.accounting.logic;

import org.colorcoding.ibas.bobas.core.fields.IFieldData;
import org.colorcoding.ibas.bobas.core.fields.IManagedFields;

/**
 * 日记账分录内容，待计算
 */
public class JournalEntrySmartContent extends JournalEntryContent {

	public JournalEntrySmartContent(Object sourceData) {
		super(sourceData);
	}

	private IBusinessLogicServiceInformation service;

	protected final IBusinessLogicServiceInformation getService() {
		return service;
	}

	final void setService(IBusinessLogicServiceInformation service) {
		this.service = service;
	}

	public final static String VALUE_NULL = "$NULL$";

	/**
	 * 获取元数据属性值
	 * 
	 * @param property 属性
	 * @return 值，未找到时：$NULL$
	 */
	public Object getSourceDataPropertyValue(String property) {
		// 优先使用接口返回值
		if (this.getSourceData() instanceof IJECPropertyValueGetter) {
			Object ptyValue = ((IJECPropertyValueGetter) this.getSourceData()).getValue(property);
			if (ptyValue != null) {
				return ptyValue;
			}
		}
		// 自主查询属性名称值
		if (this.getSourceData() instanceof IManagedFields) {
			IFieldData fieldData = ((IManagedFields) this.getSourceData()).getField(property);
			if (fieldData != null && fieldData.getValue() != null) {
				return fieldData.getValue();
			}
		}
		return VALUE_NULL;
	}

	/**
	 * 计算金额（可重载）
	 */
	public void caculate() throws Exception {
	}
}
