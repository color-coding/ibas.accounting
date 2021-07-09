package org.colorcoding.ibas.accounting.data;

import org.colorcoding.ibas.bobas.mapping.Value;

public enum emJournalCategory {

	/** 增加 */
	@Value(value = "I")
	INCREASE,
	/** 锁定 */
	@Value(value = "L")
	LOCK,
	/** 消耗 */
	@Value(value = "C")
	CONSUME
}
