/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace accounting {
    export namespace app {
        /** 编辑应用-分支 */
        export class BranchEditApp extends ibas.BOEditApplication<IBranchEditView, bo.Branch> {
            /** 应用标识 */
            static APPLICATION_ID: string = "6854d6b2-1ede-491a-873e-f60ca43565f8";
            /** 应用名称 */
            static APPLICATION_NAME: string = "accounting_app_branch_edit";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.Branch.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = BranchEditApp.APPLICATION_ID;
                this.name = BranchEditApp.APPLICATION_NAME;
                this.boCode = BranchEditApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
                this.view.deleteDataEvent = this.deleteData;
                this.view.createDataEvent = this.createData;
                this.view.chooseBankEvent = this.chooseBank;
                this.view.chooseBankAccountEvent = this.chooseBankAccount;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成
                super.viewShowed();
                if (ibas.objects.isNull(this.editData)) {
                    // 创建编辑对象实例
                    this.editData = new bo.Branch();
                    this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_created_new"));
                }
                this.view.showBranch(this.editData);
            }
            run(): void;
            run(data: bo.Branch): void;
            run(): void {
                if (arguments[0] instanceof bo.Branch) {
                    let data: bo.Branch = arguments[0];
                    if (data.isNew) {
                        this.editData = data;
                        this.show();
                    } else {
                        let criteria: ibas.ICriteria = data.criteria();
                        if (criteria?.conditions.length > 0) {
                            // 有效的查询对象查询
                            let that: this = this;
                            let boRepository: bo.BORepositoryAccounting = new bo.BORepositoryAccounting();
                            boRepository.fetchBranch({
                                criteria: criteria,
                                onCompleted(opRslt: ibas.IOperationResult<bo.Branch>): void {
                                    try {
                                        if (opRslt.resultCode !== 0) {
                                            throw new Error(opRslt.message);
                                        }
                                        if (opRslt.resultObjects.length > 0) {
                                            that.editData = opRslt.resultObjects.firstOrDefault();
                                            that.show();
                                        } else {
                                            that.messages({
                                                type: ibas.emMessageType.WARNING,
                                                message: ibas.i18n.prop("shell_data_deleted_and_created"),
                                                onCompleted(): void {
                                                    that.show();
                                                }
                                            });
                                        }
                                    } catch (error) {
                                        that.messages(error);
                                    }
                                }
                            });
                        } else {
                            super.run.apply(this, arguments);
                        }
                    }
                } else {
                    super.run.apply(this, arguments);
                }
            }
            /** 保存数据 */
            protected saveData(others?: bo.Branch[]): void {
                this.busy(true);
                if (ibas.objects.isNull(others)) {
                    // 修改其他分支状态
                    let criteria: ibas.ICriteria = new ibas.Criteria();
                    // 其他标记主分支
                    if (this.editData.main === ibas.emYesNo.YES) {
                        let condition: ibas.ICondition = criteria.conditions.create();
                        condition.alias = bo.Branch.PROPERTY_MAIN_NAME;
                        condition.value = ibas.emYesNo.YES.toString();
                        condition.bracketOpen = 1;
                        condition = criteria.conditions.create();
                        condition.alias = bo.Branch.PROPERTY_CODE_NAME;
                        condition.operation = ibas.emConditionOperation.NOT_EQUAL;
                        condition.value = this.editData.code;
                        condition.bracketClose = 1;
                    }
                    if (criteria.conditions.length > 1) {
                        let boRepository: bo.BORepositoryAccounting = new bo.BORepositoryAccounting();
                        boRepository.fetchBranch({
                            criteria: criteria,
                            onCompleted: (opRslt) => {
                                for (let item of opRslt.resultObjects) {
                                    if (this.editData.main === ibas.emYesNo.YES) {
                                        if (this.editData.main === item.main) {
                                            item.main = ibas.emYesNo.NO;
                                        }
                                    }
                                }
                                this.saveData(opRslt.resultObjects.filter(c => c.isDirty === true));
                            }
                        }); return;
                    }
                }
                let beSaveds: ibas.ArrayList<bo.Branch> = ibas.arrays.create(others);
                beSaveds.add(this.editData);
                let boRepository: bo.BORepositoryAccounting = new bo.BORepositoryAccounting();
                ibas.queues.execute(beSaveds, (data, next) => {
                    // 处理数据
                    boRepository.saveBranch({
                        beSaved: data,
                        onCompleted: (opRslt) => {
                            if (opRslt.resultCode !== 0) {
                                next(new Error(opRslt.message));
                            } else {
                                if (opRslt.resultObjects.contain(c => c.code === this.editData.code)) {
                                    this.editData = opRslt.resultObjects.firstOrDefault(c => c.code === this.editData.code);
                                    this.view.showBranch(this.editData);
                                }
                                next();
                            }
                        }
                    });
                }, (error) => {
                    // 处理完成
                    if (error instanceof Error) {
                        this.messages(ibas.emMessageType.ERROR, error.message);
                    } else {
                        this.messages(ibas.emMessageType.SUCCESS,
                            ibas.i18n.prop("shell_data_save") + ibas.i18n.prop("shell_sucessful"));
                    }
                    this.busy(false);
                });
                this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_saving_data"));
            }
            /** 删除数据 */
            protected deleteData(): void {
                let that: this = this;
                this.messages({
                    type: ibas.emMessageType.QUESTION,
                    title: ibas.i18n.prop(this.name),
                    message: ibas.i18n.prop("shell_delete_continue"),
                    actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
                    onCompleted(action: ibas.emMessageAction): void {
                        if (action === ibas.emMessageAction.YES) {
                            that.editData.delete();
                            that.saveData();
                        }
                    }
                });
            }
            /** 新建数据，参数1：是否克隆 */
            protected createData(clone: boolean): void {
                let that: this = this;
                let createData: Function = function (): void {
                    if (clone) {
                        // 克隆对象
                        that.editData = that.editData.clone();
                        that.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_cloned_new"));
                        that.viewShowed();
                    } else {
                        // 新建对象
                        that.editData = new bo.Branch();
                        that.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_created_new"));
                        that.viewShowed();
                    }
                };
                if (that.editData.isDirty) {
                    this.messages({
                        type: ibas.emMessageType.QUESTION,
                        title: ibas.i18n.prop(this.name),
                        message: ibas.i18n.prop("shell_data_not_saved_continue"),
                        actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
                        onCompleted(action: ibas.emMessageAction): void {
                            if (action === ibas.emMessageAction.YES) {
                                createData();
                            }
                        }
                    });
                } else {
                    createData();
                }
            }
            private chooseBank(): void {
                let that: this = this;
                ibas.servicesManager.runChooseService<accounting.bo.Bank>({
                    boCode: accounting.bo.Bank.BUSINESS_OBJECT_CODE,
                    chooseType: ibas.emChooseType.SINGLE,
                    criteria: [
                        new ibas.Condition(accounting.bo.Branch.PROPERTY_ACTIVATED_NAME, ibas.emConditionOperation.EQUAL, ibas.emYesNo.YES)
                    ],
                    onCompleted(selecteds: ibas.IList<accounting.bo.Bank>): void {
                        that.editData.bank = selecteds.firstOrDefault().name;
                    }
                });
            }
            private chooseBankAccount(criteria: ibas.ICriteria): void {
                if (criteria instanceof ibas.Criteria) {
                    if (criteria.conditions.length > 1) {
                        criteria.conditions.firstOrDefault().bracketOpen += 1;
                        criteria.conditions.lastOrDefault().bracketClose += 1;
                    }
                    let condition: ibas.ICondition = criteria.conditions.create();
                    condition.alias = accounting.bo.BankAccount.PROPERTY_ACTIVATED_NAME;
                    condition.value = ibas.emYesNo.YES.toString();
                    let that: this = this;
                    ibas.servicesManager.runChooseService<accounting.bo.BankAccount>({
                        boCode: accounting.bo.BankAccount.BUSINESS_OBJECT_CODE,
                        chooseType: ibas.emChooseType.SINGLE,
                        criteria: criteria,
                        onCompleted(selecteds: ibas.IList<accounting.bo.BankAccount>): void {
                            that.editData.bankAccount = selecteds.firstOrDefault().code;
                            if (!ibas.strings.isEmpty(selecteds.firstOrDefault().bank)) {
                                let criteria: ibas.Criteria = new ibas.Criteria();
                                let condition: ibas.ICondition = criteria.conditions.create();
                                condition.alias = accounting.bo.Branch.PROPERTY_CODE_NAME;
                                condition.value = selecteds.firstOrDefault().bank;
                                let boRepository: accounting.bo.BORepositoryAccounting = new accounting.bo.BORepositoryAccounting();
                                boRepository.fetchBank({
                                    criteria: criteria,
                                    onCompleted: (opRslt) => {
                                        for (let item of opRslt.resultObjects) {
                                            that.editData.bank = item.name;
                                        }
                                    }
                                })
                            }
                        }
                    });
                } else {
                    if (!ibas.strings.isEmpty(this.editData.bank)) {
                        let criteria: ibas.Criteria = new ibas.Criteria();
                        let condition: ibas.ICondition = criteria.conditions.create();
                        condition.alias = accounting.bo.Branch.PROPERTY_BANK_NAME;
                        condition.value = this.editData.bank;
                        let boRepository: accounting.bo.BORepositoryAccounting = new accounting.bo.BORepositoryAccounting();
                        boRepository.fetchBank({
                            criteria: criteria,
                            onCompleted: (opRslt) => {
                                if (opRslt.resultObjects.length > 0) {
                                    criteria = new ibas.Criteria();
                                    for (let item of opRslt.resultObjects) {
                                        condition = criteria.conditions.create();
                                        condition.alias = accounting.bo.BankAccount.PROPERTY_BRANCH_NAME;
                                        condition.value = item.code;
                                        if (criteria.conditions.length > 1) {
                                            condition.relationship = ibas.emConditionRelationship.OR;
                                        }
                                    }
                                    this.chooseBankAccount(criteria);
                                } else {
                                    this.chooseBankAccount(new ibas.Criteria());
                                }
                            }
                        })
                    } else {
                        this.chooseBankAccount(new ibas.Criteria());
                    }
                }
            }
        }
        /** 视图-分支 */
        export interface IBranchEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showBranch(data: bo.Branch): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 选择银行事件 */
            chooseBankEvent: Function;
            /** 选择银行账号事件 */
            chooseBankAccountEvent: Function;
        }
    }
}
