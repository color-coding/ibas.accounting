/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace accounting {
    export namespace bo {
        /** 数据转换者 */
        export class DataConverter extends ibas.DataConverter4j {
            /** 创建业务对象转换者 */
            protected createConverter(): ibas.BOConverter {
                return new BOConverter;
            }
        }

        /** 模块业务对象工厂 */
        export const boFactory: ibas.BOFactory = new ibas.BOFactory();
        /** 业务对象转换者 */
        class BOConverter extends ibas.BOConverter {
            /** 模块对象工厂 */
            protected factory(): ibas.BOFactory {
                return boFactory;
            }

            /**
             * 自定义解析
             * @param data 远程数据
             * @returns 本地数据
             */
            protected customParsing(data: any): ibas.IBusinessObject {
                return data;
            }

            /**
             * 转换数据
             * @param boName 对象名称
             * @param property 属性名称
             * @param value 值
             * @returns 转换的值
             */
            protected convertData(boName: string, property: string, value: any): any {
                if (boName === bo.PostingPeriod.name) {
                    if (property === bo.PostingPeriod.PROPERTY_STATUS_NAME) {
                        return ibas.enums.toString(emPeriodStatus, value);
                    }
                } else if (boName === bo.PeriodCategory.name) {
                    if (property === bo.PeriodCategory.PROPERTY_STATUS_NAME) {
                        return ibas.enums.toString(emPeriodStatus, value);
                    }
                } else if (boName === bo.PostingPeriodItem.name) {
                    if (property === bo.PostingPeriodItem.PROPERTY_STATUS_NAME) {
                        return ibas.enums.toString(emPeriodStatus, value);
                    }
                } else if (boName === bo.Dimension.name) {
                    if (property === bo.Dimension.PROPERTY_SOURCETYPE_NAME) {
                        return ibas.enums.toString(emDimensionSource, value);
                    }
                } else if (boName === bo.TaxGroup.name) {
                    if (property === bo.TaxGroup.PROPERTY_CATEGORY_NAME) {
                        return ibas.enums.toString(emTaxGroupCategory, value);
                    }
                } else if (boName === bo.CostStructure.name) {
                    if (property === bo.CostStructure.PROPERTY_STATUS_NAME) {
                        return ibas.enums.toString(emCostStatus, value);
                    } else if (property === bo.CostStructure.PROPERTY_ENTITYTYPE_NAME) {
                        return ibas.enums.toString(emEntityType, value);
                    }
                } else if (boName === bo.CostStructureNode.name) {
                    if (property === bo.CostStructureNode.PROPERTY_STATUS_NAME) {
                        return ibas.enums.toString(emCostStatus, value);
                    } else if (property === bo.CostStructureNode.PROPERTY_PREVENTOVER_NAME) {
                        return ibas.enums.toString(ibas.emYesNo, value);
                    } else if (property === bo.CostStructureNode.PROPERTY_RESTRICTEDITEM_NAME) {
                        return ibas.enums.toString(ibas.emYesNo, value);
                    }
                } else if (boName === bo.CostStructureNodeItem.name) {
                    if (property === bo.CostStructureNodeItem.PROPERTY_PREVENTOVER_NAME) {
                        return ibas.enums.toString(ibas.emYesNo, value);
                    } else if (property === bo.CostStructureNodeItem.PROPERTY_ADDITIONAL_NAME) {
                        return ibas.enums.toString(ibas.emYesNo, value);
                    }
                } else if (boName === bo.Project.name) {
                    if (property === bo.Project.PROPERTY_STATUS_NAME) {
                        return ibas.enums.toString(ibas.emDocumentStatus, value);
                    }
                } else if (boName === bo.CostItem.name) {
                    if (property === bo.CostItem.PROPERTY_PHANTOM_NAME) {
                        return ibas.enums.toString(ibas.emYesNo, value);
                    }
                }
                return super.convertData(boName, property, value);
            }

            /**
             * 解析数据
             * @param boName 对象名称
             * @param property 属性名称
             * @param value 值
             * @returns 解析的值
             */
            protected parsingData(boName: string, property: string, value: any): any {
                if (boName === bo.PostingPeriod.name) {
                    if (property === bo.PostingPeriod.PROPERTY_STATUS_NAME) {
                        return ibas.enums.valueOf(emPeriodStatus, value);
                    }
                } else if (boName === bo.PeriodCategory.name) {
                    if (property === bo.PeriodCategory.PROPERTY_STATUS_NAME) {
                        return ibas.enums.valueOf(emPeriodStatus, value);
                    }
                } else if (boName === bo.PostingPeriodItem.name) {
                    if (property === bo.PostingPeriodItem.PROPERTY_STATUS_NAME) {
                        return ibas.enums.valueOf(emPeriodStatus, value);
                    }
                } else if (boName === bo.Dimension.name) {
                    if (property === bo.Dimension.PROPERTY_SOURCETYPE_NAME) {
                        return ibas.enums.valueOf(emDimensionSource, value);
                    }
                } else if (boName === bo.TaxGroup.name) {
                    if (property === bo.TaxGroup.PROPERTY_CATEGORY_NAME) {
                        return ibas.enums.valueOf(emTaxGroupCategory, value);
                    }
                } else if (boName === bo.CostStructure.name) {
                    if (property === bo.CostStructure.PROPERTY_STATUS_NAME) {
                        return ibas.enums.valueOf(emCostStatus, value);
                    } else if (property === bo.CostStructure.PROPERTY_ENTITYTYPE_NAME) {
                        return ibas.enums.valueOf(emEntityType, value);
                    }
                } else if (boName === bo.CostStructureNode.name) {
                    if (property === bo.CostStructureNode.PROPERTY_STATUS_NAME) {
                        return ibas.enums.valueOf(emCostStatus, value);
                    } else if (property === bo.CostStructureNode.PROPERTY_PREVENTOVER_NAME) {
                        return ibas.enums.valueOf(ibas.emYesNo, value);
                    } else if (property === bo.CostStructureNode.PROPERTY_RESTRICTEDITEM_NAME) {
                        return ibas.enums.valueOf(ibas.emYesNo, value);
                    }
                } else if (boName === bo.CostStructureNodeItem.name) {
                    if (property === bo.CostStructureNodeItem.PROPERTY_PREVENTOVER_NAME) {
                        return ibas.enums.valueOf(ibas.emYesNo, value);
                    } else if (property === bo.CostStructureNodeItem.PROPERTY_ADDITIONAL_NAME) {
                        return ibas.enums.valueOf(ibas.emYesNo, value);
                    }
                } else if (boName === bo.Project.name) {
                    if (property === bo.Project.PROPERTY_STATUS_NAME) {
                        return ibas.enums.valueOf(ibas.emDocumentStatus, value);
                    }
                } else if (boName === bo.CostItem.name) {
                    if (property === bo.CostItem.PROPERTY_PHANTOM_NAME) {
                        return ibas.enums.valueOf(ibas.emYesNo, value);
                    }
                }
                return super.parsingData(boName, property, value);
            }
        }
    }
}
