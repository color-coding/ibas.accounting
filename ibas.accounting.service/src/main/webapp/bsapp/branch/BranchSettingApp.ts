/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace accounting {
    export namespace app {
        /** 应用-默认分支设置 */
        export class BranchSettingApp extends ibas.ResidentApplication<IBranchSettingView> {
            /** 应用标识 */
            static APPLICATION_ID: string = "83027f70-f457-45b6-bcec-ad4b8bc65a5d";
            /** 应用名称 */
            static APPLICATION_NAME: string = "accounting_app_branchsetting";
            /** 构造函数 */
            constructor() {
                super();
                this.id = BranchSettingApp.APPLICATION_ID;
                this.name = BranchSettingApp.APPLICATION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
                this.view.setEvent = this.set;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成
                let criteria: ibas.ICriteria = new ibas.Criteria();
                let condition: ibas.ICondition = criteria.conditions.create();
                condition.alias = bo.Branch.PROPERTY_ACTIVATED_NAME;
                condition.value = ibas.emYesNo.YES.toString();
                condition = criteria.conditions.create();
                condition.alias = bo.Branch.PROPERTY_DELETED_NAME;
                condition.value = ibas.emYesNo.NO.toString();
                let boRepository: bo.BORepositoryAccounting = new bo.BORepositoryAccounting();
                boRepository.fetchBranch({
                    criteria: criteria,
                    onCompleted: (opRslt) => {
                        try {
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            if (opRslt.resultObjects.length === 1) {
                                this.set(opRslt.resultObjects.firstOrDefault());
                            } else if (opRslt.resultObjects.length === 0) {
                                this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("accounting_not_found_branchs"));
                                this.close();
                            }
                            this.view.showBranchs(opRslt.resultObjects);
                        } catch (error) {
                            this.messages(error);
                        }
                    }
                });
            }
            private set(data: bo.Branch): void {
                if (ibas.objects.isNull(data)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("bo_branch")
                    )); return;
                }
                ibas.variablesManager.register(new ibas.KeyValue(ibas.VARIABLE_NAME_USER_BRANCH, data.code));
                this.proceeding(ibas.i18n.prop("accounting_set_user_branch", data.code, data.name));
                this.close();
            }

            protected barShowed(): void {
                super.barShowed();
                setTimeout(() => {
                    this.showFullView();
                }, 1500);
            }
        }
        /** 视图-默认分支设置 */
        export interface IBranchSettingView extends ibas.IResidentView {
            // 设置
            setEvent: Function;
            /** 显示数据 */
            showBranchs(datas: bo.Branch[]): void;
        }
        export class BranchSettingApplicationMapping extends ibas.ResidentApplicationMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = BranchSettingApp.APPLICATION_ID;
                this.name = BranchSettingApp.APPLICATION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            create(): ibas.ResidentApplication<ibas.IResidentView> {
                return new BranchSettingApp();
            }
        }
    }
}