package org.colorcoding.ibas.accounting.logic;

import org.colorcoding.ibas.accounting.bo.account.Account;
import org.colorcoding.ibas.accounting.bo.account.IAccount;
import org.colorcoding.ibas.accounting.repository.BORepositoryAccounting;
import org.colorcoding.ibas.bobas.bo.IBusinessObject;
import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.i18n.I18N;
import org.colorcoding.ibas.bobas.logic.BusinessLogic;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.bobas.logic.IBusinessLogicContract;

public abstract class AccountService<L extends IBusinessLogicContract, B extends IBusinessObject>
		extends BusinessLogic<L, B> {

	protected IAccount checkAccount(String accountCode) {
		ICriteria criteria = new Criteria();
		ICondition condition = criteria.getConditions().create();
		condition.setAlias(Account.PROPERTY_CODE.getName());
		condition.setValue(accountCode);

		IAccount account = this.fetchBeAffected(IAccount.class, criteria);
		if (account == null) {
			try (BORepositoryAccounting boRepository = new BORepositoryAccounting()) {
				boRepository.setTransaction(super.getTransaction());
				IOperationResult<IAccount> operationResult = boRepository.fetchAccount(criteria);
				if (operationResult.getError() != null) {
					throw new BusinessLogicException(operationResult.getError());
				}
				account = operationResult.getResultObjects().firstOrDefault();
			}
		}
		if (account == null) {
			throw new BusinessLogicException(I18N.prop("msg_ac_not_found_account", accountCode));
		}
		return account;
	}

}
