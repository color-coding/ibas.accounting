/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace accounting {
    export namespace app {
        /** 列表应用-费用结构 */
        export class CostStructureListApp extends ibas.BOListApplication<ICostStructureListView, bo.CostStructure> {
            /** 应用标识 */
            static APPLICATION_ID: string = "3f61205d-2eb5-4e95-8ecf-c403d0345f41";
            /** 应用名称 */
            static APPLICATION_NAME: string = "accounting_app_coststructure_list";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.CostStructure.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = CostStructureListApp.APPLICATION_ID;
                this.name = CostStructureListApp.APPLICATION_NAME;
                this.boCode = CostStructureListApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
                this.view.editDataEvent = this.editData;
                this.view.deleteDataEvent = this.deleteData;
                this.view.viewDataEvent = this.viewData;
                this.view.saveDataEvent = this.saveData;
                this.view.copyCostStructureNodesEvent = this.copyCostStructureNodes;
                this.view.addCostStructureNodeEvent = this.addCostStructureNode;
                this.view.removeCostStructureNodeEvent = this.removeCostStructureNode;
                this.view.addCostStructureNodeItemEvent = this.addCostStructureNodeItem;
                this.view.removeCostStructureNodeItemEvent = this.removeCostStructureNodeItem;
                this.view.viewCostItemsBudgetEvent = this.viewCostItemsBudget;
                this.view.viewCostItemsLockedEvent = this.viewCostItemsLocked;
                this.view.viewCostItemsIncurredEvent = this.viewCostItemsIncurred;
                this.view.closeCostStructureNodeEvent = this.closeCostStructureNode;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成
                super.viewShowed();
            }
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria): void {
                this.busy(true);
                if (ibas.objects.isNull(criteria)) {
                    criteria = new ibas.Criteria();
                }
                criteria.noChilds = true;
                let that: this = this;
                let boRepository: bo.BORepositoryAccounting = new bo.BORepositoryAccounting();
                boRepository.fetchCostStructure({
                    criteria: criteria,
                    onCompleted(opRslt: ibas.IOperationResult<bo.CostStructure>): void {
                        try {
                            that.busy(false);
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            if (!that.isViewShowed()) {
                                // 没显示视图，先显示
                                that.show();
                            }
                            if (opRslt.resultObjects.length === 0) {
                                that.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_data_fetched_none"));
                            }
                            that.view.showData(opRslt.resultObjects);
                        } catch (error) {
                            that.messages(error);
                        }
                    }
                });
                this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_fetching_data"));
            }
            /** 新建数据 */
            protected newData(): void {
                let app: CostStructureEditApp = new CostStructureEditApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run();
            }
            private currentBudget: bo.CostStructure;
            /** 查看数据，参数：目标数据 */
            protected viewData(data: bo.CostStructure): void {
                // 检查目标数据
                if (ibas.objects.isNull(data)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("shell_data_view")
                    ));
                    return;
                }
                if (this.currentBudget?.isDirty === true) {
                    let that: this = this;
                    this.messages({
                        type: ibas.emMessageType.QUESTION,
                        title: ibas.i18n.prop(this.name),
                        message: ibas.i18n.prop("accounting_save_changed_data"),
                        actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
                        onCompleted(action: ibas.emMessageAction): void {
                            if (action === ibas.emMessageAction.YES) {
                                that.busy(true);
                                let boRepository: bo.BORepositoryAccounting = new bo.BORepositoryAccounting();
                                boRepository.saveCostStructure({
                                    beSaved: that.currentBudget,
                                    onCompleted(opRslt: ibas.IOperationResult<bo.CostStructure>): void {
                                        try {
                                            that.busy(false);
                                            if (opRslt.resultCode !== 0) {
                                                throw new Error(opRslt.message);
                                            }
                                            that.currentBudget = undefined;
                                            that.viewData(data);
                                        } catch (error) {
                                            that.messages(error);
                                        }
                                    }
                                });
                            } else {
                                that.currentBudget = undefined;
                                that.viewData(data);
                            }
                        }
                    });
                    return;
                }
                this.busy(true);
                let boRepository: bo.BORepositoryAccounting = new bo.BORepositoryAccounting();
                boRepository.fetchCostStructure({
                    criteria: data.criteria(),
                    onCompleted: (opRslt) => {
                        try {
                            this.busy(false);
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            if (opRslt.resultObjects.length === 0) {
                                throw new Error(ibas.i18n.prop("accounting_not_found_budget", data.name));
                            }
                            this.currentBudget = opRslt.resultObjects.firstOrDefault();
                            this.view.showCostStructure(this.currentBudget);
                            this.view.showCostStructureNodes(this.currentBudget.costStructureNodes);
                        } catch (error) {
                            this.messages(error);
                        }
                    }
                });
                this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_fetching_data"));

            }
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.CostStructure): void {
                // 检查目标数据
                if (ibas.objects.isNull(data)) {
                    data = new bo.CostStructure();
                }
                let app: CostStructureEditApp = new CostStructureEditApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run(data, (newData) => {
                    if (newData instanceof bo.CostStructure) {
                        if (data !== newData) {
                            this.currentBudget = newData;
                            this.view.showCostStructure(this.currentBudget);
                            this.view.showCostStructureNodes(this.currentBudget.costStructureNodes);
                        }
                    } else {
                        this.currentBudget = undefined;
                        this.view.showCostStructure(undefined);
                        this.view.showCostStructureNodes(undefined);
                    }
                });
            }
            /** 保存数据 */
            protected saveData(): void {
                this.busy(true);
                let that: this = this;
                let boRepository: bo.BORepositoryAccounting = new bo.BORepositoryAccounting();
                boRepository.saveCostStructure({
                    beSaved: this.currentBudget,
                    onCompleted(opRslt: ibas.IOperationResult<bo.CostStructure>): void {
                        try {
                            that.busy(false);
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            if (opRslt.resultObjects.length === 0) {
                                // 删除成功，释放当前对象
                                that.messages(ibas.emMessageType.SUCCESS,
                                    ibas.i18n.prop("shell_data_delete") + ibas.i18n.prop("shell_sucessful"));
                                that.currentBudget = undefined;
                                that.view.showCostStructure(undefined);
                                that.view.showCostStructureNodes(undefined);
                            } else {
                                // 替换编辑对象
                                that.currentBudget = opRslt.resultObjects.firstOrDefault();
                                that.view.showCostStructure(that.currentBudget);
                                that.view.showCostStructureNodes(that.currentBudget.costStructureNodes);
                                that.messages(ibas.emMessageType.SUCCESS,
                                    ibas.i18n.prop("shell_data_save") + ibas.i18n.prop("shell_sucessful"));
                            }
                        } catch (error) {
                            that.messages(error);
                        }
                    }
                });
                this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_saving_data"));
            }
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.CostStructure | bo.CostStructure[]): void {
                let beDeleteds: ibas.IList<bo.CostStructure> = ibas.arrays.create(data);
                // 没有选择删除的对象
                if (beDeleteds.length === 0) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("shell_data_delete")
                    ));
                    return;
                }
                // 标记删除对象
                beDeleteds.forEach((value) => {
                    value.delete();
                });
                let that: this = this;
                this.messages({
                    type: ibas.emMessageType.QUESTION,
                    title: ibas.i18n.prop(this.name),
                    message: ibas.i18n.prop("shell_multiple_data_delete_continue", beDeleteds.length),
                    actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
                    onCompleted(action: ibas.emMessageAction): void {
                        if (action !== ibas.emMessageAction.YES) {
                            return;
                        }
                        let boRepository: bo.BORepositoryAccounting = new bo.BORepositoryAccounting;
                        ibas.queues.execute(beDeleteds, (data, next) => {
                            // 处理数据
                            boRepository.saveCostStructure({
                                beSaved: data,
                                onCompleted(opRslt: ibas.IOperationResult<bo.CostStructure>): void {
                                    if (opRslt.resultCode !== 0) {
                                        next(new Error(ibas.i18n.prop("shell_data_delete_error", data, opRslt.message)));
                                    } else {
                                        next();
                                    }
                                }
                            });
                            that.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_data_deleting", data));
                        }, (error) => {
                            // 处理完成
                            if (error instanceof Error) {
                                that.messages(ibas.emMessageType.ERROR, error.message);
                            } else {
                                that.messages(ibas.emMessageType.SUCCESS,
                                    ibas.i18n.prop("shell_data_delete") + ibas.i18n.prop("shell_sucessful"));
                            }
                            that.busy(false);
                        });
                        that.busy(true);
                    }
                });
            }
            private copyCostStructureNodes(): void {
                if (ibas.objects.isNull(this.currentBudget)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("shell_data_view")
                    ));
                    return;
                }
                let that: this = this;
                let criteria: ibas.ICriteria = new ibas.Criteria();
                let condition: ibas.ICondition = criteria.conditions.create();
                condition.alias = bo.CostStructure.PROPERTY_OBJECTKEY_NAME;
                condition.value = String(this.currentBudget.objectKey);
                condition.operation = ibas.emConditionOperation.NOT_EQUAL;
                condition = criteria.conditions.create();
                condition.alias = bo.CostStructure.PROPERTY_ENTITYTYPE_NAME;
                condition.value = String(this.currentBudget.entityType);
                condition.operation = ibas.emConditionOperation.EQUAL;

                ibas.servicesManager.runChooseService<bo.CostStructure>({
                    boCode: bo.CostStructure.BUSINESS_OBJECT_CODE,
                    criteria: criteria,
                    chooseType: ibas.emChooseType.SINGLE,
                    onCompleted(selecteds: ibas.IList<bo.CostStructure>): void {
                        criteria = new ibas.Criteria();
                        for (let item of selecteds) {
                            condition = criteria.conditions.create();
                            condition.alias = bo.CostStructure.PROPERTY_OBJECTKEY_NAME;
                            condition.value = item.objectKey.toString();
                            condition.operation = ibas.emConditionOperation.EQUAL;
                            if (criteria.conditions.length > 0) {
                                condition.relationship = ibas.emConditionRelationship.OR;
                            }
                        }
                        let boRepository: bo.BORepositoryAccounting = new bo.BORepositoryAccounting();
                        boRepository.fetchCostStructure({
                            criteria: criteria,
                            onCompleted: (opRslt) => {
                                for (let item of opRslt.resultObjects) {
                                    item = item.clone();
                                    for (let nItem of item.costStructureNodes) {
                                        that.currentBudget.costStructureNodes.add(nItem);
                                    }
                                }
                                that.view.showCostStructure(that.currentBudget);
                                that.view.showCostStructureNodes(that.currentBudget.costStructureNodes);
                            }
                        });
                    }
                });
            }
            private addCostStructureNode(parent: bo.CostStructureNode): void {
                if (ibas.objects.isNull(this.currentBudget)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("shell_data_view")
                    ));
                    return;
                }
                let that: this = this;
                if (ibas.objects.isNull(parent)) {
                    let node: bo.CostStructureNode = this.currentBudget.costStructureNodes.create();
                    node.name = ibas.i18n.prop("accounting_new_node");
                    this.view.showCostStructureNodes(this.currentBudget.costStructureNodes.filterDeleted());
                } else {
                    let node: bo.CostStructureNode = parent.costStructureNodes.create();
                    node.name = ibas.i18n.prop("accounting_new_node");
                    this.view.showCostStructureNodes(parent);
                }
            }
            private removeCostStructureNode(node: bo.CostStructureNode): void {
                if (ibas.objects.isNull(this.currentBudget)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("shell_data_view")
                    ));
                    return;
                }
                let that: this = this;
                let remover: (parents: bo.CostStructureNodes) => boolean = (parents) => {
                    if (parents.contain(node)) {
                        parents.remove(node);
                        return true;
                    } else {
                        for (let parent of parents) {
                            if (remover(parent.costStructureNodes)) {
                                return true;
                            }
                        }
                    }
                    return false;
                };
                if (remover(this.currentBudget.costStructureNodes)) {
                    this.view.showCostStructureNodes(this.currentBudget.costStructureNodes.filterDeleted());
                }
            }
            private addCostStructureNodeItem(node: bo.CostStructureNode): void {
                if (ibas.objects.isNull(node)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("shell_data_add_line")
                    )); return;
                }
                let that: this = this;
                let criteria: ibas.ICriteria = new ibas.Criteria();
                let condition: ibas.ICondition = criteria.conditions.create();
                condition.alias = bo.CostItem.PROPERTY_ACTIVATED_NAME;
                condition.value = String(ibas.emYesNo.YES);
                condition.operation = ibas.emConditionOperation.EQUAL;
                // 调用选择服务
                ibas.servicesManager.runChooseService<bo.CostItem>({
                    boCode: bo.BO_CODE_COSTITEM,
                    criteria: criteria,
                    onCompleted(selecteds: ibas.IList<bo.CostItem>): void {
                        // 获取触发的对象
                        for (let selected of selecteds) {
                            let item: bo.CostStructureNodeItem = node.costStructureNodeItems.create();
                            item.item = selected.code;
                            item.name = selected.name;
                            item.currency = node.currency;
                            item.preventOver = ibas.emYesNo.NO;
                        }
                        that.view.showCostStructureNodeItems(node);
                    }
                });
            }
            private removeCostStructureNodeItem(node: bo.CostStructureNode, items: bo.CostStructureNodeItem[] | bo.CostStructureNodeItem): void {
                if (ibas.objects.isNull(node)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("shell_data_remove_line")
                    )); return;
                }
                for (let item of items = ibas.arrays.create(items)) {
                    if (node.costStructureNodeItems.indexOf(item) >= 0) {
                        if (item.isNew) {
                            // 新建的移除集合
                            node.costStructureNodeItems.remove(item);
                        } else {
                            // 非新建标记删除
                            item.delete();
                        }
                    }
                }
                this.view.showCostStructureNodeItems(node);
            }
            private getCostItems(data: bo.CostStructure | bo.CostStructureNode): ibas.IList<bo.CostStructureNodeItem> {
                let items: ibas.IList<bo.CostStructureNodeItem> = new ibas.ArrayList<bo.CostStructureNodeItem>();
                if (data instanceof bo.CostStructure) {
                    for (let item of data.costStructureNodes) {
                        items.add(this.getCostItems(item));
                    }
                } else if (data instanceof bo.CostStructureNode) {
                    if (data.costStructureNodeItems.length > 0) {
                        items.add(data.costStructureNodeItems);
                    } else {
                        for (let item of data.costStructureNodes) {
                            items.add(this.getCostItems(item));
                        }
                    }
                }
                return items;
            }
            private viewCostItemsBudget(): void {
                this.view.showCostItemsBudget(this.getCostItems(this.currentBudget).filter(c => c.budget > 0));
            }
            private viewCostItemsLocked(): void {
                this.view.showCostItemsLocked(this.getCostItems(this.currentBudget).filter(c => c.locked > 0));
            }
            private viewCostItemsIncurred(): void {
                this.view.showCostItemsIncurred(this.getCostItems(this.currentBudget).filter(c => c.incurred > 0));
            }
            private closeCostStructureNode(node: bo.CostStructureNode): void {
                if (ibas.objects.isNull(node)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.enums.describe(bo.emCostStatus, bo.emCostStatus.CLOSED)
                    )); return;
                }
                this.messages({
                    type: ibas.emMessageType.QUESTION,
                    message: ibas.i18n.prop("accounting_continue_to_close_node", node.name),
                    actions: [
                        ibas.emMessageAction.YES,
                        ibas.emMessageAction.NO
                    ],
                    onCompleted: (result) => {
                        if (result !== ibas.emMessageAction.YES) {
                            return;
                        }
                        this.busy(true);
                        let boRepository: bo.BORepositoryAccounting = new bo.BORepositoryAccounting();
                        boRepository.closeCostStructure({
                            structure: node.objectKey,
                            node: node.lineId,
                            onCompleted: (opRslt) => {
                                try {
                                    this.busy(false);
                                    if (opRslt.resultCode !== 0) {
                                        throw new Error(opRslt.message);
                                    }
                                    if (opRslt.resultObjects.length > 0) {
                                        this.currentBudget = opRslt.resultObjects.firstOrDefault();
                                        this.view.showCostStructure(this.currentBudget);
                                        this.view.showCostStructureNodes(this.currentBudget.costStructureNodes);
                                    }
                                    this.messages(ibas.emMessageType.SUCCESS,
                                        ibas.enums.describe(bo.emCostStatus, bo.emCostStatus.CLOSED) + ibas.i18n.prop("shell_sucessful"));
                                } catch (error) {
                                    this.messages(error);
                                }
                            }
                        });
                    }
                });
            }
        }
        /** 视图-费用结构 */
        export interface ICostStructureListView extends ibas.IBOListView {
            /** 保存数据事件 */
            saveDataEvent: Function;
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 结算费用节点 */
            closeCostStructureNodeEvent: Function;
            /** 显示数据 */
            showData(datas: bo.CostStructure[]): void;
            /** 显示费用结构 */
            showCostStructure(data: bo.CostStructure): void;
            /** 复制其他费用结构节点 */
            copyCostStructureNodesEvent: Function;
            /** 添加费用结构节点 */
            addCostStructureNodeEvent: Function;
            /** 移除费用结构节点 */
            removeCostStructureNodeEvent: Function;
            /** 显示费用结构节点 */
            showCostStructureNodes(datas: bo.CostStructureNode[] | bo.CostStructureNode): void;
            /** 添加费用结构节点项目 */
            addCostStructureNodeItemEvent: Function;
            /** 移除费用结构节点点项目 */
            removeCostStructureNodeItemEvent: Function;
            /** 显示费用结构截点 */
            showCostStructureNodeItems(data: bo.CostStructureNode): void;
            /** 显示费用项-预算 */
            viewCostItemsBudgetEvent: Function;
            /** 显示费用项-预算 */
            showCostItemsBudget(data: bo.CostStructureNodeItem[]): void;
            /** 显示费用项-锁定 */
            viewCostItemsLockedEvent: Function;
            /** 显示费用项-锁定 */
            showCostItemsLocked(data: bo.CostStructureNodeItem[]): void;
            /** 显示费用项-发生 */
            viewCostItemsIncurredEvent: Function;
            /** 显示费用项-发生 */
            showCostItemsIncurred(data: bo.CostStructureNodeItem[]): void;
        }
    }
}
