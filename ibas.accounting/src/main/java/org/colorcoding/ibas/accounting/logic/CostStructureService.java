package org.colorcoding.ibas.accounting.logic;

import java.math.BigDecimal;

import org.colorcoding.ibas.accounting.bo.costitem.CostItem;
import org.colorcoding.ibas.accounting.bo.costitem.ICostItem;
import org.colorcoding.ibas.accounting.bo.coststructure.CostStructure;
import org.colorcoding.ibas.accounting.bo.coststructure.ICostStructure;
import org.colorcoding.ibas.accounting.bo.coststructure.ICostStructureNode;
import org.colorcoding.ibas.accounting.bo.coststructure.ICostStructureNodeItem;
import org.colorcoding.ibas.accounting.data.DataConvert;
import org.colorcoding.ibas.accounting.data.emJournalCategory;
import org.colorcoding.ibas.accounting.repository.BORepositoryAccounting;
import org.colorcoding.ibas.bobas.common.ConditionOperation;
import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.i18n.I18N;
import org.colorcoding.ibas.bobas.logic.BusinessLogic;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.bobas.mapping.LogicContract;
import org.colorcoding.ibas.bobas.message.Logger;
import org.colorcoding.ibas.bobas.message.MessageLevel;

@LogicContract(ICostStructureContract.class)
public class CostStructureService extends BusinessLogic<ICostStructureContract, ICostStructure> {

	@Override
	protected ICostStructure fetchBeAffected(ICostStructureContract contract) {
		ICriteria criteria = new Criteria();
		ICondition condition = criteria.getConditions().create();
		condition.setAlias(CostStructure.PROPERTY_OBJECTKEY.getName());
		condition.setOperation(ConditionOperation.EQUAL);
		condition.setValue(contract.getStructure());

		ICostStructure structure = this.fetchBeAffected(criteria, ICostStructure.class);
		if (structure == null) {
			BORepositoryAccounting boRepository = new BORepositoryAccounting();
			boRepository.setRepository(super.getRepository());
			IOperationResult<ICostStructure> operationResult = boRepository.fetchCostStructure(criteria);
			if (operationResult.getError() != null) {
				throw new BusinessLogicException(operationResult.getError());
			}
			structure = operationResult.getResultObjects().firstOrDefault();
		}
		if (structure == null) {
			throw new BusinessLogicException(I18N.prop("msg_ac_coststructure_is_not_exist", contract.getStructure()));
		}
		return structure;
	}

	private ICostStructureNode fetchStructureStructureNode(ICostStructure parent, Integer node) {
		for (ICostStructureNode item : parent.getCostStructureNodes()) {
			ICostStructureNode cItem = this.fetchStructureStructureNode(item, node);
			if (cItem != null) {
				return cItem;
			}
		}
		return null;
	}

	private ICostStructureNode fetchStructureStructureNode(ICostStructureNode parent, Integer node) {
		if (Integer.compare(parent.getLineId(), node) == 0) {
			return parent;
		}
		for (ICostStructureNode item : parent.getCostStructureNodes()) {
			ICostStructureNode cItem = this.fetchStructureStructureNode(item, node);
			if (cItem != null) {
				return cItem;
			}
		}
		return null;
	}

	@Override
	protected void impact(ICostStructureContract contract) {
		ICostStructureNode node = this.fetchStructureStructureNode(this.getBeAffected(), contract.getStructureNode());
		if (node == null) {
			throw new BusinessLogicException(I18N.prop("msg_ac_coststructurenode_is_not_exist",
					this.getBeAffected().getName(), contract.getStructureNode()));
		}
		if (!DataConvert.isNullOrEmpty(contract.getItem())) {
			// 处理项目
			ICostStructureNodeItem nodeItem = node.getCostStructureNodeItems()
					.firstOrDefault(c -> c.getItem().equals(contract.getItem()));
			if (nodeItem == null) {
				String name = contract.getItem();
				Criteria criteria = new Criteria();
				criteria.setResultCount(1);
				ICondition condition = criteria.getConditions().create();
				condition.setAlias(CostItem.PROPERTY_CODE.getName());
				condition.setValue(name);
				BORepositoryAccounting boRepository = new BORepositoryAccounting();
				boRepository.setRepository(this.getRepository());
				for (ICostItem item : boRepository.fetchCostItem(criteria).getResultObjects()) {
					name = item.getName();
				}
				if (contract.getCategory() != emJournalCategory.INCREASE && node.getRestrictedItem() == emYesNo.YES) {
					throw new BusinessLogicException(I18N.prop("msg_ac_coststructurenode_not_allow_item",
							this.getBeAffected().getName(), node.getName(), name));
				}
				nodeItem = node.getCostStructureNodeItems().create();
				nodeItem.setAdditional(emYesNo.YES);
				nodeItem.setCurrency(node.getCurrency());
				nodeItem.setItem(contract.getItem());
				nodeItem.setName(name);
			}
			if (contract.getCategory() == emJournalCategory.CONSUME) {
				// 消耗费用
				BigDecimal amount = nodeItem.getIncurred();
				if (amount == null) {
					amount = Decimal.ZERO;
				}
				amount = amount.add(contract.getAmount());
				nodeItem.setIncurred(amount);
			} else if (contract.getCategory() == emJournalCategory.INCREASE) {
				// 增加预算
				BigDecimal amount = nodeItem.getBudget();
				if (amount == null) {
					amount = Decimal.ZERO;
				}
				amount = amount.add(contract.getAmount());
				nodeItem.setBudget(amount);

			} else if (contract.getCategory() == emJournalCategory.LOCK) {
				// 锁定费用
				BigDecimal amount = nodeItem.getLocked();
				if (amount == null) {
					amount = Decimal.ZERO;
				}
				amount = amount.add(contract.getAmount());
				nodeItem.setLocked(amount);
			} else {
				throw new BusinessLogicException(I18N.prop("msg_ac_operation_not_supported", contract.getCategory()));
			}
		}
		// 处理节点
		if (contract.getCategory() == emJournalCategory.CONSUME) {
			// 消耗费用
			BigDecimal amount = node.getIncurred();
			if (amount == null) {
				amount = Decimal.ZERO;
			}
			amount = amount.add(contract.getAmount());
			node.setIncurred(amount);
		} else if (contract.getCategory() == emJournalCategory.INCREASE) {
			// 增加预算
			BigDecimal amount = node.getBudget();
			if (amount == null) {
				amount = Decimal.ZERO;
			}
			amount = amount.add(contract.getAmount());
			node.setBudget(amount);
		} else if (contract.getCategory() == emJournalCategory.LOCK) {
			// 锁定费用
			BigDecimal amount = node.getLocked();
			if (amount == null) {
				amount = Decimal.ZERO;
			}
			amount = amount.add(contract.getAmount());
			node.setLocked(amount);
		} else {
			throw new BusinessLogicException(I18N.prop("msg_ac_operation_not_supported", contract.getCategory()));
		}
	}

	@Override
	protected void revoke(ICostStructureContract contract) {
		ICostStructureNode node = this.fetchStructureStructureNode(this.getBeAffected(), contract.getStructureNode());
		if (node == null) {
			Logger.log(MessageLevel.WARN, "logics: not found cost structure node [%s - %s].", contract.getStructure(),
					contract.getStructureNode());
			return;
		}
		if (!DataConvert.isNullOrEmpty(contract.getItem())) {
			// 处理项目
			ICostStructureNodeItem nodeItem = node.getCostStructureNodeItems()
					.firstOrDefault(c -> c.getItem().equals(contract.getItem()));
			if (nodeItem != null) {
				if (contract.getCategory() == emJournalCategory.CONSUME) {
					// 消耗费用
					BigDecimal amount = nodeItem.getIncurred();
					if (amount == null) {
						amount = Decimal.ZERO;
					}
					amount = amount.subtract(contract.getAmount());
					nodeItem.setIncurred(amount);
				} else if (contract.getCategory() == emJournalCategory.INCREASE) {
					// 增加预算
					BigDecimal amount = nodeItem.getBudget();
					if (amount == null) {
						amount = Decimal.ZERO;
					}
					amount = amount.subtract(contract.getAmount());
					nodeItem.setBudget(amount);

				} else if (contract.getCategory() == emJournalCategory.LOCK) {
					// 锁定费用
					BigDecimal amount = nodeItem.getLocked();
					if (amount == null) {
						amount = Decimal.ZERO;
					}
					amount = amount.subtract(contract.getAmount());
					nodeItem.setLocked(amount);
				} else {
					throw new BusinessLogicException(
							I18N.prop("msg_ac_operation_not_supported", contract.getCategory()));
				}
			} else {
				Logger.log(MessageLevel.WARN, "logics: not found cost structure node item [%s - %s - %s].",
						contract.getStructure(), contract.getStructureNode(), contract.getItem());
			}
		}
		// 处理节点
		if (contract.getCategory() == emJournalCategory.CONSUME) {
			// 消耗费用
			BigDecimal amount = node.getIncurred();
			if (amount == null) {
				amount = Decimal.ZERO;
			}
			amount = amount.subtract(contract.getAmount());
			node.setIncurred(amount);
		} else if (contract.getCategory() == emJournalCategory.INCREASE) {
			// 增加预算
			BigDecimal amount = node.getBudget();
			if (amount == null) {
				amount = Decimal.ZERO;
			}
			amount = amount.subtract(contract.getAmount());
			node.setBudget(amount);
		} else if (contract.getCategory() == emJournalCategory.LOCK) {
			// 锁定费用
			BigDecimal amount = node.getLocked();
			if (amount == null) {
				amount = Decimal.ZERO;
			}
			amount = amount.subtract(contract.getAmount());
			node.setLocked(amount);
		} else {
			throw new BusinessLogicException(I18N.prop("msg_ac_operation_not_supported", contract.getCategory()));
		}
	}

}