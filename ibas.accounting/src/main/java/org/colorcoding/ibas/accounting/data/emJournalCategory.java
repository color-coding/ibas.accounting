package org.colorcoding.ibas.accounting.data;

import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.accounting.MyConfiguration;
import org.colorcoding.ibas.bobas.common.Value;

@XmlType(namespace = MyConfiguration.NAMESPACE_BO)
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
