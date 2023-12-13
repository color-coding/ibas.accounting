package org.colorcoding.ibas.accounting.logic;

import org.colorcoding.ibas.accounting.MyConfiguration;
import org.colorcoding.ibas.accounting.bo.branch.Branch;
import org.colorcoding.ibas.accounting.bo.branch.IBranch;
import org.colorcoding.ibas.accounting.repository.BORepositoryAccounting;
import org.colorcoding.ibas.bobas.common.ConditionOperation;
import org.colorcoding.ibas.bobas.common.ConditionRelationship;
import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.i18n.I18N;
import org.colorcoding.ibas.bobas.logic.BusinessLogic;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.bobas.mapping.LogicContract;
import org.colorcoding.ibas.bobas.message.Logger;
import org.colorcoding.ibas.bobas.message.MessageLevel;

@LogicContract(IBranchCheckContract.class)
public class BranchCheckService extends BusinessLogic<IBranchCheckContract, IBranch> {

	public BranchCheckService() {
		super();
		this.setEnabled(MyConfiguration.getConfigValue(MyConfiguration.CONFIG_ITEM_ENABLE_BRANCH, false));
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
		return super.checkDataStatus(data);
	}

	@Override
	protected IBranch fetchBeAffected(IBranchCheckContract contract) {
		ICriteria criteria = new Criteria();
		ICondition condition = criteria.getConditions().create();
		condition.setAlias(Branch.PROPERTY_CODE.getName());
		condition.setValue(contract.getBranch());
		condition.setOperation(ConditionOperation.EQUAL);
		condition = criteria.getConditions().create();
		condition.setBracketOpen(1);
		condition.setAlias(Branch.PROPERTY_DELETED.getName());
		condition.setValue(emYesNo.YES);
		condition.setOperation(ConditionOperation.EQUAL);
		condition = criteria.getConditions().create();
		condition.setAlias(Branch.PROPERTY_DELETED.getName());
		condition.setValue(emYesNo.NO);
		condition.setOperation(ConditionOperation.EQUAL);
		condition.setRelationship(ConditionRelationship.OR);
		condition = criteria.getConditions().create();
		condition.setBracketClose(1);
		condition.setAlias(Branch.PROPERTY_DELETED.getName());
		condition.setOperation(ConditionOperation.IS_NULL);
		condition.setRelationship(ConditionRelationship.OR);
		IBranch branch = super.fetchBeAffected(criteria, IBranch.class);
		if (branch == null) {
			BORepositoryAccounting boRepository = new BORepositoryAccounting();
			boRepository.setRepository(super.getRepository());
			IOperationResult<IBranch> operationResult = boRepository.fetchBranch(criteria);
			if (operationResult.getError() != null) {
				throw new BusinessLogicException(operationResult.getError());
			}
			branch = operationResult.getResultObjects().firstOrDefault();
		}
		// 分支不存在
		if (branch == null) {
			throw new BusinessLogicException(
					I18N.prop("msg_bp_branch_is_not_exist", contract.getBranch() == null ? "" : contract.getBranch()));
		}
		// 分支是否可用
		if (branch.getActivated() == emYesNo.NO) {
			throw new BusinessLogicException(
					I18N.prop("msg_bp_branch_is_unavailable", branch.getCode(), branch.getName()));
		}
		if (branch.getDeleted() == emYesNo.YES) {
			throw new BusinessLogicException(
					I18N.prop("msg_bp_branch_is_unavailable", branch.getCode(), branch.getName()));
		}
		return branch;
	}

	@Override
	protected void impact(IBranchCheckContract contract) {
		if (this.getBeAffected().getReferenced() == emYesNo.NO) {
			this.getBeAffected().setReferenced(emYesNo.YES);
		}
	}

	@Override
	protected void revoke(IBranchCheckContract contract) {
	}

}
