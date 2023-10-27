/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace accounting {
    export namespace bo {
        /** 分类账 */
        export class LedgerAccount extends ibas.BOSimple<LedgerAccount> implements ILedgerAccount {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = BO_CODE_LEDGERACCOUNT;
            /** 构造函数 */
            constructor() {
                super();
            }
            /** 映射的属性名称-标识 */
            static PROPERTY_SIGN_NAME: string = "Sign";
            /** 获取-标识 */
            get sign(): string {
                return this.getProperty<string>(LedgerAccount.PROPERTY_SIGN_NAME);
            }
            /** 设置-标识 */
            set sign(value: string) {
                this.setProperty(LedgerAccount.PROPERTY_SIGN_NAME, value);
            }

            /** 映射的属性名称-组 */
            static PROPERTY_GROUP_NAME: string = "Group";
            /** 获取-组 */
            get group(): string {
                return this.getProperty<string>(LedgerAccount.PROPERTY_GROUP_NAME);
            }
            /** 设置-组 */
            set group(value: string) {
                this.setProperty(LedgerAccount.PROPERTY_GROUP_NAME, value);
            }

            /** 映射的属性名称-描述 */
            static PROPERTY_DESCRIPTION_NAME: string = "Description";
            /** 获取-描述 */
            get description(): string {
                return this.getProperty<string>(LedgerAccount.PROPERTY_DESCRIPTION_NAME);
            }
            /** 设置-描述 */
            set description(value: string) {
                this.setProperty(LedgerAccount.PROPERTY_DESCRIPTION_NAME, value);
            }

            /** 映射的属性名称-设置 */
            static PROPERTY_SETTINGS_NAME: string = "Settings";
            /** 获取-设置 */
            get settings(): string {
                return this.getProperty<string>(LedgerAccount.PROPERTY_SETTINGS_NAME);
            }
            /** 设置-设置 */
            set settings(value: string) {
                this.setProperty(LedgerAccount.PROPERTY_SETTINGS_NAME, value);
            }

            /** 映射的属性名称-编号 */
            static PROPERTY_OBJECTKEY_NAME: string = "ObjectKey";
            /** 获取-编号 */
            get objectKey(): number {
                return this.getProperty<number>(LedgerAccount.PROPERTY_OBJECTKEY_NAME);
            }
            /** 设置-编号 */
            set objectKey(value: number) {
                this.setProperty(LedgerAccount.PROPERTY_OBJECTKEY_NAME, value);
            }

            /** 映射的属性名称-类型 */
            static PROPERTY_OBJECTCODE_NAME: string = "ObjectCode";
            /** 获取-类型 */
            get objectCode(): string {
                return this.getProperty<string>(LedgerAccount.PROPERTY_OBJECTCODE_NAME);
            }
            /** 设置-类型 */
            set objectCode(value: string) {
                this.setProperty(LedgerAccount.PROPERTY_OBJECTCODE_NAME, value);
            }

            /** 映射的属性名称-实例号（版本） */
            static PROPERTY_LOGINST_NAME: string = "LogInst";
            /** 获取-实例号（版本） */
            get logInst(): number {
                return this.getProperty<number>(LedgerAccount.PROPERTY_LOGINST_NAME);
            }
            /** 设置-实例号（版本） */
            set logInst(value: number) {
                this.setProperty(LedgerAccount.PROPERTY_LOGINST_NAME, value);
            }

            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string = "DataSource";
            /** 获取-数据源 */
            get dataSource(): string {
                return this.getProperty<string>(LedgerAccount.PROPERTY_DATASOURCE_NAME);
            }
            /** 设置-数据源 */
            set dataSource(value: string) {
                this.setProperty(LedgerAccount.PROPERTY_DATASOURCE_NAME, value);
            }

            /** 映射的属性名称-编号系列 */
            static PROPERTY_SERIES_NAME: string = "Series";
            /** 获取-编号系列 */
            get series(): number {
                return this.getProperty<number>(LedgerAccount.PROPERTY_SERIES_NAME);
            }
            /** 设置-编号系列 */
            set series(value: number) {
                this.setProperty(LedgerAccount.PROPERTY_SERIES_NAME, value);
            }

            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string = "CreateDate";
            /** 获取-创建日期 */
            get createDate(): Date {
                return this.getProperty<Date>(LedgerAccount.PROPERTY_CREATEDATE_NAME);
            }
            /** 设置-创建日期 */
            set createDate(value: Date) {
                this.setProperty(LedgerAccount.PROPERTY_CREATEDATE_NAME, value);
            }

            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string = "CreateTime";
            /** 获取-创建时间 */
            get createTime(): number {
                return this.getProperty<number>(LedgerAccount.PROPERTY_CREATETIME_NAME);
            }
            /** 设置-创建时间 */
            set createTime(value: number) {
                this.setProperty(LedgerAccount.PROPERTY_CREATETIME_NAME, value);
            }

            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string = "UpdateDate";
            /** 获取-修改日期 */
            get updateDate(): Date {
                return this.getProperty<Date>(LedgerAccount.PROPERTY_UPDATEDATE_NAME);
            }
            /** 设置-修改日期 */
            set updateDate(value: Date) {
                this.setProperty(LedgerAccount.PROPERTY_UPDATEDATE_NAME, value);
            }

            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string = "UpdateTime";
            /** 获取-修改时间 */
            get updateTime(): number {
                return this.getProperty<number>(LedgerAccount.PROPERTY_UPDATETIME_NAME);
            }
            /** 设置-修改时间 */
            set updateTime(value: number) {
                this.setProperty(LedgerAccount.PROPERTY_UPDATETIME_NAME, value);
            }

            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string = "CreateUserSign";
            /** 获取-创建用户 */
            get createUserSign(): number {
                return this.getProperty<number>(LedgerAccount.PROPERTY_CREATEUSERSIGN_NAME);
            }
            /** 设置-创建用户 */
            set createUserSign(value: number) {
                this.setProperty(LedgerAccount.PROPERTY_CREATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string = "UpdateUserSign";
            /** 获取-修改用户 */
            get updateUserSign(): number {
                return this.getProperty<number>(LedgerAccount.PROPERTY_UPDATEUSERSIGN_NAME);
            }
            /** 设置-修改用户 */
            set updateUserSign(value: number) {
                this.setProperty(LedgerAccount.PROPERTY_UPDATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string = "CreateActionId";
            /** 获取-创建动作标识 */
            get createActionId(): string {
                return this.getProperty<string>(LedgerAccount.PROPERTY_CREATEACTIONID_NAME);
            }
            /** 设置-创建动作标识 */
            set createActionId(value: string) {
                this.setProperty(LedgerAccount.PROPERTY_CREATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string = "UpdateActionId";
            /** 获取-更新动作标识 */
            get updateActionId(): string {
                return this.getProperty<string>(LedgerAccount.PROPERTY_UPDATEACTIONID_NAME);
            }
            /** 设置-更新动作标识 */
            set updateActionId(value: string) {
                this.setProperty(LedgerAccount.PROPERTY_UPDATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string = "Remarks";
            /** 获取-备注 */
            get remarks(): string {
                return this.getProperty<string>(LedgerAccount.PROPERTY_REMARKS_NAME);
            }
            /** 设置-备注 */
            set remarks(value: string) {
                this.setProperty(LedgerAccount.PROPERTY_REMARKS_NAME, value);
            }



            /** 初始化数据 */
            protected init(): void {
                this.objectCode = LedgerAccount.BUSINESS_OBJECT_CODE;
            }
        }


    }
}
