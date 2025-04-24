package org.colorcoding.ibas.accounting.logic;

import org.colorcoding.ibas.accounting.MyConfiguration;
import org.colorcoding.ibas.bobas.common.ConditionOperation;
import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.logic.BusinessLogic;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.bobas.logic.LogicContract;
import org.colorcoding.ibas.initialfantasy.bo.application.ApplicationConfig;
import org.colorcoding.ibas.initialfantasy.bo.application.IApplicationConfig;
import org.colorcoding.ibas.initialfantasy.data.emConfigCategory;
import org.colorcoding.ibas.initialfantasy.repository.BORepositoryInitialFantasy;

@LogicContract(IApplicationConfigDimensionContract.class)
public class ApplicationConfigDimensionService
		extends BusinessLogic<IApplicationConfigDimensionContract, IApplicationConfig> {

	public final static String CONFIG_ITEM_ENABLE_DIMENSION_TEMPLATE = "enableDimension|%s";
	public final static String CONFIG_ITEM_VALUE_TRUE = "true";
	public final static String CONFIG_ITEM_VALUE_FALSE = "false";

	@Override
	protected IApplicationConfig fetchBeAffected(IApplicationConfigDimensionContract contract) {
		ICriteria criteria = new Criteria();
		ICondition condition = criteria.getConditions().create();
		condition.setAlias(ApplicationConfig.PROPERTY_CONFIGGROUP.getName());
		condition.setOperation(ConditionOperation.EQUAL);
		condition.setValue(MyConfiguration.MODULE_ID);
		condition = criteria.getConditions().create();
		condition.setAlias(ApplicationConfig.PROPERTY_CONFIGKEY.getName());
		condition.setOperation(ConditionOperation.EQUAL);
		condition.setValue(String.format(CONFIG_ITEM_ENABLE_DIMENSION_TEMPLATE, contract.getDimension()));

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
			appConfig.setConfigKey(String.format(CONFIG_ITEM_ENABLE_DIMENSION_TEMPLATE, contract.getDimension()));
		}
		return appConfig;
	}

	@Override
	protected void impact(IApplicationConfigDimensionContract contract) {
		IApplicationConfig appConfig = this.getBeAffected();
		appConfig.setActivated(emYesNo.YES);
		appConfig.setCategory(emConfigCategory.CLIENT);
		appConfig.setConfigDescription(contract.getDescription());
		if (contract.getActivated() == emYesNo.YES) {
			appConfig.setConfigValue(CONFIG_ITEM_VALUE_TRUE);
		} else {
			appConfig.setConfigValue(CONFIG_ITEM_VALUE_FALSE);
		}
	}

	@Override
	protected void revoke(IApplicationConfigDimensionContract contract) {
		IApplicationConfig appConfig = this.getBeAffected();
		appConfig.setActivated(emYesNo.NO);
	}

}