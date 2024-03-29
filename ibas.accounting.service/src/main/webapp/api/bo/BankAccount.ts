/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace accounting {
    export namespace bo {
        /** 银行账户 */
        export interface IBankAccount extends ibas.IBOMasterData {
            /** 编码 */
            code: string;
            /** 名称 */
            name: string;
            /** 银行 */
            bank: string;
            /** 开户支行 */
            openingBank: string;
            /** 账户类型 */
            accountType: string;
            /** 凭证编号 */
            docEntry: number;
            /** 类型 */
            objectCode: string;
            /** 编号系列 */
            series: number;
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
            /** 数据所有者 */
            dataOwner: number;
            /** 团队成员 */
            teamMembers: string;
            /** 数据所属组织 */
            organization: string;
            /** 已激活的 */
            activated: ibas.emYesNo;
            /** 已引用 */
            referenced: ibas.emYesNo;
            /** 删除的 */
            deleted: ibas.emYesNo;
            /** 分支 */
            branch: string;
            /** 备注 */
            remarks: string;

        }


    }
}
