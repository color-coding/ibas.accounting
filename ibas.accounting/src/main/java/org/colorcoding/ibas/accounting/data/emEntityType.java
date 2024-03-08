package org.colorcoding.ibas.accounting.data;

import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.accounting.MyConfiguration;
import org.colorcoding.ibas.bobas.mapping.Value;

@XmlType(namespace = MyConfiguration.NAMESPACE_BO)
public enum emEntityType {

	/** 组织/部门 */
	@Value(value = "OG")
	ORGANIZATION,
	/** 项目 */
	@Value(value = "PJ")
	PROJECT
}
