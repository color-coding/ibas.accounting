package org.colorcoding.ibas.accounting.logic;

import java.math.BigDecimal;

/**
 * 日记账分录内容
 */
public class JournalEntryContent {
	/**
	 * 种类
	 */
	public enum Category {
		/**
		 * 贷方
		 */
		Credit,
		/**
		 * 借方
		 */
		Debit,
	}

	public JournalEntryContent(Object sourceData) {
		this.setSourceData(sourceData);
		this.setCategory(Category.Credit);
	}

	/**
	 * 元数据
	 */
	private Object sourceData;

	public final Object getSourceData() {
		return sourceData;
	}

	private final void setSourceData(Object sourceData) {
		this.sourceData = sourceData;
	}

	private Category category;

	public final Category getCategory() {
		return category;
	}

	public final void setCategory(Category category) {
		this.category = category;
	}

	/**
	 * 分类账
	 */
	private String ledger;

	public final String getLedger() {
		return ledger;
	}

	public final void setLedger(String ledger) {
		this.ledger = ledger;
	}

	/**
	 * 金额
	 */
	private BigDecimal amount;

	public final BigDecimal getAmount() {
		return amount;
	}

	public final void setAmount(BigDecimal amount) {
		this.amount = amount;
	}

	/**
	 * 货币
	 */
	private String currency;

	public final String getCurrency() {
		return currency;
	}

	public final void setCurrency(String currency) {
		this.currency = currency;
	}

	/**
	 * 科目
	 */
	private String account;

	public final String getAccount() {
		return account;
	}

	final void setAccount(String account) {
		this.account = account;
	}

	/**
	 * 业务伙伴
	 */
	private String shortName;

	public final String getShortName() {
		return shortName;
	}

	public final void setShortName(String shortName) {
		this.shortName = shortName;
	}

	/**
	 * 复制一个对象
	 * 
	 * @return 新对象实例
	 */
	public JournalEntryContent duplicate() {
		JournalEntryContent nContent = new JournalEntryContent(this.getSourceData());
		nContent.setCategory(this.getCategory());
		nContent.setLedger(this.getLedger());
		nContent.setAmount(this.getAmount());
		nContent.setCurrency(this.getCurrency());
		nContent.setAccount(this.getAccount());
		nContent.setShortName(this.getShortName());
		return nContent;
	}

	@Override
	public String toString() {
		return String.format("{%s: %s %s %s}", this.getCategory(), this.getLedger(), this.getAmount(),
				this.getCurrency());
	}
}