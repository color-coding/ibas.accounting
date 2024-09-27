package org.colorcoding.ibas.accounting.logic;

import org.colorcoding.ibas.accounting.bo.taxgroup.ITaxGroup;
import org.colorcoding.ibas.accounting.bo.taxgroup.TaxGroup;
import org.colorcoding.ibas.accounting.data.DataConvert;
import org.colorcoding.ibas.accounting.repository.BORepositoryAccounting;
import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.i18n.I18N;
import org.colorcoding.ibas.bobas.logic.BusinessLogic;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.bobas.mapping.LogicContract;

@LogicContract(ITaxGroupCheckContract.class)
public class TaxGroupCheckService extends BusinessLogic<ITaxGroupCheckContract, ITaxGroup> {

	public TaxGroupCheckService() {
		super();
	}

	@Override
	protected boolean checkDataStatus(Object data) {
		return super.checkDataStatus(data);
	}

	@Override
	protected ITaxGroup fetchBeAffected(ITaxGroupCheckContract contract) {
		ITaxGroup taxGroup = null;
		if (DataConvert.isNullOrEmpty(contract.getTax())) {
			taxGroup = new _TaxGroup();
			taxGroup.setCode("$EMPTY");
			taxGroup.setRate(contract.getTaxRate());
			return taxGroup;
		}
		ICriteria criteria = new Criteria();
		ICondition condition = criteria.getConditions().create();
		condition.setAlias(TaxGroup.PROPERTY_CODE.getName());
		condition.setValue(contract.getTax());
		taxGroup = super.fetchBeAffected(criteria, ITaxGroup.class);
		if (taxGroup == null) {
			BORepositoryAccounting boRepository = new BORepositoryAccounting();
			boRepository.setRepository(super.getRepository());
			IOperationResult<TaxGroup> operationResult = boRepository.fetchTaxGroup(criteria,
					boRepository.getUserToken());
			if (operationResult.getError() != null) {
				throw new BusinessLogicException(operationResult.getError());
			}
			taxGroup = operationResult.getResultObjects().firstOrDefault();
		}
		if (taxGroup == null) {
			taxGroup = new _TaxGroup();
			taxGroup.setCode(contract.getTax());
			taxGroup.setRate(contract.getTaxRate());
		}
		return taxGroup;
	}

	@Override
	protected void impact(ITaxGroupCheckContract contract) {
		ITaxGroup taxGroup = this.getBeAffected();
		if (taxGroup.getRate().compareTo(contract.getTaxRate()) != 0) {
			throw new BusinessLogicException(
					I18N.prop("msg_ac_document_tax_code_and_rate_not_match", contract.getIdentifiers()));
		}
	}

	@Override
	protected void revoke(ITaxGroupCheckContract contract) {
	}

}

class _TaxGroup extends TaxGroup {

	private static final long serialVersionUID = 1L;

	public _TaxGroup() {
		super();
		this.setSavable(false);
		this.setCode("$EMPTY");
		this.setRate(Decimal.ZERO);
	}

}