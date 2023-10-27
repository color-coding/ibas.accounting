/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace accounting {
    export namespace bo {
        /** 日记账分录 */
        export class JournalEntry extends ibas.BODocument<JournalEntry> implements IJournalEntry {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = BO_CODE_JOURNALENTRY;
            /** 构造函数 */
            constructor() {
                super();
            }
            /** 映射的属性名称-凭证编号 */
            static PROPERTY_DOCENTRY_NAME: string = "DocEntry";
            /** 获取-凭证编号 */
            get docEntry(): number {
                return this.getProperty<number>(JournalEntry.PROPERTY_DOCENTRY_NAME);
            }
            /** 设置-凭证编号 */
            set docEntry(value: number) {
                this.setProperty(JournalEntry.PROPERTY_DOCENTRY_NAME, value);
            }

            /** 映射的属性名称-单据编码 */
            static PROPERTY_DOCNUM_NAME: string = "DocNum";
            /** 获取-单据编码 */
            get docNum(): string {
                return this.getProperty<string>(JournalEntry.PROPERTY_DOCNUM_NAME);
            }
            /** 设置-单据编码 */
            set docNum(value: string) {
                this.setProperty(JournalEntry.PROPERTY_DOCNUM_NAME, value);
            }

            /** 映射的属性名称-期间 */
            static PROPERTY_PERIOD_NAME: string = "Period";
            /** 获取-期间 */
            get period(): number {
                return this.getProperty<number>(JournalEntry.PROPERTY_PERIOD_NAME);
            }
            /** 设置-期间 */
            set period(value: number) {
                this.setProperty(JournalEntry.PROPERTY_PERIOD_NAME, value);
            }

            /** 映射的属性名称-取消 */
            static PROPERTY_CANCELED_NAME: string = "Canceled";
            /** 获取-取消 */
            get canceled(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(JournalEntry.PROPERTY_CANCELED_NAME);
            }
            /** 设置-取消 */
            set canceled(value: ibas.emYesNo) {
                this.setProperty(JournalEntry.PROPERTY_CANCELED_NAME, value);
            }

            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string = "Status";
            /** 获取-状态 */
            get status(): ibas.emBOStatus {
                return this.getProperty<ibas.emBOStatus>(JournalEntry.PROPERTY_STATUS_NAME);
            }
            /** 设置-状态 */
            set status(value: ibas.emBOStatus) {
                this.setProperty(JournalEntry.PROPERTY_STATUS_NAME, value);
            }

            /** 映射的属性名称-审批状态 */
            static PROPERTY_APPROVALSTATUS_NAME: string = "ApprovalStatus";
            /** 获取-审批状态 */
            get approvalStatus(): ibas.emApprovalStatus {
                return this.getProperty<ibas.emApprovalStatus>(JournalEntry.PROPERTY_APPROVALSTATUS_NAME);
            }
            /** 设置-审批状态 */
            set approvalStatus(value: ibas.emApprovalStatus) {
                this.setProperty(JournalEntry.PROPERTY_APPROVALSTATUS_NAME, value);
            }

            /** 映射的属性名称-单据状态 */
            static PROPERTY_DOCUMENTSTATUS_NAME: string = "DocumentStatus";
            /** 获取-单据状态 */
            get documentStatus(): ibas.emDocumentStatus {
                return this.getProperty<ibas.emDocumentStatus>(JournalEntry.PROPERTY_DOCUMENTSTATUS_NAME);
            }
            /** 设置-单据状态 */
            set documentStatus(value: ibas.emDocumentStatus) {
                this.setProperty(JournalEntry.PROPERTY_DOCUMENTSTATUS_NAME, value);
            }

            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string = "ObjectCode";
            /** 获取-对象类型 */
            get objectCode(): string {
                return this.getProperty<string>(JournalEntry.PROPERTY_OBJECTCODE_NAME);
            }
            /** 设置-对象类型 */
            set objectCode(value: string) {
                this.setProperty(JournalEntry.PROPERTY_OBJECTCODE_NAME, value);
            }

            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string = "CreateDate";
            /** 获取-创建日期 */
            get createDate(): Date {
                return this.getProperty<Date>(JournalEntry.PROPERTY_CREATEDATE_NAME);
            }
            /** 设置-创建日期 */
            set createDate(value: Date) {
                this.setProperty(JournalEntry.PROPERTY_CREATEDATE_NAME, value);
            }

            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string = "CreateTime";
            /** 获取-创建时间 */
            get createTime(): number {
                return this.getProperty<number>(JournalEntry.PROPERTY_CREATETIME_NAME);
            }
            /** 设置-创建时间 */
            set createTime(value: number) {
                this.setProperty(JournalEntry.PROPERTY_CREATETIME_NAME, value);
            }

            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string = "UpdateDate";
            /** 获取-修改日期 */
            get updateDate(): Date {
                return this.getProperty<Date>(JournalEntry.PROPERTY_UPDATEDATE_NAME);
            }
            /** 设置-修改日期 */
            set updateDate(value: Date) {
                this.setProperty(JournalEntry.PROPERTY_UPDATEDATE_NAME, value);
            }

            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string = "UpdateTime";
            /** 获取-修改时间 */
            get updateTime(): number {
                return this.getProperty<number>(JournalEntry.PROPERTY_UPDATETIME_NAME);
            }
            /** 设置-修改时间 */
            set updateTime(value: number) {
                this.setProperty(JournalEntry.PROPERTY_UPDATETIME_NAME, value);
            }

            /** 映射的属性名称-版本 */
            static PROPERTY_LOGINST_NAME: string = "LogInst";
            /** 获取-版本 */
            get logInst(): number {
                return this.getProperty<number>(JournalEntry.PROPERTY_LOGINST_NAME);
            }
            /** 设置-版本 */
            set logInst(value: number) {
                this.setProperty(JournalEntry.PROPERTY_LOGINST_NAME, value);
            }

            /** 映射的属性名称-服务系列 */
            static PROPERTY_SERIES_NAME: string = "Series";
            /** 获取-服务系列 */
            get series(): number {
                return this.getProperty<number>(JournalEntry.PROPERTY_SERIES_NAME);
            }
            /** 设置-服务系列 */
            set series(value: number) {
                this.setProperty(JournalEntry.PROPERTY_SERIES_NAME, value);
            }

            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string = "DataSource";
            /** 获取-数据源 */
            get dataSource(): string {
                return this.getProperty<string>(JournalEntry.PROPERTY_DATASOURCE_NAME);
            }
            /** 设置-数据源 */
            set dataSource(value: string) {
                this.setProperty(JournalEntry.PROPERTY_DATASOURCE_NAME, value);
            }

            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string = "CreateUserSign";
            /** 获取-创建用户 */
            get createUserSign(): number {
                return this.getProperty<number>(JournalEntry.PROPERTY_CREATEUSERSIGN_NAME);
            }
            /** 设置-创建用户 */
            set createUserSign(value: number) {
                this.setProperty(JournalEntry.PROPERTY_CREATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string = "UpdateUserSign";
            /** 获取-修改用户 */
            get updateUserSign(): number {
                return this.getProperty<number>(JournalEntry.PROPERTY_UPDATEUSERSIGN_NAME);
            }
            /** 设置-修改用户 */
            set updateUserSign(value: number) {
                this.setProperty(JournalEntry.PROPERTY_UPDATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string = "CreateActionId";
            /** 获取-创建动作标识 */
            get createActionId(): string {
                return this.getProperty<string>(JournalEntry.PROPERTY_CREATEACTIONID_NAME);
            }
            /** 设置-创建动作标识 */
            set createActionId(value: string) {
                this.setProperty(JournalEntry.PROPERTY_CREATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string = "UpdateActionId";
            /** 获取-更新动作标识 */
            get updateActionId(): string {
                return this.getProperty<string>(JournalEntry.PROPERTY_UPDATEACTIONID_NAME);
            }
            /** 设置-更新动作标识 */
            set updateActionId(value: string) {
                this.setProperty(JournalEntry.PROPERTY_UPDATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-数据所有者 */
            static PROPERTY_DATAOWNER_NAME: string = "DataOwner";
            /** 获取-数据所有者 */
            get dataOwner(): number {
                return this.getProperty<number>(JournalEntry.PROPERTY_DATAOWNER_NAME);
            }
            /** 设置-数据所有者 */
            set dataOwner(value: number) {
                this.setProperty(JournalEntry.PROPERTY_DATAOWNER_NAME, value);
            }

            /** 映射的属性名称-团队成员 */
            static PROPERTY_TEAMMEMBERS_NAME: string = "TeamMembers";
            /** 获取-团队成员 */
            get teamMembers(): string {
                return this.getProperty<string>(JournalEntry.PROPERTY_TEAMMEMBERS_NAME);
            }
            /** 设置-团队成员 */
            set teamMembers(value: string) {
                this.setProperty(JournalEntry.PROPERTY_TEAMMEMBERS_NAME, value);
            }

            /** 映射的属性名称-数据所属组织 */
            static PROPERTY_ORGANIZATION_NAME: string = "Organization";
            /** 获取-数据所属组织 */
            get organization(): string {
                return this.getProperty<string>(JournalEntry.PROPERTY_ORGANIZATION_NAME);
            }
            /** 设置-数据所属组织 */
            set organization(value: string) {
                this.setProperty(JournalEntry.PROPERTY_ORGANIZATION_NAME, value);
            }

            /** 映射的属性名称-过账日期 */
            static PROPERTY_POSTINGDATE_NAME: string = "PostingDate";
            /** 获取-过账日期 */
            get postingDate(): Date {
                return this.getProperty<Date>(JournalEntry.PROPERTY_POSTINGDATE_NAME);
            }
            /** 设置-过账日期 */
            set postingDate(value: Date) {
                this.setProperty(JournalEntry.PROPERTY_POSTINGDATE_NAME, value);
            }

            /** 映射的属性名称-到期日 */
            static PROPERTY_DELIVERYDATE_NAME: string = "DeliveryDate";
            /** 获取-到期日 */
            get deliveryDate(): Date {
                return this.getProperty<Date>(JournalEntry.PROPERTY_DELIVERYDATE_NAME);
            }
            /** 设置-到期日 */
            set deliveryDate(value: Date) {
                this.setProperty(JournalEntry.PROPERTY_DELIVERYDATE_NAME, value);
            }

            /** 映射的属性名称-凭证日期 */
            static PROPERTY_DOCUMENTDATE_NAME: string = "DocumentDate";
            /** 获取-凭证日期 */
            get documentDate(): Date {
                return this.getProperty<Date>(JournalEntry.PROPERTY_DOCUMENTDATE_NAME);
            }
            /** 设置-凭证日期 */
            set documentDate(value: Date) {
                this.setProperty(JournalEntry.PROPERTY_DOCUMENTDATE_NAME, value);
            }

            /** 映射的属性名称-分支 */
            static PROPERTY_BRANCH_NAME: string = "Branch";
            /** 获取-分支 */
            get branch(): string {
                return this.getProperty<string>(JournalEntry.PROPERTY_BRANCH_NAME);
            }
            /** 设置-分支 */
            set branch(value: string) {
                this.setProperty(JournalEntry.PROPERTY_BRANCH_NAME, value);
            }

            /** 映射的属性名称-项目代码 */
            static PROPERTY_PROJECT_NAME: string = "Project";
            /** 获取-项目代码 */
            get project(): string {
                return this.getProperty<string>(JournalEntry.PROPERTY_PROJECT_NAME);
            }
            /** 设置-项目代码 */
            set project(value: string) {
                this.setProperty(JournalEntry.PROPERTY_PROJECT_NAME, value);
            }

            /** 映射的属性名称-基于类型 */
            static PROPERTY_BASEDOCUMENTTYPE_NAME: string = "BaseDocumentType";
            /** 获取-基于类型 */
            get baseDocumentType(): string {
                return this.getProperty<string>(JournalEntry.PROPERTY_BASEDOCUMENTTYPE_NAME);
            }
            /** 设置-基于类型 */
            set baseDocumentType(value: string) {
                this.setProperty(JournalEntry.PROPERTY_BASEDOCUMENTTYPE_NAME, value);
            }

            /** 映射的属性名称-基于标识 */
            static PROPERTY_BASEDOCUMENTENTRY_NAME: string = "BaseDocumentEntry";
            /** 获取-基于标识 */
            get baseDocumentEntry(): number {
                return this.getProperty<number>(JournalEntry.PROPERTY_BASEDOCUMENTENTRY_NAME);
            }
            /** 设置-基于标识 */
            set baseDocumentEntry(value: number) {
                this.setProperty(JournalEntry.PROPERTY_BASEDOCUMENTENTRY_NAME, value);
            }

            /** 映射的属性名称-基于行号 */
            static PROPERTY_BASEDOCUMENTLINEID_NAME: string = "BaseDocumentLineId";
            /** 获取-基于行号 */
            get baseDocumentLineId(): number {
                return this.getProperty<number>(JournalEntry.PROPERTY_BASEDOCUMENTLINEID_NAME);
            }
            /** 设置-基于行号 */
            set baseDocumentLineId(value: number) {
                this.setProperty(JournalEntry.PROPERTY_BASEDOCUMENTLINEID_NAME, value);
            }

            /** 映射的属性名称-单据货币 */
            static PROPERTY_DOCUMENTCURRENCY_NAME: string = "DocumentCurrency";
            /** 获取-单据货币 */
            get documentCurrency(): string {
                return this.getProperty<string>(JournalEntry.PROPERTY_DOCUMENTCURRENCY_NAME);
            }
            /** 设置-单据货币 */
            set documentCurrency(value: string) {
                this.setProperty(JournalEntry.PROPERTY_DOCUMENTCURRENCY_NAME, value);
            }

            /** 映射的属性名称-单据总计 */
            static PROPERTY_DOCUMENTTOTAL_NAME: string = "DocumentTotal";
            /** 获取-单据总计 */
            get documentTotal(): number {
                return this.getProperty<number>(JournalEntry.PROPERTY_DOCUMENTTOTAL_NAME);
            }
            /** 设置-单据总计 */
            set documentTotal(value: number) {
                this.setProperty(JournalEntry.PROPERTY_DOCUMENTTOTAL_NAME, value);
            }

            /** 映射的属性名称-参考1 */
            static PROPERTY_REFERENCE1_NAME: string = "Reference1";
            /** 获取-参考1 */
            get reference1(): string {
                return this.getProperty<string>(JournalEntry.PROPERTY_REFERENCE1_NAME);
            }
            /** 设置-参考1 */
            set reference1(value: string) {
                this.setProperty(JournalEntry.PROPERTY_REFERENCE1_NAME, value);
            }

            /** 映射的属性名称-参考2 */
            static PROPERTY_REFERENCE2_NAME: string = "Reference2";
            /** 获取-参考2 */
            get reference2(): string {
                return this.getProperty<string>(JournalEntry.PROPERTY_REFERENCE2_NAME);
            }
            /** 设置-参考2 */
            set reference2(value: string) {
                this.setProperty(JournalEntry.PROPERTY_REFERENCE2_NAME, value);
            }

            /** 映射的属性名称-参考3 */
            static PROPERTY_REFERENCE3_NAME: string = "Reference3";
            /** 获取-参考3 */
            get reference3(): string {
                return this.getProperty<string>(JournalEntry.PROPERTY_REFERENCE3_NAME);
            }
            /** 设置-参考3 */
            set reference3(value: string) {
                this.setProperty(JournalEntry.PROPERTY_REFERENCE3_NAME, value);
            }

            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string = "Remarks";
            /** 获取-备注 */
            get remarks(): string {
                return this.getProperty<string>(JournalEntry.PROPERTY_REMARKS_NAME);
            }
            /** 设置-备注 */
            set remarks(value: string) {
                this.setProperty(JournalEntry.PROPERTY_REMARKS_NAME, value);
            }


            /** 映射的属性名称-日记账分录-行集合 */
            static PROPERTY_JOURNALENTRYLINES_NAME: string = "JournalEntryLines";
            /** 获取-日记账分录-行集合 */
            get journalEntryLines(): JournalEntryLines {
                return this.getProperty<JournalEntryLines>(JournalEntry.PROPERTY_JOURNALENTRYLINES_NAME);
            }
            /** 设置-日记账分录-行集合 */
            set journalEntryLines(value: JournalEntryLines) {
                this.setProperty(JournalEntry.PROPERTY_JOURNALENTRYLINES_NAME, value);
            }

            /** 初始化数据 */
            protected init(): void {
                this.journalEntryLines = new JournalEntryLines(this);
                this.objectCode = ibas.config.applyVariables(JournalEntry.BUSINESS_OBJECT_CODE);
            }
            /** 重置 */
            reset(): void {
                super.reset();
                this.documentStatus = ibas.emDocumentStatus.RELEASED;
                this.journalEntryLines.forEach(c => c.lineStatus = ibas.emDocumentStatus.RELEASED);
            }
            protected registerRules(): ibas.IBusinessRule[] {
                return [
                    // 计算项目-行总计
                    new ibas.BusinessRuleSumElements(JournalEntry.PROPERTY_DOCUMENTTOTAL_NAME, JournalEntry.PROPERTY_JOURNALENTRYLINES_NAME, JournalEntryLine.PROPERTY_DEBIT_NAME),
                ];
            }
        }

        /** 日记账分录-行 集合 */
        export class JournalEntryLines extends ibas.BusinessObjects<JournalEntryLine, JournalEntry> implements IJournalEntryLines {
            /** 创建并添加子项 */
            create(): JournalEntryLine {
                let item: JournalEntryLine = new JournalEntryLine();
                this.add(item);
                return item;
            }
        }

        /** 日记账分录-行 */
        export class JournalEntryLine extends ibas.BODocumentLine<JournalEntryLine> implements IJournalEntryLine {
            /** 构造函数 */
            constructor() {
                super();
            }
            /** 映射的属性名称-编码 */
            static PROPERTY_DOCENTRY_NAME: string = "DocEntry";
            /** 获取-编码 */
            get docEntry(): number {
                return this.getProperty<number>(JournalEntryLine.PROPERTY_DOCENTRY_NAME);
            }
            /** 设置-编码 */
            set docEntry(value: number) {
                this.setProperty(JournalEntryLine.PROPERTY_DOCENTRY_NAME, value);
            }

            /** 映射的属性名称-行号 */
            static PROPERTY_LINEID_NAME: string = "LineId";
            /** 获取-行号 */
            get lineId(): number {
                return this.getProperty<number>(JournalEntryLine.PROPERTY_LINEID_NAME);
            }
            /** 设置-行号 */
            set lineId(value: number) {
                this.setProperty(JournalEntryLine.PROPERTY_LINEID_NAME, value);
            }

            /** 映射的属性名称-显示顺序 */
            static PROPERTY_VISORDER_NAME: string = "VisOrder";
            /** 获取-显示顺序 */
            get visOrder(): number {
                return this.getProperty<number>(JournalEntryLine.PROPERTY_VISORDER_NAME);
            }
            /** 设置-显示顺序 */
            set visOrder(value: number) {
                this.setProperty(JournalEntryLine.PROPERTY_VISORDER_NAME, value);
            }

            /** 映射的属性名称-取消 */
            static PROPERTY_CANCELED_NAME: string = "Canceled";
            /** 获取-取消 */
            get canceled(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(JournalEntryLine.PROPERTY_CANCELED_NAME);
            }
            /** 设置-取消 */
            set canceled(value: ibas.emYesNo) {
                this.setProperty(JournalEntryLine.PROPERTY_CANCELED_NAME, value);
            }

            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string = "Status";
            /** 获取-状态 */
            get status(): ibas.emBOStatus {
                return this.getProperty<ibas.emBOStatus>(JournalEntryLine.PROPERTY_STATUS_NAME);
            }
            /** 设置-状态 */
            set status(value: ibas.emBOStatus) {
                this.setProperty(JournalEntryLine.PROPERTY_STATUS_NAME, value);
            }

            /** 映射的属性名称-单据状态 */
            static PROPERTY_LINESTATUS_NAME: string = "LineStatus";
            /** 获取-单据状态 */
            get lineStatus(): ibas.emDocumentStatus {
                return this.getProperty<ibas.emDocumentStatus>(JournalEntryLine.PROPERTY_LINESTATUS_NAME);
            }
            /** 设置-单据状态 */
            set lineStatus(value: ibas.emDocumentStatus) {
                this.setProperty(JournalEntryLine.PROPERTY_LINESTATUS_NAME, value);
            }

            /** 映射的属性名称-类型 */
            static PROPERTY_OBJECTCODE_NAME: string = "ObjectCode";
            /** 获取-类型 */
            get objectCode(): string {
                return this.getProperty<string>(JournalEntryLine.PROPERTY_OBJECTCODE_NAME);
            }
            /** 设置-类型 */
            set objectCode(value: string) {
                this.setProperty(JournalEntryLine.PROPERTY_OBJECTCODE_NAME, value);
            }

            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string = "CreateDate";
            /** 获取-创建日期 */
            get createDate(): Date {
                return this.getProperty<Date>(JournalEntryLine.PROPERTY_CREATEDATE_NAME);
            }
            /** 设置-创建日期 */
            set createDate(value: Date) {
                this.setProperty(JournalEntryLine.PROPERTY_CREATEDATE_NAME, value);
            }

            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string = "CreateTime";
            /** 获取-创建时间 */
            get createTime(): number {
                return this.getProperty<number>(JournalEntryLine.PROPERTY_CREATETIME_NAME);
            }
            /** 设置-创建时间 */
            set createTime(value: number) {
                this.setProperty(JournalEntryLine.PROPERTY_CREATETIME_NAME, value);
            }

            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string = "UpdateDate";
            /** 获取-修改日期 */
            get updateDate(): Date {
                return this.getProperty<Date>(JournalEntryLine.PROPERTY_UPDATEDATE_NAME);
            }
            /** 设置-修改日期 */
            set updateDate(value: Date) {
                this.setProperty(JournalEntryLine.PROPERTY_UPDATEDATE_NAME, value);
            }

            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string = "UpdateTime";
            /** 获取-修改时间 */
            get updateTime(): number {
                return this.getProperty<number>(JournalEntryLine.PROPERTY_UPDATETIME_NAME);
            }
            /** 设置-修改时间 */
            set updateTime(value: number) {
                this.setProperty(JournalEntryLine.PROPERTY_UPDATETIME_NAME, value);
            }

            /** 映射的属性名称-版本 */
            static PROPERTY_LOGINST_NAME: string = "LogInst";
            /** 获取-版本 */
            get logInst(): number {
                return this.getProperty<number>(JournalEntryLine.PROPERTY_LOGINST_NAME);
            }
            /** 设置-版本 */
            set logInst(value: number) {
                this.setProperty(JournalEntryLine.PROPERTY_LOGINST_NAME, value);
            }

            /** 映射的属性名称-服务系列 */
            static PROPERTY_SERIES_NAME: string = "Series";
            /** 获取-服务系列 */
            get series(): number {
                return this.getProperty<number>(JournalEntryLine.PROPERTY_SERIES_NAME);
            }
            /** 设置-服务系列 */
            set series(value: number) {
                this.setProperty(JournalEntryLine.PROPERTY_SERIES_NAME, value);
            }

            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string = "DataSource";
            /** 获取-数据源 */
            get dataSource(): string {
                return this.getProperty<string>(JournalEntryLine.PROPERTY_DATASOURCE_NAME);
            }
            /** 设置-数据源 */
            set dataSource(value: string) {
                this.setProperty(JournalEntryLine.PROPERTY_DATASOURCE_NAME, value);
            }

            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string = "CreateUserSign";
            /** 获取-创建用户 */
            get createUserSign(): number {
                return this.getProperty<number>(JournalEntryLine.PROPERTY_CREATEUSERSIGN_NAME);
            }
            /** 设置-创建用户 */
            set createUserSign(value: number) {
                this.setProperty(JournalEntryLine.PROPERTY_CREATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string = "UpdateUserSign";
            /** 获取-修改用户 */
            get updateUserSign(): number {
                return this.getProperty<number>(JournalEntryLine.PROPERTY_UPDATEUSERSIGN_NAME);
            }
            /** 设置-修改用户 */
            set updateUserSign(value: number) {
                this.setProperty(JournalEntryLine.PROPERTY_UPDATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string = "CreateActionId";
            /** 获取-创建动作标识 */
            get createActionId(): string {
                return this.getProperty<string>(JournalEntryLine.PROPERTY_CREATEACTIONID_NAME);
            }
            /** 设置-创建动作标识 */
            set createActionId(value: string) {
                this.setProperty(JournalEntryLine.PROPERTY_CREATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string = "UpdateActionId";
            /** 获取-更新动作标识 */
            get updateActionId(): string {
                return this.getProperty<string>(JournalEntryLine.PROPERTY_UPDATEACTIONID_NAME);
            }
            /** 设置-更新动作标识 */
            set updateActionId(value: string) {
                this.setProperty(JournalEntryLine.PROPERTY_UPDATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-科目 */
            static PROPERTY_ACCOUNT_NAME: string = "Account";
            /** 获取-科目 */
            get account(): string {
                return this.getProperty<string>(JournalEntryLine.PROPERTY_ACCOUNT_NAME);
            }
            /** 设置-科目 */
            set account(value: string) {
                this.setProperty(JournalEntryLine.PROPERTY_ACCOUNT_NAME, value);
            }

            /** 映射的属性名称-业务伙伴/科目代码 */
            static PROPERTY_SHORTNAME_NAME: string = "ShortName";
            /** 获取-业务伙伴/科目代码 */
            get shortName(): string {
                return this.getProperty<string>(JournalEntryLine.PROPERTY_SHORTNAME_NAME);
            }
            /** 设置-业务伙伴/科目代码 */
            set shortName(value: string) {
                this.setProperty(JournalEntryLine.PROPERTY_SHORTNAME_NAME, value);
            }

            /** 映射的属性名称-借方金额 */
            static PROPERTY_DEBIT_NAME: string = "Debit";
            /** 获取-借方金额 */
            get debit(): number {
                return this.getProperty<number>(JournalEntryLine.PROPERTY_DEBIT_NAME);
            }
            /** 设置-借方金额 */
            set debit(value: number) {
                this.setProperty(JournalEntryLine.PROPERTY_DEBIT_NAME, value);
            }

            /** 映射的属性名称-贷方金额 */
            static PROPERTY_CREDIT_NAME: string = "Credit";
            /** 获取-贷方金额 */
            get credit(): number {
                return this.getProperty<number>(JournalEntryLine.PROPERTY_CREDIT_NAME);
            }
            /** 设置-贷方金额 */
            set credit(value: number) {
                this.setProperty(JournalEntryLine.PROPERTY_CREDIT_NAME, value);
            }

            /** 映射的属性名称-货币 */
            static PROPERTY_CURRENCY_NAME: string = "Currency";
            /** 获取-货币 */
            get currency(): string {
                return this.getProperty<string>(JournalEntryLine.PROPERTY_CURRENCY_NAME);
            }
            /** 设置-货币 */
            set currency(value: string) {
                this.setProperty(JournalEntryLine.PROPERTY_CURRENCY_NAME, value);
            }

            /** 映射的属性名称-借方金额（系统） */
            static PROPERTY_SYSTEMDEBIT_NAME: string = "SystemDebit";
            /** 获取-借方金额（系统） */
            get systemDebit(): number {
                return this.getProperty<number>(JournalEntryLine.PROPERTY_SYSTEMDEBIT_NAME);
            }
            /** 设置-借方金额（系统） */
            set systemDebit(value: number) {
                this.setProperty(JournalEntryLine.PROPERTY_SYSTEMDEBIT_NAME, value);
            }

            /** 映射的属性名称-贷方金额（系统） */
            static PROPERTY_SYSTEMCREDIT_NAME: string = "SystemCredit";
            /** 获取-贷方金额（系统） */
            get systemCredit(): number {
                return this.getProperty<number>(JournalEntryLine.PROPERTY_SYSTEMCREDIT_NAME);
            }
            /** 设置-贷方金额（系统） */
            set systemCredit(value: number) {
                this.setProperty(JournalEntryLine.PROPERTY_SYSTEMCREDIT_NAME, value);
            }

            /** 映射的属性名称-系统币 */
            static PROPERTY_SYSTEMCURRENCY_NAME: string = "SystemCurrency";
            /** 获取-系统币 */
            get systemCurrency(): string {
                return this.getProperty<string>(JournalEntryLine.PROPERTY_SYSTEMCURRENCY_NAME);
            }
            /** 设置-系统币 */
            set systemCurrency(value: string) {
                this.setProperty(JournalEntryLine.PROPERTY_SYSTEMCURRENCY_NAME, value);
            }

            /** 映射的属性名称-系统币汇率 */
            static PROPERTY_SYSTEMRATE_NAME: string = "SystemRate";
            /** 获取-系统币汇率 */
            get systemRate(): number {
                return this.getProperty<number>(JournalEntryLine.PROPERTY_SYSTEMRATE_NAME);
            }
            /** 设置-系统币汇率 */
            set systemRate(value: number) {
                this.setProperty(JournalEntryLine.PROPERTY_SYSTEMRATE_NAME, value);
            }

            /** 映射的属性名称-借方金额（本币） */
            static PROPERTY_LOCALDEBIT_NAME: string = "LocalDebit";
            /** 获取-借方金额（本币） */
            get localDebit(): number {
                return this.getProperty<number>(JournalEntryLine.PROPERTY_LOCALDEBIT_NAME);
            }
            /** 设置-借方金额（本币） */
            set localDebit(value: number) {
                this.setProperty(JournalEntryLine.PROPERTY_LOCALDEBIT_NAME, value);
            }

            /** 映射的属性名称-贷方金额（本币） */
            static PROPERTY_LOCALCREDIT_NAME: string = "LocalCredit";
            /** 获取-贷方金额（本币） */
            get localCredit(): number {
                return this.getProperty<number>(JournalEntryLine.PROPERTY_LOCALCREDIT_NAME);
            }
            /** 设置-贷方金额（本币） */
            set localCredit(value: number) {
                this.setProperty(JournalEntryLine.PROPERTY_LOCALCREDIT_NAME, value);
            }

            /** 映射的属性名称-本币 */
            static PROPERTY_LOCALCURRENCY_NAME: string = "LocalCurrency";
            /** 获取-本币 */
            get localCurrency(): string {
                return this.getProperty<string>(JournalEntryLine.PROPERTY_LOCALCURRENCY_NAME);
            }
            /** 设置-本币 */
            set localCurrency(value: string) {
                this.setProperty(JournalEntryLine.PROPERTY_LOCALCURRENCY_NAME, value);
            }

            /** 映射的属性名称-本币汇率 */
            static PROPERTY_LOCALRATE_NAME: string = "LocalRate";
            /** 获取-本币汇率 */
            get localRate(): number {
                return this.getProperty<number>(JournalEntryLine.PROPERTY_LOCALRATE_NAME);
            }
            /** 设置-本币汇率 */
            set localRate(value: number) {
                this.setProperty(JournalEntryLine.PROPERTY_LOCALRATE_NAME, value);
            }

            /** 映射的属性名称-税码 */
            static PROPERTY_TAX_NAME: string = "Tax";
            /** 获取-税码 */
            get tax(): string {
                return this.getProperty<string>(JournalEntryLine.PROPERTY_TAX_NAME);
            }
            /** 设置-税码 */
            set tax(value: string) {
                this.setProperty(JournalEntryLine.PROPERTY_TAX_NAME, value);
            }

            /** 映射的属性名称-税率 */
            static PROPERTY_TAXRATE_NAME: string = "TaxRate";
            /** 获取-税率 */
            get taxRate(): number {
                return this.getProperty<number>(JournalEntryLine.PROPERTY_TAXRATE_NAME);
            }
            /** 设置-税率 */
            set taxRate(value: number) {
                this.setProperty(JournalEntryLine.PROPERTY_TAXRATE_NAME, value);
            }

            /** 映射的属性名称-基础总额 */
            static PROPERTY_BASETOTAL_NAME: string = "BaseTotal";
            /** 获取-基础总额 */
            get baseTotal(): number {
                return this.getProperty<number>(JournalEntryLine.PROPERTY_BASETOTAL_NAME);
            }
            /** 设置-基础总额 */
            set baseTotal(value: number) {
                this.setProperty(JournalEntryLine.PROPERTY_BASETOTAL_NAME, value);
            }

            /** 映射的属性名称-分支 */
            static PROPERTY_BRANCH_NAME: string = "Branch";
            /** 获取-分支 */
            get branch(): string {
                return this.getProperty<string>(JournalEntryLine.PROPERTY_BRANCH_NAME);
            }
            /** 设置-分支 */
            set branch(value: string) {
                this.setProperty(JournalEntryLine.PROPERTY_BRANCH_NAME, value);
            }

            /** 映射的属性名称-项目代码 */
            static PROPERTY_PROJECT_NAME: string = "Project";
            /** 获取-项目代码 */
            get project(): string {
                return this.getProperty<string>(JournalEntryLine.PROPERTY_PROJECT_NAME);
            }
            /** 设置-项目代码 */
            set project(value: string) {
                this.setProperty(JournalEntryLine.PROPERTY_PROJECT_NAME, value);
            }

            /** 映射的属性名称-分配规则1 */
            static PROPERTY_DISTRIBUTIONRULE1_NAME: string = "DistributionRule1";
            /** 获取-分配规则1 */
            get distributionRule1(): string {
                return this.getProperty<string>(JournalEntryLine.PROPERTY_DISTRIBUTIONRULE1_NAME);
            }
            /** 设置-分配规则1 */
            set distributionRule1(value: string) {
                this.setProperty(JournalEntryLine.PROPERTY_DISTRIBUTIONRULE1_NAME, value);
            }

            /** 映射的属性名称-分配规则2 */
            static PROPERTY_DISTRIBUTIONRULE2_NAME: string = "DistributionRule2";
            /** 获取-分配规则2 */
            get distributionRule2(): string {
                return this.getProperty<string>(JournalEntryLine.PROPERTY_DISTRIBUTIONRULE2_NAME);
            }
            /** 设置-分配规则2 */
            set distributionRule2(value: string) {
                this.setProperty(JournalEntryLine.PROPERTY_DISTRIBUTIONRULE2_NAME, value);
            }

            /** 映射的属性名称-分配规则3 */
            static PROPERTY_DISTRIBUTIONRULE3_NAME: string = "DistributionRule3";
            /** 获取-分配规则3 */
            get distributionRule3(): string {
                return this.getProperty<string>(JournalEntryLine.PROPERTY_DISTRIBUTIONRULE3_NAME);
            }
            /** 设置-分配规则3 */
            set distributionRule3(value: string) {
                this.setProperty(JournalEntryLine.PROPERTY_DISTRIBUTIONRULE3_NAME, value);
            }

            /** 映射的属性名称-分配规则4 */
            static PROPERTY_DISTRIBUTIONRULE4_NAME: string = "DistributionRule4";
            /** 获取-分配规则4 */
            get distributionRule4(): string {
                return this.getProperty<string>(JournalEntryLine.PROPERTY_DISTRIBUTIONRULE4_NAME);
            }
            /** 设置-分配规则4 */
            set distributionRule4(value: string) {
                this.setProperty(JournalEntryLine.PROPERTY_DISTRIBUTIONRULE4_NAME, value);
            }

            /** 映射的属性名称-分配规则5 */
            static PROPERTY_DISTRIBUTIONRULE5_NAME: string = "DistributionRule5";
            /** 获取-分配规则5 */
            get distributionRule5(): string {
                return this.getProperty<string>(JournalEntryLine.PROPERTY_DISTRIBUTIONRULE5_NAME);
            }
            /** 设置-分配规则5 */
            set distributionRule5(value: string) {
                this.setProperty(JournalEntryLine.PROPERTY_DISTRIBUTIONRULE5_NAME, value);
            }

            /** 映射的属性名称-参考1 */
            static PROPERTY_REFERENCE1_NAME: string = "Reference1";
            /** 获取-参考1 */
            get reference1(): string {
                return this.getProperty<string>(JournalEntryLine.PROPERTY_REFERENCE1_NAME);
            }
            /** 设置-参考1 */
            set reference1(value: string) {
                this.setProperty(JournalEntryLine.PROPERTY_REFERENCE1_NAME, value);
            }

            /** 映射的属性名称-参考2 */
            static PROPERTY_REFERENCE2_NAME: string = "Reference2";
            /** 获取-参考2 */
            get reference2(): string {
                return this.getProperty<string>(JournalEntryLine.PROPERTY_REFERENCE2_NAME);
            }
            /** 设置-参考2 */
            set reference2(value: string) {
                this.setProperty(JournalEntryLine.PROPERTY_REFERENCE2_NAME, value);
            }

            /** 映射的属性名称-参考3 */
            static PROPERTY_REFERENCE3_NAME: string = "Reference3";
            /** 获取-参考3 */
            get reference3(): string {
                return this.getProperty<string>(JournalEntryLine.PROPERTY_REFERENCE3_NAME);
            }
            /** 设置-参考3 */
            set reference3(value: string) {
                this.setProperty(JournalEntryLine.PROPERTY_REFERENCE3_NAME, value);
            }


            /** 初始化数据 */
            protected init(): void {
                this.credit = 0;
                this.debit = 0;
            }
        }

    }
}
