package org.colorcoding.ibas.accounting.data;

import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.accounting.MyConfiguration;
import org.colorcoding.ibas.bobas.mapping.Value;

/**
 * 期间状态
 * 
 * @author Niuren.Zhu
 *
 */
@XmlType(namespace = MyConfiguration.NAMESPACE_BO)
public enum emPeriodStatus {
	/**
	 * 打开
	 */
	@Value(value = "O")
	OPEN,
	/**
	 * 锁定
	 */
	@Value(value = "L")
	LOCKED,
	/**
	 * 结算
	 */
	@Value(value = "C")
	CLOSED
}
