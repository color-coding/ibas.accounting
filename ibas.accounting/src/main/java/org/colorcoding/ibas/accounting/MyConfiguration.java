package org.colorcoding.ibas.accounting;

import org.colorcoding.ibas.bobas.configuration.ConfigurationFactory;
import org.colorcoding.ibas.bobas.configuration.IConfigurationManager;

/**
 * 我的配置项
 */
public class MyConfiguration extends org.colorcoding.ibas.bobas.MyConfiguration {

	private volatile static IConfigurationManager instance;

	public static IConfigurationManager create() {
		if (instance == null) {
			synchronized (MyConfiguration.class) {
				if (instance == null) {
					instance = ConfigurationFactory.create().createManager();
					instance.setConfigSign(MODULE_ID);
					instance.update();
				}
			}
		}
		return instance;
	}

	public static <P> P getConfigValue(String key, P defaultValue) {
		return create().getConfigValue(key, defaultValue);
	}

	public static String getConfigValue(String key) {
		return create().getConfigValue(key);
	}

	/**
	 * 模块标识
	 */
	public static final String MODULE_ID = "ac70d488-d8fc-478a-af00-c70ef779a50b";

	/**
	 * 命名空间
	 */
	public static final String NAMESPACE_ROOT = "http://colorcoding.org/ibas/accounting/";

	/**
	 * 数据命名空间
	 */
	public static final String NAMESPACE_DATA = NAMESPACE_ROOT + "data";

	/**
	 * 业务对象命名空间
	 */
	public static final String NAMESPACE_BO = NAMESPACE_ROOT + "bo";

	/**
	 * 服务命名空间
	 */
	public static final String NAMESPACE_SERVICE = NAMESPACE_ROOT + "service";

	/**
	 * 配置项目-开启分录创建服务
	 */
	public final static String CONFIG_ITEM_ENABLE_JOURNAL_ENTRY_SERVICE = "enableJournalEntryService";
	/**
	 * 配置项目-开启分支
	 */
	public final static String CONFIG_ITEM_ENABLE_BRANCH = "enableBranch";

}
