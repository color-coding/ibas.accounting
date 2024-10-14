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
        export interface IJournalEntry extends ibas.IBODocument {
            /** 凭证编号 */
            docEntry: number;
            /** 单据编码 */
            docNum: string;
            /** 期间 */
            period: number;
            /** 取消 */
            canceled: ibas.emYesNo;
            /** 状态 */
            status: ibas.emBOStatus;
            /** 审批状态 */
            approvalStatus: ibas.emApprovalStatus;
            /** 单据状态 */
            documentStatus: ibas.emDocumentStatus;
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
            /** 已引用 */
            referenced: ibas.emYesNo;
            /** 版本 */
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
            /** 数据所有者 */
            dataOwner: number;
            /** 团队成员 */
            teamMembers: string;
            /** 数据所属组织 */
            organization: string;
            /** 过账日期 */
            postingDate: Date;
            /** 到期日 */
            deliveryDate: Date;
            /** 凭证日期 */
            documentDate: Date;
            /** 分支 */
            branch: string;
            /** 项目代码 */
            project: string;
            /** 基于类型 */
            baseDocumentType: string;
            /** 基于标识 */
            baseDocumentEntry: number;
            /** 基于行号 */
            baseDocumentLineId: number;
            /** 单据货币 */
            documentCurrency: string;
            /** 单据总计 */
            documentTotal: number;
            /** 参考1 */
            reference1: string;
            /** 参考2 */
            reference2: string;
            /** 参考3 */
            reference3: string;
            /** 备注 */
            remarks: string;

            /** 日记账分录-行集合 */
            journalEntryLines: IJournalEntryLines;

        }

        /** 日记账分录-行 集合 */
        export interface IJournalEntryLines extends ibas.IBusinessObjects<IJournalEntryLine> {
            /** 创建并添加子项 */
            create(): IJournalEntryLine;
        }

        /** 日记账分录-行 */
        export interface IJournalEntryLine extends ibas.IBODocumentLine {
            /** 编码 */
            docEntry: number;
            /** 行号 */
            lineId: number;
            /** 显示顺序 */
            visOrder: number;
            /** 取消 */
            canceled: ibas.emYesNo;
            /** 状态 */
            status: ibas.emBOStatus;
            /** 单据状态 */
            lineStatus: ibas.emDocumentStatus;
            /** 类型 */
            objectCode: string;
            /** 创建日期 */
            createDate: Date;
            /** 创建时间 */
            createTime: number;
            /** 修改日期 */
            updateDate: Date;
            /** 修改时间 */
            updateTime: number;
            /** 已引用 */
            referenced: ibas.emYesNo;
            /** 版本 */
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
            /** 科目 */
            account: string;
            /** 业务伙伴/科目代码 */
            shortName: string;
            /** 借方金额 */
            debit: number;
            /** 贷方金额 */
            credit: number;
            /** 货币 */
            currency: string;
            /** 项目代码 */
            project: string;
            /** 成本中心1 */
            distributionRule1: string;
            /** 成本中心2 */
            distributionRule2: string;
            /** 成本中心3 */
            distributionRule3: string;
            /** 成本中心4 */
            distributionRule4: string;
            /** 成本中心5 */
            distributionRule5: string;
            /** 参考1 */
            reference1: string;
            /** 参考2 */
            reference2: string;
            /** 参考3 */
            reference3: string;

        }


    }
}
