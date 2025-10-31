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
        export interface IBranch extends ibas.IBOMasterData {
            /** 编码 */
            code: string;
            /** 名称 */
            name: string;
            /** 外文名称 */
            foreignName: string;
            /** 激活 */
            activated: ibas.emYesNo;
            /** 生效日期 */
            validDate: Date;
            /** 失效日期 */
            invalidDate: Date;
            /** 主要的 */
            main: ibas.emYesNo;
            /** 客户 */
            customer: string;
            /** 供应商 */
            supplier: string;
            /** 仓库 */
            warehouse: string;
            /** 街道 */
            street: string;
            /** 县/区 */
            district: string;
            /** 市 */
            city: string;
            /** 省 */
            province: string;
            /** 国 */
            country: string;
            /** 邮编 */
            zipCode: string;
            /** 国税编号 */
            taxId: string;
            /** 开户银行 */
            bank: string;
            /** 银行账户 */
            bankAccount: string;
            /** 发票抬头 */
            invoiceTitle: string;
            /** 发票地址 */
            invoiceAddress: string;
            /** 发票电话 */
            invoiceTelephone: string;
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
            /** 已引用 */
            referenced: ibas.emYesNo;
            /** 删除的 */
            deleted: ibas.emYesNo;
            /** 备注 */
            remarks: string;

        }


    }
}
