/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace accounting {
    export namespace bo {
        /** 科目 */
        export class Account extends ibas.BOMasterData<Account> implements IAccount {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = BO_CODE_ACCOUNT;
            /** 构造函数 */
            constructor() {
                super();
            }
            /** 映射的属性名称-编码 */
            static PROPERTY_CODE_NAME: string = "Code";
            /** 获取-编码 */
            get code(): string {
                return this.getProperty<string>(Account.PROPERTY_CODE_NAME);
            }
            /** 设置-编码 */
            set code(value: string) {
                this.setProperty(Account.PROPERTY_CODE_NAME, value);
            }

            /** 映射的属性名称-名称 */
            static PROPERTY_NAME_NAME: string = "Name";
            /** 获取-名称 */
            get name(): string {
                return this.getProperty<string>(Account.PROPERTY_NAME_NAME);
            }
            /** 设置-名称 */
            set name(value: string) {
                this.setProperty(Account.PROPERTY_NAME_NAME, value);
            }

            /** 映射的属性名称-外文名称 */
            static PROPERTY_FOREIGNNAME_NAME: string = "ForeignName";
            /** 获取-外文名称 */
            get foreignName(): string {
                return this.getProperty<string>(Account.PROPERTY_FOREIGNNAME_NAME);
            }
            /** 设置-外文名称 */
            set foreignName(value: string) {
                this.setProperty(Account.PROPERTY_FOREIGNNAME_NAME, value);
            }

            /** 映射的属性名称-上级科目 */
            static PROPERTY_PARENT_NAME: string = "Parent";
            /** 获取-上级科目 */
            get parent(): string {
                return this.getProperty<string>(Account.PROPERTY_PARENT_NAME);
            }
            /** 设置-上级科目 */
            set parent(value: string) {
                this.setProperty(Account.PROPERTY_PARENT_NAME, value);
            }

            /** 映射的属性名称-层级 */
            static PROPERTY_LEVEL_NAME: string = "Level";
            /** 获取-层级 */
            get level(): number {
                return this.getProperty<number>(Account.PROPERTY_LEVEL_NAME);
            }
            /** 设置-层级 */
            set level(value: number) {
                this.setProperty(Account.PROPERTY_LEVEL_NAME, value);
            }

            /** 映射的属性名称-外部编码 */
            static PROPERTY_EXTERNAL_NAME: string = "External";
            /** 获取-外部编码 */
            get external(): string {
                return this.getProperty<string>(Account.PROPERTY_EXTERNAL_NAME);
            }
            /** 设置-外部编码 */
            set external(value: string) {
                this.setProperty(Account.PROPERTY_EXTERNAL_NAME, value);
            }

            /** 映射的属性名称-机密 */
            static PROPERTY_PROTECTED_NAME: string = "Protected";
            /** 获取-机密 */
            get protected(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(Account.PROPERTY_PROTECTED_NAME);
            }
            /** 设置-机密 */
            set protected(value: ibas.emYesNo) {
                this.setProperty(Account.PROPERTY_PROTECTED_NAME, value);
            }

            /** 映射的属性名称-传递类型 */
            static PROPERTY_POSTABLE_NAME: string = "Postable";
            /** 获取-传递类型 */
            get postable(): emPostableType {
                return this.getProperty<emPostableType>(Account.PROPERTY_POSTABLE_NAME);
            }
            /** 设置-传递类型 */
            set postable(value: emPostableType) {
                this.setProperty(Account.PROPERTY_POSTABLE_NAME, value);
            }

            /** 映射的属性名称-控制科目 */
            static PROPERTY_CONTROL_NAME: string = "Control";
            /** 获取-控制科目 */
            get control(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(Account.PROPERTY_CONTROL_NAME);
            }
            /** 设置-控制科目 */
            set control(value: ibas.emYesNo) {
                this.setProperty(Account.PROPERTY_CONTROL_NAME, value);
            }

            /** 映射的属性名称-现金科目 */
            static PROPERTY_CASH_NAME: string = "Cash";
            /** 获取-现金科目 */
            get cash(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(Account.PROPERTY_CASH_NAME);
            }
            /** 设置-现金科目 */
            set cash(value: ibas.emYesNo) {
                this.setProperty(Account.PROPERTY_CASH_NAME, value);
            }

            /** 映射的属性名称-现金流相关 */
            static PROPERTY_CASHFLOWRELEVANT_NAME: string = "CashFlowRelevant";
            /** 获取-现金流相关 */
            get cashFlowRelevant(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(Account.PROPERTY_CASHFLOWRELEVANT_NAME);
            }
            /** 设置-现金流相关 */
            set cashFlowRelevant(value: ibas.emYesNo) {
                this.setProperty(Account.PROPERTY_CASHFLOWRELEVANT_NAME, value);
            }

            /** 映射的属性名称-生效日期 */
            static PROPERTY_VALIDDATE_NAME: string = "ValidDate";
            /** 获取-生效日期 */
            get validDate(): Date {
                return this.getProperty<Date>(Account.PROPERTY_VALIDDATE_NAME);
            }
            /** 设置-生效日期 */
            set validDate(value: Date) {
                this.setProperty(Account.PROPERTY_VALIDDATE_NAME, value);
            }

            /** 映射的属性名称-失效日期 */
            static PROPERTY_INVALIDDATE_NAME: string = "InvalidDate";
            /** 获取-失效日期 */
            get invalidDate(): Date {
                return this.getProperty<Date>(Account.PROPERTY_INVALIDDATE_NAME);
            }
            /** 设置-失效日期 */
            set invalidDate(value: Date) {
                this.setProperty(Account.PROPERTY_INVALIDDATE_NAME, value);
            }

            /** 映射的属性名称-余额 */
            static PROPERTY_BALANCE_NAME: string = "Balance";
            /** 获取-余额 */
            get balance(): number {
                return this.getProperty<number>(Account.PROPERTY_BALANCE_NAME);
            }
            /** 设置-余额 */
            set balance(value: number) {
                this.setProperty(Account.PROPERTY_BALANCE_NAME, value);
            }

            /** 映射的属性名称-币种 */
            static PROPERTY_CURRENCY_NAME: string = "Currency";
            /** 获取-币种 */
            get currency(): string {
                return this.getProperty<string>(Account.PROPERTY_CURRENCY_NAME);
            }
            /** 设置-币种 */
            set currency(value: string) {
                this.setProperty(Account.PROPERTY_CURRENCY_NAME, value);
            }

            /** 映射的属性名称-分支 */
            static PROPERTY_BRANCH_NAME: string = "Branch";
            /** 获取-分支 */
            get branch(): string {
                return this.getProperty<string>(Account.PROPERTY_BRANCH_NAME);
            }
            /** 设置-分支 */
            set branch(value: string) {
                this.setProperty(Account.PROPERTY_BRANCH_NAME, value);
            }

            /** 映射的属性名称-对象编号 */
            static PROPERTY_DOCENTRY_NAME: string = "DocEntry";
            /** 获取-对象编号 */
            get docEntry(): number {
                return this.getProperty<number>(Account.PROPERTY_DOCENTRY_NAME);
            }
            /** 设置-对象编号 */
            set docEntry(value: number) {
                this.setProperty(Account.PROPERTY_DOCENTRY_NAME, value);
            }

            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string = "ObjectCode";
            /** 获取-对象类型 */
            get objectCode(): string {
                return this.getProperty<string>(Account.PROPERTY_OBJECTCODE_NAME);
            }
            /** 设置-对象类型 */
            set objectCode(value: string) {
                this.setProperty(Account.PROPERTY_OBJECTCODE_NAME, value);
            }

            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string = "CreateDate";
            /** 获取-创建日期 */
            get createDate(): Date {
                return this.getProperty<Date>(Account.PROPERTY_CREATEDATE_NAME);
            }
            /** 设置-创建日期 */
            set createDate(value: Date) {
                this.setProperty(Account.PROPERTY_CREATEDATE_NAME, value);
            }

            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string = "CreateTime";
            /** 获取-创建时间 */
            get createTime(): number {
                return this.getProperty<number>(Account.PROPERTY_CREATETIME_NAME);
            }
            /** 设置-创建时间 */
            set createTime(value: number) {
                this.setProperty(Account.PROPERTY_CREATETIME_NAME, value);
            }

            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string = "UpdateDate";
            /** 获取-修改日期 */
            get updateDate(): Date {
                return this.getProperty<Date>(Account.PROPERTY_UPDATEDATE_NAME);
            }
            /** 设置-修改日期 */
            set updateDate(value: Date) {
                this.setProperty(Account.PROPERTY_UPDATEDATE_NAME, value);
            }

            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string = "UpdateTime";
            /** 获取-修改时间 */
            get updateTime(): number {
                return this.getProperty<number>(Account.PROPERTY_UPDATETIME_NAME);
            }
            /** 设置-修改时间 */
            set updateTime(value: number) {
                this.setProperty(Account.PROPERTY_UPDATETIME_NAME, value);
            }

            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string = "DataSource";
            /** 获取-数据源 */
            get dataSource(): string {
                return this.getProperty<string>(Account.PROPERTY_DATASOURCE_NAME);
            }
            /** 设置-数据源 */
            set dataSource(value: string) {
                this.setProperty(Account.PROPERTY_DATASOURCE_NAME, value);
            }

            /** 映射的属性名称-实例号（版本） */
            static PROPERTY_LOGINST_NAME: string = "LogInst";
            /** 获取-实例号（版本） */
            get logInst(): number {
                return this.getProperty<number>(Account.PROPERTY_LOGINST_NAME);
            }
            /** 设置-实例号（版本） */
            set logInst(value: number) {
                this.setProperty(Account.PROPERTY_LOGINST_NAME, value);
            }

            /** 映射的属性名称-服务系列 */
            static PROPERTY_SERIES_NAME: string = "Series";
            /** 获取-服务系列 */
            get series(): number {
                return this.getProperty<number>(Account.PROPERTY_SERIES_NAME);
            }
            /** 设置-服务系列 */
            set series(value: number) {
                this.setProperty(Account.PROPERTY_SERIES_NAME, value);
            }

            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string = "CreateUserSign";
            /** 获取-创建用户 */
            get createUserSign(): number {
                return this.getProperty<number>(Account.PROPERTY_CREATEUSERSIGN_NAME);
            }
            /** 设置-创建用户 */
            set createUserSign(value: number) {
                this.setProperty(Account.PROPERTY_CREATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string = "UpdateUserSign";
            /** 获取-修改用户 */
            get updateUserSign(): number {
                return this.getProperty<number>(Account.PROPERTY_UPDATEUSERSIGN_NAME);
            }
            /** 设置-修改用户 */
            set updateUserSign(value: number) {
                this.setProperty(Account.PROPERTY_UPDATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string = "CreateActionId";
            /** 获取-创建动作标识 */
            get createActionId(): string {
                return this.getProperty<string>(Account.PROPERTY_CREATEACTIONID_NAME);
            }
            /** 设置-创建动作标识 */
            set createActionId(value: string) {
                this.setProperty(Account.PROPERTY_CREATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string = "UpdateActionId";
            /** 获取-更新动作标识 */
            get updateActionId(): string {
                return this.getProperty<string>(Account.PROPERTY_UPDATEACTIONID_NAME);
            }
            /** 设置-更新动作标识 */
            set updateActionId(value: string) {
                this.setProperty(Account.PROPERTY_UPDATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string = "Remarks";
            /** 获取-备注 */
            get remarks(): string {
                return this.getProperty<string>(Account.PROPERTY_REMARKS_NAME);
            }
            /** 设置-备注 */
            set remarks(value: string) {
                this.setProperty(Account.PROPERTY_REMARKS_NAME, value);
            }

            /** 初始化数据 */
            protected init(): void {
                this.objectCode = ibas.config.applyVariables(Account.BUSINESS_OBJECT_CODE);
                this.postable = emPostableType.ACTIVE;
            }
        }


    }
}
