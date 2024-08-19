package org.colorcoding.ibas.accounting.repository;

import java.util.function.Function;

import org.colorcoding.ibas.accounting.MyConfiguration;
import org.colorcoding.ibas.accounting.bo.account.Account;
import org.colorcoding.ibas.accounting.bo.account.IAccount;
import org.colorcoding.ibas.accounting.bo.bank.Bank;
import org.colorcoding.ibas.accounting.bo.bank.BankAccount;
import org.colorcoding.ibas.accounting.bo.bank.IBank;
import org.colorcoding.ibas.accounting.bo.bank.IBankAccount;
import org.colorcoding.ibas.accounting.bo.branch.Branch;
import org.colorcoding.ibas.accounting.bo.branch.IBranch;
import org.colorcoding.ibas.accounting.bo.costiemjournal.CostItemJournal;
import org.colorcoding.ibas.accounting.bo.costiemjournal.ICostItemJournal;
import org.colorcoding.ibas.accounting.bo.costitem.CostItem;
import org.colorcoding.ibas.accounting.bo.costitem.ICostItem;
import org.colorcoding.ibas.accounting.bo.coststructure.CostStructure;
import org.colorcoding.ibas.accounting.bo.coststructure.ICostStructure;
import org.colorcoding.ibas.accounting.bo.coststructure.ICostStructureNode;
import org.colorcoding.ibas.accounting.bo.coststructure.ICostStructureNodeItem;
import org.colorcoding.ibas.accounting.bo.coststructure.ICostStructureNodes;
import org.colorcoding.ibas.accounting.bo.currency.Currency;
import org.colorcoding.ibas.accounting.bo.currency.CurrencyRate;
import org.colorcoding.ibas.accounting.bo.currency.ICurrency;
import org.colorcoding.ibas.accounting.bo.currency.ICurrencyRate;
import org.colorcoding.ibas.accounting.bo.dimension.Dimension;
import org.colorcoding.ibas.accounting.bo.dimension.IDimension;
import org.colorcoding.ibas.accounting.bo.journalentry.IJournalEntry;
import org.colorcoding.ibas.accounting.bo.journalentry.JournalEntry;
import org.colorcoding.ibas.accounting.bo.ledgeraccount.ILedgerAccount;
import org.colorcoding.ibas.accounting.bo.ledgeraccount.ILedgerConditionProperty;
import org.colorcoding.ibas.accounting.bo.ledgeraccount.IPeriodLedgerAccount;
import org.colorcoding.ibas.accounting.bo.ledgeraccount.LedgerAccount;
import org.colorcoding.ibas.accounting.bo.ledgeraccount.LedgerConditionProperty;
import org.colorcoding.ibas.accounting.bo.ledgeraccount.PeriodLedgerAccount;
import org.colorcoding.ibas.accounting.bo.postingperiod.IPeriodCategory;
import org.colorcoding.ibas.accounting.bo.postingperiod.IPostingPeriod;
import org.colorcoding.ibas.accounting.bo.postingperiod.PeriodCategory;
import org.colorcoding.ibas.accounting.bo.postingperiod.PostingPeriod;
import org.colorcoding.ibas.accounting.bo.project.IProject;
import org.colorcoding.ibas.accounting.bo.project.Project;
import org.colorcoding.ibas.accounting.bo.taxgroup.ITaxGroup;
import org.colorcoding.ibas.accounting.bo.taxgroup.TaxGroup;
import org.colorcoding.ibas.accounting.data.emCostStatus;
import org.colorcoding.ibas.accounting.data.emJournalCategory;
import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.common.OperationResult;
import org.colorcoding.ibas.bobas.data.ArrayList;
import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.i18n.I18N;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.bobas.repository.BORepositoryServiceApplication;

/**
 * Accounting仓库
 */
public class BORepositoryAccounting extends BORepositoryServiceApplication
		implements IBORepositoryAccountingSvc, IBORepositoryAccountingApp {
	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-期间类型
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<PeriodCategory> fetchPeriodCategory(ICriteria criteria, String token) {
		return super.fetch(criteria, token, PeriodCategory.class);
	}

	/**
	 * 查询-期间类型（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<IPeriodCategory> fetchPeriodCategory(ICriteria criteria) {
		return new OperationResult<IPeriodCategory>(this.fetchPeriodCategory(criteria, this.getUserToken()));
	}

	/**
	 * 保存-期间类型
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<PeriodCategory> savePeriodCategory(PeriodCategory bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-期间类型（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<IPeriodCategory> savePeriodCategory(IPeriodCategory bo) {
		return new OperationResult<IPeriodCategory>(this.savePeriodCategory((PeriodCategory) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-过账期间
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<PostingPeriod> fetchPostingPeriod(ICriteria criteria, String token) {
		return super.fetch(criteria, token, PostingPeriod.class);
	}

	/**
	 * 查询-过账期间（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<IPostingPeriod> fetchPostingPeriod(ICriteria criteria) {
		return new OperationResult<IPostingPeriod>(this.fetchPostingPeriod(criteria, this.getUserToken()));
	}

	/**
	 * 保存-过账期间
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<PostingPeriod> savePostingPeriod(PostingPeriod bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-过账期间（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<IPostingPeriod> savePostingPeriod(IPostingPeriod bo) {
		return new OperationResult<IPostingPeriod>(this.savePostingPeriod((PostingPeriod) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-项目
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<Project> fetchProject(ICriteria criteria, String token) {
		return super.fetch(criteria, token, Project.class);
	}

	/**
	 * 查询-项目（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<IProject> fetchProject(ICriteria criteria) {
		return new OperationResult<IProject>(this.fetchProject(criteria, this.getUserToken()));
	}

	/**
	 * 保存-项目
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<Project> saveProject(Project bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-项目（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<IProject> saveProject(IProject bo) {
		return new OperationResult<IProject>(this.saveProject((Project) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-维度
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<Dimension> fetchDimension(ICriteria criteria, String token) {
		return super.fetch(criteria, token, Dimension.class);
	}

	/**
	 * 查询-维度（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<IDimension> fetchDimension(ICriteria criteria) {
		return new OperationResult<IDimension>(this.fetchDimension(criteria, this.getUserToken()));
	}

	/**
	 * 保存-维度
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<Dimension> saveDimension(Dimension bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-维度（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<IDimension> saveDimension(IDimension bo) {
		return new OperationResult<IDimension>(this.saveDimension((Dimension) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//

	/**
	 * 查询-税收组
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<TaxGroup> fetchTaxGroup(ICriteria criteria, String token) {
		return super.fetch(criteria, token, TaxGroup.class);
	}

	/**
	 * 查询-税收组（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<ITaxGroup> fetchTaxGroup(ICriteria criteria) {
		return new OperationResult<ITaxGroup>(this.fetchTaxGroup(criteria, this.getUserToken()));
	}

	/**
	 * 保存-税收组
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<TaxGroup> saveTaxGroup(TaxGroup bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-税收组（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<ITaxGroup> saveTaxGroup(ITaxGroup bo) {
		return new OperationResult<ITaxGroup>(this.saveTaxGroup((TaxGroup) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-费用结构
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<CostStructure> fetchCostStructure(ICriteria criteria, String token) {
		return super.fetch(criteria, token, CostStructure.class);
	}

	/**
	 * 查询-费用结构（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<ICostStructure> fetchCostStructure(ICriteria criteria) {
		return new OperationResult<ICostStructure>(this.fetchCostStructure(criteria, this.getUserToken()));
	}

	/**
	 * 保存-费用结构
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<CostStructure> saveCostStructure(CostStructure bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-费用结构（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<ICostStructure> saveCostStructure(ICostStructure bo) {
		return new OperationResult<ICostStructure>(this.saveCostStructure((CostStructure) bo, this.getUserToken()));
	}

	/**
	 * 结算-费用结构
	 * 
	 * @param structure 费用结构
	 * @param node      费用节点
	 * @param action    操作
	 * @return 操作结果
	 */
	public IOperationResult<ICostStructure> closeCostStructure(Integer structure, Integer node, emCostStatus action) {
		return new OperationResult<ICostStructure>(
				this.closeCostStructure(structure, node, action, this.getUserToken()));
	}

	/**
	 * 结算-费用结构
	 * 
	 * @param structure 费用结构
	 * @param node      费用节点
	 * @param action    操作
	 * @param token     口令
	 * @return 操作结果
	 */
	public OperationResult<CostStructure> closeCostStructure(Integer structure, Integer node, emCostStatus action,
			String token) {
		try {
			this.setUserToken(token);
			if (action == emCostStatus.FROZEN || action == null) {
				throw new BusinessLogicException(I18N.prop("msg_ac_operation_not_supported", action));
			}
			ICriteria criteria = new Criteria();
			ICondition condition = criteria.getConditions().create();
			condition.setAlias(CostStructure.PROPERTY_OBJECTKEY.getName());
			condition.setValue(structure);
			IOperationResult<ICostStructure> opRsltFetch = this.fetchCostStructure(criteria);
			if (opRsltFetch.getError() != null) {
				throw opRsltFetch.getError();
			}
			if (opRsltFetch.getResultObjects().isEmpty()) {
				throw new BusinessLogicException(I18N.prop("msg_ac_coststructure_is_not_exist", structure));
			}
			ICostStructure costStructure = opRsltFetch.getResultObjects().firstOrDefault();
			if (costStructure.getStatus() == action && action == emCostStatus.CLOSED) {
				throw new BusinessLogicException(
						I18N.prop("msg_ac_coststructurenode_already_closed", costStructure.getName()));
			}
			ArrayList<ICostItemJournal> journals = new ArrayList<>();
			if (node > 0) {
				// 结算节点
				Function<ICostStructureNodes, ICostStructureNode> closeNode = new Function<ICostStructureNodes, ICostStructureNode>() {

					@Override
					public ICostStructureNode apply(ICostStructureNodes nodes) {
						if (nodes == null || nodes.isEmpty()) {
							return null;
						}
						for (int i = 0; i < nodes.size(); i++) {
							ICostStructureNode item = nodes.get(i);
							if (item.getLineId().compareTo(node) == 0) {
								if (action == emCostStatus.CLOSED && item.getStatus() != emCostStatus.CLOSED
										&& costStructure.getTransferable() == emYesNo.YES) {
									// 需要结转预算
									if (item.getLocked().compareTo(Decimal.ZERO) > 0) {
										// 自动结转时，结转节点存在锁定金额不许结转
										throw new BusinessLogicException(I18N.prop(
												"msg_ac_coststructurenode_closed_locked_greater_zero", item.getName()));
									}
									ICostItemJournal journal = null;
									for (ICostStructureNodeItem nItem : item.getCostStructureNodeItems()) {
										journal = new CostItemJournal();
										journal.setBaseDocumentType(item.getObjectCode());
										journal.setBaseDocumentEntry(item.getObjectKey());
										journal.setBaseDocumentLineId(item.getLineId());
										journal.setStructure(item.getObjectKey());
										if (i >= 0 && i < nodes.size() - 1) {
											// 结算目标仅支持兄弟间
											ICostStructureNode target = nodes.get(i + 1);
											if (target != null && target.getStatus() != emCostStatus.CLOSED) {
												journal.setStructureNode(target.getLineId());
											}
										} else {
											// 不确定结转的目标

										}
										journal.setCategory(emJournalCategory.INCREASE);
										journal.setItem(nItem.getItem());
										journal.setAmount(nItem.getBudget().subtract(nItem.getLocked())
												.subtract(nItem.getIncurred()));
										journal.setCurrency(nItem.getCurrency());
										// 结转后预算金额 = 已发生金额， 最后一个不结转
										if (i < nodes.size() - 1) {
											nItem.setBudget(nItem.getIncurred());
										}
										if (journal.getAmount().compareTo(Decimal.ZERO) <= 0) {
											// 跳过可用金额小于等于0
											continue;
										}
										// 被结转节点，消耗预算金额
										journals.add(journal);
									}
								} else if (action != emCostStatus.CLOSED && item.getStatus() == emCostStatus.CLOSED) {
									// 查询已结转的记录
									ICriteria criteria = new Criteria();
									ICondition condition = criteria.getConditions().create();
									condition.setAlias(CostItemJournal.PROPERTY_BASEDOCUMENTTYPE.getName());
									condition.setValue(
											MyConfiguration.applyVariables(CostStructure.BUSINESS_OBJECT_CODE));
									condition = criteria.getConditions().create();
									condition.setAlias(CostItemJournal.PROPERTY_BASEDOCUMENTENTRY.getName());
									condition.setValue(item.getObjectKey());
									condition = criteria.getConditions().create();
									condition.setAlias(CostItemJournal.PROPERTY_BASEDOCUMENTLINEID.getName());
									condition.setValue(item.getLineId());
									for (ICostItemJournal costItemJournal : BORepositoryAccounting.this
											.fetchCostItemJournal(criteria).getResultObjects()) {
										// 删除已结转
										costItemJournal.delete();
										journals.add(costItemJournal);
									}
								}
								item.setStatus(action);
								return item;
							}
						}
						ICostStructureNode costStructureNode = null;
						for (ICostStructureNode item : nodes) {
							costStructureNode = this.apply(item.getCostStructureNodes());
							if (costStructureNode != null) {
								// 检查是否全状态
								if (item.getStatus() != action) {
									if (action == emCostStatus.CLOSED && item.getCostStructureNodes()
											.firstOrDefault(c -> c.getStatus() != action) == null) {
										item.setStatus(action);
									} else {
										item.setStatus(emCostStatus.OPEN);
									}
								}
								return costStructureNode;
							}
						}
						return null;
					}

				};
				ICostStructureNode costStructureNode = closeNode.apply(costStructure.getCostStructureNodes());
				if (costStructureNode == null) {
					throw new BusinessLogicException(
							I18N.prop("msg_ac_coststructurenode_is_not_exist", structure, node));
				}
				// 检查是否全状态
				if (costStructure.getStatus() != action) {
					if (action == emCostStatus.CLOSED && costStructure.getCostStructureNodes()
							.firstOrDefault(c -> c.getStatus() != action) == null) {
						costStructure.setStatus(action);
					} else {
						costStructure.setStatus(emCostStatus.OPEN);
					}
				}
			} else {
				// 结算结构
				/*
				 * 不改变节点状态，否则无法恢复
				 * 
				 * Consumer<ICostStructureNodes> closeNode = new Consumer<ICostStructureNodes>()
				 * {
				 * 
				 * @Override public void accept(ICostStructureNodes t) { for (ICostStructureNode
				 * item : t) { item.setStatus(emCostStatus.CLOSED);
				 * this.accept(item.getCostStructureNodes()); }
				 * 
				 * } }; closeNode.accept(costStructure.getCostStructureNodes());
				 */
				costStructure.setStatus(action);
			}
			boolean myTrans = false;
			try {
				myTrans = this.beginTransaction();
				IOperationResult<ICostStructure> opRsltSave = this.saveCostStructure(costStructure);
				if (opRsltSave.getError() != null) {
					throw opRsltSave.getError();
				}
				for (ICostItemJournal journal : journals) {
					if (Integer.compare(journal.getStructureNode() == null ? 0 : journal.getStructureNode(), 0) <= 0) {
						// 仅保存合法数据
						continue;
					}
					IOperationResult<ICostItemJournal> opRsltJournal = this.saveCostItemJournal(journal);
					if (opRsltJournal.getError() != null) {
						throw opRsltJournal.getError();
					}
				}
				if (myTrans) {
					this.commitTransaction();
				}
				// 有业务逻辑影响重查
				return this.fetchCostStructure(criteria, token);
			} catch (Exception e) {
				if (myTrans) {
					this.rollbackTransaction();
				}
				throw e;
			}
		} catch (Exception e) {
			return new OperationResult<>(e);
		}
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-费用项目
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<CostItem> fetchCostItem(ICriteria criteria, String token) {
		return super.fetch(criteria, token, CostItem.class);
	}

	/**
	 * 查询-费用项目（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<ICostItem> fetchCostItem(ICriteria criteria) {
		return new OperationResult<ICostItem>(this.fetchCostItem(criteria, this.getUserToken()));
	}

	/**
	 * 保存-费用项目
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<CostItem> saveCostItem(CostItem bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-费用项目（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<ICostItem> saveCostItem(ICostItem bo) {
		return new OperationResult<ICostItem>(this.saveCostItem((CostItem) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-费用项目-日记账
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<CostItemJournal> fetchCostItemJournal(ICriteria criteria, String token) {
		return super.fetch(criteria, token, CostItemJournal.class);
	}

	/**
	 * 查询-费用项目-日记账（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<ICostItemJournal> fetchCostItemJournal(ICriteria criteria) {
		return new OperationResult<ICostItemJournal>(this.fetchCostItemJournal(criteria, this.getUserToken()));
	}

	/**
	 * 保存-费用项目-日记账
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<CostItemJournal> saveCostItemJournal(CostItemJournal bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-费用项目-日记账（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<ICostItemJournal> saveCostItemJournal(ICostItemJournal bo) {
		return new OperationResult<ICostItemJournal>(
				this.saveCostItemJournal((CostItemJournal) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-货币
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<Currency> fetchCurrency(ICriteria criteria, String token) {
		return super.fetch(criteria, token, Currency.class);
	}

	/**
	 * 查询-货币（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<ICurrency> fetchCurrency(ICriteria criteria) {
		return new OperationResult<ICurrency>(this.fetchCurrency(criteria, this.getUserToken()));
	}

	/**
	 * 保存-货币
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<Currency> saveCurrency(Currency bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-货币（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<ICurrency> saveCurrency(ICurrency bo) {
		return new OperationResult<ICurrency>(this.saveCurrency((Currency) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-科目
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<Account> fetchAccount(ICriteria criteria, String token) {
		return super.fetch(criteria, token, Account.class);
	}

	/**
	 * 查询-科目（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<IAccount> fetchAccount(ICriteria criteria) {
		return new OperationResult<IAccount>(this.fetchAccount(criteria, this.getUserToken()));
	}

	/**
	 * 保存-科目
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<Account> saveAccount(Account bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-科目（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<IAccount> saveAccount(IAccount bo) {
		return new OperationResult<IAccount>(this.saveAccount((Account) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-分支
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<Branch> fetchBranch(ICriteria criteria, String token) {
		return super.fetch(criteria, token, Branch.class);
	}

	/**
	 * 查询-分支（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<IBranch> fetchBranch(ICriteria criteria) {
		return new OperationResult<IBranch>(this.fetchBranch(criteria, this.getUserToken()));
	}

	/**
	 * 保存-分支
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<Branch> saveBranch(Branch bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-分支（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<IBranch> saveBranch(IBranch bo) {
		return new OperationResult<IBranch>(this.saveBranch((Branch) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-日记账分录
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<JournalEntry> fetchJournalEntry(ICriteria criteria, String token) {
		return super.fetch(criteria, token, JournalEntry.class);
	}

	/**
	 * 查询-日记账分录（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<IJournalEntry> fetchJournalEntry(ICriteria criteria) {
		return new OperationResult<IJournalEntry>(this.fetchJournalEntry(criteria, this.getUserToken()));
	}

	/**
	 * 保存-日记账分录
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<JournalEntry> saveJournalEntry(JournalEntry bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-日记账分录（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<IJournalEntry> saveJournalEntry(IJournalEntry bo) {
		return new OperationResult<IJournalEntry>(this.saveJournalEntry((JournalEntry) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-分类账
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<LedgerAccount> fetchLedgerAccount(ICriteria criteria, String token) {
		return super.fetch(criteria, token, LedgerAccount.class);
	}

	/**
	 * 查询-分类账（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<ILedgerAccount> fetchLedgerAccount(ICriteria criteria) {
		return new OperationResult<ILedgerAccount>(this.fetchLedgerAccount(criteria, this.getUserToken()));
	}

	/**
	 * 保存-分类账
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<LedgerAccount> saveLedgerAccount(LedgerAccount bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-分类账（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<ILedgerAccount> saveLedgerAccount(ILedgerAccount bo) {
		return new OperationResult<ILedgerAccount>(this.saveLedgerAccount((LedgerAccount) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-期间-分类账
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<PeriodLedgerAccount> fetchPeriodLedgerAccount(ICriteria criteria, String token) {
		return super.fetch(criteria, token, PeriodLedgerAccount.class);
	}

	/**
	 * 查询-期间-分类账（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<IPeriodLedgerAccount> fetchPeriodLedgerAccount(ICriteria criteria) {
		return new OperationResult<IPeriodLedgerAccount>(this.fetchPeriodLedgerAccount(criteria, this.getUserToken()));
	}

	/**
	 * 保存-期间-分类账
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<PeriodLedgerAccount> savePeriodLedgerAccount(PeriodLedgerAccount bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-期间-分类账（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<IPeriodLedgerAccount> savePeriodLedgerAccount(IPeriodLedgerAccount bo) {
		return new OperationResult<IPeriodLedgerAccount>(
				this.savePeriodLedgerAccount((PeriodLedgerAccount) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-分类账条件属性
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<LedgerConditionProperty> fetchLedgerConditionProperty(ICriteria criteria, String token) {
		return super.fetch(criteria, token, LedgerConditionProperty.class);
	}

	/**
	 * 查询-分类账条件属性（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<ILedgerConditionProperty> fetchLedgerConditionProperty(ICriteria criteria) {
		return new OperationResult<ILedgerConditionProperty>(
				this.fetchLedgerConditionProperty(criteria, this.getUserToken()));
	}

	/**
	 * 保存-分类账条件属性
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<LedgerConditionProperty> saveLedgerConditionProperty(LedgerConditionProperty bo,
			String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-分类账条件属性（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<ILedgerConditionProperty> saveLedgerConditionProperty(ILedgerConditionProperty bo) {
		return new OperationResult<ILedgerConditionProperty>(
				this.saveLedgerConditionProperty((LedgerConditionProperty) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-银行
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<Bank> fetchBank(ICriteria criteria, String token) {
		return super.fetch(criteria, token, Bank.class);
	}

	/**
	 * 查询-银行（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<IBank> fetchBank(ICriteria criteria) {
		return new OperationResult<IBank>(this.fetchBank(criteria, this.getUserToken()));
	}

	/**
	 * 保存-银行
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<Bank> saveBank(Bank bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-银行（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<IBank> saveBank(IBank bo) {
		return new OperationResult<IBank>(this.saveBank((Bank) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-银行账户
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<BankAccount> fetchBankAccount(ICriteria criteria, String token) {
		return super.fetch(criteria, token, BankAccount.class);
	}

	/**
	 * 查询-银行账户（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<IBankAccount> fetchBankAccount(ICriteria criteria) {
		return new OperationResult<IBankAccount>(this.fetchBankAccount(criteria, this.getUserToken()));
	}

	/**
	 * 保存-银行账户
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<BankAccount> saveBankAccount(BankAccount bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-银行账户（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<IBankAccount> saveBankAccount(IBankAccount bo) {
		return new OperationResult<IBankAccount>(this.saveBankAccount((BankAccount) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-货币汇率
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<CurrencyRate> fetchCurrencyRate(ICriteria criteria, String token) {
		return super.fetch(criteria, token, CurrencyRate.class);
	}

	/**
	 * 查询-货币汇率（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<ICurrencyRate> fetchCurrencyRate(ICriteria criteria) {
		return new OperationResult<ICurrencyRate>(this.fetchCurrencyRate(criteria, this.getUserToken()));
	}

	/**
	 * 保存-货币汇率
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<CurrencyRate> saveCurrencyRate(CurrencyRate bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-货币汇率（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<ICurrencyRate> saveCurrencyRate(ICurrencyRate bo) {
		return new OperationResult<ICurrencyRate>(this.saveCurrencyRate((CurrencyRate) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//

}
