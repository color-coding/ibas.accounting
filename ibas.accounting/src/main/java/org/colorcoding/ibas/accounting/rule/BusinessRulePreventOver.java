package org.colorcoding.ibas.accounting.rule;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.core.IPropertyInfo;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.i18n.I18N;
import org.colorcoding.ibas.bobas.rule.BusinessRuleCommon;

public class BusinessRulePreventOver extends BusinessRuleCommon {

	protected BusinessRulePreventOver() {
		this.setName(I18N.prop("msg_ac_business_rule_prevent_over"));
	}

	/**
	 * 构造方案
	 * 
	 * @param prevent  是否预算控制
	 * @param budget   预算金额
	 * @param locked   锁定金额
	 * @param incurred 发生金额
	 * @param name     描述
	 */
	public BusinessRulePreventOver(IPropertyInfo<emYesNo> prevent, IPropertyInfo<BigDecimal> budget,
			IPropertyInfo<BigDecimal> locked, IPropertyInfo<BigDecimal> incurred, IPropertyInfo<String> name) {
		this();
		this.setPrevent(prevent);
		this.setBudget(budget);
		this.setIncurred(incurred);
		this.setLocked(locked);
		this.setTitle(name);
		// 要输入的参数
		this.getInputProperties().add(this.getPrevent());
		this.getInputProperties().add(this.getBudget());
		this.getInputProperties().add(this.getIncurred());
		this.getInputProperties().add(this.getLocked());
		this.getInputProperties().add(this.getTitle());
	}

	private IPropertyInfo<emYesNo> prevent;

	public final IPropertyInfo<emYesNo> getPrevent() {
		return prevent;
	}

	public final void setPrevent(IPropertyInfo<emYesNo> prevent) {
		this.prevent = prevent;
	}

	private IPropertyInfo<BigDecimal> budget;

	public final IPropertyInfo<BigDecimal> getBudget() {
		return budget;
	}

	public final void setBudget(IPropertyInfo<BigDecimal> budget) {
		this.budget = budget;
	}

	private IPropertyInfo<BigDecimal> locked;

	public final IPropertyInfo<BigDecimal> getLocked() {
		return locked;
	}

	public final void setLocked(IPropertyInfo<BigDecimal> locked) {
		this.locked = locked;
	}

	private IPropertyInfo<BigDecimal> incurred;

	public final IPropertyInfo<BigDecimal> getIncurred() {
		return incurred;
	}

	public final void setIncurred(IPropertyInfo<BigDecimal> incurred) {
		this.incurred = incurred;
	}

	private IPropertyInfo<String> title;

	public final IPropertyInfo<String> getTitle() {
		return title;
	}

	public final void setTitle(IPropertyInfo<String> title) {
		this.title = title;
	}

	@Override
	protected void execute(BusinessRuleContext context) throws Exception {
		emYesNo prevent = (emYesNo) context.getInputValues().get(this.getPrevent());
		if (prevent == emYesNo.YES) {
			BigDecimal budget = (BigDecimal) context.getInputValues().get(this.getBudget());
			BigDecimal locked = (BigDecimal) context.getInputValues().get(this.getLocked());
			BigDecimal incurred = (BigDecimal) context.getInputValues().get(this.getIncurred());
			BigDecimal total = incurred.add(locked);
			if (budget.compareTo(total) < 0) {
				throw new Exception(
						I18N.prop("msg_ac_coststructure_over_budget", context.getInputValues().get(this.getTitle())));
			}
		}
	}

}
