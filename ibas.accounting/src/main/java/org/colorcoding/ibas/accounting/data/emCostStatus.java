package org.colorcoding.ibas.accounting.data;

import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.accounting.MyConfiguration;
import org.colorcoding.ibas.bobas.mapping.Value;

@XmlType(namespace = MyConfiguration.NAMESPACE_BO)
public enum emCostStatus {

	/** 打开 */
	@Value(value = "O")
	OPEN,
	/** 冻结 */
	@Value(value = "F")
	FROZEN,
	/** 关闭 */
	@Value(value = "C")
	CLOSED
}
