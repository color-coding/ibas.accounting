package org.colorcoding.ibas.accounting.logic;

import org.colorcoding.ibas.accounting.MyConfiguration;
import org.colorcoding.ibas.bobas.common.ConditionOperation;
import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.common.Strings;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.i18n.I18N;
import org.colorcoding.ibas.bobas.logic.BusinessLogic;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.bobas.logic.LogicContract;
import org.colorcoding.ibas.initialfantasy.bo.application.ApplicationConfig;
import org.colorcoding.ibas.initialfantasy.bo.application.IApplicationConfig;
import org.colorcoding.ibas.initialfantasy.data.emConfigCategory;
import org.colorcoding.ibas.initialfantasy.repository.BORepositoryInitialFantasy;

@LogicContract(IApplicationConfigSystemCurrencyContract.class)
public class ApplicationConfigSystemCurrencyService
		extends BusinessLogic<IApplicationConfigSystemCurrencyContract, IApplicationConfig> {

	public final static String CONFIG_ITEM_SYSTEM_CURRENCY = "systemCurrency";

	@Override
	protected IApplicationConfig fetchBeAffected(IApplicationConfigSystemCurrencyContract contract) {
		ICriteria criteria = new Criteria();
		ICondition condition = criteria.getConditions().create();
		condition.setAlias(ApplicationConfig.PROPERTY_CONFIGGROUP.getName());
		condition.setOperation(ConditionOperation.EQUAL);
		condition.setValue(MyConfiguration.MODULE_ID);
		condition = criteria.getConditions().create();
		condition.setAlias(ApplicationConfig.PROPERTY_CONFIGKEY.getName());
		condition.setOperation(ConditionOperation.EQUAL);
		condition.setValue(CONFIG_ITEM_SYSTEM_CURRENCY);

		IApplicationConfig appConfig = this.fetchBeAffected(IApplicationConfig.class, criteria);
		if (appConfig == null) {
			try (BORepositoryInitialFantasy boRepository = new BORepositoryInitialFantasy()) {
				boRepository.setTransaction(this.getTransaction());
				IOperationResult<IApplicationConfig> operationResult = boRepository.fetchApplicationConfig(criteria);
				if (operationResult.getError() != null) {
					throw new BusinessLogicException(operationResult.getError());
				}
				appConfig = operationResult.getResultObjects().firstOrDefault();
			}
		}
		if (appConfig == null) {
			appConfig = new ApplicationConfig();
			appConfig.setConfigGroup(MyConfiguration.MODULE_ID);
			appConfig.setConfigKey(CONFIG_ITEM_SYSTEM_CURRENCY);
			appConfig.setConfigDescription(I18N.prop("msg_ac_system_currency"));
		}
		return appConfig;
	}

	@Override
	protected void impact(IApplicationConfigSystemCurrencyContract contract) {
		IApplicationConfig appConfig = this.getBeAffected();
		appConfig.setActivated(emYesNo.YES);
		appConfig.setCategory(emConfigCategory.ALL);
		appConfig.setConfigValue(contract.getCurrency());
	}

	@Override
	protected void revoke(IApplicationConfigSystemCurrencyContract contract) {
		IApplicationConfig appConfig = this.getBeAffected();
		appConfig.setConfigValue(Strings.VALUE_EMPTY);
	}

}