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
        export interface IPostingPeriod extends ibas.IBOSimple {
            /** 名称 */
            name: string;
            /** 类别 */
            category: number;
            /** 序号 */
            order: number;
            /** 状态 */
            status: emPeriodStatus;
            /** 起始日期 */
            startDate: Date;
            /** 结束日期 */
            endDate: Date;
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

            /** 过账期间-项目集合 */
            postingPeriodItems: IPostingPeriodItems;

        }

        /** 过账期间-项目 集合 */
        export interface IPostingPeriodItems extends ibas.IBusinessObjects<IPostingPeriodItem> {
            /** 创建并添加子项 */
            create(): IPostingPeriodItem;
        }

        /** 过账期间-项目 */
        export interface IPostingPeriodItem extends ibas.IBOSimpleLine {
            /** 单据类型 */
            documentType: string;
            /** 状态 */
            status: emPeriodStatus;
            /** 对象编号 */
            objectKey: number;
            /** 对象行号 */
            lineId: number;
            /** 对象类型 */
            objectCode: string;
            /** 实例号 */
            logInst: number;
            /** 数据源 */
            dataSource: string;
            /** 创建日期 */
            createDate: Date;
            /** 创建时间 */
            createTime: number;
            /** 更新日期 */
            updateDate: Date;
            /** 更新时间 */
            updateTime: number;
            /** 创建用户 */
            createUserSign: number;
            /** 更新用户 */
            updateUserSign: number;
            /** 创建动作标识 */
            createActionId: string;
            /** 更新动作标识 */
            updateActionId: string;

        }


    }
}
