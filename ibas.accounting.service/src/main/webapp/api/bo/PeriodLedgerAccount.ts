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
        export interface IPeriodLedgerAccount extends ibas.IBOSimple {
            /** 名称 */
            name: string;
            /** 期间 */
            period: number;
            /** 分类 */
            ledger: string;
            /** 序号 */
            order: number;
            /** 激活 */
            activated: ibas.emYesNo;
            /** 科目 */
            account: string;
            /** 设置 */
            settings: string;
            /** 对象编号 */
            objectKey: number;
            /** 对象类型 */
            objectCode: string;
            /** 创建日期 */
            createDate: Date;
            /** 创建时间 */
            createTime: number;
            /** 修改日期 */
            updateDate: Date;
            /** 修改时间 */
            updateTime: number;
            /** 实例号（版本） */
            logInst: number;
            /** 服务系列 */
            series: number;
            /** 数据源 */
            dataSource: string;
            /** 创建用户 */
            createUserSign: number;
            /** 修改用户 */
            updateUserSign: number;
            /** 创建动作标识 */
            createActionId: string;
            /** 更新动作标识 */
            updateActionId: string;
            /** 备注 */
            remarks: string;

            /** 期间-分类账-条件集合 */
            periodLedgerAccountConditions: IPeriodLedgerAccountConditions;

        }

        /** 期间-分类账-条件 集合 */
        export interface IPeriodLedgerAccountConditions extends ibas.IBusinessObjects<IPeriodLedgerAccountCondition> {
            /** 创建并添加子项 */
            create(): IPeriodLedgerAccountCondition;
        }

        /** 期间-分类账-条件 */
        export interface IPeriodLedgerAccountCondition extends ibas.IBOSimpleLine {
            /** 编号 */
            objectKey: number;
            /** 行号 */
            lineId: number;
            /** 对象类型 */
            objectCode: string;
            /** 显示顺序 */
            visOrder: number;
            /** 实例号（版本） */
            logInst: number;
            /** 数据源 */
            dataSource: string;
            /** 创建日期 */
            createDate: Date;
            /** 创建时间 */
            createTime: number;
            /** 修改日期 */
            updateDate: Date;
            /** 修改时间 */
            updateTime: number;
            /** 创建用户 */
            createUserSign: number;
            /** 修改用户 */
            updateUserSign: number;
            /** 创建动作标识 */
            createActionId: string;
            /** 更新动作标识 */
            updateActionId: string;
            /** 开括号 */
            bracketOpen: number;
            /** 关系 */
            relationship: ibas.emConditionRelationship;
            /** 属性 */
            propertyName: string;
            /** 方法 */
            operation: ibas.emConditionOperation;
            /** 值 */
            value: string;
            /** 闭括号 */
            bracketClose: number;
            /** 备注 */
            remarks: string;

        }


    }
}
