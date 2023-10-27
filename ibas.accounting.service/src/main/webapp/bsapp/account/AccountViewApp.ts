/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace accounting {
    export namespace app {
        /** 查看应用-科目 */
        export class AccountViewApp extends ibas.BOViewService<IAccountViewView, bo.Account> {
            /** 应用标识 */
            static APPLICATION_ID: string = "5b1c1c28-2e44-441f-9c52-a81f35b6be0e";
            /** 应用名称 */
            static APPLICATION_NAME: string = "accounting_app_account_view";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.Account.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = AccountViewApp.APPLICATION_ID;
                this.name = AccountViewApp.APPLICATION_NAME;
                this.boCode = AccountViewApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
                this.view.editDataEvent = this.editData;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成，基类方法更新地址
                super.viewShowed();
                if (ibas.objects.isNull(this.viewData)) {
                    // 创建编辑对象实例
                    this.viewData = new bo.Account();
                    this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_created_new"));
                }
                this.view.showAccount(this.viewData);
            }
            /** 编辑数据，参数：目标数据 */
            protected editData(): void {
                let app: AccountEditApp = new AccountEditApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run(this.viewData);
            }
            run(): void;
            run(data: bo.Account): void;
            run(): void {
                if (arguments[0] instanceof bo.Account) {
                    let data: bo.Account = arguments[0];
                    if (data.isNew) {
                        this.viewData = data;
                        this.show();
                    } else {
                        let criteria: ibas.ICriteria = data.criteria();
                        if (criteria?.conditions.length > 0) {
                            // 有效的查询对象查询
                            let that: this = this;
                            let boRepository: bo.BORepositoryAccounting = new bo.BORepositoryAccounting();
                            boRepository.fetchAccount({
                                criteria: criteria,
                                onCompleted(opRslt: ibas.IOperationResult<bo.Account>): void {
                                    try {
                                        if (opRslt.resultCode !== 0) {
                                            throw new Error(opRslt.message);
                                        }
                                        if (opRslt.resultObjects.length > 0) {
                                            that.viewData = opRslt.resultObjects.firstOrDefault();
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
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void {
                this.busy(true);
                let that: this = this;
                if (typeof criteria === "string") {
                    let condition: ibas.ICondition;
                    let value: string = criteria;
                    criteria = new ibas.Criteria();
                    criteria.result = 1;
                    condition = criteria.conditions.create();
                    condition.alias = bo.Account.PROPERTY_CODE_NAME;
                    condition.value = value;
                }
                let boRepository: bo.BORepositoryAccounting = new bo.BORepositoryAccounting();
                boRepository.fetchAccount({
                    criteria: criteria,
                    onCompleted(opRslt: ibas.IOperationResult<bo.Account>): void {
                        try {
                            that.busy(false);
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            that.viewData = opRslt.resultObjects.firstOrDefault();
                            if (!that.isViewShowed()) {
                                // 没显示视图，先显示
                                that.show();
                            } else {
                                that.viewShowed();
                            }
                        } catch (error) {
                            that.messages(error);
                        }
                    }
                });
                this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_fetching_data"));
            }
        }
        /** 视图-科目 */
        export interface IAccountViewView extends ibas.IBOViewView {
            /** 显示数据 */
            showAccount(data: bo.Account): void;

        }
        /** 科目连接服务映射 */
        export class AccountLinkServiceMapping extends ibas.BOLinkServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = AccountViewApp.APPLICATION_ID;
                this.name = AccountViewApp.APPLICATION_NAME;
                this.boCode = AccountViewApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 创建服务实例 */
            create(): ibas.IBOLinkService {
                return new AccountViewApp();
            }
        }
    }
}
