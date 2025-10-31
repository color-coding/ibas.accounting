/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace accounting {
    export namespace bo {
        /** 现金流项目 */
        export class CashFlow extends ibas.BOSimple<CashFlow> implements ICashFlow {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = BO_CODE_CASHFLOW;
            /** 构造函数 */
            constructor() {
                super();
            }
            /** 映射的属性名称-标识 */
            static PROPERTY_SIGN_NAME: string = "Sign";
            /** 获取-标识 */
            get sign(): number {
                return this.getProperty<number>(CashFlow.PROPERTY_SIGN_NAME);
            }
            /** 设置-标识 */
            set sign(value: number) {
                this.setProperty(CashFlow.PROPERTY_SIGN_NAME, value);
            }
            /** 映射的属性名称-名称 */
            static PROPERTY_NAME_NAME: string = "Name";
            /** 获取-名称 */
            get name(): string {
                return this.getProperty<string>(CashFlow.PROPERTY_NAME_NAME);
            }
            /** 设置-名称 */
            set name(value: string) {
                this.setProperty(CashFlow.PROPERTY_NAME_NAME, value);
            }

            /** 映射的属性名称-上级项目 */
            static PROPERTY_PARENT_NAME: string = "Parent";
            /** 获取-上级项目 */
            get parent(): number {
                return this.getProperty<number>(CashFlow.PROPERTY_PARENT_NAME);
            }
            /** 设置-上级项目 */
            set parent(value: number) {
                this.setProperty(CashFlow.PROPERTY_PARENT_NAME, value);
            }

            /** 映射的属性名称-层级 */
            static PROPERTY_LEVEL_NAME: string = "Level";
            /** 获取-层级 */
            get level(): number {
                return this.getProperty<number>(CashFlow.PROPERTY_LEVEL_NAME);
            }
            /** 设置-层级 */
            set level(value: number) {
                this.setProperty(CashFlow.PROPERTY_LEVEL_NAME, value);
            }

            /** 映射的属性名称-外部编码 */
            static PROPERTY_EXTERNAL_NAME: string = "External";
            /** 获取-外部编码 */
            get external(): string {
                return this.getProperty<string>(CashFlow.PROPERTY_EXTERNAL_NAME);
            }
            /** 设置-外部编码 */
            set external(value: string) {
                this.setProperty(CashFlow.PROPERTY_EXTERNAL_NAME, value);
            }

            /** 映射的属性名称-传递类型 */
            static PROPERTY_POSTABLE_NAME: string = "Postable";
            /** 获取-传递类型 */
            get postable(): emPostableType {
                return this.getProperty<emPostableType>(CashFlow.PROPERTY_POSTABLE_NAME);
            }
            /** 设置-传递类型 */
            set postable(value: emPostableType) {
                this.setProperty(CashFlow.PROPERTY_POSTABLE_NAME, value);
            }

            /** 映射的属性名称-对象编号 */
            static PROPERTY_OBJECTKEY_NAME: string = "ObjectKey";
            /** 获取-对象编号 */
            get objectKey(): number {
                return this.getProperty<number>(CashFlow.PROPERTY_OBJECTKEY_NAME);
            }
            /** 设置-对象编号 */
            set objectKey(value: number) {
                this.setProperty(CashFlow.PROPERTY_OBJECTKEY_NAME, value);
            }

            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string = "ObjectCode";
            /** 获取-对象类型 */
            get objectCode(): string {
                return this.getProperty<string>(CashFlow.PROPERTY_OBJECTCODE_NAME);
            }
            /** 设置-对象类型 */
            set objectCode(value: string) {
                this.setProperty(CashFlow.PROPERTY_OBJECTCODE_NAME, value);
            }

            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string = "CreateDate";
            /** 获取-创建日期 */
            get createDate(): Date {
                return this.getProperty<Date>(CashFlow.PROPERTY_CREATEDATE_NAME);
            }
            /** 设置-创建日期 */
            set createDate(value: Date) {
                this.setProperty(CashFlow.PROPERTY_CREATEDATE_NAME, value);
            }

            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string = "CreateTime";
            /** 获取-创建时间 */
            get createTime(): number {
                return this.getProperty<number>(CashFlow.PROPERTY_CREATETIME_NAME);
            }
            /** 设置-创建时间 */
            set createTime(value: number) {
                this.setProperty(CashFlow.PROPERTY_CREATETIME_NAME, value);
            }

            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string = "UpdateDate";
            /** 获取-修改日期 */
            get updateDate(): Date {
                return this.getProperty<Date>(CashFlow.PROPERTY_UPDATEDATE_NAME);
            }
            /** 设置-修改日期 */
            set updateDate(value: Date) {
                this.setProperty(CashFlow.PROPERTY_UPDATEDATE_NAME, value);
            }

            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string = "UpdateTime";
            /** 获取-修改时间 */
            get updateTime(): number {
                return this.getProperty<number>(CashFlow.PROPERTY_UPDATETIME_NAME);
            }
            /** 设置-修改时间 */
            set updateTime(value: number) {
                this.setProperty(CashFlow.PROPERTY_UPDATETIME_NAME, value);
            }

            /** 映射的属性名称-实例号（版本） */
            static PROPERTY_LOGINST_NAME: string = "LogInst";
            /** 获取-实例号（版本） */
            get logInst(): number {
                return this.getProperty<number>(CashFlow.PROPERTY_LOGINST_NAME);
            }
            /** 设置-实例号（版本） */
            set logInst(value: number) {
                this.setProperty(CashFlow.PROPERTY_LOGINST_NAME, value);
            }

            /** 映射的属性名称-服务系列 */
            static PROPERTY_SERIES_NAME: string = "Series";
            /** 获取-服务系列 */
            get series(): number {
                return this.getProperty<number>(CashFlow.PROPERTY_SERIES_NAME);
            }
            /** 设置-服务系列 */
            set series(value: number) {
                this.setProperty(CashFlow.PROPERTY_SERIES_NAME, value);
            }

            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string = "DataSource";
            /** 获取-数据源 */
            get dataSource(): string {
                return this.getProperty<string>(CashFlow.PROPERTY_DATASOURCE_NAME);
            }
            /** 设置-数据源 */
            set dataSource(value: string) {
                this.setProperty(CashFlow.PROPERTY_DATASOURCE_NAME, value);
            }

            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string = "CreateUserSign";
            /** 获取-创建用户 */
            get createUserSign(): number {
                return this.getProperty<number>(CashFlow.PROPERTY_CREATEUSERSIGN_NAME);
            }
            /** 设置-创建用户 */
            set createUserSign(value: number) {
                this.setProperty(CashFlow.PROPERTY_CREATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string = "UpdateUserSign";
            /** 获取-修改用户 */
            get updateUserSign(): number {
                return this.getProperty<number>(CashFlow.PROPERTY_UPDATEUSERSIGN_NAME);
            }
            /** 设置-修改用户 */
            set updateUserSign(value: number) {
                this.setProperty(CashFlow.PROPERTY_UPDATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string = "CreateActionId";
            /** 获取-创建动作标识 */
            get createActionId(): string {
                return this.getProperty<string>(CashFlow.PROPERTY_CREATEACTIONID_NAME);
            }
            /** 设置-创建动作标识 */
            set createActionId(value: string) {
                this.setProperty(CashFlow.PROPERTY_CREATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string = "UpdateActionId";
            /** 获取-更新动作标识 */
            get updateActionId(): string {
                return this.getProperty<string>(CashFlow.PROPERTY_UPDATEACTIONID_NAME);
            }
            /** 设置-更新动作标识 */
            set updateActionId(value: string) {
                this.setProperty(CashFlow.PROPERTY_UPDATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string = "Remarks";
            /** 获取-备注 */
            get remarks(): string {
                return this.getProperty<string>(CashFlow.PROPERTY_REMARKS_NAME);
            }
            /** 设置-备注 */
            set remarks(value: string) {
                this.setProperty(CashFlow.PROPERTY_REMARKS_NAME, value);
            }



            /** 初始化数据 */
            protected init(): void {
                this.objectCode = ibas.config.applyVariables(CashFlow.BUSINESS_OBJECT_CODE);
                this.postable = bo.emPostableType.TITLE;
            }
        }


    }
}
