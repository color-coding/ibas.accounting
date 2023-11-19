package org.colorcoding.ibas.accounting.logic;

/**
 * 日记账分录内容，待计算
 */
public abstract class JournalEntrySmartContent extends JournalEntryContent {

	public JournalEntrySmartContent(Object sourceData) {
		super(sourceData);
	}

	private IBusinessLogicServiceInformation service;

	protected final IBusinessLogicServiceInformation getService() {
		return service;
	}

	final void setService(IBusinessLogicServiceInformation service) {
		this.service = service;
	}

	/**
	 * 计算金额
	 */
	public abstract void caculate();
}
