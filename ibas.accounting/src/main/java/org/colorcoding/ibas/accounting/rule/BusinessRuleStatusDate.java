package org.colorcoding.ibas.accounting.rule;

import org.colorcoding.ibas.bobas.core.IPropertyInfo;
import org.colorcoding.ibas.bobas.data.DateTime;
import org.colorcoding.ibas.bobas.data.emDocumentStatus;
import org.colorcoding.ibas.bobas.i18n.I18N;
import org.colorcoding.ibas.bobas.rule.BusinessRuleCommon;

public class BusinessRuleStatusDate extends BusinessRuleCommon {

	protected BusinessRuleStatusDate() {
		this.setName(I18N.prop("msg_ac_business_rule_status_date"));
	}

	/**
	 * 构造方案
	 * 
	 * @param status    状态
	 * @param startDate 开始日期
	 * @param closeDate 结束日期
	 */
	public BusinessRuleStatusDate(IPropertyInfo<emDocumentStatus> status, IPropertyInfo<DateTime> startDate,
			IPropertyInfo<DateTime> closeDate) {
		this();
		this.setStatus(status);
		this.setStartDate(startDate);
		this.setCloseDate(closeDate);
		// 要输入的参数
		this.getInputProperties().add(this.getStatus());
		this.getInputProperties().add(this.getStartDate());
		this.getInputProperties().add(this.getCloseDate());
		// 输出
		this.getAffectedProperties().add(this.getStartDate());
		this.getAffectedProperties().add(this.getCloseDate());
	}

	private IPropertyInfo<emDocumentStatus> status;

	protected final IPropertyInfo<emDocumentStatus> getStatus() {
		return status;
	}

	protected final void setStatus(IPropertyInfo<emDocumentStatus> status) {
		this.status = status;
	}

	private IPropertyInfo<DateTime> startDate;

	protected final IPropertyInfo<DateTime> getStartDate() {
		return startDate;
	}

	protected final void setStartDate(IPropertyInfo<DateTime> startDate) {
		this.startDate = startDate;
	}

	private IPropertyInfo<DateTime> closeDate;

	protected final IPropertyInfo<DateTime> getCloseDate() {
		return closeDate;
	}

	protected final void setCloseDate(IPropertyInfo<DateTime> closeDate) {
		this.closeDate = closeDate;
	}

	@Override
	protected void execute(BusinessRuleContext context) throws Exception {
		emDocumentStatus status = (emDocumentStatus) context.getInputValues().get(this.getStatus());
		if (status == emDocumentStatus.RELEASED) {
			Object date = context.getInputValues().get((this.getStartDate()));
			if (date == null || DateTime.MIN_VALUE.equals(date) || DateTime.MAX_VALUE.equals(date)) {
				context.getOutputValues().put(this.getStartDate(), DateTime.getToday());
			}
		} else if (status == emDocumentStatus.FINISHED || status == emDocumentStatus.CLOSED) {
			Object date = context.getInputValues().get((this.getCloseDate()));
			if (date == null || DateTime.MIN_VALUE.equals(date) || DateTime.MAX_VALUE.equals(date)) {
				context.getOutputValues().put(this.getCloseDate(), DateTime.getToday());
			}
		}
	}

}
