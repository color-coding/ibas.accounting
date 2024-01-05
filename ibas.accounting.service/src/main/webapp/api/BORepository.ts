/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace accounting {
    export namespace bo {
        /** 业务仓库 */
        export interface IBORepositoryAccounting extends ibas.IBORepositoryApplication {
            /**
             * 上传文件
             * @param caller 调用者
             */
            upload(caller: ibas.IUploadFileCaller<ibas.FileData>): void;
            /**
             * 下载文件
             * @param caller 调用者
             */
            download(caller: ibas.IDownloadFileCaller<Blob>): void;
            /**
             * 查询 期间类型
             * @param fetcher 查询者
             */
            fetchPeriodCategory(fetcher: ibas.IFetchCaller<bo.IPeriodCategory>): void;
            /**
             * 保存 期间类型
             * @param saver 保存者
             */
            savePeriodCategory(saver: ibas.ISaveCaller<bo.IPeriodCategory>): void;
            /**
             * 查询 过账期间
             * @param fetcher 查询者
             */
            fetchPostingPeriod(fetcher: ibas.IFetchCaller<bo.IPostingPeriod>): void;
            /**
             * 保存 过账期间
             * @param saver 保存者
             */
            savePostingPeriod(saver: ibas.ISaveCaller<bo.IPostingPeriod>): void;
            /**
             * 查询 项目
             * @param fetcher 查询者
             */
            fetchProject(fetcher: ibas.IFetchCaller<bo.IProject>): void;
            /**
             * 保存 项目
             * @param saver 保存者
             */
            saveProject(saver: ibas.ISaveCaller<bo.IProject>): void;
            /**
             * 查询 维度
             * @param fetcher 查询者
             */
            fetchDimension(fetcher: ibas.IFetchCaller<bo.IDimension>): void;
            /**
             * 保存 维度
             * @param saver 保存者
             */
            saveDimension(saver: ibas.ISaveCaller<bo.IDimension>): void;
            /**
             * 查询 税收组
             * @param fetcher 查询者
             */
            fetchTaxGroup(fetcher: ibas.IFetchCaller<bo.ITaxGroup>): void;
            /**
             * 保存 税收组
             * @param saver 保存者
             */
            saveTaxGroup(saver: ibas.ISaveCaller<bo.ITaxGroup>): void;
            /**
             * 查询 费用项目
             * @param fetcher 查询者
             */
            fetchCostItem(fetcher: ibas.IFetchCaller<bo.ICostItem>): void;
            /**
             * 保存 费用项目
             * @param saver 保存者
             */
            saveCostItem(saver: ibas.ISaveCaller<bo.ICostItem>): void;
            /**
             * 查询 费用结构
             * @param fetcher 查询者
             */
            fetchCostStructure(fetcher: ibas.IFetchCaller<bo.ICostStructure>): void;
            /**
             * 保存 费用结构
             * @param saver 保存者
             */
            saveCostStructure(saver: ibas.ISaveCaller<bo.ICostStructure>): void;
            /**
             * 查询 货币
             * @param fetcher 查询者
             */
            fetchCurrency(fetcher: ibas.IFetchCaller<bo.ICurrency>): void;
            /**
             * 保存 货币
             * @param saver 保存者
             */
            saveCurrency(saver: ibas.ISaveCaller<bo.ICurrency>): void;
            /**
             * 查询 科目
             * @param fetcher 查询者
             */
            fetchAccount(fetcher: ibas.IFetchCaller<bo.IAccount>): void;
            /**
             * 保存 科目
             * @param saver 保存者
             */
            saveAccount(saver: ibas.ISaveCaller<bo.IAccount>): void;
            /**
             * 查询 分支
             * @param fetcher 查询者
             */
            fetchBranch(fetcher: ibas.IFetchCaller<bo.IBranch>): void;
            /**
             * 保存 分支
             * @param saver 保存者
             */
            saveBranch(saver: ibas.ISaveCaller<bo.IBranch>): void;
            /**
             * 查询 分类账
             * @param fetcher 查询者
             */
            fetchLedgerAccount(fetcher: ibas.IFetchCaller<bo.ILedgerAccount>): void;
            /**
             * 查询 期间-分类账
             * @param fetcher 查询者
             */
            fetchPeriodLedgerAccount(fetcher: ibas.IFetchCaller<bo.IPeriodLedgerAccount>): void;
            /**
             * 保存 期间-分类账
             * @param saver 保存者
             */
            savePeriodLedgerAccount(saver: ibas.ISaveCaller<bo.IPeriodLedgerAccount>): void;
            /**
             * 查询 分类账条件属性
             * @param fetcher 查询者
             */
            fetchLedgerConditionProperty(fetcher: ibas.IFetchCaller<bo.ILedgerConditionProperty>): void;
            /**
             * 查询 银行
             * @param fetcher 查询者
             */
            fetchBank(fetcher: ibas.IFetchCaller<bo.IBank>): void;
            /**
             * 保存 银行
             * @param saver 保存者
             */
            saveBank(saver: ibas.ISaveCaller<bo.IBank>): void;
            /**
             * 查询 银行账户
             * @param fetcher 查询者
             */
            fetchBankAccount(fetcher: ibas.IFetchCaller<bo.IBankAccount>): void;
            /**
             * 保存 银行账户
             * @param saver 保存者
             */
            saveBankAccount(saver: ibas.ISaveCaller<bo.IBankAccount>): void;
            /**
             * 查询 货币汇率
             * @param fetcher 查询者
             */
            fetchCurrencyRate(fetcher: ibas.IFetchCaller<bo.ICurrencyRate>): void;
            /**
             * 保存 货币汇率
             * @param saver 保存者
             */
            saveCurrencyRate(saver: ibas.ISaveCaller<bo.ICurrencyRate>): void;

        }
    }
}
