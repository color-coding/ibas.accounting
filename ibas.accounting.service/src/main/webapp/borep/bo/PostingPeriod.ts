/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace accounting {
    export namespace bo {
        /** 过账期间 */
        export class PostingPeriod extends ibas.BOSimple<PostingPeriod> implements IPostingPeriod {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = BO_CODE_POSTINGPERIOD;
            /** 构造函数 */
            constructor() {
                super();
            }
            /** 映射的属性名称-名称 */
            static PROPERTY_NAME_NAME: string = "Name";
            /** 获取-名称 */
            get name(): string {
                return this.getProperty<string>(PostingPeriod.PROPERTY_NAME_NAME);
            }
            /** 设置-名称 */
            set name(value: string) {
                this.setProperty(PostingPeriod.PROPERTY_NAME_NAME, value);
            }

            /** 映射的属性名称-类别 */
            static PROPERTY_CATEGORY_NAME: string = "Category";
            /** 获取-类别 */
            get category(): number {
                return this.getProperty<number>(PostingPeriod.PROPERTY_CATEGORY_NAME);
            }
            /** 设置-类别 */
            set category(value: number) {
                this.setProperty(PostingPeriod.PROPERTY_CATEGORY_NAME, value);
            }

            /** 映射的属性名称-序号 */
            static PROPERTY_ORDER_NAME: string = "Order";
            /** 获取-序号 */
            get order(): number {
                return this.getProperty<number>(PostingPeriod.PROPERTY_ORDER_NAME);
            }
            /** 设置-序号 */
            set order(value: number) {
                this.setProperty(PostingPeriod.PROPERTY_ORDER_NAME, value);
            }

            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string = "Status";
            /** 获取-状态 */
            get status(): emPeriodStatus {
                return this.getProperty<emPeriodStatus>(PostingPeriod.PROPERTY_STATUS_NAME);
            }
            /** 设置-状态 */
            set status(value: emPeriodStatus) {
                this.setProperty(PostingPeriod.PROPERTY_STATUS_NAME, value);
            }

            /** 映射的属性名称-起始日期 */
            static PROPERTY_STARTDATE_NAME: string = "StartDate";
            /** 获取-起始日期 */
            get startDate(): Date {
                return this.getProperty<Date>(PostingPeriod.PROPERTY_STARTDATE_NAME);
            }
            /** 设置-起始日期 */
            set startDate(value: Date) {
                this.setProperty(PostingPeriod.PROPERTY_STARTDATE_NAME, value);
            }

            /** 映射的属性名称-结束日期 */
            static PROPERTY_ENDDATE_NAME: string = "EndDate";
            /** 获取-结束日期 */
            get endDate(): Date {
                return this.getProperty<Date>(PostingPeriod.PROPERTY_ENDDATE_NAME);
            }
            /** 设置-结束日期 */
            set endDate(value: Date) {
                this.setProperty(PostingPeriod.PROPERTY_ENDDATE_NAME, value);
            }

            /** 映射的属性名称-对象编号 */
            static PROPERTY_OBJECTKEY_NAME: string = "ObjectKey";
            /** 获取-对象编号 */
            get objectKey(): number {
                return this.getProperty<number>(PostingPeriod.PROPERTY_OBJECTKEY_NAME);
            }
            /** 设置-对象编号 */
            set objectKey(value: number) {
                this.setProperty(PostingPeriod.PROPERTY_OBJECTKEY_NAME, value);
            }

            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string = "ObjectCode";
            /** 获取-对象类型 */
            get objectCode(): string {
                return this.getProperty<string>(PostingPeriod.PROPERTY_OBJECTCODE_NAME);
            }
            /** 设置-对象类型 */
            set objectCode(value: string) {
                this.setProperty(PostingPeriod.PROPERTY_OBJECTCODE_NAME, value);
            }

            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string = "CreateDate";
            /** 获取-创建日期 */
            get createDate(): Date {
                return this.getProperty<Date>(PostingPeriod.PROPERTY_CREATEDATE_NAME);
            }
            /** 设置-创建日期 */
            set createDate(value: Date) {
                this.setProperty(PostingPeriod.PROPERTY_CREATEDATE_NAME, value);
            }

            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string = "CreateTime";
            /** 获取-创建时间 */
            get createTime(): number {
                return this.getProperty<number>(PostingPeriod.PROPERTY_CREATETIME_NAME);
            }
            /** 设置-创建时间 */
            set createTime(value: number) {
                this.setProperty(PostingPeriod.PROPERTY_CREATETIME_NAME, value);
            }

            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string = "UpdateDate";
            /** 获取-修改日期 */
            get updateDate(): Date {
                return this.getProperty<Date>(PostingPeriod.PROPERTY_UPDATEDATE_NAME);
            }
            /** 设置-修改日期 */
            set updateDate(value: Date) {
                this.setProperty(PostingPeriod.PROPERTY_UPDATEDATE_NAME, value);
            }

            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string = "UpdateTime";
            /** 获取-修改时间 */
            get updateTime(): number {
                return this.getProperty<number>(PostingPeriod.PROPERTY_UPDATETIME_NAME);
            }
            /** 设置-修改时间 */
            set updateTime(value: number) {
                this.setProperty(PostingPeriod.PROPERTY_UPDATETIME_NAME, value);
            }

            /** 映射的属性名称-实例号（版本） */
            static PROPERTY_LOGINST_NAME: string = "LogInst";
            /** 获取-实例号（版本） */
            get logInst(): number {
                return this.getProperty<number>(PostingPeriod.PROPERTY_LOGINST_NAME);
            }
            /** 设置-实例号（版本） */
            set logInst(value: number) {
                this.setProperty(PostingPeriod.PROPERTY_LOGINST_NAME, value);
            }

            /** 映射的属性名称-服务系列 */
            static PROPERTY_SERIES_NAME: string = "Series";
            /** 获取-服务系列 */
            get series(): number {
                return this.getProperty<number>(PostingPeriod.PROPERTY_SERIES_NAME);
            }
            /** 设置-服务系列 */
            set series(value: number) {
                this.setProperty(PostingPeriod.PROPERTY_SERIES_NAME, value);
            }

            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string = "DataSource";
            /** 获取-数据源 */
            get dataSource(): string {
                return this.getProperty<string>(PostingPeriod.PROPERTY_DATASOURCE_NAME);
            }
            /** 设置-数据源 */
            set dataSource(value: string) {
                this.setProperty(PostingPeriod.PROPERTY_DATASOURCE_NAME, value);
            }

            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string = "CreateUserSign";
            /** 获取-创建用户 */
            get createUserSign(): number {
                return this.getProperty<number>(PostingPeriod.PROPERTY_CREATEUSERSIGN_NAME);
            }
            /** 设置-创建用户 */
            set createUserSign(value: number) {
                this.setProperty(PostingPeriod.PROPERTY_CREATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string = "UpdateUserSign";
            /** 获取-修改用户 */
            get updateUserSign(): number {
                return this.getProperty<number>(PostingPeriod.PROPERTY_UPDATEUSERSIGN_NAME);
            }
            /** 设置-修改用户 */
            set updateUserSign(value: number) {
                this.setProperty(PostingPeriod.PROPERTY_UPDATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string = "CreateActionId";
            /** 获取-创建动作标识 */
            get createActionId(): string {
                return this.getProperty<string>(PostingPeriod.PROPERTY_CREATEACTIONID_NAME);
            }
            /** 设置-创建动作标识 */
            set createActionId(value: string) {
                this.setProperty(PostingPeriod.PROPERTY_CREATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string = "UpdateActionId";
            /** 获取-更新动作标识 */
            get updateActionId(): string {
                return this.getProperty<string>(PostingPeriod.PROPERTY_UPDATEACTIONID_NAME);
            }
            /** 设置-更新动作标识 */
            set updateActionId(value: string) {
                this.setProperty(PostingPeriod.PROPERTY_UPDATEACTIONID_NAME, value);
            }


            /** 映射的属性名称-过账期间-项目集合 */
            static PROPERTY_POSTINGPERIODITEMS_NAME: string = "PostingPeriodItems";
            /** 获取-过账期间-项目集合 */
            get postingPeriodItems(): PostingPeriodItems {
                return this.getProperty<PostingPeriodItems>(PostingPeriod.PROPERTY_POSTINGPERIODITEMS_NAME);
            }
            /** 设置-过账期间-项目集合 */
            set postingPeriodItems(value: PostingPeriodItems) {
                this.setProperty(PostingPeriod.PROPERTY_POSTINGPERIODITEMS_NAME, value);
            }

            /** 初始化数据 */
            protected init(): void {
                this.postingPeriodItems = new PostingPeriodItems(this);
                this.objectCode = ibas.config.applyVariables(PostingPeriod.BUSINESS_OBJECT_CODE);
            }
        }

        /** 过账期间-项目 集合 */
        export class PostingPeriodItems extends ibas.BusinessObjects<PostingPeriodItem, PostingPeriod> implements IPostingPeriodItems {
            /** 创建并添加子项 */
            create(): PostingPeriodItem {
                let item: PostingPeriodItem = new PostingPeriodItem();
                this.add(item);
                return item;
            }
            /** 子项属性改变时 */
            protected onItemPropertyChanged(item: PostingPeriodItem, name: string): void {
                this.parent.markDirty();
            }
        }

        /** 过账期间-项目 */
        export class PostingPeriodItem extends ibas.BOSimpleLine<PostingPeriodItem> implements IPostingPeriodItem {
            /** 构造函数 */
            constructor() {
                super();
            }
            /** 映射的属性名称-单据类型 */
            static PROPERTY_DOCUMENTTYPE_NAME: string = "DocumentType";
            /** 获取-单据类型 */
            get documentType(): string {
                return this.getProperty<string>(PostingPeriodItem.PROPERTY_DOCUMENTTYPE_NAME);
            }
            /** 设置-单据类型 */
            set documentType(value: string) {
                this.setProperty(PostingPeriodItem.PROPERTY_DOCUMENTTYPE_NAME, value);
            }

            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string = "Status";
            /** 获取-状态 */
            get status(): emPeriodStatus {
                return this.getProperty<emPeriodStatus>(PostingPeriodItem.PROPERTY_STATUS_NAME);
            }
            /** 设置-状态 */
            set status(value: emPeriodStatus) {
                this.setProperty(PostingPeriodItem.PROPERTY_STATUS_NAME, value);
            }

            /** 映射的属性名称-对象编号 */
            static PROPERTY_OBJECTKEY_NAME: string = "ObjectKey";
            /** 获取-对象编号 */
            get objectKey(): number {
                return this.getProperty<number>(PostingPeriodItem.PROPERTY_OBJECTKEY_NAME);
            }
            /** 设置-对象编号 */
            set objectKey(value: number) {
                this.setProperty(PostingPeriodItem.PROPERTY_OBJECTKEY_NAME, value);
            }

            /** 映射的属性名称-对象行号 */
            static PROPERTY_LINEID_NAME: string = "LineId";
            /** 获取-对象行号 */
            get lineId(): number {
                return this.getProperty<number>(PostingPeriodItem.PROPERTY_LINEID_NAME);
            }
            /** 设置-对象行号 */
            set lineId(value: number) {
                this.setProperty(PostingPeriodItem.PROPERTY_LINEID_NAME, value);
            }

            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string = "ObjectCode";
            /** 获取-对象类型 */
            get objectCode(): string {
                return this.getProperty<string>(PostingPeriodItem.PROPERTY_OBJECTCODE_NAME);
            }
            /** 设置-对象类型 */
            set objectCode(value: string) {
                this.setProperty(PostingPeriodItem.PROPERTY_OBJECTCODE_NAME, value);
            }

            /** 映射的属性名称-实例号 */
            static PROPERTY_LOGINST_NAME: string = "LogInst";
            /** 获取-实例号 */
            get logInst(): number {
                return this.getProperty<number>(PostingPeriodItem.PROPERTY_LOGINST_NAME);
            }
            /** 设置-实例号 */
            set logInst(value: number) {
                this.setProperty(PostingPeriodItem.PROPERTY_LOGINST_NAME, value);
            }

            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string = "DataSource";
            /** 获取-数据源 */
            get dataSource(): string {
                return this.getProperty<string>(PostingPeriodItem.PROPERTY_DATASOURCE_NAME);
            }
            /** 设置-数据源 */
            set dataSource(value: string) {
                this.setProperty(PostingPeriodItem.PROPERTY_DATASOURCE_NAME, value);
            }

            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string = "CreateDate";
            /** 获取-创建日期 */
            get createDate(): Date {
                return this.getProperty<Date>(PostingPeriodItem.PROPERTY_CREATEDATE_NAME);
            }
            /** 设置-创建日期 */
            set createDate(value: Date) {
                this.setProperty(PostingPeriodItem.PROPERTY_CREATEDATE_NAME, value);
            }

            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string = "CreateTime";
            /** 获取-创建时间 */
            get createTime(): number {
                return this.getProperty<number>(PostingPeriodItem.PROPERTY_CREATETIME_NAME);
            }
            /** 设置-创建时间 */
            set createTime(value: number) {
                this.setProperty(PostingPeriodItem.PROPERTY_CREATETIME_NAME, value);
            }

            /** 映射的属性名称-更新日期 */
            static PROPERTY_UPDATEDATE_NAME: string = "UpdateDate";
            /** 获取-更新日期 */
            get updateDate(): Date {
                return this.getProperty<Date>(PostingPeriodItem.PROPERTY_UPDATEDATE_NAME);
            }
            /** 设置-更新日期 */
            set updateDate(value: Date) {
                this.setProperty(PostingPeriodItem.PROPERTY_UPDATEDATE_NAME, value);
            }

            /** 映射的属性名称-更新时间 */
            static PROPERTY_UPDATETIME_NAME: string = "UpdateTime";
            /** 获取-更新时间 */
            get updateTime(): number {
                return this.getProperty<number>(PostingPeriodItem.PROPERTY_UPDATETIME_NAME);
            }
            /** 设置-更新时间 */
            set updateTime(value: number) {
                this.setProperty(PostingPeriodItem.PROPERTY_UPDATETIME_NAME, value);
            }

            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string = "CreateUserSign";
            /** 获取-创建用户 */
            get createUserSign(): number {
                return this.getProperty<number>(PostingPeriodItem.PROPERTY_CREATEUSERSIGN_NAME);
            }
            /** 设置-创建用户 */
            set createUserSign(value: number) {
                this.setProperty(PostingPeriodItem.PROPERTY_CREATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-更新用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string = "UpdateUserSign";
            /** 获取-更新用户 */
            get updateUserSign(): number {
                return this.getProperty<number>(PostingPeriodItem.PROPERTY_UPDATEUSERSIGN_NAME);
            }
            /** 设置-更新用户 */
            set updateUserSign(value: number) {
                this.setProperty(PostingPeriodItem.PROPERTY_UPDATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string = "CreateActionId";
            /** 获取-创建动作标识 */
            get createActionId(): string {
                return this.getProperty<string>(PostingPeriodItem.PROPERTY_CREATEACTIONID_NAME);
            }
            /** 设置-创建动作标识 */
            set createActionId(value: string) {
                this.setProperty(PostingPeriodItem.PROPERTY_CREATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string = "UpdateActionId";
            /** 获取-更新动作标识 */
            get updateActionId(): string {
                return this.getProperty<string>(PostingPeriodItem.PROPERTY_UPDATEACTIONID_NAME);
            }
            /** 设置-更新动作标识 */
            set updateActionId(value: string) {
                this.setProperty(PostingPeriodItem.PROPERTY_UPDATEACTIONID_NAME, value);
            }


            /** 初始化数据 */
            protected init(): void {
            }
        }

    }
}
