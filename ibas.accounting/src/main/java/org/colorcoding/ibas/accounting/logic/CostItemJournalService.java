package org.colorcoding.ibas.accounting.logic;

import org.colorcoding.ibas.accounting.bo.costiemjournal.CostItemJournal;
import org.colorcoding.ibas.accounting.bo.costiemjournal.ICostItemJournal;
import org.colorcoding.ibas.accounting.repository.BORepositoryAccounting;
import org.colorcoding.ibas.bobas.approval.IApprovalData;
import org.colorcoding.ibas.bobas.common.ConditionOperation;
import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.data.emApprovalStatus;
import org.colorcoding.ibas.bobas.message.Logger;
import org.colorcoding.ibas.bobas.message.MessageLevel;
import org.colorcoding.ibas.bobas.logic.BusinessLogic;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.bobas.logic.LogicContract;

@LogicContract(ICostItemJournalContract.class)
public class CostItemJournalService extends BusinessLogic<ICostItemJournalContract, ICostItemJournal> {

	@Override
	protected boolean checkDataStatus(Object data) {
		// 宿主审批中也执行（如：审批中占用资金）
		if (data instanceof IApprovalData) {
			if (((IApprovalData) data).getApprovalStatus() == emApprovalStatus.PROCESSING) {
				return true;
			}
		}
		if (data instanceof ICostItemJournalContract) {
			if (((ICostItemJournalContract) data).getCategory() == null) {
				Logger.log(MessageLevel.DEBUG, MSG_LOGICS_SKIP_LOGIC_EXECUTION, this.getClass().getName(), "Category",
						"NONE");
				return false;
			}
		}
		return super.checkDataStatus(data);
	}

	@Override
	protected ICostItemJournal fetchBeAffected(ICostItemJournalContract contract) {
		ICriteria criteria = new Criteria();
		ICondition condition = criteria.getConditions().create();
		condition.setAlias(CostItemJournal.PROPERTY_BASEDOCUMENTTYPE.getName());
		condition.setOperation(ConditionOperation.EQUAL);
		condition.setValue(contract.getDocumentType());
		condition = criteria.getConditions().create();
		condition.setAlias(CostItemJournal.PROPERTY_BASEDOCUMENTENTRY.getName());
		condition.setOperation(ConditionOperation.EQUAL);
		condition.setValue(contract.getDocumentEntry());
		condition = criteria.getConditions().create();
		condition.setAlias(CostItemJournal.PROPERTY_BASEDOCUMENTLINEID.getName());
		condition.setOperation(ConditionOperation.EQUAL);
		condition.setValue(contract.getDocumentLineId());

		ICostItemJournal journal = this.fetchBeAffected(ICostItemJournal.class, criteria);
		if (journal == null) {
			try (BORepositoryAccounting boRepository = new BORepositoryAccounting()) {
				boRepository.setTransaction(this.getTransaction());
				IOperationResult<ICostItemJournal> operationResult = boRepository.fetchCostItemJournal(criteria);
				if (operationResult.getError() != null) {
					throw new BusinessLogicException(operationResult.getError());
				}
				journal = operationResult.getResultObjects().firstOrDefault();
			}
		}
		if (journal == null) {
			journal = new CostItemJournal();
			journal.setBaseDocumentType(contract.getDocumentType());
			journal.setBaseDocumentEntry(contract.getDocumentEntry());
			journal.setBaseDocumentLineId(contract.getDocumentLineId());
		}
		return journal;
	}

	@Override
	protected void impact(ICostItemJournalContract contract) {
		ICostItemJournal journal = this.getBeAffected();
		if (journal.isDeleted()) {
			journal.undelete();
		}
		journal.setCategory(contract.getCategory());
		journal.setStructure(contract.getStructure());
		journal.setStructureNode(contract.getStructureNode());
		journal.setItem(contract.getItem());
		journal.setAmount(contract.getAmount());
	}

	@Override
	protected void revoke(ICostItemJournalContract contract) {
		ICostItemJournal journal = this.getBeAffected();
		journal.delete();
	}

}