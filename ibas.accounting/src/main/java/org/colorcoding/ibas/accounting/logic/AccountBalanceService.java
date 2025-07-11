package org.colorcoding.ibas.accounting.logic;

import java.math.BigDecimal;

import org.colorcoding.ibas.accounting.bo.account.IAccount;
import org.colorcoding.ibas.accounting.data.DataConvert;
import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.mapping.LogicContract;
import org.colorcoding.ibas.bobas.message.Logger;
import org.colorcoding.ibas.bobas.message.MessageLevel;

@LogicContract(IAccountBalanceContract.class)
public class AccountBalanceService extends AccountService<IAccountBalanceContract, IAccount> {
	@Override
	protected boolean checkDataStatus(Object data) {
		if (data instanceof IAccountBalanceContract) {
			IAccountBalanceContract contract = (IAccountBalanceContract) data;
			if (DataConvert.isNullOrEmpty(contract.getAccount())) {
				Logger.log(MessageLevel.DEBUG, MSG_LOGICS_SKIP_LOGIC_EXECUTION, this.getClass().getName(), "Account",
						"Empty");
				return false;
			}
		}
		return super.checkDataStatus(data);
	}

	@Override
	protected IAccount fetchBeAffected(IAccountBalanceContract contract) {
		return this.checkAccount(contract.getAccount());
	}

	@Override
	protected void impact(IAccountBalanceContract contract) {
		BigDecimal amount = this.amountOf(contract);
		if (!Decimal.isZero(amount)) {
			IAccount account = this.getBeAffected();
			BigDecimal total = Decimal.add(account.getBalance(), amount);
			account.setBalance(total);
			if (DataConvert.isNullOrEmpty(account.getCurrency())) {
				account.setCurrency(contract.getCurrency());
			}
		}
	}

	@Override
	protected void revoke(IAccountBalanceContract contract) {
		BigDecimal amount = this.amountOf(contract);
		if (!Decimal.isZero(amount)) {
			IAccount account = this.getBeAffected();
			BigDecimal total = Decimal.subtract(account.getBalance(), amount);
			account.setBalance(total);
		}
	}

	protected BigDecimal amountOf(IAccountBalanceContract contract) {
		BigDecimal amount = Decimal.ZERO;
		// 借方
		BigDecimal debit = contract.getDebit();
		// 贷方
		BigDecimal credit = contract.getCredit();

		// B1逻辑：借方 - 贷方
		amount = Decimal.subtract(debit, credit);

		// 中国会计准则
		// 1=资产类，2=负债类，3=所有者权益类，4=成本类，5=损益类(50-52：收入类；53-59：费用类)

//		// 资产类
//		if (contract.getAccount().startsWith("1")) {
//			amount = Decimal.subtract(debit, credit);
//		} else
//		// 负债类
//		if (contract.getAccount().startsWith("2")) {
//			amount = Decimal.subtract(credit, debit);
//		} else
//		// 所有者权益类
//		if (contract.getAccount().startsWith("3")) {
//			amount = Decimal.subtract(credit, debit);
//		} else
//		// 成本类
//		if (contract.getAccount().startsWith("4")) {
//			amount = Decimal.subtract(debit, credit);
//		} else
//		// 损益类
//		if (contract.getAccount().startsWith("5") && contract.getAccount().length() >= 2) {
//			Integer type = Integer.valueOf(contract.getAccount().substring(0, 1));
//			if (type >= 53) {
//				// 费用类
//				amount = Decimal.subtract(debit, credit);
//			} else {
//				// 收入类
//				amount = Decimal.subtract(credit, debit);
//			}
//		} else {
//			throw new BusinessLogicException(I18N.prop("msg_ac_unrecognized_account_category", contract.getAccount()));
//		}
		return amount;
	}
}
