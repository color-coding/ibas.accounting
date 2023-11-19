package org.colorcoding.ibas.accounting.logic;

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
import org.colorcoding.ibas.bobas.i18n.I18N;
import org.colorcoding.ibas.bobas.logic.BusinessLogic;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.bobas.mapping.LogicContract;
import org.colorcoding.ibas.bobas.message.Logger;
import org.colorcoding.ibas.bobas.message.MessageLevel;

@LogicContract(IJournalEntryCreationContract.class)
public class JournalEntryService<T extends IJournalEntryCreationContract> extends BusinessLogic<T, IJournalEntry> {

	public JournalEntryService() {
		super();
		this.setEnabled(
				MyConfiguration.getConfigValue(MyConfiguration.CONFIG_ITEM_ENABLED_JOURNAL_ENTRY_SERVICE, false));
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
		if (data instanceof IJournalEntryCreationContract) {
			IJournalEntryCreationContract contract = (IJournalEntryCreationContract) data;
			// 没有分录内容，跳过
			if (contract.getContents() == null || contract.getContents().length == 0) {
				Logger.log(MessageLevel.DEBUG, MSG_LOGICS_SKIP_LOGIC_EXECUTION, this.getClass().getName(), "Contents",
						"NONE");
				return false;
			}
		}
		return super.checkDataStatus(data);
	}

	@Override
	protected IJournalEntry fetchBeAffected(T contract) {
		ICriteria criteria = new Criteria();
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
			journal.setBaseDocumentType(contract.getBaseDocumentType());
			journal.setBaseDocumentEntry(contract.getBaseDocumentEntry());
			journal.setBaseDocumentLineId(contract.getBaseDocumentLineId());

		}
		return journal;
	}

	@Override
	protected void impact(T contract) {
		JournalEntryContent jeContent;
		List<JournalEntryContent> jeContents = new ArrayList<>();
		for (JournalEntryContent item : contract.getContents()) {
			if (DataConvert.isNullOrEmpty(item.getAccount())) {
				// 获取科目
				item.setAccount(this.accountOf(item));
			}
			// 计算金额
			if (item instanceof JournalEntrySmartContent) {
				((JournalEntrySmartContent) item).setService(new IBusinessLogicServiceInformation() {

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
				((JournalEntrySmartContent) item).caculate();
			}
			jeContent = jeContents.firstOrDefault(
					c -> c.getCategory() == item.getCategory() && c.getAccount().equalsIgnoreCase(item.getAccount()));
			if (jeContent == null) {
				jeContent = item.duplicate();
				jeContents.add(jeContent);
				continue;
			}
			jeContent.setAmount(jeContent.getAmount().add(item.getAmount()));
		}
		IJournalEntry journal = this.getBeAffected();
		journal.setBranch(contract.getBranch());
		journal.setDocumentDate(contract.getDocumentDate());
		// 清理超过的
		if (journal.getJournalEntryLines().size() > jeContents.size()) {
			for (int i = jeContents.size(); i < journal.getJournalEntryLines().size(); i++) {
				journal.getJournalEntryLines().get(i).delete();
			}
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
			journalLine.setDebit(jeContent.getCategory() == Category.Debit ? jeContent.getAmount() : Decimal.ZERO);
			journalLine.setCredit(jeContent.getCategory() == Category.Credit ? jeContent.getAmount() : Decimal.ZERO);
			journalLine.setCurrency(jeContent.getCurrency());
		}
		//
	}

	@Override
	protected void revoke(T contract) {
		IJournalEntry journal = this.getBeAffected();
		journal.delete();
	}

	protected String accountOf(JournalEntryContent jeContent) {
		// 获取财年
		Criteria criteria = new Criteria();
		criteria.setResultCount(1);
		ICondition condition = criteria.getConditions().create();
		condition.setAlias(PeriodCategory.PROPERTY_STARTDATE.getName());
		condition.setValue(this.getBeAffected().getDocumentDate());
		condition.setOperation(ConditionOperation.LESS_EQUAL);
		condition = criteria.getConditions().create();
		condition.setAlias(PeriodCategory.PROPERTY_ENDDATE.getName());
		condition.setValue(this.getBeAffected().getDocumentDate());
		condition.setOperation(ConditionOperation.GRATER_EQUAL);
		ISort sort = criteria.getSorts().create();
		sort.setAlias(PeriodCategory.PROPERTY_OBJECTKEY.getName());
		sort.setSortType(SortType.DESCENDING);
		BORepositoryAccounting boRepository = new BORepositoryAccounting();
		boRepository.setRepository(this.getRepository());
		IOperationResult<IPeriodCategory> opRslt = boRepository.fetchPeriodCategory(criteria);
		if (opRslt.getError() != null) {
			throw new BusinessLogicException(opRslt.getError());
		}
		if (opRslt.getResultObjects().isEmpty()) {
			throw new BusinessLogicException(
					I18N.prop("msg_ac_not_found_date_period_year", this.getBeAffected().getDocumentDate()));
		}
		int periodYear = opRslt.getResultObjects().firstOrDefault().getObjectKey();
		criteria = new Criteria();
		criteria.setResultCount(1);
		condition = criteria.getConditions().create();
		condition.setAlias(PeriodLedgerAccount.PROPERTY_PERIOD.getName());
		condition.setValue(periodYear);
		condition = criteria.getConditions().create();
		condition.setAlias(PeriodLedgerAccount.PROPERTY_LEDGER.getName());
		condition.setValue(jeContent.getLedger());
		sort = criteria.getSorts().create();
		sort.setAlias(PeriodLedgerAccount.PROPERTY_ORDER.getName());
		sort.setSortType(SortType.ASCENDING);
		IOperationResult<IPeriodLedgerAccount> opRsltLedger = boRepository.fetchPeriodLedgerAccount(criteria);
		if (opRsltLedger.getError() != null) {
			throw new BusinessLogicException(opRsltLedger.getError());
		}
		if (opRsltLedger.getResultObjects().isEmpty()) {
			throw new BusinessLogicException(I18N.prop("msg_ac_not_found_ledger_account", jeContent.getLedger()));
		}
		return opRsltLedger.getResultObjects().firstOrDefault().getAccount();
	}
}
