/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace accounting {
    export namespace bo {
        /** 期间-分类账 */
        export class PeriodLedgerAccount extends ibas.BOSimple<PeriodLedgerAccount> implements IPeriodLedgerAccount {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = BO_CODE_PERIODLEDGERACCOUNT;
            /** 构造函数 */
            constructor() {
                super();
            }
            /** 映射的属性名称-名称 */
            static PROPERTY_NAME_NAME: string = "Name";
            /** 获取-名称 */
            get name(): string {
                return this.getProperty<string>(PeriodLedgerAccount.PROPERTY_NAME_NAME);
            }
            /** 设置-名称 */
            set name(value: string) {
                this.setProperty(PeriodLedgerAccount.PROPERTY_NAME_NAME, value);
            }

            /** 映射的属性名称-期间 */
            static PROPERTY_PERIOD_NAME: string = "Period";
            /** 获取-期间 */
            get period(): number {
                return this.getProperty<number>(PeriodLedgerAccount.PROPERTY_PERIOD_NAME);
            }
            /** 设置-期间 */
            set period(value: number) {
                this.setProperty(PeriodLedgerAccount.PROPERTY_PERIOD_NAME, value);
            }

            /** 映射的属性名称-分类 */
            static PROPERTY_LEDGER_NAME: string = "Ledger";
            /** 获取-分类 */
            get ledger(): string {
                return this.getProperty<string>(PeriodLedgerAccount.PROPERTY_LEDGER_NAME);
            }
            /** 设置-分类 */
            set ledger(value: string) {
                this.setProperty(PeriodLedgerAccount.PROPERTY_LEDGER_NAME, value);
            }

            /** 映射的属性名称-序号 */
            static PROPERTY_ORDER_NAME: string = "Order";
            /** 获取-序号 */
            get order(): number {
                return this.getProperty<number>(PeriodLedgerAccount.PROPERTY_ORDER_NAME);
            }
            /** 设置-序号 */
            set order(value: number) {
                this.setProperty(PeriodLedgerAccount.PROPERTY_ORDER_NAME, value);
            }

            /** 映射的属性名称-激活 */
            static PROPERTY_ACTIVATED_NAME: string = "Activated";
            /** 获取-激活 */
            get activated(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(PeriodLedgerAccount.PROPERTY_ACTIVATED_NAME);
            }
            /** 设置-激活 */
            set activated(value: ibas.emYesNo) {
                this.setProperty(PeriodLedgerAccount.PROPERTY_ACTIVATED_NAME, value);
            }

            /** 映射的属性名称-科目 */
            static PROPERTY_ACCOUNT_NAME: string = "Account";
            /** 获取-科目 */
            get account(): string {
                return this.getProperty<string>(PeriodLedgerAccount.PROPERTY_ACCOUNT_NAME);
            }
            /** 设置-科目 */
            set account(value: string) {
                this.setProperty(PeriodLedgerAccount.PROPERTY_ACCOUNT_NAME, value);
            }

            /** 映射的属性名称-设置 */
            static PROPERTY_SETTINGS_NAME: string = "Settings";
            /** 获取-设置 */
            get settings(): string {
                return this.getProperty<string>(PeriodLedgerAccount.PROPERTY_SETTINGS_NAME);
            }
            /** 设置-设置 */
            set settings(value: string) {
                this.setProperty(PeriodLedgerAccount.PROPERTY_SETTINGS_NAME, value);
            }

            /** 映射的属性名称-对象编号 */
            static PROPERTY_OBJECTKEY_NAME: string = "ObjectKey";
            /** 获取-对象编号 */
            get objectKey(): number {
                return this.getProperty<number>(PeriodLedgerAccount.PROPERTY_OBJECTKEY_NAME);
            }
            /** 设置-对象编号 */
            set objectKey(value: number) {
                this.setProperty(PeriodLedgerAccount.PROPERTY_OBJECTKEY_NAME, value);
            }

            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string = "ObjectCode";
            /** 获取-对象类型 */
            get objectCode(): string {
                return this.getProperty<string>(PeriodLedgerAccount.PROPERTY_OBJECTCODE_NAME);
            }
            /** 设置-对象类型 */
            set objectCode(value: string) {
                this.setProperty(PeriodLedgerAccount.PROPERTY_OBJECTCODE_NAME, value);
            }

            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string = "CreateDate";
            /** 获取-创建日期 */
            get createDate(): Date {
                return this.getProperty<Date>(PeriodLedgerAccount.PROPERTY_CREATEDATE_NAME);
            }
            /** 设置-创建日期 */
            set createDate(value: Date) {
                this.setProperty(PeriodLedgerAccount.PROPERTY_CREATEDATE_NAME, value);
            }

            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string = "CreateTime";
            /** 获取-创建时间 */
            get createTime(): number {
                return this.getProperty<number>(PeriodLedgerAccount.PROPERTY_CREATETIME_NAME);
            }
            /** 设置-创建时间 */
            set createTime(value: number) {
                this.setProperty(PeriodLedgerAccount.PROPERTY_CREATETIME_NAME, value);
            }

            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string = "UpdateDate";
            /** 获取-修改日期 */
            get updateDate(): Date {
                return this.getProperty<Date>(PeriodLedgerAccount.PROPERTY_UPDATEDATE_NAME);
            }
            /** 设置-修改日期 */
            set updateDate(value: Date) {
                this.setProperty(PeriodLedgerAccount.PROPERTY_UPDATEDATE_NAME, value);
            }

            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string = "UpdateTime";
            /** 获取-修改时间 */
            get updateTime(): number {
                return this.getProperty<number>(PeriodLedgerAccount.PROPERTY_UPDATETIME_NAME);
            }
            /** 设置-修改时间 */
            set updateTime(value: number) {
                this.setProperty(PeriodLedgerAccount.PROPERTY_UPDATETIME_NAME, value);
            }

            /** 映射的属性名称-实例号（版本） */
            static PROPERTY_LOGINST_NAME: string = "LogInst";
            /** 获取-实例号（版本） */
            get logInst(): number {
                return this.getProperty<number>(PeriodLedgerAccount.PROPERTY_LOGINST_NAME);
            }
            /** 设置-实例号（版本） */
            set logInst(value: number) {
                this.setProperty(PeriodLedgerAccount.PROPERTY_LOGINST_NAME, value);
            }

            /** 映射的属性名称-服务系列 */
            static PROPERTY_SERIES_NAME: string = "Series";
            /** 获取-服务系列 */
            get series(): number {
                return this.getProperty<number>(PeriodLedgerAccount.PROPERTY_SERIES_NAME);
            }
            /** 设置-服务系列 */
            set series(value: number) {
                this.setProperty(PeriodLedgerAccount.PROPERTY_SERIES_NAME, value);
            }

            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string = "DataSource";
            /** 获取-数据源 */
            get dataSource(): string {
                return this.getProperty<string>(PeriodLedgerAccount.PROPERTY_DATASOURCE_NAME);
            }
            /** 设置-数据源 */
            set dataSource(value: string) {
                this.setProperty(PeriodLedgerAccount.PROPERTY_DATASOURCE_NAME, value);
            }

            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string = "CreateUserSign";
            /** 获取-创建用户 */
            get createUserSign(): number {
                return this.getProperty<number>(PeriodLedgerAccount.PROPERTY_CREATEUSERSIGN_NAME);
            }
            /** 设置-创建用户 */
            set createUserSign(value: number) {
                this.setProperty(PeriodLedgerAccount.PROPERTY_CREATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string = "UpdateUserSign";
            /** 获取-修改用户 */
            get updateUserSign(): number {
                return this.getProperty<number>(PeriodLedgerAccount.PROPERTY_UPDATEUSERSIGN_NAME);
            }
            /** 设置-修改用户 */
            set updateUserSign(value: number) {
                this.setProperty(PeriodLedgerAccount.PROPERTY_UPDATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string = "CreateActionId";
            /** 获取-创建动作标识 */
            get createActionId(): string {
                return this.getProperty<string>(PeriodLedgerAccount.PROPERTY_CREATEACTIONID_NAME);
            }
            /** 设置-创建动作标识 */
            set createActionId(value: string) {
                this.setProperty(PeriodLedgerAccount.PROPERTY_CREATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string = "UpdateActionId";
            /** 获取-更新动作标识 */
            get updateActionId(): string {
                return this.getProperty<string>(PeriodLedgerAccount.PROPERTY_UPDATEACTIONID_NAME);
            }
            /** 设置-更新动作标识 */
            set updateActionId(value: string) {
                this.setProperty(PeriodLedgerAccount.PROPERTY_UPDATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string = "Remarks";
            /** 获取-备注 */
            get remarks(): string {
                return this.getProperty<string>(PeriodLedgerAccount.PROPERTY_REMARKS_NAME);
            }
            /** 设置-备注 */
            set remarks(value: string) {
                this.setProperty(PeriodLedgerAccount.PROPERTY_REMARKS_NAME, value);
            }


            /** 映射的属性名称-期间-分类账-条件集合 */
            static PROPERTY_PERIODLEDGERACCOUNTCONDITIONS_NAME: string = "PeriodLedgerAccountConditions";
            /** 获取-期间-分类账-条件集合 */
            get periodLedgerAccountConditions(): PeriodLedgerAccountConditions {
                return this.getProperty<PeriodLedgerAccountConditions>(PeriodLedgerAccount.PROPERTY_PERIODLEDGERACCOUNTCONDITIONS_NAME);
            }
            /** 设置-期间-分类账-条件集合 */
            set periodLedgerAccountConditions(value: PeriodLedgerAccountConditions) {
                this.setProperty(PeriodLedgerAccount.PROPERTY_PERIODLEDGERACCOUNTCONDITIONS_NAME, value);
            }

            /** 初始化数据 */
            protected init(): void {
                this.periodLedgerAccountConditions = new PeriodLedgerAccountConditions(this);
                this.objectCode = ibas.config.applyVariables(PeriodLedgerAccount.BUSINESS_OBJECT_CODE);
                this.activated = ibas.emYesNo.YES;
            }
        }

        /** 期间-分类账-条件 集合 */
        export class PeriodLedgerAccountConditions extends ibas.BusinessObjects<PeriodLedgerAccountCondition, PeriodLedgerAccount> implements IPeriodLedgerAccountConditions {
            /** 创建并添加子项 */
            create(): PeriodLedgerAccountCondition {
                let item: PeriodLedgerAccountCondition = new PeriodLedgerAccountCondition();
                this.add(item);
                return item;
            }

            protected afterAdd(item: PeriodLedgerAccountCondition): void {
                super.afterAdd(item);
                if (this.length === 1) {
                    if (item.isNew) {
                        item.relationship = ibas.emConditionRelationship.NONE;
                    }
                }
            }
        }

        /** 期间-分类账-条件 */
        export class PeriodLedgerAccountCondition extends ibas.BOSimpleLine<PeriodLedgerAccountCondition> implements IPeriodLedgerAccountCondition {
            /** 构造函数 */
            constructor() {
                super();
            }
            /** 映射的属性名称-编号 */
            static PROPERTY_OBJECTKEY_NAME: string = "ObjectKey";
            /** 获取-编号 */
            get objectKey(): number {
                return this.getProperty<number>(PeriodLedgerAccountCondition.PROPERTY_OBJECTKEY_NAME);
            }
            /** 设置-编号 */
            set objectKey(value: number) {
                this.setProperty(PeriodLedgerAccountCondition.PROPERTY_OBJECTKEY_NAME, value);
            }

            /** 映射的属性名称-行号 */
            static PROPERTY_LINEID_NAME: string = "LineId";
            /** 获取-行号 */
            get lineId(): number {
                return this.getProperty<number>(PeriodLedgerAccountCondition.PROPERTY_LINEID_NAME);
            }
            /** 设置-行号 */
            set lineId(value: number) {
                this.setProperty(PeriodLedgerAccountCondition.PROPERTY_LINEID_NAME, value);
            }

            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string = "ObjectCode";
            /** 获取-对象类型 */
            get objectCode(): string {
                return this.getProperty<string>(PeriodLedgerAccountCondition.PROPERTY_OBJECTCODE_NAME);
            }
            /** 设置-对象类型 */
            set objectCode(value: string) {
                this.setProperty(PeriodLedgerAccountCondition.PROPERTY_OBJECTCODE_NAME, value);
            }

            /** 映射的属性名称-显示顺序 */
            static PROPERTY_VISORDER_NAME: string = "VisOrder";
            /** 获取-显示顺序 */
            get visOrder(): number {
                return this.getProperty<number>(PeriodLedgerAccountCondition.PROPERTY_VISORDER_NAME);
            }
            /** 设置-显示顺序 */
            set visOrder(value: number) {
                this.setProperty(PeriodLedgerAccountCondition.PROPERTY_VISORDER_NAME, value);
            }

            /** 映射的属性名称-实例号（版本） */
            static PROPERTY_LOGINST_NAME: string = "LogInst";
            /** 获取-实例号（版本） */
            get logInst(): number {
                return this.getProperty<number>(PeriodLedgerAccountCondition.PROPERTY_LOGINST_NAME);
            }
            /** 设置-实例号（版本） */
            set logInst(value: number) {
                this.setProperty(PeriodLedgerAccountCondition.PROPERTY_LOGINST_NAME, value);
            }

            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string = "DataSource";
            /** 获取-数据源 */
            get dataSource(): string {
                return this.getProperty<string>(PeriodLedgerAccountCondition.PROPERTY_DATASOURCE_NAME);
            }
            /** 设置-数据源 */
            set dataSource(value: string) {
                this.setProperty(PeriodLedgerAccountCondition.PROPERTY_DATASOURCE_NAME, value);
            }

            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string = "CreateDate";
            /** 获取-创建日期 */
            get createDate(): Date {
                return this.getProperty<Date>(PeriodLedgerAccountCondition.PROPERTY_CREATEDATE_NAME);
            }
            /** 设置-创建日期 */
            set createDate(value: Date) {
                this.setProperty(PeriodLedgerAccountCondition.PROPERTY_CREATEDATE_NAME, value);
            }

            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string = "CreateTime";
            /** 获取-创建时间 */
            get createTime(): number {
                return this.getProperty<number>(PeriodLedgerAccountCondition.PROPERTY_CREATETIME_NAME);
            }
            /** 设置-创建时间 */
            set createTime(value: number) {
                this.setProperty(PeriodLedgerAccountCondition.PROPERTY_CREATETIME_NAME, value);
            }

            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string = "UpdateDate";
            /** 获取-修改日期 */
            get updateDate(): Date {
                return this.getProperty<Date>(PeriodLedgerAccountCondition.PROPERTY_UPDATEDATE_NAME);
            }
            /** 设置-修改日期 */
            set updateDate(value: Date) {
                this.setProperty(PeriodLedgerAccountCondition.PROPERTY_UPDATEDATE_NAME, value);
            }

            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string = "UpdateTime";
            /** 获取-修改时间 */
            get updateTime(): number {
                return this.getProperty<number>(PeriodLedgerAccountCondition.PROPERTY_UPDATETIME_NAME);
            }
            /** 设置-修改时间 */
            set updateTime(value: number) {
                this.setProperty(PeriodLedgerAccountCondition.PROPERTY_UPDATETIME_NAME, value);
            }

            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string = "CreateUserSign";
            /** 获取-创建用户 */
            get createUserSign(): number {
                return this.getProperty<number>(PeriodLedgerAccountCondition.PROPERTY_CREATEUSERSIGN_NAME);
            }
            /** 设置-创建用户 */
            set createUserSign(value: number) {
                this.setProperty(PeriodLedgerAccountCondition.PROPERTY_CREATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string = "UpdateUserSign";
            /** 获取-修改用户 */
            get updateUserSign(): number {
                return this.getProperty<number>(PeriodLedgerAccountCondition.PROPERTY_UPDATEUSERSIGN_NAME);
            }
            /** 设置-修改用户 */
            set updateUserSign(value: number) {
                this.setProperty(PeriodLedgerAccountCondition.PROPERTY_UPDATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string = "CreateActionId";
            /** 获取-创建动作标识 */
            get createActionId(): string {
                return this.getProperty<string>(PeriodLedgerAccountCondition.PROPERTY_CREATEACTIONID_NAME);
            }
            /** 设置-创建动作标识 */
            set createActionId(value: string) {
                this.setProperty(PeriodLedgerAccountCondition.PROPERTY_CREATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string = "UpdateActionId";
            /** 获取-更新动作标识 */
            get updateActionId(): string {
                return this.getProperty<string>(PeriodLedgerAccountCondition.PROPERTY_UPDATEACTIONID_NAME);
            }
            /** 设置-更新动作标识 */
            set updateActionId(value: string) {
                this.setProperty(PeriodLedgerAccountCondition.PROPERTY_UPDATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-开括号 */
            static PROPERTY_BRACKETOPEN_NAME: string = "BracketOpen";
            /** 获取-开括号 */
            get bracketOpen(): number {
                return this.getProperty<number>(PeriodLedgerAccountCondition.PROPERTY_BRACKETOPEN_NAME);
            }
            /** 设置-开括号 */
            set bracketOpen(value: number) {
                this.setProperty(PeriodLedgerAccountCondition.PROPERTY_BRACKETOPEN_NAME, value);
            }

            /** 映射的属性名称-关系 */
            static PROPERTY_RELATIONSHIP_NAME: string = "Relationship";
            /** 获取-关系 */
            get relationship(): ibas.emConditionRelationship {
                return this.getProperty<ibas.emConditionRelationship>(PeriodLedgerAccountCondition.PROPERTY_RELATIONSHIP_NAME);
            }
            /** 设置-关系 */
            set relationship(value: ibas.emConditionRelationship) {
                this.setProperty(PeriodLedgerAccountCondition.PROPERTY_RELATIONSHIP_NAME, value);
            }

            /** 映射的属性名称-属性 */
            static PROPERTY_PROPERTYNAME_NAME: string = "PropertyName";
            /** 获取-属性 */
            get propertyName(): string {
                return this.getProperty<string>(PeriodLedgerAccountCondition.PROPERTY_PROPERTYNAME_NAME);
            }
            /** 设置-属性 */
            set propertyName(value: string) {
                this.setProperty(PeriodLedgerAccountCondition.PROPERTY_PROPERTYNAME_NAME, value);
            }

            /** 映射的属性名称-方法 */
            static PROPERTY_OPERATION_NAME: string = "Operation";
            /** 获取-方法 */
            get operation(): ibas.emConditionOperation {
                return this.getProperty<ibas.emConditionOperation>(PeriodLedgerAccountCondition.PROPERTY_OPERATION_NAME);
            }
            /** 设置-方法 */
            set operation(value: ibas.emConditionOperation) {
                this.setProperty(PeriodLedgerAccountCondition.PROPERTY_OPERATION_NAME, value);
            }

            /** 映射的属性名称-值 */
            static PROPERTY_VALUE_NAME: string = "Value";
            /** 获取-值 */
            get value(): string {
                return this.getProperty<string>(PeriodLedgerAccountCondition.PROPERTY_VALUE_NAME);
            }
            /** 设置-值 */
            set value(value: string) {
                this.setProperty(PeriodLedgerAccountCondition.PROPERTY_VALUE_NAME, value);
            }

            /** 映射的属性名称-闭括号 */
            static PROPERTY_BRACKETCLOSE_NAME: string = "BracketClose";
            /** 获取-闭括号 */
            get bracketClose(): number {
                return this.getProperty<number>(PeriodLedgerAccountCondition.PROPERTY_BRACKETCLOSE_NAME);
            }
            /** 设置-闭括号 */
            set bracketClose(value: number) {
                this.setProperty(PeriodLedgerAccountCondition.PROPERTY_BRACKETCLOSE_NAME, value);
            }

            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string = "Remarks";
            /** 获取-备注 */
            get remarks(): string {
                return this.getProperty<string>(PeriodLedgerAccountCondition.PROPERTY_REMARKS_NAME);
            }
            /** 设置-备注 */
            set remarks(value: string) {
                this.setProperty(PeriodLedgerAccountCondition.PROPERTY_REMARKS_NAME, value);
            }


            /** 初始化数据 */
            protected init(): void {
                this.relationship = ibas.emConditionRelationship.AND;
                this.operation = ibas.emConditionOperation.EQUAL;
            }
        }

    }
}
