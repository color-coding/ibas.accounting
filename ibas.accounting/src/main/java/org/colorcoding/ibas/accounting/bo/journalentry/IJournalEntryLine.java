package org.colorcoding.ibas.accounting.bo.journalentry;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.bo.IBODocumentLine;
import org.colorcoding.ibas.bobas.data.DateTime;
import org.colorcoding.ibas.bobas.data.emBOStatus;
import org.colorcoding.ibas.bobas.data.emDocumentStatus;
import org.colorcoding.ibas.bobas.data.emYesNo;

/**
 * 日记账分录-行 接口
 * 
 */
public interface IJournalEntryLine extends IBODocumentLine {

	/**
	 * 获取-编码
	 * 
	 * @return 值
	 */
	Integer getDocEntry();

	/**
	 * 设置-编码
	 * 
	 * @param value 值
	 */
	void setDocEntry(Integer value);

	/**
	 * 获取-行号
	 * 
	 * @return 值
	 */
	Integer getLineId();

	/**
	 * 设置-行号
	 * 
	 * @param value 值
	 */
	void setLineId(Integer value);

	/**
	 * 获取-显示顺序
	 * 
	 * @return 值
	 */
	Integer getVisOrder();

	/**
	 * 设置-显示顺序
	 * 
	 * @param value 值
	 */
	void setVisOrder(Integer value);

	/**
	 * 获取-取消
	 * 
	 * @return 值
	 */
	emYesNo getCanceled();

	/**
	 * 设置-取消
	 * 
	 * @param value 值
	 */
	void setCanceled(emYesNo value);

	/**
	 * 获取-状态
	 * 
	 * @return 值
	 */
	emBOStatus getStatus();

	/**
	 * 设置-状态
	 * 
	 * @param value 值
	 */
	void setStatus(emBOStatus value);

	/**
	 * 获取-单据状态
	 * 
	 * @return 值
	 */
	emDocumentStatus getLineStatus();

	/**
	 * 设置-单据状态
	 * 
	 * @param value 值
	 */
	void setLineStatus(emDocumentStatus value);

	/**
	 * 获取-类型
	 * 
	 * @return 值
	 */
	String getObjectCode();

	/**
	 * 设置-类型
	 * 
	 * @param value 值
	 */
	void setObjectCode(String value);

	/**
	 * 获取-创建日期
	 * 
	 * @return 值
	 */
	DateTime getCreateDate();

	/**
	 * 设置-创建日期
	 * 
	 * @param value 值
	 */
	void setCreateDate(DateTime value);

	/**
	 * 获取-创建时间
	 * 
	 * @return 值
	 */
	Short getCreateTime();

	/**
	 * 设置-创建时间
	 * 
	 * @param value 值
	 */
	void setCreateTime(Short value);

	/**
	 * 获取-修改日期
	 * 
	 * @return 值
	 */
	DateTime getUpdateDate();

	/**
	 * 设置-修改日期
	 * 
	 * @param value 值
	 */
	void setUpdateDate(DateTime value);

	/**
	 * 获取-修改时间
	 * 
	 * @return 值
	 */
	Short getUpdateTime();

	/**
	 * 设置-修改时间
	 * 
	 * @param value 值
	 */
	void setUpdateTime(Short value);

	/**
	 * 获取-已引用
	 * 
	 * @return 值
	 */
	emYesNo getReferenced();

	/**
	 * 设置-已引用
	 * 
	 * @param value 值
	 */
	void setReferenced(emYesNo value);

	/**
	 * 获取-版本
	 * 
	 * @return 值
	 */
	Integer getLogInst();

	/**
	 * 设置-版本
	 * 
	 * @param value 值
	 */
	void setLogInst(Integer value);

	/**
	 * 获取-服务系列
	 * 
	 * @return 值
	 */
	Integer getSeries();

	/**
	 * 设置-服务系列
	 * 
	 * @param value 值
	 */
	void setSeries(Integer value);

	/**
	 * 获取-数据源
	 * 
	 * @return 值
	 */
	String getDataSource();

	/**
	 * 设置-数据源
	 * 
	 * @param value 值
	 */
	void setDataSource(String value);

	/**
	 * 获取-创建用户
	 * 
	 * @return 值
	 */
	Integer getCreateUserSign();

	/**
	 * 设置-创建用户
	 * 
	 * @param value 值
	 */
	void setCreateUserSign(Integer value);

	/**
	 * 获取-修改用户
	 * 
	 * @return 值
	 */
	Integer getUpdateUserSign();

	/**
	 * 设置-修改用户
	 * 
	 * @param value 值
	 */
	void setUpdateUserSign(Integer value);

	/**
	 * 获取-创建动作标识
	 * 
	 * @return 值
	 */
	String getCreateActionId();

	/**
	 * 设置-创建动作标识
	 * 
	 * @param value 值
	 */
	void setCreateActionId(String value);

	/**
	 * 获取-更新动作标识
	 * 
	 * @return 值
	 */
	String getUpdateActionId();

	/**
	 * 设置-更新动作标识
	 * 
	 * @param value 值
	 */
	void setUpdateActionId(String value);

	/**
	 * 获取-科目
	 * 
	 * @return 值
	 */
	String getAccount();

	/**
	 * 设置-科目
	 * 
	 * @param value 值
	 */
	void setAccount(String value);

	/**
	 * 获取-业务伙伴/科目代码
	 * 
	 * @return 值
	 */
	String getShortName();

	/**
	 * 设置-业务伙伴/科目代码
	 * 
	 * @param value 值
	 */
	void setShortName(String value);

	/**
	 * 获取-借方金额
	 * 
	 * @return 值
	 */
	BigDecimal getDebit();

	/**
	 * 设置-借方金额
	 * 
	 * @param value 值
	 */
	void setDebit(BigDecimal value);

	/**
	 * 获取-贷方金额
	 * 
	 * @return 值
	 */
	BigDecimal getCredit();

	/**
	 * 设置-贷方金额
	 * 
	 * @param value 值
	 */
	void setCredit(BigDecimal value);

	/**
	 * 获取-货币
	 * 
	 * @return 值
	 */
	String getCurrency();

	/**
	 * 设置-货币
	 * 
	 * @param value 值
	 */
	void setCurrency(String value);

	/**
	 * 获取-项目代码
	 * 
	 * @return 值
	 */
	String getProject();

	/**
	 * 设置-项目代码
	 * 
	 * @param value 值
	 */
	void setProject(String value);

	/**
	 * 获取-成本中心1
	 * 
	 * @return 值
	 */
	String getDistributionRule1();

	/**
	 * 设置-成本中心1
	 * 
	 * @param value 值
	 */
	void setDistributionRule1(String value);

	/**
	 * 获取-成本中心2
	 * 
	 * @return 值
	 */
	String getDistributionRule2();

	/**
	 * 设置-成本中心2
	 * 
	 * @param value 值
	 */
	void setDistributionRule2(String value);

	/**
	 * 获取-成本中心3
	 * 
	 * @return 值
	 */
	String getDistributionRule3();

	/**
	 * 设置-成本中心3
	 * 
	 * @param value 值
	 */
	void setDistributionRule3(String value);

	/**
	 * 获取-成本中心4
	 * 
	 * @return 值
	 */
	String getDistributionRule4();

	/**
	 * 设置-成本中心4
	 * 
	 * @param value 值
	 */
	void setDistributionRule4(String value);

	/**
	 * 获取-成本中心5
	 * 
	 * @return 值
	 */
	String getDistributionRule5();

	/**
	 * 设置-成本中心5
	 * 
	 * @param value 值
	 */
	void setDistributionRule5(String value);

	/**
	 * 获取-参考1
	 * 
	 * @return 值
	 */
	String getReference1();

	/**
	 * 设置-参考1
	 * 
	 * @param value 值
	 */
	void setReference1(String value);

	/**
	 * 获取-参考2
	 * 
	 * @return 值
	 */
	String getReference2();

	/**
	 * 设置-参考2
	 * 
	 * @param value 值
	 */
	void setReference2(String value);

	/**
	 * 获取-参考3
	 * 
	 * @return 值
	 */
	String getReference3();

	/**
	 * 设置-参考3
	 * 
	 * @param value 值
	 */
	void setReference3(String value);

}
