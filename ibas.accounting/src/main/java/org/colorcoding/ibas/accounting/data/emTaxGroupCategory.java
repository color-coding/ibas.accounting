package org.colorcoding.ibas.accounting.data;

import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.accounting.MyConfiguration;
import org.colorcoding.ibas.bobas.mapping.Value;

/**
 * 税收组类型
 * 
 * @author Niuren.Zhu
 *
 */
@XmlType(namespace = MyConfiguration.NAMESPACE_BO)
public enum emTaxGroupCategory {

	/**
	 * 销项税
	 */
	@Value(value = "O")
	OUTPUT,
	/**
	 * 进项税
	 */
	@Value(value = "I")
	INPUT,
	/** 
	 * 运费税
	 */
	@Value(value = "F")
	FREIGHT
}
