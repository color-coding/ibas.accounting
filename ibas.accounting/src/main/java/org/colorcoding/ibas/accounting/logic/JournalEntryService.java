package org.colorcoding.ibas.accounting.logic;

import java.util.HashMap;
import java.util.Map;

import org.colorcoding.ibas.accounting.MyConfiguration;
import org.colorcoding.ibas.accounting.bo.journalentry.IJournalEntry;
import org.colorcoding.ibas.accounting.bo.journalentry.IJournalEntryLine;
import org.colorcoding.ibas.accounting.bo.journalentry.JournalEntry;
import org.colorcoding.ibas.accounting.bo.ledgeraccount.IPeriodLedgerAccount;
import org.colorcoding.ibas.accounting.bo.ledgeraccount.PeriodLedgerAccount;
import org.colorcoding.ibas.accounting.bo.postingperiod.IPeriodCategory;
import org.colorcoding.ibas.accounting.bo.postingperiod.PeriodCategory;
import org.colorcoding.ibas.accounting.data.DataConvert;
import org.colorcoding.ibas.accounting.logic.JournalEntryContent.Category;
import org.colorcoding.ibas.accounting.repository.BORepositoryAccounting;
import org.colorcoding.ibas.bobas.bo.BusinessObject;
import org.colorcoding.ibas.bobas.bo.IBOTagCanceled;
import org.colorcoding.ibas.bobas.bo.IBOTagDeleted;
import org.colorcoding.ibas.bobas.common.ConditionOperation;
import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.common.ISort;
import org.colorcoding.ibas.bobas.common.SortType;
import org.colorcoding.ibas.bobas.core.IBORepository;
import org.colorcoding.ibas.bobas.data.ArrayList;
import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.data.List;
import org.colorcoding.ibas.bobas.data.emDocumentStatus;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.expression.JudmentOperationException;
import org.colorcoding.ibas.bobas.i18n.I18N;
import org.colorcoding.ibas.bobas.logic.BusinessLogic;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.bobas.mapping.LogicContract;
import org.colorcoding.ibas.bobas.message.Logger;
import org.colorcoding.ibas.bobas.message.MessageLevel;

@LogicContract(IJournalEntryCreationContract.class)
public class JournalEntryService extends BusinessLogic<IJournalEntryCreationContract, IJournalEntry> {

	/**
	 * 正常分录
	 */
	public static final String DATASOURCE_SIGN_REGULAR_ENTRY = "JES-REG";
	/**
	 * 冲销分录
	 */
	public static final String DATASOURCE_SIGN_OFFSETTING_ENTRY = "JES-OFF";
	/**
	 * 行合并方式，不合并
	 */
	public static final String LINE_MERGE_METHOD_NONE = "NONE";
	/**
	 * 行合并方式，科目合并
	 */
	public static final String LINE_MERGE_METHOD_ACCOUNT = "ACCOUNT";
	/**
	 * 行合并方式，余额合并
	 */
	public static final String LINE_MERGE_METHOD_BALANCE = "BALANCE";

	public JournalEntryService() {
		super();
		this.setEnabled(
				MyConfiguration.getConfigValue(MyConfiguration.CONFIG_ITEM_ENABLE_JOURNAL_ENTRY_SERVICE, false));
	}

	private boolean enabled;

	public final boolean isEnabled() {
		return enabled;
	}

	private final void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}

	@Override
	protected boolean checkDataStatus(Object data) {
		if (this.isEnabled() == false) {
			Logger.log(MessageLevel.DEBUG, MSG_LOGICS_SKIP_LOGIC_EXECUTION, this.getClass().getName(), "Config",
					"NOT ENABLED");
			return false;
		}
		boolean status = super.checkDataStatus(data);
		if (status == false) {
			// 取消和标记删除时，执行逻辑
			if (data instanceof IBOTagCanceled) {
				IBOTagCanceled boTag = (IBOTagCanceled) data;
				if (boTag.getCanceled() == emYesNo.YES) {
					status = true;
				}
			}
			if (data instanceof IBOTagDeleted) {
				IBOTagDeleted boTag = (IBOTagDeleted) data;
				if (boTag.getDeleted() == emYesNo.YES) {
					status = true;
				}
			}
		}
		return status;
	}

	@Override
	protected IJournalEntry fetchBeAffected(IJournalEntryCreationContract contract) {
		ICriteria criteria = new Criteria();
		criteria.setResultCount(1);
		ICondition condition = criteria.getConditions().create();
		condition.setAlias(JournalEntry.PROPERTY_BASEDOCUMENTTYPE.getName());
		condition.setOperation(ConditionOperation.EQUAL);
		condition.setValue(contract.getBaseDocumentType());
		condition = criteria.getConditions().create();
		condition.setAlias(JournalEntry.PROPERTY_BASEDOCUMENTENTRY.getName());
		condition.setOperation(ConditionOperation.EQUAL);
		condition.setValue(contract.getBaseDocumentEntry());
		if (contract.getBaseDocumentLineId() != null && contract.getBaseDocumentLineId() > 0) {
			condition = criteria.getConditions().create();
			condition.setAlias(JournalEntry.PROPERTY_BASEDOCUMENTLINEID.getName());
			condition.setOperation(ConditionOperation.EQUAL);
			condition.setValue(contract.getBaseDocumentLineId());
		}
		condition = criteria.getConditions().create();
		condition.setAlias(JournalEntry.PROPERTY_DATASOURCE.getName());
		condition.setOperation(ConditionOperation.EQUAL);
		if (contract.isOffsetting()) {
			condition.setValue(DATASOURCE_SIGN_OFFSETTING_ENTRY);
		} else {
			condition.setValue(DATASOURCE_SIGN_REGULAR_ENTRY);
		}

		IJournalEntry journal = this.fetchBeAffected(criteria, IJournalEntry.class);
		if (journal == null) {
			BORepositoryAccounting boRepository = new BORepositoryAccounting();
			boRepository.setRepository(super.getRepository());
			IOperationResult<IJournalEntry> operationResult = boRepository.fetchJournalEntry(criteria);
			if (operationResult.getError() != null) {
				throw new BusinessLogicException(operationResult.getError());
			}
			journal = operationResult.getResultObjects().firstOrDefault();
		}
		if (journal == null) {
			journal = new JournalEntry();
			journal.setDocumentDate(contract.getDocumentDate());
			journal.setPostingDate(contract.getDocumentDate());
			if (contract.isOffsetting()) {
				journal.setDataSource(DATASOURCE_SIGN_OFFSETTING_ENTRY);
			} else {
				journal.setDataSource(DATASOURCE_SIGN_REGULAR_ENTRY);
			}
			journal.setBaseDocumentType(contract.getBaseDocumentType());
			journal.setBaseDocumentEntry(contract.getBaseDocumentEntry());
			journal.setBaseDocumentLineId(contract.getBaseDocumentLineId());
		}
		return journal;
	}

	@Override
	protected void impact(IJournalEntryCreationContract contract) {
		String localCurrency = MyConfiguration.getConfigValue(MyConfiguration.CONFIG_ITEM_LOCAL_CURRENCY);
		if (DataConvert.isNullOrEmpty(localCurrency)) {
			throw new BusinessLogicException(I18N.prop("msg_ac_not_found_local_currency"));
		}
		JournalEntryContent jeContent;
		JournalEntryContent[] contractContents = null;
		if (contract.isOffsetting()) {
			// 冲销分录，先查已存在的正常分录
			ICriteria criteria = new Criteria();
			criteria.setResultCount(1);
			ICondition condition = criteria.getConditions().create();
			condition.setAlias(JournalEntry.PROPERTY_BASEDOCUMENTTYPE.getName());
			condition.setOperation(ConditionOperation.EQUAL);
			condition.setValue(contract.getBaseDocumentType());
			condition = criteria.getConditions().create();
			condition.setAlias(JournalEntry.PROPERTY_BASEDOCUMENTENTRY.getName());
			condition.setOperation(ConditionOperation.EQUAL);
			condition.setValue(contract.getBaseDocumentEntry());
			if (contract.getBaseDocumentLineId() != null && contract.getBaseDocumentLineId() > 0) {
				condition = criteria.getConditions().create();
				condition.setAlias(JournalEntry.PROPERTY_BASEDOCUMENTLINEID.getName());
				condition.setOperation(ConditionOperation.EQUAL);
				condition.setValue(contract.getBaseDocumentLineId());
			}
			condition = criteria.getConditions().create();
			condition.setAlias(JournalEntry.PROPERTY_DATASOURCE.getName());
			condition.setOperation(ConditionOperation.EQUAL);
			condition.setValue(DATASOURCE_SIGN_REGULAR_ENTRY);
			BORepositoryAccounting boRepository = new BORepositoryAccounting();
			boRepository.setRepository(super.getRepository());
			IOperationResult<IJournalEntry> operationResult = boRepository.fetchJournalEntry(criteria);
			if (operationResult.getError() != null) {
				throw new BusinessLogicException(operationResult.getError());
			}
			if (!operationResult.getResultObjects().isEmpty()) {
				IJournalEntryLine journalLine;
				IJournalEntry journalEntry = operationResult.getResultObjects().firstOrDefault();
				contractContents = new JournalEntryContent[journalEntry.getJournalEntryLines().size()];
				for (int i = 0; i < contractContents.length; i++) {
					journalLine = journalEntry.getJournalEntryLines().get(i);
					jeContent = new JournalEntryContent();
					jeContent.setAccount(journalLine.getAccount());
					jeContent.setShortName(journalLine.getShortName());
					jeContent.setCashFlow(journalLine.getCashFlow());
					jeContent.setCurrency(journalEntry.getDocumentCurrency());
					jeContent.setRate(Decimal.ONE);
					if (!Decimal.isZero(journalLine.getDebit())) {
						// 非0，是借方
						jeContent.setCategory(Category.Debit);
						jeContent.setAmount(journalLine.getDebit());
					} else if (!Decimal.isZero(journalLine.getCredit())) {
						// 非0，是贷方
						jeContent.setCategory(Category.Credit);
						jeContent.setAmount(journalLine.getCredit());
					} else {
						// 无效数据
						jeContent.setAmount(Decimal.ZERO);
					}
					contractContents[i] = jeContent;
				}
			}
			// 没有获取到正向分录，则不生成反向
			if (contractContents != null) {
				contractContents = contract.reverseContents(contractContents);
			}
		} else {
			// 正常分录
			contractContents = contract.getContents();
		}
		// 处理分录内容
		List<JournalEntryContent> jeContents = new ArrayList<>();
		if (contractContents != null) {
			for (JournalEntryContent item : contractContents) {
				if (item == null) {
					continue;
				}
				// 计算金额
				if (item instanceof JournalEntrySmartContent) {
					JournalEntrySmartContent smartItem = (JournalEntrySmartContent) item;
					smartItem.setService(new IBusinessLogicServiceInformation() {

						@Override
						public Class<?> getType() {
							return JournalEntryService.this.getClass();
						}

						@Override
						public IBORepository getRepository() {
							return JournalEntryService.this.getRepository();
						}

						@Override
						public BusinessLogic<?, ?> getInstance() {
							return JournalEntryService.this;
						}
					});
					try {
						smartItem.caculate();
					} catch (Exception e) {
						throw new BusinessLogicException(
								I18N.prop("msg_ac_business_logic_caculate_error", item.getSourceData(), e.getMessage()),
								e);
					}
				}
				// 调试模式，0金额过滤
				if (Decimal.isZero(item.getAmount()) && !MyConfiguration.isDebugMode()) {
					continue;
				}
				// 判断货币及汇率
				if (DataConvert.isNullOrEmpty(item.getCurrency())) {
					throw new BusinessLogicException(
							I18N.prop("msg_ac_data_not_set_currency", item.getSourceData().toString()));
				}
				if (localCurrency.equalsIgnoreCase(item.getCurrency())) {
					// 与本币相同，但汇率不是1
					if (item.getRate() != null && Decimal.ZERO.compareTo(item.getRate()) != 0
							&& Decimal.ONE.compareTo(item.getRate()) != 0) {
						throw new BusinessLogicException(
								I18N.prop("msg_ac_data_not_set_currency_rate", item.getSourceData().toString()));
					}
					if (item.getRate() == null || Decimal.ZERO.compareTo(item.getRate()) == 0) {
						item.setRate(Decimal.ONE);
					}
				} else {
					// 与本币不通，未设置汇率
					if (item.getRate() == null || Decimal.ZERO.compareTo(item.getRate()) >= 0) {
						throw new BusinessLogicException(
								I18N.prop("msg_ac_data_not_set_currency_rate", item.getSourceData().toString()));
					}
				}
				// 获取科目
				if (DataConvert.isNullOrEmpty(item.getAccount())) {
					item.setAccount(this.accountOf(item));
				}
				jeContent = jeContents.firstOrDefault(
						c -> c.getCategory() == item.getCategory() && c.getAccount().equalsIgnoreCase(item.getAccount())
								&& ((!DataConvert.isNullOrEmpty(item.getShortName())
										&& item.getShortName().equalsIgnoreCase(c.getShortName()))
										|| DataConvert.isNullOrEmpty(item.getShortName()))
								&& (String.valueOf(c.getLedger()).equalsIgnoreCase(String.valueOf(item.getLedger()))));
				if (jeContent == null) {
					jeContent = item.duplicate();
					jeContents.add(jeContent);
					continue;
				}
				jeContent.setAmount(jeContent.getAmount().add(item.getAmount()));
			}
		}
		// 合并分录内容
		String method = MyConfiguration.getConfigValue(MyConfiguration.CONFIG_ITEM_MERGE_JOURNAL_ENTRY_LINE_METHOD,
				LINE_MERGE_METHOD_NONE);
		// 科目合并
		if (LINE_MERGE_METHOD_ACCOUNT.equalsIgnoreCase(method) || LINE_MERGE_METHOD_BALANCE.equalsIgnoreCase(method)) {
			List<JournalEntryContent> newJeContents = new ArrayList<>(jeContents.size());
			for (JournalEntryContent item : jeContents) {
				jeContent = newJeContents.firstOrDefault(
						c -> c.getCategory() == item.getCategory() && c.getAccount().equalsIgnoreCase(item.getAccount())
								&& c.getShortName().equalsIgnoreCase(item.getShortName()));
				if (jeContent == null) {
					jeContent = item.duplicate();
					newJeContents.add(jeContent);
				} else {
					jeContent.setAmount(Decimal.add(jeContent.getAmount(), item.getAmount()));
				}
			}
			jeContents = newJeContents;
		}
		// 接科目合并，仅保留余额
		if (LINE_MERGE_METHOD_BALANCE.equalsIgnoreCase(method)) {
			List<JournalEntryContent> tmpContents;
			List<JournalEntryContent> newJeContents = new ArrayList<>(jeContents.size());
			for (JournalEntryContent item : jeContents) {
				tmpContents = jeContents.where(c -> c.getAccount().equalsIgnoreCase(item.getAccount())
						&& c.getShortName().equalsIgnoreCase(item.getShortName()));
				if (tmpContents.size() > 1) {
					if (tmpContents.size() != 2) {
						// 没有科目合并，不支持操作
						throw new BusinessLogicException(
								I18N.prop("msg_ac_operation_not_supported", LINE_MERGE_METHOD_BALANCE));
					}
					JournalEntryContent creditContent = tmpContents
							.firstOrDefault(c -> c.getCategory() == Category.Credit);
					JournalEntryContent debitContent = tmpContents
							.firstOrDefault(c -> c.getCategory() == Category.Debit);
					int compared = creditContent.getAmount().abs().compareTo(debitContent.getAmount().abs());
					if (compared > 0) {
						creditContent.setAmount(Decimal.subtract(creditContent.getAmount(), debitContent.getAmount()));
						newJeContents.add(creditContent);
					} else if (compared < 0) {
						debitContent.setAmount(Decimal.subtract(debitContent.getAmount(), creditContent.getAmount()));
						newJeContents.add(debitContent);
					}
				} else {
					newJeContents.add(item);
				}
			}
			jeContents = newJeContents.where(c -> !Decimal.isZero(c.getAmount()));
		}
		// 创建分录
		IJournalEntry journal = this.getBeAffected();
		journal.setReferenced(emYesNo.YES);
		journal.setReference1(contract.getReference1());
		journal.setReference2(contract.getReference2());
		journal.setBranch(contract.getBranch());
		journal.setDocumentDate(contract.getDocumentDate());
		journal.setPostingDate(contract.getDocumentDate());
		journal.setDocumentCurrency(localCurrency);
		if (journal.getDocumentStatus() == emDocumentStatus.PLANNED) {
			journal.setDocumentStatus(emDocumentStatus.RELEASED);
		}
		// 重新赋值
		IJournalEntryLine journalLine;
		for (int i = 0; i < jeContents.size(); i++) {
			if (i >= journal.getJournalEntryLines().size()) {
				journalLine = journal.getJournalEntryLines().create();
			} else {
				journalLine = journal.getJournalEntryLines().get(i);
			}
			jeContent = jeContents.get(i);
			journalLine.setAccount(jeContent.getAccount());
			if (DataConvert.isNullOrEmpty(jeContent.getShortName())) {
				journalLine.setShortName(jeContent.getAccount());
			} else {
				journalLine.setShortName(jeContent.getShortName());
			}
			journalLine.setDebit(
					jeContent.getCategory() == Category.Debit ? jeContent.getCurrencyAmount(6) : Decimal.ZERO);
			journalLine.setCredit(
					jeContent.getCategory() == Category.Credit ? jeContent.getCurrencyAmount(6) : Decimal.ZERO);
			journalLine.setCurrency(localCurrency);
			journalLine.setReferenced(emYesNo.YES);
			journalLine.setCashFlow(jeContent.getCashFlow());
		}
		// 清理超过的，移到此处
		if (journal.getJournalEntryLines().size() > jeContents.size()) {
			for (int i = jeContents.size(); i < journal.getJournalEntryLines().size(); i++) {
				journal.getJournalEntryLines().get(i).delete();
			}
		}
		// 无分录行，则旧数据删除，新数据不保存
		if (journal.getJournalEntryLines().where(c -> c.isSavable() && !c.isDeleted()).isEmpty()) {
			if (journal.isNew()) {
				((BusinessObject<?>) journal).unsavable();
			} else {
				journal.delete();
			}
		} else {
			if (journal.isNew()) {
				((BusinessObject<?>) journal).markNew();
			} else {
				List<IJournalEntryLine> beDeleteds = journal.getJournalEntryLines().where(c -> c.isDeleted());
				((BusinessObject<?>) journal).undelete();// 子项也会被撤销删除标记
				for (IJournalEntryLine item : beDeleteds) {
					item.delete();
				}
			}
		}
	}

	@Override
	protected void revoke(IJournalEntryCreationContract contract) {
		// 反向逻辑
		IJournalEntry journal = this.getBeAffected();
		if (journal.getJournalEntryLines().where(c -> c.isSavable() && !c.isDeleted()).isEmpty()) {
			if (journal.isNew()) {
				((BusinessObject<?>) journal).unsavable();
			} else {
				journal.setReferenced(emYesNo.NO);
				journal.getJournalEntryLines().forEach(c -> c.setReferenced(emYesNo.NO));
				journal.delete();
			}
		}
		// 已存在分录，触发对象不能变成无效
		if (journal != null && journal.isDirty() == false) {
			if (this.checkDataStatus(this.getLogicChain().getTrigger()) == false) {
				throw new BusinessLogicException(I18N.prop("msg_ac_document_has_journalentry_not_allowed_change_status",
						String.format("{[%s].[DocEntry = %s]%s}", journal.getBaseDocumentType(),
								journal.getBaseDocumentEntry(),
								journal.getBaseDocumentLineId() > 0
										? String.format("&&[LineId = %s]", journal.getBaseDocumentLineId())
										: "")));
			}
		}
	}

	protected int periodYear = -1;
	protected Map<String, List<IPeriodLedgerAccount>> ledgerAccounts = new HashMap<>();

	protected String accountOf(JournalEntryContent jeContent) {
		ISort sort;
		ICriteria criteria;
		ICondition condition;
		BORepositoryAccounting boRepository = null;
		// 判断财年是否有效
		if (this.periodYear < 0) {
			criteria = new Criteria();
			criteria.setResultCount(1);
			condition = criteria.getConditions().create();
			condition.setAlias(PeriodCategory.PROPERTY_STARTDATE.getName());
			condition.setValue(this.getBeAffected().getDocumentDate());
			condition.setOperation(ConditionOperation.LESS_EQUAL);
			condition = criteria.getConditions().create();
			condition.setAlias(PeriodCategory.PROPERTY_ENDDATE.getName());
			condition.setValue(this.getBeAffected().getDocumentDate());
			condition.setOperation(ConditionOperation.GRATER_EQUAL);
			sort = criteria.getSorts().create();
			sort.setAlias(PeriodCategory.PROPERTY_OBJECTKEY.getName());
			sort.setSortType(SortType.DESCENDING);
			boRepository = new BORepositoryAccounting();
			boRepository.setRepository(this.getRepository());
			IOperationResult<IPeriodCategory> opRslt = boRepository.fetchPeriodCategory(criteria);
			if (opRslt.getError() != null) {
				throw new BusinessLogicException(opRslt.getError());
			}
			if (opRslt.getResultObjects().isEmpty()) {
				throw new BusinessLogicException(
						I18N.prop("msg_ac_not_found_date_period_year", this.getBeAffected().getDocumentDate()));
			}
			this.periodYear = opRslt.getResultObjects().firstOrDefault().getObjectKey();
		}
		// 判断分类科目设置是否存在
		if (!this.ledgerAccounts.containsKey(jeContent.getLedger())) {
			criteria = new Criteria();
			condition = criteria.getConditions().create();
			condition.setAlias(PeriodLedgerAccount.PROPERTY_PERIOD.getName());
			condition.setValue(this.periodYear);
			condition = criteria.getConditions().create();
			condition.setAlias(PeriodLedgerAccount.PROPERTY_LEDGER.getName());
			condition.setValue(jeContent.getLedger());
			sort = criteria.getSorts().create();
			sort.setAlias(PeriodLedgerAccount.PROPERTY_ORDER.getName());
			sort.setSortType(SortType.ASCENDING);
			sort = criteria.getSorts().create();
			sort.setAlias(PeriodLedgerAccount.PROPERTY_OBJECTKEY.getName());
			sort.setSortType(SortType.DESCENDING);
			if (boRepository == null) {
				boRepository = new BORepositoryAccounting();
				boRepository.setRepository(this.getRepository());
			}
			IOperationResult<IPeriodLedgerAccount> opRsltLedger = boRepository.fetchPeriodLedgerAccount(criteria);
			if (opRsltLedger.getError() != null) {
				throw new BusinessLogicException(opRsltLedger.getError());
			}
			this.ledgerAccounts.put(jeContent.getLedger(), opRsltLedger.getResultObjects());
		}
		JudgmentLink judgmentLink;
		List<IPeriodLedgerAccount> ledgerAccounts = this.ledgerAccounts.get(jeContent.getLedger());
		for (IPeriodLedgerAccount plAccount : ledgerAccounts) {
			if (DataConvert.isNullOrEmpty(plAccount.getAccount())) {
				continue;
			}
			if (plAccount.getActivated() == emYesNo.NO) {
				continue;
			}
			try {
				judgmentLink = new JudgmentLink();
				judgmentLink.parsingConditions(plAccount.getPeriodLedgerAccountConditions());
				if (judgmentLink.judge(jeContent)) {
					return plAccount.getAccount();
				}
			} catch (JudmentOperationException e) {
				if (MyConfiguration.isDebugMode()) {
					Logger.log(MessageLevel.WARN, e);
				}
			}
		}
		throw new BusinessLogicException(I18N.prop("msg_ac_not_found_ledger_account", jeContent.getLedger()));
	}
}
