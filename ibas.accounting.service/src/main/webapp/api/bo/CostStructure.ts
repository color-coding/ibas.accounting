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
        export interface ICostStructure extends ibas.IBOSimple {
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
            /** 主体类型 */
            entityType: emEntityType;
            /** 主体编码 */
            entityCode: string;
            /** 名称 */
            name: string;
            /** 状态 */
            status: emCostStatus;
            /** 取消 */
            canceled: ibas.emYesNo;
            /** 预算可结转 */
            transferable: ibas.emYesNo;
            /** 起始日期 */
            startDate: Date;
            /** 结束日期 */
            endDate: Date;
            /** 预算金额 */
            budget: number;
            /** 已发生金额 */
            incurred: number;
            /** 已锁定金额 */
            locked: number;
            /** 货币 */
            currency: string;
            /** 数据所有者 */
            dataOwner: number;
            /** 数据所属组织 */
            organization: string;
            /** 备注 */
            remarks: string;

            /** 费用结构-节点集合 */
            costStructureNodes: ICostStructureNodes;

        }

        /** 费用结构-节点 集合 */
        export interface ICostStructureNodes extends ibas.IBusinessObjects<ICostStructureNode> {
            /** 创建并添加子项 */
            create(): ICostStructureNode;
        }

        /** 费用结构-节点 */
        export interface ICostStructureNode extends ibas.IBOSimpleLine {
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
            /** 父项 */
            parentId: number;
            /** 顺序 */
            visOrder: number;
            /** 标识 */
            sign: string;
            /** 名称 */
            name: string;
            /** 状态 */
            status: emCostStatus;
            /** 预算金额 */
            budget: number;
            /** 货币 */
            currency: string;
            /** 已发生金额 */
            incurred: number;
            /** 已锁定金额 */
            locked: number;
            /** 阻止超预算 */
            preventOver: ibas.emYesNo;
            /** 限制费用项目 */
            restrictedItem: ibas.emYesNo;
            /** 备注 */
            remarks: string;

            /** 费用结构-节点项目集合 */
            costStructureNodeItems: ICostStructureNodeItems;
            /** 费用结构-节点集合 */
            costStructureNodes: ICostStructureNodes;

        }

        /** 费用结构-节点项目 集合 */
        export interface ICostStructureNodeItems extends ibas.IBusinessObjects<ICostStructureNodeItem> {
            /** 创建并添加子项 */
            create(): ICostStructureNodeItem;
        }

        /** 费用结构-节点项目 */
        export interface ICostStructureNodeItem extends ibas.IBOSimpleLine {
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
            /** 节点 */
            nodeId: number;
            /** 项目 */
            item: string;
            /** 名称 */
            name: string;
            /** 预算金额 */
            budget: number;
            /** 货币 */
            currency: string;
            /** 已发生金额 */
            incurred: number;
            /** 已锁定金额 */
            locked: number;
            /** 阻止超预算 */
            preventOver: ibas.emYesNo;
            /** 追加的项目 */
            additional: ibas.emYesNo;
            /** 备注 */
            remarks: string;

        }


    }
}
