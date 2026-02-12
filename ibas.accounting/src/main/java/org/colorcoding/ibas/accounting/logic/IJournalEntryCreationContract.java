package org.colorcoding.ibas.accounting.logic;

import org.colorcoding.ibas.bobas.data.DateTime;
import org.colorcoding.ibas.bobas.common.Decimals;
import org.colorcoding.ibas.bobas.logic.IBusinessLogicContract;

/**
 * 分录创建契约
 * 
 * @author Niuren.Zhu
 *
 */
public interface IJournalEntryCreationContract extends IBusinessLogicContract {

	/**
	 * 抵消逻辑
	 * 
	 * @return 值
	 */
	boolean isOffsetting();

	/**
	 * 分支
	 * 
	 * @return 值
	 */
	String getBranch();

	/**
	 * 基于单据类型
	 *
	 * @return
	 */
	String getBaseDocumentType();

	/**
	 * 基于单据号
	 *
	 * @return
	 */
	Integer getBaseDocumentEntry();

	/**
	 * 基于单据行号
	 *
	 * @return
	 */
	default Integer getBaseDocumentLineId() {
		return null;
	}

	/**
	 * 凭证日期
	 * 
	 * @return 值
	 */
	DateTime getDocumentDate();

	/**
	 * 参考1
	 * 
	 * @return 值
	 */
	default String getReference1() {
		return null;
	}

	/**
	 * 参考2
	 * 
	 * @return 值
	 */
	default String getReference2() {
		return null;
	}

	/**
	 * 合并内容方法
	 * 
	 * @return 值
	 */
	default String getMergingMethod() {
		return null;
	}

	/**
	 * 分录内容
	 * 
	 * @return
	 */
	JournalEntryContent[] getContents();

	/**
	 * 默认反向内容方法，值的负数
	 * 
	 * 注意：重写此方法时，需要值需要新实例
	 * 
	 * @param contents 内容
	 * @return
	 */
	default JournalEntryContent[] reverseContents(JournalEntryContent[] contents) {
		if (contents == null) {
			contents = new JournalEntryContent[0];
		}
		for (JournalEntryContent item : contents) {
			if (item == null) {
				continue;
			}
			if (item.getAmount() == null) {
				continue;
			}
			if (Decimals.isZero(item.getAmount())) {
				continue;
			}
			item.setAmount(item.getAmount().negate());
		}
		return contents;
	}
}
