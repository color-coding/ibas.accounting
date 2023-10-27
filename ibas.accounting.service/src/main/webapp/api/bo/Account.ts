/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace accounting {
    export namespace bo {
        /** 科目 */
        export interface IAccount extends ibas.IBOMasterData {
            /** 编码 */
            code: string;
            /** 名称 */
            name: string;
            /** 外文名称 */
            foreignName: string;
            /** 上级科目 */
            parent: string;
            /** 层级 */
            level: number;
            /** 外部编码 */
            external: string;
            /** 机密 */
            protected: ibas.emYesNo;
            /** 活动科目 */
            active: ibas.emYesNo;
            /** 控制科目 */
            control: ibas.emYesNo;
            /** 现金科目 */
            cash: ibas.emYesNo;
            /** 现金流相关 */
            cashFlowRelevant: ibas.emYesNo;
            /** 生效日期 */
            validDate: Date;
            /** 失效日期 */
            invalidDate: Date;
            /** 余额 */
            balance: number;
            /** 币种 */
            currency: string;
            /** 分支 */
            branch: string;
            /** 对象编号 */
            docEntry: number;
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
            /** 数据源 */
            dataSource: string;
            /** 实例号（版本） */
            logInst: number;
            /** 服务系列 */
            series: number;
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

        }


    }
}
