/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace accounting {
    export namespace bo {
        /** 业务对象仓库 */
        export class BORepositoryAccounting extends ibas.BORepositoryApplication implements IBORepositoryAccounting {
            /** 创建此模块的后端与前端数据的转换者 */
            protected createConverter(): ibas.IDataConverter {
                return new DataConverter;
            }
            /**
             * 上传文件
             * @param caller 调用者
             */
            upload(caller: ibas.IUploadFileCaller<ibas.FileData>): void {
                if (!this.address.endsWith("/")) { this.address += "/"; }
                let fileRepository: ibas.FileRepositoryUploadAjax = new ibas.FileRepositoryUploadAjax();
                fileRepository.address = this.address.replace("/services/rest/data/", "/services/rest/file/");
                fileRepository.token = this.token;
                fileRepository.converter = this.createConverter();
                fileRepository.upload("upload", caller);
            }
            /**
             * 下载文件
             * @param caller 调用者
             */
            download(caller: ibas.IDownloadFileCaller<Blob>): void {
                if (!this.address.endsWith("/")) { this.address += "/"; }
                let fileRepository: ibas.FileRepositoryDownloadAjax = new ibas.FileRepositoryDownloadAjax();
                fileRepository.address = this.address.replace("/services/rest/data/", "/services/rest/file/");
                fileRepository.token = this.token;
                fileRepository.converter = this.createConverter();
                fileRepository.download("download", caller);
            }
            /**
             * 查询 期间类型
             * @param fetcher 查询者
             */
            fetchPeriodCategory(fetcher: ibas.IFetchCaller<bo.PeriodCategory>): void {
                super.fetch(bo.PeriodCategory.name, fetcher);
            }
            /**
             * 保存 期间类型
             * @param saver 保存者
             */
            savePeriodCategory(saver: ibas.ISaveCaller<bo.PeriodCategory>): void {
                super.save(bo.PeriodCategory.name, saver);
            }
            /**
             * 查询 过账期间
             * @param fetcher 查询者
             */
            fetchPostingPeriod(fetcher: ibas.IFetchCaller<bo.PostingPeriod>): void {
                super.fetch(bo.PostingPeriod.name, fetcher);
            }
            /**
             * 保存 过账期间
             * @param saver 保存者
             */
            savePostingPeriod(saver: ibas.ISaveCaller<bo.PostingPeriod>): void {
                super.save(bo.PostingPeriod.name, saver);
            }

            /**
             * 查询 项目
             * @param fetcher 查询者
             */
            fetchProject(fetcher: ibas.IFetchCaller<bo.Project>): void {
                super.fetch(bo.Project.name, fetcher);
            }
            /**
             * 保存 项目
             * @param saver 保存者
             */
            saveProject(saver: ibas.ISaveCaller<bo.Project>): void {
                super.save(bo.Project.name, saver);
            }

            /**
             * 查询 维度
             * @param fetcher 查询者
             */
            fetchDimension(fetcher: ibas.IFetchCaller<bo.Dimension>): void {
                super.fetch(bo.Dimension.name, fetcher);
            }
            /**
             * 保存 维度
             * @param saver 保存者
             */
            saveDimension(saver: ibas.ISaveCaller<bo.Dimension>): void {
                super.save(bo.Dimension.name, saver);
            }
            /**
             * 查询 税收组
             * @param fetcher 查询者
             */
            fetchTaxGroup(fetcher: ibas.IFetchCaller<bo.TaxGroup>): void {
                super.fetch(bo.TaxGroup.name, fetcher);
            }
            /**
             * 保存 税收组
             * @param saver 保存者
             */
            saveTaxGroup(saver: ibas.ISaveCaller<bo.TaxGroup>): void {
                super.save(bo.TaxGroup.name, saver);
            }
            /**
             * 查询 费用项目
             * @param fetcher 查询者
             */
            fetchCostItem(fetcher: ibas.IFetchCaller<bo.CostItem>): void {
                super.fetch(bo.CostItem.name, fetcher);
            }
            /**
             * 保存 费用项目
             * @param saver 保存者
             */
            saveCostItem(saver: ibas.ISaveCaller<bo.CostItem>): void {
                super.save(bo.CostItem.name, saver);
            }

            /**
             * 查询 费用结构
             * @param fetcher 查询者
             */
            fetchCostStructure(fetcher: ibas.IFetchCaller<bo.CostStructure>): void {
                super.fetch(bo.CostStructure.name, fetcher);
            }
            /**
             * 保存 费用结构
             * @param saver 保存者
             */
            saveCostStructure(saver: ibas.ISaveCaller<bo.CostStructure>): void {
                super.save(bo.CostStructure.name, saver);
            }
            /**
             * 结算 费用结构
             * @param closer 结算者
             */
            closeCostStructure(closer: ICostStructureCloser): void {
                let boRepository: ibas.BORepositoryAjax = new ibas.BORepositoryAjax();
                boRepository.address = this.address;
                boRepository.token = this.token;
                boRepository.converter = this.createConverter();
                let builder: ibas.StringBuilder = new ibas.StringBuilder();
                builder.map(null, "");
                builder.map(undefined, "");
                builder.append("closeCostStructure");
                builder.append("?");
                builder.append("structure");
                builder.append("=");
                builder.append(closer.structure);
                if (!ibas.strings.isEmpty(closer.node)) {
                    builder.append("&");
                    builder.append("node");
                    builder.append("=");
                    builder.append(closer.node);
                }
                if (!ibas.strings.isEmpty(closer.action)) {
                    builder.append("&");
                    builder.append("action");
                    builder.append("=");
                    builder.append(ibas.enums.toString(bo.emCostStatus, closer.action));
                }
                builder.append("&");
                builder.append("token");
                builder.append("=");
                builder.append(this.token);
                boRepository.callRemoteMethod(builder.toString(), undefined, (opRslt) => {
                    closer.onCompleted.call(ibas.objects.isNull(closer.caller) ? closer : closer.caller, opRslt);
                });
            }
            /**
             * 查询 货币
             * @param fetcher 查询者
             */
            fetchCurrency(fetcher: ibas.IFetchCaller<bo.Currency>): void {
                super.fetch(bo.Currency.name, fetcher);
            }
            /**
             * 保存 货币
             * @param saver 保存者
             */
            saveCurrency(saver: ibas.ISaveCaller<bo.Currency>): void {
                super.save(bo.Currency.name, saver);
            }
            /**
             * 查询 科目
             * @param fetcher 查询者
             */
            fetchAccount(fetcher: ibas.IFetchCaller<bo.Account>): void {
                super.fetch(bo.Account.name, fetcher);
            }
            /**
             * 保存 科目
             * @param saver 保存者
             */
            saveAccount(saver: ibas.ISaveCaller<bo.Account>): void {
                super.save(bo.Account.name, saver);
            }

            /**
             * 查询 分支
             * @param fetcher 查询者
             */
            fetchBranch(fetcher: ibas.IFetchCaller<bo.Branch>): void {
                super.fetch(bo.Branch.name, fetcher);
            }
            /**
             * 保存 分支
             * @param saver 保存者
             */
            saveBranch(saver: ibas.ISaveCaller<bo.Branch>): void {
                super.save(bo.Branch.name, saver);
            }
            /**
             * 查询 日记账分录
             * @param fetcher 查询者
             */
            fetchJournalEntry(fetcher: ibas.IFetchCaller<bo.JournalEntry>): void {
                super.fetch(bo.JournalEntry.name, fetcher);
            }
            /**
             * 保存 日记账分录
             * @param saver 保存者
             */
            saveJournalEntry(saver: ibas.ISaveCaller<bo.JournalEntry>): void {
                super.save(bo.JournalEntry.name, saver);
            }
            /**
             * 查询 分类账
             * @param fetcher 查询者
             */
            fetchLedgerAccount(fetcher: ibas.IFetchCaller<bo.LedgerAccount>): void {
                super.fetch(bo.LedgerAccount.name, fetcher);
            }
            /**
             * 查询 期间-分类账
             * @param fetcher 查询者
             */
            fetchPeriodLedgerAccount(fetcher: ibas.IFetchCaller<bo.PeriodLedgerAccount>): void {
                super.fetch(bo.PeriodLedgerAccount.name, fetcher);
            }
            /**
             * 保存 期间-分类账
             * @param saver 保存者
             */
            savePeriodLedgerAccount(saver: ibas.ISaveCaller<bo.PeriodLedgerAccount>): void {
                super.save(bo.PeriodLedgerAccount.name, saver);
            }
            /**
             * 查询 分类账条件属性
             * @param fetcher 查询者
             */
            fetchLedgerConditionProperty(fetcher: ibas.IFetchCaller<bo.LedgerConditionProperty>): void {
                super.fetch(bo.LedgerConditionProperty.name, fetcher);
            }
            /**
             * 查询 银行
             * @param fetcher 查询者
             */
            fetchBank(fetcher: ibas.IFetchCaller<bo.Bank>): void {
                super.fetch(bo.Bank.name, fetcher);
            }
            /**
             * 保存 银行
             * @param saver 保存者
             */
            saveBank(saver: ibas.ISaveCaller<bo.Bank>): void {
                super.save(bo.Bank.name, saver);
            }

            /**
             * 查询 银行账户
             * @param fetcher 查询者
             */
            fetchBankAccount(fetcher: ibas.IFetchCaller<bo.BankAccount>): void {
                super.fetch(bo.BankAccount.name, fetcher);
            }
            /**
             * 保存 银行账户
             * @param saver 保存者
             */
            saveBankAccount(saver: ibas.ISaveCaller<bo.BankAccount>): void {
                super.save(bo.BankAccount.name, saver);
            }

            /**
             * 查询 货币汇率
             * @param fetcher 查询者
             */
            fetchCurrencyRate(fetcher: ibas.IFetchCaller<bo.CurrencyRate>): void {
                super.fetch(bo.CurrencyRate.name, fetcher);
            }
            /**
             * 保存 货币汇率
             * @param saver 保存者
             */
            saveCurrencyRate(saver: ibas.ISaveCaller<bo.CurrencyRate>): void {
                super.save(bo.CurrencyRate.name, saver);
            }

        }
        /**
         * 费用结束者
         */
        export interface ICostStructureCloser extends ibas.IMethodCaller<CostStructure> {
            /** 费用结构 */
            structure: number;
            /** 费用节点 */
            node?: number;
            /** 动作 */
            action?: emCostStatus;
            /**
             * 调用完成
             * @param opRslt 结果
             */
            onCompleted(opRslt: ibas.IOperationResult<CostStructure>): void;
        }
    }
}
