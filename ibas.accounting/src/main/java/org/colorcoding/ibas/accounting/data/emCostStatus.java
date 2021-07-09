package org.colorcoding.ibas.accounting.data;

import org.colorcoding.ibas.bobas.mapping.Value;

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
