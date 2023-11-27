package org.colorcoding.ibas.accounting.logic;

import java.util.Collection;

import org.colorcoding.ibas.accounting.bo.ledgeraccount.IPeriodLedgerAccountCondition;
import org.colorcoding.ibas.bobas.core.fields.IFieldData;
import org.colorcoding.ibas.bobas.core.fields.IManagedFields;
import org.colorcoding.ibas.bobas.data.ArrayList;
import org.colorcoding.ibas.bobas.data.emConditionRelationship;
import org.colorcoding.ibas.bobas.expression.IPropertyValueOperator;
import org.colorcoding.ibas.bobas.expression.IValueOperator;
import org.colorcoding.ibas.bobas.expression.JudgmentLinkItem;
import org.colorcoding.ibas.bobas.expression.JudmentOperation;

class JudgmentLink extends org.colorcoding.ibas.bobas.expression.JudgmentLink {

	public void parsingConditions(Collection<IPeriodLedgerAccountCondition> conditions) {
		// 判断无条件
		if (conditions == null || conditions.size() == 0) {
			return;
		}
		ArrayList<JudgmentLinkItem> jLinkItems = new ArrayList<JudgmentLinkItem>();
		for (IPeriodLedgerAccountCondition item : conditions) {
			JudgmentLinkItem jItem = new JudgmentLinkItem();
			jItem.setOpenBracket(0);
			jItem.setCloseBracket(0);
			if (item.getRelationship() == emConditionRelationship.NONE || item.getRelationship() == null) {
				jItem.setRelationship(JudmentOperation.AND);
			} else {
				jItem.setRelationship(JudmentOperation.valueOf(item.getRelationship()));
			}
			jItem.setOperation(JudmentOperation.valueOf(item.getOperation()));
			// 左边取值
			IPropertyValueOperator propertyValueOperator = this.createPropertyValueOperator();
			propertyValueOperator.setPropertyName(item.getPropertyName());
			jItem.setLeftOperter(propertyValueOperator);
			// 右边取值
			// 与值比较
			IValueOperator valueOperator = this.createValueOperator();
			valueOperator.setValue(item.getValue());
			jItem.setRightOperter(valueOperator);
			// 设置括号
			jItem.setOpenBracket(item.getBracketOpen());
			jItem.setCloseBracket(item.getBracketClose());
			jLinkItems.add(jItem);
		}
		super.setJudgmentItems(jLinkItems.toArray(new JudgmentLinkItem[] {}));
	}

	protected IPropertyValueOperator createPropertyValueOperator() {
		return new IPropertyValueOperator() {

			private Object value;

			@Override
			public Object getValue() {
				return this.value;
			}

			@Override
			public void setValue(Object value) {
				if (value instanceof JournalEntrySmartContent) {
					this.value = ((JournalEntrySmartContent) value).getSourceDataPropertyValue(this.getPropertyName());
				} else if (value instanceof JournalEntryContent) {
					Object sourceData = ((JournalEntryContent) value).getSourceData();
					if (sourceData instanceof IManagedFields) {
						IFieldData fieldData = ((IManagedFields) value).getField(this.getPropertyName());
						if (fieldData != null) {
							this.value = fieldData.getValue();
						}
					}
				}
				if (this.value == null) {
					this.value = JournalEntrySmartContent.VALUE_NULL;
				}
			}

			@Override
			public Class<?> getValueClass() {
				if (this.value != null) {
					return this.value.getClass();
				}
				return null;
			}

			private String propertyName;

			@Override
			public String getPropertyName() {
				return this.propertyName;
			}

			@Override
			public void setPropertyName(String value) {
				this.propertyName = value;
			}

		};
	}
}