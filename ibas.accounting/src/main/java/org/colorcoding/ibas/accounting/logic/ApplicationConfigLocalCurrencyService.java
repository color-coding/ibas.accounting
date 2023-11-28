package org.colorcoding.ibas.accounting.logic;

import org.colorcoding.ibas.accounting.MyConfiguration;
import org.colorcoding.ibas.accounting.data.DataConvert;
import org.colorcoding.ibas.bobas.common.ConditionOperation;
import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.i18n.I18N;
import org.colorcoding.ibas.bobas.logic.BusinessLogic;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.bobas.mapping.LogicContract;
import org.colorcoding.ibas.initialfantasy.bo.application.ApplicationConfig;
import org.colorcoding.ibas.initialfantasy.bo.application.IApplicationConfig;
import org.colorcoding.ibas.initialfantasy.data.emConfigCategory;
import org.colorcoding.ibas.initialfantasy.repository.BORepositoryInitialFantasy;

@LogicContract(IApplicationConfigLocalCurrencyContract.class)
public class ApplicationConfigLocalCurrencyService
		extends BusinessLogic<IApplicationConfigLocalCurrencyContract, IApplicationConfig> {

	public final static String CONFIG_ITEM_LOCAL_CURRENCY = "localCurrency";

	@Override
	protected IApplicationConfig fetchBeAffected(IApplicationConfigLocalCurrencyContract contract) {
		ICriteria criteria = new Criteria();
		ICondition condition = criteria.getConditions().create();
		condition.setAlias(ApplicationConfig.PROPERTY_CONFIGGROUP.getName());
		condition.setOperation(ConditionOperation.EQUAL);
		condition.setValue(MyConfiguration.MODULE_ID);
		condition = criteria.getConditions().create();
		condition.setAlias(ApplicationConfig.PROPERTY_CONFIGKEY.getName());
		condition.setOperation(ConditionOperation.EQUAL);
		condition.setValue(CONFIG_ITEM_LOCAL_CURRENCY);

		IApplicationConfig appConfig = this.fetchBeAffected(criteria, IApplicationConfig.class);
		if (appConfig == null) {
			BORepositoryInitialFantasy boRepository = new BORepositoryInitialFantasy();
			boRepository.setRepository(super.getRepository());
			IOperationResult<IApplicationConfig> operationResult = boRepository.fetchApplicationConfig(criteria);
			if (operationResult.getError() != null) {
				throw new BusinessLogicException(operationResult.getError());
			}
			appConfig = operationResult.getResultObjects().firstOrDefault();
		}
		if (appConfig == null) {
			appConfig = new ApplicationConfig();
			appConfig.setConfigGroup(MyConfiguration.MODULE_ID);
			appConfig.setConfigKey(CONFIG_ITEM_LOCAL_CURRENCY);
			appConfig.setConfigDescription(I18N.prop("msg_ac_local_currency"));
		}
		return appConfig;
	}

	@Override
	protected void impact(IApplicationConfigLocalCurrencyContract contract) {
		IApplicationConfig appConfig = this.getBeAffected();
		appConfig.setActivated(emYesNo.YES);
		appConfig.setCategory(emConfigCategory.CLIENT);
		appConfig.setConfigValue(contract.getCurrency());
	}

	@Override
	protected void revoke(IApplicationConfigLocalCurrencyContract contract) {
		IApplicationConfig appConfig = this.getBeAffected();
		appConfig.setConfigValue(DataConvert.STRING_VALUE_EMPTY);
	}

}