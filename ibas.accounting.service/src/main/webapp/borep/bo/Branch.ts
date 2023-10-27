/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace accounting {
    export namespace bo {
        /** 分支 */
        export class Branch extends ibas.BOMasterData<Branch> implements IBranch {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = BO_CODE_BRANCH;
            /** 构造函数 */
            constructor() {
                super();
            }
            /** 映射的属性名称-编码 */
            static PROPERTY_CODE_NAME: string = "Code";
            /** 获取-编码 */
            get code(): string {
                return this.getProperty<string>(Branch.PROPERTY_CODE_NAME);
            }
            /** 设置-编码 */
            set code(value: string) {
                this.setProperty(Branch.PROPERTY_CODE_NAME, value);
            }

            /** 映射的属性名称-名称 */
            static PROPERTY_NAME_NAME: string = "Name";
            /** 获取-名称 */
            get name(): string {
                return this.getProperty<string>(Branch.PROPERTY_NAME_NAME);
            }
            /** 设置-名称 */
            set name(value: string) {
                this.setProperty(Branch.PROPERTY_NAME_NAME, value);
            }

            /** 映射的属性名称-外文名称 */
            static PROPERTY_FOREIGNNAME_NAME: string = "ForeignName";
            /** 获取-外文名称 */
            get foreignName(): string {
                return this.getProperty<string>(Branch.PROPERTY_FOREIGNNAME_NAME);
            }
            /** 设置-外文名称 */
            set foreignName(value: string) {
                this.setProperty(Branch.PROPERTY_FOREIGNNAME_NAME, value);
            }

            /** 映射的属性名称-激活 */
            static PROPERTY_ACTIVATED_NAME: string = "Activated";
            /** 获取-激活 */
            get activated(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(Branch.PROPERTY_ACTIVATED_NAME);
            }
            /** 设置-激活 */
            set activated(value: ibas.emYesNo) {
                this.setProperty(Branch.PROPERTY_ACTIVATED_NAME, value);
            }

            /** 映射的属性名称-生效日期 */
            static PROPERTY_VALIDDATE_NAME: string = "ValidDate";
            /** 获取-生效日期 */
            get validDate(): Date {
                return this.getProperty<Date>(Branch.PROPERTY_VALIDDATE_NAME);
            }
            /** 设置-生效日期 */
            set validDate(value: Date) {
                this.setProperty(Branch.PROPERTY_VALIDDATE_NAME, value);
            }

            /** 映射的属性名称-失效日期 */
            static PROPERTY_INVALIDDATE_NAME: string = "InvalidDate";
            /** 获取-失效日期 */
            get invalidDate(): Date {
                return this.getProperty<Date>(Branch.PROPERTY_INVALIDDATE_NAME);
            }
            /** 设置-失效日期 */
            set invalidDate(value: Date) {
                this.setProperty(Branch.PROPERTY_INVALIDDATE_NAME, value);
            }

            /** 映射的属性名称-主要的 */
            static PROPERTY_MAIN_NAME: string = "Main";
            /** 获取-主要的 */
            get main(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(Branch.PROPERTY_MAIN_NAME);
            }
            /** 设置-主要的 */
            set main(value: ibas.emYesNo) {
                this.setProperty(Branch.PROPERTY_MAIN_NAME, value);
            }

            /** 映射的属性名称-客户 */
            static PROPERTY_CUSTOMER_NAME: string = "Customer";
            /** 获取-客户 */
            get customer(): string {
                return this.getProperty<string>(Branch.PROPERTY_CUSTOMER_NAME);
            }
            /** 设置-客户 */
            set customer(value: string) {
                this.setProperty(Branch.PROPERTY_CUSTOMER_NAME, value);
            }

            /** 映射的属性名称-供应商 */
            static PROPERTY_SUPPLIER_NAME: string = "Supplier";
            /** 获取-供应商 */
            get supplier(): string {
                return this.getProperty<string>(Branch.PROPERTY_SUPPLIER_NAME);
            }
            /** 设置-供应商 */
            set supplier(value: string) {
                this.setProperty(Branch.PROPERTY_SUPPLIER_NAME, value);
            }

            /** 映射的属性名称-仓库 */
            static PROPERTY_WAREHOUSE_NAME: string = "Warehouse";
            /** 获取-仓库 */
            get warehouse(): string {
                return this.getProperty<string>(Branch.PROPERTY_WAREHOUSE_NAME);
            }
            /** 设置-仓库 */
            set warehouse(value: string) {
                this.setProperty(Branch.PROPERTY_WAREHOUSE_NAME, value);
            }

            /** 映射的属性名称-街道 */
            static PROPERTY_STREET_NAME: string = "Street";
            /** 获取-街道 */
            get street(): string {
                return this.getProperty<string>(Branch.PROPERTY_STREET_NAME);
            }
            /** 设置-街道 */
            set street(value: string) {
                this.setProperty(Branch.PROPERTY_STREET_NAME, value);
            }

            /** 映射的属性名称-县/区 */
            static PROPERTY_DISTRICT_NAME: string = "District";
            /** 获取-县/区 */
            get district(): string {
                return this.getProperty<string>(Branch.PROPERTY_DISTRICT_NAME);
            }
            /** 设置-县/区 */
            set district(value: string) {
                this.setProperty(Branch.PROPERTY_DISTRICT_NAME, value);
            }

            /** 映射的属性名称-市 */
            static PROPERTY_CITY_NAME: string = "City";
            /** 获取-市 */
            get city(): string {
                return this.getProperty<string>(Branch.PROPERTY_CITY_NAME);
            }
            /** 设置-市 */
            set city(value: string) {
                this.setProperty(Branch.PROPERTY_CITY_NAME, value);
            }

            /** 映射的属性名称-省 */
            static PROPERTY_PROVINCE_NAME: string = "Province";
            /** 获取-省 */
            get province(): string {
                return this.getProperty<string>(Branch.PROPERTY_PROVINCE_NAME);
            }
            /** 设置-省 */
            set province(value: string) {
                this.setProperty(Branch.PROPERTY_PROVINCE_NAME, value);
            }

            /** 映射的属性名称-国 */
            static PROPERTY_COUNTRY_NAME: string = "Country";
            /** 获取-国 */
            get country(): string {
                return this.getProperty<string>(Branch.PROPERTY_COUNTRY_NAME);
            }
            /** 设置-国 */
            set country(value: string) {
                this.setProperty(Branch.PROPERTY_COUNTRY_NAME, value);
            }

            /** 映射的属性名称-邮编 */
            static PROPERTY_ZIPCODE_NAME: string = "ZipCode";
            /** 获取-邮编 */
            get zipCode(): string {
                return this.getProperty<string>(Branch.PROPERTY_ZIPCODE_NAME);
            }
            /** 设置-邮编 */
            set zipCode(value: string) {
                this.setProperty(Branch.PROPERTY_ZIPCODE_NAME, value);
            }

            /** 映射的属性名称-对象编号 */
            static PROPERTY_DOCENTRY_NAME: string = "DocEntry";
            /** 获取-对象编号 */
            get docEntry(): number {
                return this.getProperty<number>(Branch.PROPERTY_DOCENTRY_NAME);
            }
            /** 设置-对象编号 */
            set docEntry(value: number) {
                this.setProperty(Branch.PROPERTY_DOCENTRY_NAME, value);
            }

            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string = "ObjectCode";
            /** 获取-对象类型 */
            get objectCode(): string {
                return this.getProperty<string>(Branch.PROPERTY_OBJECTCODE_NAME);
            }
            /** 设置-对象类型 */
            set objectCode(value: string) {
                this.setProperty(Branch.PROPERTY_OBJECTCODE_NAME, value);
            }

            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string = "CreateDate";
            /** 获取-创建日期 */
            get createDate(): Date {
                return this.getProperty<Date>(Branch.PROPERTY_CREATEDATE_NAME);
            }
            /** 设置-创建日期 */
            set createDate(value: Date) {
                this.setProperty(Branch.PROPERTY_CREATEDATE_NAME, value);
            }

            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string = "CreateTime";
            /** 获取-创建时间 */
            get createTime(): number {
                return this.getProperty<number>(Branch.PROPERTY_CREATETIME_NAME);
            }
            /** 设置-创建时间 */
            set createTime(value: number) {
                this.setProperty(Branch.PROPERTY_CREATETIME_NAME, value);
            }

            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string = "UpdateDate";
            /** 获取-修改日期 */
            get updateDate(): Date {
                return this.getProperty<Date>(Branch.PROPERTY_UPDATEDATE_NAME);
            }
            /** 设置-修改日期 */
            set updateDate(value: Date) {
                this.setProperty(Branch.PROPERTY_UPDATEDATE_NAME, value);
            }

            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string = "UpdateTime";
            /** 获取-修改时间 */
            get updateTime(): number {
                return this.getProperty<number>(Branch.PROPERTY_UPDATETIME_NAME);
            }
            /** 设置-修改时间 */
            set updateTime(value: number) {
                this.setProperty(Branch.PROPERTY_UPDATETIME_NAME, value);
            }

            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string = "DataSource";
            /** 获取-数据源 */
            get dataSource(): string {
                return this.getProperty<string>(Branch.PROPERTY_DATASOURCE_NAME);
            }
            /** 设置-数据源 */
            set dataSource(value: string) {
                this.setProperty(Branch.PROPERTY_DATASOURCE_NAME, value);
            }

            /** 映射的属性名称-实例号（版本） */
            static PROPERTY_LOGINST_NAME: string = "LogInst";
            /** 获取-实例号（版本） */
            get logInst(): number {
                return this.getProperty<number>(Branch.PROPERTY_LOGINST_NAME);
            }
            /** 设置-实例号（版本） */
            set logInst(value: number) {
                this.setProperty(Branch.PROPERTY_LOGINST_NAME, value);
            }

            /** 映射的属性名称-服务系列 */
            static PROPERTY_SERIES_NAME: string = "Series";
            /** 获取-服务系列 */
            get series(): number {
                return this.getProperty<number>(Branch.PROPERTY_SERIES_NAME);
            }
            /** 设置-服务系列 */
            set series(value: number) {
                this.setProperty(Branch.PROPERTY_SERIES_NAME, value);
            }

            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string = "CreateUserSign";
            /** 获取-创建用户 */
            get createUserSign(): number {
                return this.getProperty<number>(Branch.PROPERTY_CREATEUSERSIGN_NAME);
            }
            /** 设置-创建用户 */
            set createUserSign(value: number) {
                this.setProperty(Branch.PROPERTY_CREATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string = "UpdateUserSign";
            /** 获取-修改用户 */
            get updateUserSign(): number {
                return this.getProperty<number>(Branch.PROPERTY_UPDATEUSERSIGN_NAME);
            }
            /** 设置-修改用户 */
            set updateUserSign(value: number) {
                this.setProperty(Branch.PROPERTY_UPDATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string = "CreateActionId";
            /** 获取-创建动作标识 */
            get createActionId(): string {
                return this.getProperty<string>(Branch.PROPERTY_CREATEACTIONID_NAME);
            }
            /** 设置-创建动作标识 */
            set createActionId(value: string) {
                this.setProperty(Branch.PROPERTY_CREATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string = "UpdateActionId";
            /** 获取-更新动作标识 */
            get updateActionId(): string {
                return this.getProperty<string>(Branch.PROPERTY_UPDATEACTIONID_NAME);
            }
            /** 设置-更新动作标识 */
            set updateActionId(value: string) {
                this.setProperty(Branch.PROPERTY_UPDATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string = "Remarks";
            /** 获取-备注 */
            get remarks(): string {
                return this.getProperty<string>(Branch.PROPERTY_REMARKS_NAME);
            }
            /** 设置-备注 */
            set remarks(value: string) {
                this.setProperty(Branch.PROPERTY_REMARKS_NAME, value);
            }



            /** 初始化数据 */
            protected init(): void {
                this.objectCode = ibas.config.applyVariables(Branch.BUSINESS_OBJECT_CODE);
                this.activated = ibas.emYesNo.YES;
            }
        }


    }
}
