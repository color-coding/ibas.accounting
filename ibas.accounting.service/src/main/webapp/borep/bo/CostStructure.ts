/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace accounting {
    export namespace bo {
        /** 费用结构 */
        export class CostStructure extends ibas.BOSimple<CostStructure> implements ICostStructure {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = BO_CODE_COSTSTRUCTURE;
            /** 构造函数 */
            constructor() {
                super();
            }
            /** 映射的属性名称-对象编号 */
            static PROPERTY_OBJECTKEY_NAME: string = "ObjectKey";
            /** 获取-对象编号 */
            get objectKey(): number {
                return this.getProperty<number>(CostStructure.PROPERTY_OBJECTKEY_NAME);
            }
            /** 设置-对象编号 */
            set objectKey(value: number) {
                this.setProperty(CostStructure.PROPERTY_OBJECTKEY_NAME, value);
            }

            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string = "ObjectCode";
            /** 获取-对象类型 */
            get objectCode(): string {
                return this.getProperty<string>(CostStructure.PROPERTY_OBJECTCODE_NAME);
            }
            /** 设置-对象类型 */
            set objectCode(value: string) {
                this.setProperty(CostStructure.PROPERTY_OBJECTCODE_NAME, value);
            }

            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string = "CreateDate";
            /** 获取-创建日期 */
            get createDate(): Date {
                return this.getProperty<Date>(CostStructure.PROPERTY_CREATEDATE_NAME);
            }
            /** 设置-创建日期 */
            set createDate(value: Date) {
                this.setProperty(CostStructure.PROPERTY_CREATEDATE_NAME, value);
            }

            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string = "CreateTime";
            /** 获取-创建时间 */
            get createTime(): number {
                return this.getProperty<number>(CostStructure.PROPERTY_CREATETIME_NAME);
            }
            /** 设置-创建时间 */
            set createTime(value: number) {
                this.setProperty(CostStructure.PROPERTY_CREATETIME_NAME, value);
            }

            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string = "UpdateDate";
            /** 获取-修改日期 */
            get updateDate(): Date {
                return this.getProperty<Date>(CostStructure.PROPERTY_UPDATEDATE_NAME);
            }
            /** 设置-修改日期 */
            set updateDate(value: Date) {
                this.setProperty(CostStructure.PROPERTY_UPDATEDATE_NAME, value);
            }

            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string = "UpdateTime";
            /** 获取-修改时间 */
            get updateTime(): number {
                return this.getProperty<number>(CostStructure.PROPERTY_UPDATETIME_NAME);
            }
            /** 设置-修改时间 */
            set updateTime(value: number) {
                this.setProperty(CostStructure.PROPERTY_UPDATETIME_NAME, value);
            }

            /** 映射的属性名称-实例号（版本） */
            static PROPERTY_LOGINST_NAME: string = "LogInst";
            /** 获取-实例号（版本） */
            get logInst(): number {
                return this.getProperty<number>(CostStructure.PROPERTY_LOGINST_NAME);
            }
            /** 设置-实例号（版本） */
            set logInst(value: number) {
                this.setProperty(CostStructure.PROPERTY_LOGINST_NAME, value);
            }

            /** 映射的属性名称-服务系列 */
            static PROPERTY_SERIES_NAME: string = "Series";
            /** 获取-服务系列 */
            get series(): number {
                return this.getProperty<number>(CostStructure.PROPERTY_SERIES_NAME);
            }
            /** 设置-服务系列 */
            set series(value: number) {
                this.setProperty(CostStructure.PROPERTY_SERIES_NAME, value);
            }

            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string = "DataSource";
            /** 获取-数据源 */
            get dataSource(): string {
                return this.getProperty<string>(CostStructure.PROPERTY_DATASOURCE_NAME);
            }
            /** 设置-数据源 */
            set dataSource(value: string) {
                this.setProperty(CostStructure.PROPERTY_DATASOURCE_NAME, value);
            }

            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string = "CreateUserSign";
            /** 获取-创建用户 */
            get createUserSign(): number {
                return this.getProperty<number>(CostStructure.PROPERTY_CREATEUSERSIGN_NAME);
            }
            /** 设置-创建用户 */
            set createUserSign(value: number) {
                this.setProperty(CostStructure.PROPERTY_CREATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string = "UpdateUserSign";
            /** 获取-修改用户 */
            get updateUserSign(): number {
                return this.getProperty<number>(CostStructure.PROPERTY_UPDATEUSERSIGN_NAME);
            }
            /** 设置-修改用户 */
            set updateUserSign(value: number) {
                this.setProperty(CostStructure.PROPERTY_UPDATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string = "CreateActionId";
            /** 获取-创建动作标识 */
            get createActionId(): string {
                return this.getProperty<string>(CostStructure.PROPERTY_CREATEACTIONID_NAME);
            }
            /** 设置-创建动作标识 */
            set createActionId(value: string) {
                this.setProperty(CostStructure.PROPERTY_CREATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string = "UpdateActionId";
            /** 获取-更新动作标识 */
            get updateActionId(): string {
                return this.getProperty<string>(CostStructure.PROPERTY_UPDATEACTIONID_NAME);
            }
            /** 设置-更新动作标识 */
            set updateActionId(value: string) {
                this.setProperty(CostStructure.PROPERTY_UPDATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-主体类型 */
            static PROPERTY_ENTITYTYPE_NAME: string = "EntityType";
            /** 获取-主体类型 */
            get entityType(): emEntityType {
                return this.getProperty<emEntityType>(CostStructure.PROPERTY_ENTITYTYPE_NAME);
            }
            /** 设置-主体类型 */
            set entityType(value: emEntityType) {
                this.setProperty(CostStructure.PROPERTY_ENTITYTYPE_NAME, value);
            }

            /** 映射的属性名称-主体编码 */
            static PROPERTY_ENTITYCODE_NAME: string = "EntityCode";
            /** 获取-主体编码 */
            get entityCode(): string {
                return this.getProperty<string>(CostStructure.PROPERTY_ENTITYCODE_NAME);
            }
            /** 设置-主体编码 */
            set entityCode(value: string) {
                this.setProperty(CostStructure.PROPERTY_ENTITYCODE_NAME, value);
            }

            /** 映射的属性名称-名称 */
            static PROPERTY_NAME_NAME: string = "Name";
            /** 获取-名称 */
            get name(): string {
                return this.getProperty<string>(CostStructure.PROPERTY_NAME_NAME);
            }
            /** 设置-名称 */
            set name(value: string) {
                this.setProperty(CostStructure.PROPERTY_NAME_NAME, value);
            }

            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string = "Status";
            /** 获取-状态 */
            get status(): emCostStatus {
                return this.getProperty<emCostStatus>(CostStructure.PROPERTY_STATUS_NAME);
            }
            /** 设置-状态 */
            set status(value: emCostStatus) {
                this.setProperty(CostStructure.PROPERTY_STATUS_NAME, value);
            }

            /** 映射的属性名称-取消 */
            static PROPERTY_CANCELED_NAME: string = "Canceled";
            /** 获取-取消 */
            get canceled(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(CostStructure.PROPERTY_CANCELED_NAME);
            }
            /** 设置-取消 */
            set canceled(value: ibas.emYesNo) {
                this.setProperty(CostStructure.PROPERTY_CANCELED_NAME, value);
            }

            /** 映射的属性名称-起始日期 */
            static PROPERTY_STARTDATE_NAME: string = "StartDate";
            /** 获取-起始日期 */
            get startDate(): Date {
                return this.getProperty<Date>(CostStructure.PROPERTY_STARTDATE_NAME);
            }
            /** 设置-起始日期 */
            set startDate(value: Date) {
                this.setProperty(CostStructure.PROPERTY_STARTDATE_NAME, value);
            }

            /** 映射的属性名称-结束日期 */
            static PROPERTY_ENDDATE_NAME: string = "EndDate";
            /** 获取-结束日期 */
            get endDate(): Date {
                return this.getProperty<Date>(CostStructure.PROPERTY_ENDDATE_NAME);
            }
            /** 设置-结束日期 */
            set endDate(value: Date) {
                this.setProperty(CostStructure.PROPERTY_ENDDATE_NAME, value);
            }


            /** 映射的属性名称-预算金额 */
            static PROPERTY_BUDGET_NAME: string = "Budget";
            /** 获取-预算金额 */
            get budget(): number {
                return this.getProperty<number>(CostStructure.PROPERTY_BUDGET_NAME);
            }
            /** 设置-预算金额 */
            set budget(value: number) {
                this.setProperty(CostStructure.PROPERTY_BUDGET_NAME, value);
            }

            /** 映射的属性名称-已发生金额 */
            static PROPERTY_INCURRED_NAME: string = "Incurred";
            /** 获取-已发生金额 */
            get incurred(): number {
                return this.getProperty<number>(CostStructure.PROPERTY_INCURRED_NAME);
            }
            /** 设置-已发生金额 */
            set incurred(value: number) {
                this.setProperty(CostStructure.PROPERTY_INCURRED_NAME, value);
            }

            /** 映射的属性名称-已锁定金额 */
            static PROPERTY_LOCKED_NAME: string = "Locked";
            /** 获取-已锁定金额 */
            get locked(): number {
                return this.getProperty<number>(CostStructure.PROPERTY_LOCKED_NAME);
            }
            /** 设置-已锁定金额 */
            set locked(value: number) {
                this.setProperty(CostStructure.PROPERTY_LOCKED_NAME, value);
            }

            /** 映射的属性名称-货币 */
            static PROPERTY_CURRENCY_NAME: string = "Currency";
            /** 获取-货币 */
            get currency(): string {
                return this.getProperty<string>(CostStructureNode.PROPERTY_CURRENCY_NAME);
            }
            /** 设置-货币 */
            set currency(value: string) {
                this.setProperty(CostStructureNode.PROPERTY_CURRENCY_NAME, value);
            }
            /** 映射的属性名称-数据所有者 */
            static PROPERTY_DATAOWNER_NAME: string = "DataOwner";
            /** 获取-数据所有者 */
            get dataOwner(): number {
                return this.getProperty<number>(CostStructure.PROPERTY_DATAOWNER_NAME);
            }
            /** 设置-数据所有者 */
            set dataOwner(value: number) {
                this.setProperty(CostStructure.PROPERTY_DATAOWNER_NAME, value);
            }

            /** 映射的属性名称-数据所属组织 */
            static PROPERTY_ORGANIZATION_NAME: string = "Organization";
            /** 获取-数据所属组织 */
            get organization(): string {
                return this.getProperty<string>(CostStructure.PROPERTY_ORGANIZATION_NAME);
            }
            /** 设置-数据所属组织 */
            set organization(value: string) {
                this.setProperty(CostStructure.PROPERTY_ORGANIZATION_NAME, value);
            }

            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string = "Remarks";
            /** 获取-备注 */
            get remarks(): string {
                return this.getProperty<string>(CostStructure.PROPERTY_REMARKS_NAME);
            }
            /** 设置-备注 */
            set remarks(value: string) {
                this.setProperty(CostStructure.PROPERTY_REMARKS_NAME, value);
            }


            /** 映射的属性名称-费用结构-节点集合 */
            static PROPERTY_COSTSTRUCTURENODES_NAME: string = "CostStructureNodes";
            /** 获取-费用结构-节点集合 */
            get costStructureNodes(): CostStructureNodes {
                return this.getProperty<CostStructureNodes>(CostStructure.PROPERTY_COSTSTRUCTURENODES_NAME);
            }
            /** 设置-费用结构-节点集合 */
            set costStructureNodes(value: CostStructureNodes) {
                this.setProperty(CostStructure.PROPERTY_COSTSTRUCTURENODES_NAME, value);
            }

            /** 初始化数据 */
            protected init(): void {
                this.costStructureNodes = new CostStructureNodes(this);
                this.objectCode = ibas.config.applyVariables(CostStructure.BUSINESS_OBJECT_CODE);
                this.entityType = emEntityType.PROJECT;
                this.status = bo.emCostStatus.OPEN;
                this.currency = ibas.config.get(ibas.CONFIG_ITEM_DEFAULT_CURRENCY);
                this.budget = 0;
                this.locked = 0;
                this.incurred = 0;
            }

            protected registerRules(): ibas.IBusinessRule[] {
                return [
                    // 项目预算 = 合计项目行 预算
                    new ibas.BusinessRuleSumElements(
                        CostStructure.PROPERTY_BUDGET_NAME, CostStructureNode.PROPERTY_COSTSTRUCTURENODES_NAME, CostStructureNode.PROPERTY_BUDGET_NAME),
                    // 项目锁定 = 合计项目行 锁定
                    new ibas.BusinessRuleSumElements(
                        CostStructure.PROPERTY_LOCKED_NAME, CostStructureNode.PROPERTY_COSTSTRUCTURENODES_NAME, CostStructureNode.PROPERTY_LOCKED_NAME),
                    // 项目占用 = 合计项目行 占用
                    new ibas.BusinessRuleSumElements(
                        CostStructure.PROPERTY_INCURRED_NAME, CostStructureNode.PROPERTY_COSTSTRUCTURENODES_NAME, CostStructureNode.PROPERTY_INCURRED_NAME),
                ];
            }
            /** 重置 */
            reset(): void {
                super.reset();
                this.status = bo.emCostStatus.OPEN;
                this.budget = 0;
                this.locked = 0;
                this.incurred = 0;
            }
            /** 转换之前 */
            beforeConvert(): void { }
            /** 数据解析后 */
            afterParsing(): void {
                // 计算部分业务逻辑
                for (let rule of ibas.businessRulesManager.getRules(ibas.objects.typeOf(this))) {
                    if (rule instanceof ibas.BusinessRuleSumElements) {
                        rule.execute(this);
                    }
                }
            }
        }

        /** 费用结构-节点 集合 */
        export class CostStructureNodes extends ibas.BusinessObjects<CostStructureNode, CostStructure | CostStructureNode> implements ICostStructureNodes {
            /** 创建并添加子项 */
            create(): CostStructureNode {
                let item: CostStructureNode = new CostStructureNode();
                this.add(item);
                return item;
            }
            protected afterAdd(item: CostStructureNode): void {
                if (this.parent instanceof CostStructure) {
                    item.parentId = -1;
                } else if (this.parent instanceof CostStructureNode) {
                    item.parentId = this.parent.lineId;
                    item.currency = this.parent.currency;
                }
            }
        }

        /** 费用结构-节点 */
        export class CostStructureNode extends ibas.BOSimpleLine<CostStructureNode> implements ICostStructureNode {
            /** 构造函数 */
            constructor() {
                super();
            }
            /** 映射的属性名称-对象编号 */
            static PROPERTY_OBJECTKEY_NAME: string = "ObjectKey";
            /** 获取-对象编号 */
            get objectKey(): number {
                return this.getProperty<number>(CostStructureNode.PROPERTY_OBJECTKEY_NAME);
            }
            /** 设置-对象编号 */
            set objectKey(value: number) {
                this.setProperty(CostStructureNode.PROPERTY_OBJECTKEY_NAME, value);
            }

            /** 映射的属性名称-对象行号 */
            static PROPERTY_LINEID_NAME: string = "LineId";
            /** 获取-对象行号 */
            get lineId(): number {
                return this.getProperty<number>(CostStructureNode.PROPERTY_LINEID_NAME);
            }
            /** 设置-对象行号 */
            set lineId(value: number) {
                this.setProperty(CostStructureNode.PROPERTY_LINEID_NAME, value);
            }

            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string = "ObjectCode";
            /** 获取-对象类型 */
            get objectCode(): string {
                return this.getProperty<string>(CostStructureNode.PROPERTY_OBJECTCODE_NAME);
            }
            /** 设置-对象类型 */
            set objectCode(value: string) {
                this.setProperty(CostStructureNode.PROPERTY_OBJECTCODE_NAME, value);
            }

            /** 映射的属性名称-实例号 */
            static PROPERTY_LOGINST_NAME: string = "LogInst";
            /** 获取-实例号 */
            get logInst(): number {
                return this.getProperty<number>(CostStructureNode.PROPERTY_LOGINST_NAME);
            }
            /** 设置-实例号 */
            set logInst(value: number) {
                this.setProperty(CostStructureNode.PROPERTY_LOGINST_NAME, value);
            }

            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string = "DataSource";
            /** 获取-数据源 */
            get dataSource(): string {
                return this.getProperty<string>(CostStructureNode.PROPERTY_DATASOURCE_NAME);
            }
            /** 设置-数据源 */
            set dataSource(value: string) {
                this.setProperty(CostStructureNode.PROPERTY_DATASOURCE_NAME, value);
            }

            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string = "CreateDate";
            /** 获取-创建日期 */
            get createDate(): Date {
                return this.getProperty<Date>(CostStructureNode.PROPERTY_CREATEDATE_NAME);
            }
            /** 设置-创建日期 */
            set createDate(value: Date) {
                this.setProperty(CostStructureNode.PROPERTY_CREATEDATE_NAME, value);
            }

            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string = "CreateTime";
            /** 获取-创建时间 */
            get createTime(): number {
                return this.getProperty<number>(CostStructureNode.PROPERTY_CREATETIME_NAME);
            }
            /** 设置-创建时间 */
            set createTime(value: number) {
                this.setProperty(CostStructureNode.PROPERTY_CREATETIME_NAME, value);
            }

            /** 映射的属性名称-更新日期 */
            static PROPERTY_UPDATEDATE_NAME: string = "UpdateDate";
            /** 获取-更新日期 */
            get updateDate(): Date {
                return this.getProperty<Date>(CostStructureNode.PROPERTY_UPDATEDATE_NAME);
            }
            /** 设置-更新日期 */
            set updateDate(value: Date) {
                this.setProperty(CostStructureNode.PROPERTY_UPDATEDATE_NAME, value);
            }

            /** 映射的属性名称-更新时间 */
            static PROPERTY_UPDATETIME_NAME: string = "UpdateTime";
            /** 获取-更新时间 */
            get updateTime(): number {
                return this.getProperty<number>(CostStructureNode.PROPERTY_UPDATETIME_NAME);
            }
            /** 设置-更新时间 */
            set updateTime(value: number) {
                this.setProperty(CostStructureNode.PROPERTY_UPDATETIME_NAME, value);
            }

            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string = "CreateUserSign";
            /** 获取-创建用户 */
            get createUserSign(): number {
                return this.getProperty<number>(CostStructureNode.PROPERTY_CREATEUSERSIGN_NAME);
            }
            /** 设置-创建用户 */
            set createUserSign(value: number) {
                this.setProperty(CostStructureNode.PROPERTY_CREATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-更新用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string = "UpdateUserSign";
            /** 获取-更新用户 */
            get updateUserSign(): number {
                return this.getProperty<number>(CostStructureNode.PROPERTY_UPDATEUSERSIGN_NAME);
            }
            /** 设置-更新用户 */
            set updateUserSign(value: number) {
                this.setProperty(CostStructureNode.PROPERTY_UPDATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string = "CreateActionId";
            /** 获取-创建动作标识 */
            get createActionId(): string {
                return this.getProperty<string>(CostStructureNode.PROPERTY_CREATEACTIONID_NAME);
            }
            /** 设置-创建动作标识 */
            set createActionId(value: string) {
                this.setProperty(CostStructureNode.PROPERTY_CREATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string = "UpdateActionId";
            /** 获取-更新动作标识 */
            get updateActionId(): string {
                return this.getProperty<string>(CostStructureNode.PROPERTY_UPDATEACTIONID_NAME);
            }
            /** 设置-更新动作标识 */
            set updateActionId(value: string) {
                this.setProperty(CostStructureNode.PROPERTY_UPDATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-父项 */
            static PROPERTY_PARENTID_NAME: string = "ParentId";
            /** 获取-父项 */
            get parentId(): number {
                return this.getProperty<number>(CostStructureNode.PROPERTY_PARENTID_NAME);
            }
            /** 设置-父项 */
            set parentId(value: number) {
                this.setProperty(CostStructureNode.PROPERTY_PARENTID_NAME, value);
            }

            /** 映射的属性名称-顺序 */
            static PROPERTY_VISORDER_NAME: string = "VisOrder";
            /** 获取-顺序 */
            get visOrder(): number {
                return this.getProperty<number>(CostStructureNode.PROPERTY_VISORDER_NAME);
            }
            /** 设置-顺序 */
            set visOrder(value: number) {
                this.setProperty(CostStructureNode.PROPERTY_VISORDER_NAME, value);
            }

            /** 映射的属性名称-标识 */
            static PROPERTY_SIGN_NAME: string = "Sign";
            /** 获取-标识 */
            get sign(): string {
                return this.getProperty<string>(CostStructureNode.PROPERTY_SIGN_NAME);
            }
            /** 设置-标识 */
            set sign(value: string) {
                this.setProperty(CostStructureNode.PROPERTY_SIGN_NAME, value);
            }

            /** 映射的属性名称-名称 */
            static PROPERTY_NAME_NAME: string = "Name";
            /** 获取-名称 */
            get name(): string {
                return this.getProperty<string>(CostStructureNode.PROPERTY_NAME_NAME);
            }
            /** 设置-名称 */
            set name(value: string) {
                this.setProperty(CostStructureNode.PROPERTY_NAME_NAME, value);
            }

            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string = "Status";
            /** 获取-状态 */
            get status(): emCostStatus {
                return this.getProperty<emCostStatus>(CostStructureNode.PROPERTY_STATUS_NAME);
            }
            /** 设置-状态 */
            set status(value: emCostStatus) {
                this.setProperty(CostStructureNode.PROPERTY_STATUS_NAME, value);
            }

            /** 映射的属性名称-预算金额 */
            static PROPERTY_BUDGET_NAME: string = "Budget";
            /** 获取-预算金额 */
            get budget(): number {
                return this.getProperty<number>(CostStructureNode.PROPERTY_BUDGET_NAME);
            }
            /** 设置-预算金额 */
            set budget(value: number) {
                this.setProperty(CostStructureNode.PROPERTY_BUDGET_NAME, value);
            }

            /** 映射的属性名称-货币 */
            static PROPERTY_CURRENCY_NAME: string = "Currency";
            /** 获取-货币 */
            get currency(): string {
                return this.getProperty<string>(CostStructureNode.PROPERTY_CURRENCY_NAME);
            }
            /** 设置-货币 */
            set currency(value: string) {
                this.setProperty(CostStructureNode.PROPERTY_CURRENCY_NAME, value);
            }

            /** 映射的属性名称-已发生金额 */
            static PROPERTY_INCURRED_NAME: string = "Incurred";
            /** 获取-已发生金额 */
            get incurred(): number {
                return this.getProperty<number>(CostStructureNode.PROPERTY_INCURRED_NAME);
            }
            /** 设置-已发生金额 */
            set incurred(value: number) {
                this.setProperty(CostStructureNode.PROPERTY_INCURRED_NAME, value);
            }

            /** 映射的属性名称-已锁定金额 */
            static PROPERTY_LOCKED_NAME: string = "Locked";
            /** 获取-已锁定金额 */
            get locked(): number {
                return this.getProperty<number>(CostStructureNode.PROPERTY_LOCKED_NAME);
            }
            /** 设置-已锁定金额 */
            set locked(value: number) {
                this.setProperty(CostStructureNode.PROPERTY_LOCKED_NAME, value);
            }

            /** 映射的属性名称-阻止超预算 */
            static PROPERTY_PREVENTOVER_NAME: string = "PreventOver";
            /** 获取-阻止超预算 */
            get preventOver(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(CostStructureNode.PROPERTY_PREVENTOVER_NAME);
            }
            /** 设置-阻止超预算 */
            set preventOver(value: ibas.emYesNo) {
                this.setProperty(CostStructureNode.PROPERTY_PREVENTOVER_NAME, value);
            }

            /** 映射的属性名称-限制费用项目 */
            static PROPERTY_RESTRICTEDITEM_NAME: string = "RestrictedItem";
            /** 获取-限制费用项目 */
            get restrictedItem(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(CostStructureNode.PROPERTY_RESTRICTEDITEM_NAME);
            }
            /** 设置-限制费用项目 */
            set restrictedItem(value: ibas.emYesNo) {
                this.setProperty(CostStructureNode.PROPERTY_RESTRICTEDITEM_NAME, value);
            }

            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string = "Remarks";
            /** 获取-备注 */
            get remarks(): string {
                return this.getProperty<string>(CostStructureNode.PROPERTY_REMARKS_NAME);
            }
            /** 设置-备注 */
            set remarks(value: string) {
                this.setProperty(CostStructureNode.PROPERTY_REMARKS_NAME, value);
            }


            /** 映射的属性名称-费用结构-节点项目集合 */
            static PROPERTY_COSTSTRUCTURENODEITEMS_NAME: string = "CostStructureNodeItems";
            /** 获取-费用结构-节点项目集合 */
            get costStructureNodeItems(): CostStructureNodeItems {
                return this.getProperty<CostStructureNodeItems>(CostStructureNode.PROPERTY_COSTSTRUCTURENODEITEMS_NAME);
            }
            /** 设置-费用结构-节点项目集合 */
            set costStructureNodeItems(value: CostStructureNodeItems) {
                this.setProperty(CostStructureNode.PROPERTY_COSTSTRUCTURENODEITEMS_NAME, value);
            }

            /** 映射的属性名称-费用结构-节点集合 */
            static PROPERTY_COSTSTRUCTURENODES_NAME: string = "CostStructureNodes";
            /** 获取-费用结构-节点集合 */
            get costStructureNodes(): CostStructureNodes {
                return this.getProperty<CostStructureNodes>(CostStructure.PROPERTY_COSTSTRUCTURENODES_NAME);
            }
            /** 设置-费用结构-节点集合 */
            set costStructureNodes(value: CostStructureNodes) {
                this.setProperty(CostStructure.PROPERTY_COSTSTRUCTURENODES_NAME, value);
            }

            /** 初始化数据 */
            protected init(): void {
                this.costStructureNodes = new CostStructureNodes(this);
                this.costStructureNodeItems = new CostStructureNodeItems(this);
                this.status = bo.emCostStatus.OPEN;
                this.currency = ibas.config.get(ibas.CONFIG_ITEM_DEFAULT_CURRENCY);
                this.budget = 0;
                this.locked = 0;
                this.incurred = 0;
            }

            /** 映射的属性名称-项目合计 */
            static PROPERTY_BUDGET_ITEMTOTAL_NAME: string = "BudgetItemTotal";
            /** 获取-项目合计-预算 */
            get budgetItemTotal(): number {
                return this.getProperty<number>(CostStructureNode.PROPERTY_BUDGET_ITEMTOTAL_NAME);
            }
            /** 设置-项目合计-预算 */
            set budgetItemTotal(value: number) {
                this.setProperty(CostStructureNode.PROPERTY_BUDGET_ITEMTOTAL_NAME, value);
            }

            /** 映射的属性名称-节点合计 */
            static PROPERTY_BUDGET_NODETOTAL_NAME: string = "BudgetNodeTotal";
            /** 获取-节点合计-预算 */
            get budgetNodeTotal(): number {
                return this.getProperty<number>(CostStructureNode.PROPERTY_BUDGET_NODETOTAL_NAME);
            }
            /** 设置-节点合计-预算 */
            set budgetNodeTotal(value: number) {
                this.setProperty(CostStructureNode.PROPERTY_BUDGET_NODETOTAL_NAME, value);
            }

            /** 映射的属性名称-项目合计 */
            static PROPERTY_LOCKED_ITEMTOTAL_NAME: string = "LockedItemTotal";
            /** 获取-项目合计-锁定 */
            get lockedItemTotal(): number {
                return this.getProperty<number>(CostStructureNode.PROPERTY_LOCKED_ITEMTOTAL_NAME);
            }
            /** 设置-项目合计-锁定 */
            set lockedItemTotal(value: number) {
                this.setProperty(CostStructureNode.PROPERTY_LOCKED_ITEMTOTAL_NAME, value);
            }

            /** 映射的属性名称-节点合计 */
            static PROPERTY_LOCKED_NODETOTAL_NAME: string = "LockedNodeTotal";
            /** 获取-节点合计-锁定 */
            get lockedNodeTotal(): number {
                return this.getProperty<number>(CostStructureNode.PROPERTY_LOCKED_NODETOTAL_NAME);
            }
            /** 设置-节点合计-锁定 */
            set lockedNodeTotal(value: number) {
                this.setProperty(CostStructureNode.PROPERTY_LOCKED_NODETOTAL_NAME, value);
            }

            /** 映射的属性名称-项目合计 */
            static PROPERTY_INCURRED_ITEMTOTAL_NAME: string = "IncurredItemTotal";
            /** 获取-项目合计-占用 */
            get incurredItemTotal(): number {
                return this.getProperty<number>(CostStructureNode.PROPERTY_INCURRED_ITEMTOTAL_NAME);
            }
            /** 设置-项目合计-占用 */
            set incurredItemTotal(value: number) {
                this.setProperty(CostStructureNode.PROPERTY_INCURRED_ITEMTOTAL_NAME, value);
            }

            /** 映射的属性名称-节点合计 */
            static PROPERTY_INCURRED_NODETOTAL_NAME: string = "IncurredNodeTotal";
            /** 获取-节点合计-占用 */
            get incurredNodeTotal(): number {
                return this.getProperty<number>(CostStructureNode.PROPERTY_INCURRED_NODETOTAL_NAME);
            }
            /** 设置-节点合计-占用 */
            set incurredNodeTotal(value: number) {
                this.setProperty(CostStructureNode.PROPERTY_INCURRED_NODETOTAL_NAME, value);
            }

            protected registerRules(): ibas.IBusinessRule[] {
                return [
                    // 项目预算 = 合计项目行 预算
                    new ibas.BusinessRuleSumElements(
                        CostStructureNode.PROPERTY_BUDGET_ITEMTOTAL_NAME, CostStructureNode.PROPERTY_COSTSTRUCTURENODEITEMS_NAME, CostStructureNodeItem.PROPERTY_BUDGET_NAME),
                    // 节点预算 = 合计节点行 预算
                    new ibas.BusinessRuleSumElements(
                        CostStructureNode.PROPERTY_BUDGET_NODETOTAL_NAME, CostStructureNode.PROPERTY_COSTSTRUCTURENODES_NAME, CostStructureNode.PROPERTY_BUDGET_NAME),
                    // 预算 = 项目预算 + 节点预算
                    new ibas.BusinessRuleSummation(
                        CostStructureNode.PROPERTY_BUDGET_NAME, CostStructureNode.PROPERTY_BUDGET_ITEMTOTAL_NAME, CostStructureNode.PROPERTY_BUDGET_NODETOTAL_NAME),

                    // 项目锁定 = 合计项目行 锁定
                    new ibas.BusinessRuleSumElements(
                        CostStructureNode.PROPERTY_LOCKED_ITEMTOTAL_NAME, CostStructureNode.PROPERTY_COSTSTRUCTURENODEITEMS_NAME, CostStructureNodeItem.PROPERTY_LOCKED_NAME),
                    // 节点锁定 = 合计节点行 锁定
                    new ibas.BusinessRuleSumElements(
                        CostStructureNode.PROPERTY_LOCKED_NODETOTAL_NAME, CostStructureNode.PROPERTY_COSTSTRUCTURENODES_NAME, CostStructureNode.PROPERTY_LOCKED_NAME),
                    // 锁定 = 项目锁定 + 节点锁定
                    new ibas.BusinessRuleSummation(
                        CostStructureNode.PROPERTY_LOCKED_NAME, CostStructureNode.PROPERTY_LOCKED_ITEMTOTAL_NAME, CostStructureNode.PROPERTY_LOCKED_NODETOTAL_NAME),

                    // 项目占用 = 合计项目行 占用
                    new ibas.BusinessRuleSumElements(
                        CostStructureNode.PROPERTY_INCURRED_ITEMTOTAL_NAME, CostStructureNode.PROPERTY_COSTSTRUCTURENODEITEMS_NAME, CostStructureNodeItem.PROPERTY_INCURRED_NAME),
                    // 节点占用 = 合计节点行 占用
                    new ibas.BusinessRuleSumElements(
                        CostStructureNode.PROPERTY_INCURRED_NODETOTAL_NAME, CostStructureNode.PROPERTY_COSTSTRUCTURENODES_NAME, CostStructureNode.PROPERTY_INCURRED_NAME),
                    // 占用 = 项目占用 + 节点占用
                    new ibas.BusinessRuleSummation(
                        CostStructureNode.PROPERTY_INCURRED_NAME, CostStructureNode.PROPERTY_INCURRED_ITEMTOTAL_NAME, CostStructureNode.PROPERTY_INCURRED_NODETOTAL_NAME),
                ];
            }
            /** 重置 */
            reset(): void {
                super.reset();
                this.status = bo.emCostStatus.OPEN;
                this.budgetNodeTotal = 0;
                this.budgetItemTotal = 0;
                this.lockedNodeTotal = 0;
                this.lockedItemTotal = 0;
                this.incurredNodeTotal = 0;
                this.incurredItemTotal = 0;
                this.budget = 0;
                this.locked = 0;
                this.incurred = 0;
            }
            /** 转换之前 */
            beforeConvert(): void { }
            /** 数据解析后 */
            afterParsing(): void {
                // 计算部分业务逻辑
                for (let rule of ibas.businessRulesManager.getRules(ibas.objects.typeOf(this))) {
                    if (rule instanceof ibas.BusinessRuleSumElements) {
                        rule.execute(this);
                    }
                }
            }
        }

        /** 费用结构-节点项目 集合 */
        export class CostStructureNodeItems extends ibas.BusinessObjects<CostStructureNodeItem, CostStructureNode> implements ICostStructureNodeItems {
            /** 创建并添加子项 */
            create(): CostStructureNodeItem {
                let item: CostStructureNodeItem = new CostStructureNodeItem();
                this.add(item);
                return item;
            }

            protected afterAdd(item: CostStructureNodeItem): void {
                item.currency = this.parent?.currency;
            }
        }
        /** 费用结构-节点项目 */
        export class CostStructureNodeItem extends ibas.BOSimpleLine<CostStructureNodeItem> implements ICostStructureNodeItem {
            /** 构造函数 */
            constructor() {
                super();
            }
            /** 映射的属性名称-对象编号 */
            static PROPERTY_OBJECTKEY_NAME: string = "ObjectKey";
            /** 获取-对象编号 */
            get objectKey(): number {
                return this.getProperty<number>(CostStructureNodeItem.PROPERTY_OBJECTKEY_NAME);
            }
            /** 设置-对象编号 */
            set objectKey(value: number) {
                this.setProperty(CostStructureNodeItem.PROPERTY_OBJECTKEY_NAME, value);
            }

            /** 映射的属性名称-对象行号 */
            static PROPERTY_LINEID_NAME: string = "LineId";
            /** 获取-对象行号 */
            get lineId(): number {
                return this.getProperty<number>(CostStructureNodeItem.PROPERTY_LINEID_NAME);
            }
            /** 设置-对象行号 */
            set lineId(value: number) {
                this.setProperty(CostStructureNodeItem.PROPERTY_LINEID_NAME, value);
            }

            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string = "ObjectCode";
            /** 获取-对象类型 */
            get objectCode(): string {
                return this.getProperty<string>(CostStructureNodeItem.PROPERTY_OBJECTCODE_NAME);
            }
            /** 设置-对象类型 */
            set objectCode(value: string) {
                this.setProperty(CostStructureNodeItem.PROPERTY_OBJECTCODE_NAME, value);
            }

            /** 映射的属性名称-实例号 */
            static PROPERTY_LOGINST_NAME: string = "LogInst";
            /** 获取-实例号 */
            get logInst(): number {
                return this.getProperty<number>(CostStructureNodeItem.PROPERTY_LOGINST_NAME);
            }
            /** 设置-实例号 */
            set logInst(value: number) {
                this.setProperty(CostStructureNodeItem.PROPERTY_LOGINST_NAME, value);
            }

            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string = "DataSource";
            /** 获取-数据源 */
            get dataSource(): string {
                return this.getProperty<string>(CostStructureNodeItem.PROPERTY_DATASOURCE_NAME);
            }
            /** 设置-数据源 */
            set dataSource(value: string) {
                this.setProperty(CostStructureNodeItem.PROPERTY_DATASOURCE_NAME, value);
            }

            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string = "CreateDate";
            /** 获取-创建日期 */
            get createDate(): Date {
                return this.getProperty<Date>(CostStructureNodeItem.PROPERTY_CREATEDATE_NAME);
            }
            /** 设置-创建日期 */
            set createDate(value: Date) {
                this.setProperty(CostStructureNodeItem.PROPERTY_CREATEDATE_NAME, value);
            }

            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string = "CreateTime";
            /** 获取-创建时间 */
            get createTime(): number {
                return this.getProperty<number>(CostStructureNodeItem.PROPERTY_CREATETIME_NAME);
            }
            /** 设置-创建时间 */
            set createTime(value: number) {
                this.setProperty(CostStructureNodeItem.PROPERTY_CREATETIME_NAME, value);
            }

            /** 映射的属性名称-更新日期 */
            static PROPERTY_UPDATEDATE_NAME: string = "UpdateDate";
            /** 获取-更新日期 */
            get updateDate(): Date {
                return this.getProperty<Date>(CostStructureNodeItem.PROPERTY_UPDATEDATE_NAME);
            }
            /** 设置-更新日期 */
            set updateDate(value: Date) {
                this.setProperty(CostStructureNodeItem.PROPERTY_UPDATEDATE_NAME, value);
            }

            /** 映射的属性名称-更新时间 */
            static PROPERTY_UPDATETIME_NAME: string = "UpdateTime";
            /** 获取-更新时间 */
            get updateTime(): number {
                return this.getProperty<number>(CostStructureNodeItem.PROPERTY_UPDATETIME_NAME);
            }
            /** 设置-更新时间 */
            set updateTime(value: number) {
                this.setProperty(CostStructureNodeItem.PROPERTY_UPDATETIME_NAME, value);
            }

            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string = "CreateUserSign";
            /** 获取-创建用户 */
            get createUserSign(): number {
                return this.getProperty<number>(CostStructureNodeItem.PROPERTY_CREATEUSERSIGN_NAME);
            }
            /** 设置-创建用户 */
            set createUserSign(value: number) {
                this.setProperty(CostStructureNodeItem.PROPERTY_CREATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-更新用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string = "UpdateUserSign";
            /** 获取-更新用户 */
            get updateUserSign(): number {
                return this.getProperty<number>(CostStructureNodeItem.PROPERTY_UPDATEUSERSIGN_NAME);
            }
            /** 设置-更新用户 */
            set updateUserSign(value: number) {
                this.setProperty(CostStructureNodeItem.PROPERTY_UPDATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string = "CreateActionId";
            /** 获取-创建动作标识 */
            get createActionId(): string {
                return this.getProperty<string>(CostStructureNodeItem.PROPERTY_CREATEACTIONID_NAME);
            }
            /** 设置-创建动作标识 */
            set createActionId(value: string) {
                this.setProperty(CostStructureNodeItem.PROPERTY_CREATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string = "UpdateActionId";
            /** 获取-更新动作标识 */
            get updateActionId(): string {
                return this.getProperty<string>(CostStructureNodeItem.PROPERTY_UPDATEACTIONID_NAME);
            }
            /** 设置-更新动作标识 */
            set updateActionId(value: string) {
                this.setProperty(CostStructureNodeItem.PROPERTY_UPDATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-节点 */
            static PROPERTY_NODEID_NAME: string = "NodeId";
            /** 获取-节点 */
            get nodeId(): number {
                return this.getProperty<number>(CostStructureNodeItem.PROPERTY_NODEID_NAME);
            }
            /** 设置-节点 */
            set nodeId(value: number) {
                this.setProperty(CostStructureNodeItem.PROPERTY_NODEID_NAME, value);
            }

            /** 映射的属性名称-项目 */
            static PROPERTY_ITEM_NAME: string = "Item";
            /** 获取-项目 */
            get item(): string {
                return this.getProperty<string>(CostStructureNodeItem.PROPERTY_ITEM_NAME);
            }
            /** 设置-项目 */
            set item(value: string) {
                this.setProperty(CostStructureNodeItem.PROPERTY_ITEM_NAME, value);
            }

            /** 映射的属性名称-名称 */
            static PROPERTY_NAME_NAME: string = "Name";
            /** 获取-名称 */
            get name(): string {
                return this.getProperty<string>(CostStructureNodeItem.PROPERTY_NAME_NAME);
            }
            /** 设置-名称 */
            set name(value: string) {
                this.setProperty(CostStructureNodeItem.PROPERTY_NAME_NAME, value);
            }
            /** 映射的属性名称-预算金额 */
            static PROPERTY_BUDGET_NAME: string = "Budget";
            /** 获取-预算金额 */
            get budget(): number {
                return this.getProperty<number>(CostStructureNodeItem.PROPERTY_BUDGET_NAME);
            }
            /** 设置-预算金额 */
            set budget(value: number) {
                this.setProperty(CostStructureNodeItem.PROPERTY_BUDGET_NAME, value);
            }

            /** 映射的属性名称-货币 */
            static PROPERTY_CURRENCY_NAME: string = "Currency";
            /** 获取-货币 */
            get currency(): string {
                return this.getProperty<string>(CostStructureNodeItem.PROPERTY_CURRENCY_NAME);
            }
            /** 设置-货币 */
            set currency(value: string) {
                this.setProperty(CostStructureNodeItem.PROPERTY_CURRENCY_NAME, value);
            }

            /** 映射的属性名称-已发生金额 */
            static PROPERTY_INCURRED_NAME: string = "Incurred";
            /** 获取-已发生金额 */
            get incurred(): number {
                return this.getProperty<number>(CostStructureNodeItem.PROPERTY_INCURRED_NAME);
            }
            /** 设置-已发生金额 */
            set incurred(value: number) {
                this.setProperty(CostStructureNodeItem.PROPERTY_INCURRED_NAME, value);
            }

            /** 映射的属性名称-已锁定金额 */
            static PROPERTY_LOCKED_NAME: string = "Locked";
            /** 获取-已锁定金额 */
            get locked(): number {
                return this.getProperty<number>(CostStructureNodeItem.PROPERTY_LOCKED_NAME);
            }
            /** 设置-已锁定金额 */
            set locked(value: number) {
                this.setProperty(CostStructureNodeItem.PROPERTY_LOCKED_NAME, value);
            }

            /** 映射的属性名称-阻止超预算 */
            static PROPERTY_PREVENTOVER_NAME: string = "PreventOver";
            /** 获取-阻止超预算 */
            get preventOver(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(CostStructureNodeItem.PROPERTY_PREVENTOVER_NAME);
            }
            /** 设置-阻止超预算 */
            set preventOver(value: ibas.emYesNo) {
                this.setProperty(CostStructureNodeItem.PROPERTY_PREVENTOVER_NAME, value);
            }

            /** 映射的属性名称-追加的项目 */
            static PROPERTY_ADDITIONAL_NAME: string = "Additional";
            /** 获取-追加的项目 */
            get additional(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(CostStructureNodeItem.PROPERTY_ADDITIONAL_NAME);
            }
            /** 设置-追加的项目 */
            set additional(value: ibas.emYesNo) {
                this.setProperty(CostStructureNodeItem.PROPERTY_ADDITIONAL_NAME, value);
            }


            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string = "Remarks";
            /** 获取-备注 */
            get remarks(): string {
                return this.getProperty<string>(CostStructureNodeItem.PROPERTY_REMARKS_NAME);
            }
            /** 设置-备注 */
            set remarks(value: string) {
                this.setProperty(CostStructureNodeItem.PROPERTY_REMARKS_NAME, value);
            }

            /** 初始化数据 */
            protected init(): void {
                this.currency = ibas.config.get(ibas.CONFIG_ITEM_DEFAULT_CURRENCY);
                this.budget = 0;
                this.locked = 0;
                this.incurred = 0;
            }
            /** 重置 */
            reset(): void {
                super.reset();
                this.additional = undefined;
                this.budget = 0;
                this.locked = 0;
                this.incurred = 0;
            }
        }

    }
}
