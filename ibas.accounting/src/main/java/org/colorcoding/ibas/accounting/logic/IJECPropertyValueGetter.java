package org.colorcoding.ibas.accounting.logic;

/**
 * 分录内容获取属性值
 */
public interface IJECPropertyValueGetter {

	/**
	 * 获取值
	 * 
	 * @param property 属性名称
	 * @return
	 */
	Object getValue(String property);
}
