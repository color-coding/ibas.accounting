package org.colorcoding.ibas.accounting.logic;

import org.colorcoding.ibas.accounting.bo.account.IAccount;
import org.colorcoding.ibas.accounting.bo.cashflowassignment.CashFlowAssignment;
import org.colorcoding.ibas.accounting.bo.cashflowassignment.ICashFlowAssignment;
import org.colorcoding.ibas.accounting.repository.BORepositoryAccounting;
import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.common.Strings;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.bobas.logic.LogicContract;
import org.colorcoding.ibas.bobas.message.Logger;
import org.colorcoding.ibas.bobas.message.MessageLevel;

@LogicContract(ICashFlowAssignmentContract.class)
public class CashFlowAssignmentService extends AccountService<ICashFlowAssignmentContract, ICashFlowAssignment> {
	@Override
	protected boolean checkDataStatus(Object data) {
		if (data instanceof ICashFlowAssignmentContract) {
			ICashFlowAssignmentContract contract = (ICashFlowAssignmentContract) data;
			if (Strings.isNullOrEmpty(contract.getAccount())) {
				Logger.log(MessageLevel.DEBUG, MSG_LOGICS_SKIP_LOGIC_EXECUTION, this.getClass().getName(), "Account",
						"Empty");
				return false;
			}
			if (contract.getCashFlow() == null || Integer.compare(0, contract.getCashFlow()) >= 0) {
				Logger.log(MessageLevel.DEBUG, MSG_LOGICS_SKIP_LOGIC_EXECUTION, this.getClass().getName(), "CashFlow",
						"Empty");
				return false;
			}
			IAccount account = this.checkAccount(contract.getAccount());
			if (account.getCash() != emYesNo.YES) {
				Logger.log(MessageLevel.DEBUG, MSG_LOGICS_SKIP_LOGIC_EXECUTION, this.getClass().getName(),
						contract.getAccount(), "NOT CASH ACCOUNT");
				return false;
			}
			if (account.getCashFlowRelevant() != emYesNo.YES) {
				Logger.log(MessageLevel.DEBUG, MSG_LOGICS_SKIP_LOGIC_EXECUTION, this.getClass().getName(),
						contract.getAccount(), "NOT CASH FLOW RELEVANT");
				return false;
			}
		}
		return super.checkDataStatus(data);
	}

	@Override
	protected ICashFlowAssignment fetchBeAffected(ICashFlowAssignmentContract contract) {
		ICriteria criteria = new Criteria();
		ICondition condition = criteria.getConditions().create();
		condition.setAlias(CashFlowAssignment.PROPERTY_BASEDOCUMENTTYPE.getName());
		condition.setValue(contract.getDocumentType());
		condition = criteria.getConditions().create();
		condition.setAlias(CashFlowAssignment.PROPERTY_BASEDOCUMENTENTRY.getName());
		condition.setValue(contract.getDocumentEntry());
		condition = criteria.getConditions().create();
		condition.setAlias(CashFlowAssignment.PROPERTY_BASEDOCUMENTLINEID.getName());
		condition.setValue(contract.getDocumentLineId());

		ICashFlowAssignment assignment = this.fetchBeAffected(ICashFlowAssignment.class, criteria);
		if (assignment == null) {
			try (BORepositoryAccounting boRepository = new BORepositoryAccounting()) {
				boRepository.setTransaction(super.getTransaction());
				IOperationResult<ICashFlowAssignment> operationResult = boRepository.fetchCashFlowAssignment(criteria);
				if (operationResult.getError() != null) {
					throw new BusinessLogicException(operationResult.getError());
				}
				assignment = operationResult.getResultObjects().firstOrDefault();
			}
		}
		if (assignment == null) {
			assignment = new CashFlowAssignment();
			assignment.setBaseDocumentType(contract.getDocumentType());
			assignment.setBaseDocumentEntry(contract.getDocumentEntry());
			assignment.setBaseDocumentLineId(contract.getDocumentLineId());
		}
		return assignment;
	}

	@Override
	protected void impact(ICashFlowAssignmentContract contract) {
		ICashFlowAssignment assignment = this.getBeAffected();
		assignment.setAccount(contract.getAccount());
		assignment.setDebit(contract.getDebit());
		assignment.setCredit(contract.getCredit());
		assignment.setCurrency(contract.getCurrency());
		assignment.setPostingDate(contract.getPostingDate());
		assignment.setCashFlow(contract.getCashFlow());
	}

	@Override
	protected void revoke(ICashFlowAssignmentContract contract) {
		ICashFlowAssignment assignment = this.getBeAffected();
		assignment.delete();
	}
}
