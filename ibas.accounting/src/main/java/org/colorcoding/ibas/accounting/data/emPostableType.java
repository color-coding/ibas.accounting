package org.colorcoding.ibas.accounting.data;

import org.colorcoding.ibas.bobas.common.Value;

/**
 * 传递类型
 */
public enum emPostableType {

	/** 标题 */
	@Value(value = "N")
	TITLE,
	/** 激活 */
	@Value(value = "Y")
	ACTIVE
}
