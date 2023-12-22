/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace accounting {
    /** 模块-标识 */
    export const CONSOLE_ID: string = "ac70d488-d8fc-478a-af00-c70ef779a50b";
    /** 模块-标识 */
    export const CONSOLE_DATA_ID: string = "ac70d488-d8fc-478a-af00-d66d49cd2dc9";
    /** 模块-名称 */
    export const CONSOLE_NAME: string = "Accounting";
    /** 模块-名称 */
    export const CONSOLE_DATA_NAME: string = "AccountingData";
    /** 模块-版本 */
    export const CONSOLE_VERSION: string = "0.1.0";

    export namespace config {
        /** 配置项目-启用分支 */
        export const CONFIG_ITEM_ENABLE_BRANCH: string = "enableBranch";
        /**
         * 获取此模块配置
         * @param key 配置项
         * @param defalut 默认值
         */
        export function get<T>(key: string, defalut?: T): T {
            return ibas.config.get(ibas.strings.format("{0}|{1}", CONSOLE_ID, key), defalut);
        }
        /**
         * 是否启用分支
         */
        export function isEnableBranch(): boolean {
            return get(CONFIG_ITEM_ENABLE_BRANCH, false);
        }
        /** 配置项目-启用维度 */
        export const CONFIG_ITEM_ENABLE_DIMENSION: string = "enableDimension";
        /**
         * 是否启用维度
         * @param dim 维度
         */
        export function isEnableDimension(dim: app.emDimensionType): boolean {
            return get(ibas.strings.format("{0}|{1}", CONFIG_ITEM_ENABLE_DIMENSION, dim), false);
        }
        /** 配置项目-本币 */
        export const CONFIG_ITEM_LOCAL_CURRENCY: string = "localCurrency";
        /** 配置项目-系统币 */
        export const CONFIG_ITEM_SYSTEM_CURRENCY: string = "systemCurrency";
        /**
         * 获取币种
         * @param type 类型
         */
        export function currency(type: "LOCAL" | "SYSTEM"): string {
            let currency: string;
            if (type === "LOCAL") {
                currency = get(CONFIG_ITEM_LOCAL_CURRENCY);
            } else if (type === "SYSTEM") {
                currency = get(CONFIG_ITEM_SYSTEM_CURRENCY);
            }
            if (ibas.objects.isNull(currency)) {
                currency = ibas.config.get(ibas.CONFIG_ITEM_DEFAULT_CURRENCY);
            }
            return currency;
        }
    }
    export namespace bo {
        /** 业务仓库名称 */
        export const BO_REPOSITORY_ACCOUNTING: string = ibas.strings.format(ibas.MODULE_REPOSITORY_NAME_TEMPLATE, CONSOLE_NAME);
        /** 业务对象编码-期间类型 */
        export const BO_CODE_PERIODCATEGORY: string = "${Company}_AC_CATEGORY";
        /** 业务对象编码-过账期间 */
        export const BO_CODE_POSTINGPERIOD: string = "${Company}_AC_PERIOD";
        /** 业务对象编码-项目 */
        export const BO_CODE_PROJECT: string = "${Company}_AC_PROJECT";
        /** 业务对象编码-维度 */
        export const BO_CODE_DIMENSION: string = "${Company}_AC_DIMENSION";
        /** 业务对象编码-税收组 */
        export const BO_CODE_TAXGROUP: string = "${Company}_AC_TAXGROUP";
        /** 业务对象编码-费用结构 */
        export const BO_CODE_COSTSTRUCTURE: string = "${Company}_AC_COSTSTRU";
        /** 业务对象编码-费用项目 */
        export const BO_CODE_COSTITEM: string = "${Company}_AC_COSTITEM";
        /** 业务对象编码-费用结构节点 */
        export const BO_CODE_COSTSTRUCTURE_NODE: string = "${Company}_AC_COSTSTRUNODE";
        /** 业务对象编码-货币 */
        export const BO_CODE_CURRENCY: string = "${Company}_AC_CURRENCY";
        /** 业务对象编码-科目 */
        export const BO_CODE_ACCOUNT: string = "${Company}_AC_ACCOUNT";
        /** 业务对象编码-分支 */
        export const BO_CODE_BRANCH: string = "${Company}_AC_BRANCH";
        /** 业务对象编码-日记账分录 */
        export const BO_CODE_JOURNALENTRY: string = "${Company}_AC_JOURNALENTRY";
        /** 业务对象编码-分类账 */
        export const BO_CODE_LEDGERACCOUNT: string = "${Company}_AC_LACCOUNT";
        /** 业务对象编码-期间-分类账 */
        export const BO_CODE_PERIODLEDGERACCOUNT: string = "${Company}_AC_PERIODLACCOUNT";
        /** 业务对象编码-分类账条件属性 */
        export const BO_CODE_LEDGERCONDITIONPROPERTY: string = "${Company}_AC_LCONDPTY";
        /** 业务对象编码-银行 */
        export const BO_CODE_BANK: string = "${Company}_AC_BANK";
        /** 业务对象编码-银行账户 */
        export const BO_CODE_BANKACCOUNT: string = "${Company}_AC_BANKACONT";
        /**
         * 期间状态
         */
        export enum emPeriodStatus {
            /** 打开 */
            OPEN,
            /** 关闭 */
            LOCKED,
            /** 结算 */
            CLOSED
        }
        /**
         * 维度源
         */
        export enum emDimensionSource {
            /** 自由文本 */
            TEXT,
            /** 选择服务 */
            CHOOSE_LIST
        }
        /**
         * 税收组类型
         */
        export enum emTaxGroupCategory {
            /** 销项税 */
            OUTPUT,
            /** 进项税 */
            INPUT
        }
        /**
         * 费用状态
         */
        export enum emCostStatus {
            /** 打开 */
            OPEN,
            /** 冻结 */
            FROZEN,
            /** 关闭 */
            CLOSED
        }
        export enum emEntityType {
            /** 组织/部门 */
            ORGANIZATION,
            /** 项目 */
            PROJECT
        }
    }
    export namespace app {
        /**
         * 维度类型
         */
        export enum emDimensionType {
            DIMENSION_1 = "DIM01",
            DIMENSION_2 = "DIM02",
            DIMENSION_3 = "DIM03",
            DIMENSION_4 = "DIM04",
            DIMENSION_5 = "DIM05",
        }
        /**
         * 总账科目条件支持属性
         */
        export enum emLedgerAccountConditionProperty {
            /** 业务对象编码 */
            ObjectCode = "ObjectCode",
            /** 数据所有者 */
            DataOwner = "DataOwner",
            /** 数据所属组织 */
            Organization = "Organization",
            /** 单据类型 */
            OrderType = "OrderType",
            /** 项目 */
            Project = "Project",
            /** 税 */
            Tax = "Tax",
            /** 分支 */
            Branch = "Branch",
            /** 客户 */
            Customer = "Customer",
            /** 供应商 */
            Supplier = "Supplier",
            /** 客户组 */
            CustomerGroup = "CustomerGroup",
            /** 供应商组 */
            SupplierGroup = "SupplierGroup",
            /** 物料 */
            Material = "Material",
            /** 物料组 */
            MaterialGroup = "MaterialGroup",
            /** 仓库 */
            Warehouse = "Warehouse",
            /** 收付款方式 */
            PaymentMethod = "PaymentMethod",
            /** 交易识别码 */
            TradeId = "TradeId"
        }
        /** 维度服务契约 */
        export interface IDimensionDataServiceContract extends ibas.IServiceContract {
            /** 维度类型 */
            type: emDimensionType | string;
        }
        /** 维度服务代理 */
        export class DimensionDataServiceProxy extends ibas.ServiceProxy<IDimensionDataServiceContract> {
        }
        export interface ILedgerAccountSetting {
            /** 分类账 */
            ledger: string;
            /** 条件 */
            conditions: ibas.ICondition[];
            /** 科目 */
            account?: string;
        }
        export interface ILedgerAccountCategory {
            /** 种类 */
            category: string;
            /** 条件 */
            conditions: ibas.ICondition[];
        }
        /** 分类账设置契约 */
        export interface ILedgerAccountSettingContract extends ibas.IServiceContract {
            /** 业务对象 */
            objectCode: string;
            /** 描述 */
            description: string;
            /** 设置内容 */
            settings?: ILedgerAccountSetting[] | ILedgerAccountCategory;
        }
        /** 分类账设置服务代理 */
        export class LedgerAccountSettingServiceProxy extends ibas.ServiceProxy<ILedgerAccountSettingContract> {
        }
        /** 查询条件 */
        export namespace conditions {
            export namespace taxgroup {
                /** 默认查询条件 */
                export function create(category?: bo.emTaxGroupCategory): ibas.IList<ibas.ICondition> {
                    let today: string = ibas.dates.toString(ibas.dates.today(), "yyyy-MM-dd");
                    let conditions: ibas.IList<ibas.ICondition> = new ibas.ArrayList<ibas.ICondition>();
                    let condition: ibas.ICondition;
                    // 激活的
                    condition = new ibas.Condition();
                    condition.alias = bo.TaxGroup.PROPERTY_ACTIVATED_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = ibas.emYesNo.YES.toString();
                    conditions.add(condition);
                    if (!ibas.objects.isNull(category)) {
                        // 类型
                        condition = new ibas.Condition();
                        condition.alias = bo.TaxGroup.PROPERTY_CATEGORY_NAME;
                        condition.operation = ibas.emConditionOperation.EQUAL;
                        condition.value = category.toString();
                        conditions.add(condition);
                    }
                    // 有效日期
                    condition = new ibas.Condition();
                    condition.bracketOpen = 1;
                    condition.alias = bo.TaxGroup.PROPERTY_VALIDDATE_NAME;
                    condition.operation = ibas.emConditionOperation.IS_NULL;
                    conditions.add(condition);
                    condition = new ibas.Condition();
                    condition.relationship = ibas.emConditionRelationship.OR;
                    condition.bracketOpen = 1;
                    condition.alias = bo.TaxGroup.PROPERTY_VALIDDATE_NAME;
                    condition.operation = ibas.emConditionOperation.NOT_NULL;
                    conditions.add(condition);
                    condition = new ibas.Condition();
                    condition.bracketClose = 2;
                    condition.alias = bo.TaxGroup.PROPERTY_VALIDDATE_NAME;
                    condition.operation = ibas.emConditionOperation.LESS_EQUAL;
                    condition.value = today;
                    conditions.add(condition);
                    return conditions;
                }
            }
            export namespace coststructurenode {
                export function create(type: bo.emEntityType, entity: string, date?: Date | string): ibas.IList<ibas.ICondition> {
                    let today: string = ibas.dates.toString(ibas.dates.today(), "yyyy-MM-dd");
                    let condition: ibas.ICondition;
                    let conditions: ibas.IList<ibas.ICondition> = new ibas.ArrayList<ibas.ICondition>();
                    // 类型
                    condition = new ibas.Condition();
                    condition.alias = bo.CostStructure.PROPERTY_ENTITYTYPE_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = type.toString();
                    conditions.add(condition);
                    // 未取消的
                    condition = new ibas.Condition();
                    condition.alias = bo.CostStructure.PROPERTY_CANCELED_NAME;
                    condition.operation = ibas.emConditionOperation.NOT_EQUAL;
                    condition.value = ibas.emYesNo.YES.toString();
                    conditions.add(condition);
                    // 有效的
                    condition = new ibas.Condition();
                    condition.alias = bo.CostStructure.PROPERTY_STATUS_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = bo.emCostStatus.OPEN.toString();
                    conditions.add(condition);
                    // 编码
                    if (!ibas.strings.isEmpty(entity)) {
                        condition = new ibas.Condition();
                        condition.alias = bo.CostStructure.PROPERTY_ENTITYCODE_NAME;
                        condition.operation = ibas.emConditionOperation.EQUAL;
                        condition.value = entity;
                        conditions.add(condition);
                    }
                    // 有效日期
                    if (typeof date === "string") {
                        date = ibas.dates.valueOf(date);
                    }
                    if (date instanceof Date) {
                        condition = new ibas.Condition();
                        condition.bracketOpen = 1;
                        condition.alias = bo.CostStructure.PROPERTY_STARTDATE_NAME;
                        condition.operation = ibas.emConditionOperation.IS_NULL;
                        conditions.add(condition);
                        condition = new ibas.Condition();
                        condition.relationship = ibas.emConditionRelationship.OR;
                        condition.bracketOpen = 1;
                        condition.alias = bo.CostStructure.PROPERTY_STARTDATE_NAME;
                        condition.operation = ibas.emConditionOperation.NOT_NULL;
                        conditions.add(condition);
                        condition = new ibas.Condition();
                        condition.bracketClose = 2;
                        condition.alias = bo.CostStructure.PROPERTY_STARTDATE_NAME;
                        condition.operation = ibas.emConditionOperation.LESS_EQUAL;
                        condition.value = today;
                        conditions.add(condition);
                        // 失效日期
                        condition = new ibas.Condition();
                        condition.bracketOpen = 1;
                        condition.alias = bo.CostStructure.PROPERTY_ENDDATE_NAME;
                        condition.operation = ibas.emConditionOperation.IS_NULL;
                        conditions.add(condition);
                        condition = new ibas.Condition();
                        condition.relationship = ibas.emConditionRelationship.OR;
                        condition.bracketOpen = 1;
                        condition.alias = bo.CostStructure.PROPERTY_ENDDATE_NAME;
                        condition.operation = ibas.emConditionOperation.NOT_NULL;
                        conditions.add(condition);
                        condition = new ibas.Condition();
                        condition.bracketClose = 2;
                        condition.alias = bo.CostStructure.PROPERTY_ENDDATE_NAME;
                        condition.operation = ibas.emConditionOperation.GRATER_EQUAL;
                        condition.value = today;
                        conditions.add(condition);
                    }
                    return conditions;
                }
            }
            export namespace account {
                /** 默认查询条件 */
                export function create(): ibas.IList<ibas.ICondition> {
                    let today: string = ibas.dates.toString(ibas.dates.today(), "yyyy-MM-dd");
                    let condition: ibas.ICondition;
                    let conditions: ibas.IList<ibas.ICondition> = new ibas.ArrayList<ibas.ICondition>();
                    // 激活的
                    condition = new ibas.Condition();
                    condition.bracketOpen = 1;
                    condition.alias = bo.Account.PROPERTY_ACTIVE_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = ibas.emYesNo.YES.toString();
                    conditions.add(condition);
                    // 有效日期
                    condition = new ibas.Condition();
                    condition.bracketOpen = 1;
                    condition.alias = bo.Account.PROPERTY_VALIDDATE_NAME;
                    condition.operation = ibas.emConditionOperation.IS_NULL;
                    conditions.add(condition);
                    condition = new ibas.Condition();
                    condition.relationship = ibas.emConditionRelationship.OR;
                    condition.bracketOpen = 1;
                    condition.alias = bo.Account.PROPERTY_VALIDDATE_NAME;
                    condition.operation = ibas.emConditionOperation.NOT_NULL;
                    conditions.add(condition);
                    condition = new ibas.Condition();
                    condition.bracketClose = 2;
                    condition.alias = bo.Account.PROPERTY_VALIDDATE_NAME;
                    condition.operation = ibas.emConditionOperation.LESS_EQUAL;
                    condition.value = today;
                    conditions.add(condition);
                    // 失效日期
                    condition = new ibas.Condition();
                    condition.bracketOpen = 1;
                    condition.alias = bo.Account.PROPERTY_INVALIDDATE_NAME;
                    condition.operation = ibas.emConditionOperation.IS_NULL;
                    conditions.add(condition);
                    condition = new ibas.Condition();
                    condition.relationship = ibas.emConditionRelationship.OR;
                    condition.bracketOpen = 1;
                    condition.alias = bo.Account.PROPERTY_INVALIDDATE_NAME;
                    condition.operation = ibas.emConditionOperation.NOT_NULL;
                    conditions.add(condition);
                    condition = new ibas.Condition();
                    condition.bracketClose = 3;
                    condition.alias = bo.Account.PROPERTY_INVALIDDATE_NAME;
                    condition.operation = ibas.emConditionOperation.GRATER_EQUAL;
                    condition.value = today;
                    conditions.add(condition);
                    return conditions;
                }
            }
        }
    }
    export namespace taxrate {
        /**
         * 分配税率
         * @param taxCode 税码
         * @param onCompeleted 完成
         */
        export function assign(taxCode: string, onCompeleted: (rate: number) => void): void {
            if (!(onCompeleted instanceof Function)) {
                return;
            }
            if (ibas.strings.isEmpty(taxCode)) {
                onCompeleted(undefined);
            } else {
                gain(undefined, (results) => {
                    for (let item of results) {
                        if (ibas.strings.equals(item.code, taxCode)) {
                            onCompeleted(item.rate);
                            break;
                        }
                    }
                });
            }
        }
        let TAX_GROUPS: Array<bo.ITaxGroup>;
        /**
         * 获取税组
         * @param category 类型
         * @param onCompeleted 完成
         */
        export function gain(category: bo.emTaxGroupCategory, onCompeleted: (tax: { code: string, name: string, rate: number }[]) => void): void {
            if (TAX_GROUPS === undefined) {
                // 未初始化
                TAX_GROUPS = null;
                try {
                    let boReposiorty: bo.IBORepositoryAccounting = ibas.boFactory.create(bo.BO_REPOSITORY_ACCOUNTING);
                    boReposiorty.fetchTaxGroup({
                        criteria: app.conditions.taxgroup.create(),
                        onCompleted: (opRslt) => {
                            TAX_GROUPS = new Array<bo.ITaxGroup>();
                            for (let item of opRslt.resultObjects) {
                                TAX_GROUPS.push(item);
                            }
                            gain(category, onCompeleted);
                        }
                    });
                } catch (error) {
                    TAX_GROUPS = new Array<bo.ITaxGroup>();
                }
            } else if (TAX_GROUPS === null) {
                // 初始化中，过会调用
                setTimeout(() => {
                    gain(category, onCompeleted);
                }, 100);
            } else {
                // 已初始化，从缓存中获取数据
                let results: Array<{ code: string, name: string, rate: number }> = new Array<{ code: string, name: string, rate: number }>();
                for (let item of TAX_GROUPS) {
                    if (category >= 0 && category !== item.category) {
                        continue;
                    }
                    results.push({
                        code: item.code,
                        name: item.name,
                        rate: item.rate
                    });
                }
                if (onCompeleted instanceof Function) {
                    onCompeleted(results);
                }
            }
        }
    }
}
