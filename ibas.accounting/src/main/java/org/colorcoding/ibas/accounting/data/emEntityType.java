package org.colorcoding.ibas.accounting.data;

import org.colorcoding.ibas.bobas.mapping.Value;

public enum emEntityType {

	/** 组织/部门 */
	@Value(value = "OG")
	ORGANIZATION,
	/** 项目 */
	@Value(value = "PJ")
	PROJECT
}
