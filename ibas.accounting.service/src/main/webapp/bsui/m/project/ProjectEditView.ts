/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace accounting {
    export namespace ui {
        export namespace m {
            /** 编辑视图-项目 */
            export class ProjectEditView extends ibas.BOEditView implements app.IProjectEditView {
                /** 删除数据事件 */
                deleteDataEvent: Function;
                /** 新建数据事件，参数1：是否克隆 */
                createDataEvent: Function;
                /** 选择组织 */
                chooseOrganizationEvent: Function;
                /** 选择项目经理 */
                chooseManagerEvent: Function;
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    return this.page = new sap.extension.uxap.DataObjectPageLayout("", {
                        dataInfo: {
                            code: bo.Project.BUSINESS_OBJECT_CODE,
                        },
                        userFieldsMode: "input",
                        showFooter: false,
                        headerTitle: new sap.uxap.ObjectPageHeader("", {
                            objectTitle: {
                                path: "code",
                                type: new sap.extension.data.Alphanumeric(),
                            },
                            objectSubtitle: {
                                path: "name",
                                type: new sap.extension.data.Alphanumeric(),
                            },
                            sideContentButton: new sap.m.Button("", {
                                text: ibas.i18n.prop("shell_data_save"),
                                type: sap.m.ButtonType.Transparent,
                                icon: "sap-icon://save",
                                press(): void {
                                    that.fireViewEvents(that.saveDataEvent);
                                }
                            }),
                            actions: [
                                new sap.uxap.ObjectPageHeaderActionButton("", {
                                    text: ibas.i18n.prop("shell_data_clone"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://copy",
                                    hideText: true,
                                    importance: sap.uxap.Importance.Medium,
                                    press(): void {
                                        that.fireViewEvents(that.createDataEvent, true);
                                    }
                                }),
                                new sap.uxap.ObjectPageHeaderActionButton("", {
                                    text: ibas.i18n.prop("shell_data_delete"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://delete",
                                    hideText: true,
                                    importance: sap.uxap.Importance.Low,
                                    press(): void {
                                        that.fireViewEvents(that.deleteDataEvent);
                                    }
                                }),
                                new sap.uxap.ObjectPageHeaderActionButton("", {
                                    hideText: true,
                                    importance: sap.uxap.Importance.Medium,
                                    text: ibas.i18n.prop("shell_data_services"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://action",
                                    press(event: sap.ui.base.Event): void {
                                        ibas.servicesManager.showServices({
                                            proxy: new ibas.BOServiceProxy({
                                                data: that.page.getModel().getData(),
                                                converter: new bo.DataConverter(),
                                            }),
                                            displayServices(services: ibas.IServiceAgent[]): void {
                                                if (ibas.objects.isNull(services) || services.length === 0) {
                                                    return;
                                                }
                                                let actionSheet: sap.m.ActionSheet = new sap.m.ActionSheet("", {
                                                    placement: sap.m.PlacementType.Bottom,
                                                    buttons: {
                                                        path: "/",
                                                        template: new sap.m.Button("", {
                                                            type: sap.m.ButtonType.Transparent,
                                                            text: {
                                                                path: "name",
                                                                type: new sap.extension.data.Alphanumeric(),
                                                                formatter(data: string): string {
                                                                    return data ? ibas.i18n.prop(data) : "";
                                                                }
                                                            },
                                                            icon: {
                                                                path: "icon",
                                                                type: new sap.extension.data.Alphanumeric(),
                                                                formatter(data: string): string {
                                                                    return data ? data : "sap-icon://e-care";
                                                                }
                                                            },
                                                            press(this: sap.m.Button): void {
                                                                let service: ibas.IServiceAgent = this.getBindingContext().getObject();
                                                                if (service) {
                                                                    service.run();
                                                                }
                                                            }
                                                        })
                                                    }
                                                });
                                                actionSheet.setModel(new sap.extension.model.JSONModel(services));
                                                actionSheet.openBy(event.getSource());
                                            }
                                        });
                                    }
                                }),
                            ],
                        }).addStyleClass("sapUiNoContentPadding"),
                        headerContent: [
                            new sap.extension.m.ObjectDocumentStatus("", {
                                title: ibas.i18n.prop("bo_project_status"),
                                enumValue: {
                                    path: "status",
                                    type: new sap.extension.data.DocumentStatus(),
                                }
                            }),
                            new sap.extension.m.ObjectYesNoStatus("", {
                                title: ibas.i18n.prop("bo_project_activated"),
                                enumValue: {
                                    path: "activated",
                                    type: new sap.extension.data.YesNo(),
                                }
                            }),
                            new sap.extension.m.ObjectYesNoStatus("", {
                                title: ibas.i18n.prop("bo_project_canceled"),
                                enumValue: {
                                    path: "canceled",
                                    type: new sap.extension.data.YesNo(),
                                },
                                negative: true,
                            }).bindProperty("visible", {
                                path: "canceled",
                                formatter(data: any): any {
                                    if (data === ibas.emYesNo.YES) {
                                        return true;
                                    }
                                    return false;
                                }
                            })
                        ],
                        sections: [
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("accounting_title_general"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            new sap.ui.layout.form.SimpleForm("", {
                                                editable: true,
                                                width: "auto",
                                                content: [
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_project_code") }),
                                                    new sap.extension.m.Input("", {
                                                        type: sap.m.InputType.Text
                                                    }).bindProperty("bindingValue", {
                                                        path: "code",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 20
                                                        })
                                                    }).bindProperty("editable", {
                                                        path: "series",
                                                        formatter(data: any): any {
                                                            return data > 0 ? false : true;
                                                        }
                                                    }),
                                                    new sap.extension.m.SeriesSelect("", {
                                                        objectCode: bo.BO_CODE_PROJECT,
                                                    }).bindProperty("bindingValue", {
                                                        path: "series",
                                                        type: new sap.extension.data.Numeric()
                                                    }).bindProperty("editable", {
                                                        path: "isNew",
                                                        formatter(data: any): any {
                                                            return data === false ? false : true;
                                                        }
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_project_name") }),
                                                    new sap.extension.m.Input("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "name",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 100
                                                        }),
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_project_activated") }),
                                                    new sap.extension.m.EnumSelect("", {
                                                        enumType: ibas.emYesNo
                                                    }).bindProperty("bindingValue", {
                                                        path: "activated",
                                                        type: new sap.extension.data.YesNo(),
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_project_canceled") }),
                                                    new sap.extension.m.EnumSelect("", {
                                                        enumType: ibas.emYesNo
                                                    }).bindProperty("bindingValue", {
                                                        path: "canceled",
                                                        type: new sap.extension.data.YesNo(),
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_project_status") }),
                                                    new sap.extension.m.EnumSelect("", {
                                                        enumType: ibas.emDocumentStatus
                                                    }).bindProperty("bindingValue", {
                                                        path: "status",
                                                        type: new sap.extension.data.DocumentStatus(),
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_project_startdate") }),
                                                    new sap.extension.m.DatePicker("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "startDate",
                                                        type: new sap.extension.data.Date(),
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_project_closedate") }),
                                                    new sap.extension.m.DatePicker("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "closeDate",
                                                        type: new sap.extension.data.Date(),
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_project_manager") }),
                                                    new sap.extension.m.UserInput("", {
                                                        showValueHelp: true,
                                                    }).bindProperty("bindingValue", {
                                                        path: "manager",
                                                        type: new sap.extension.data.Numeric(),
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_project_reference1") }),
                                                    new sap.extension.m.Input("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "reference1",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 100
                                                        }),
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_project_reference2") }),
                                                    new sap.extension.m.Input("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "reference2",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 200
                                                        }),
                                                    }),
                                                ]
                                            }).addStyleClass("sapUxAPObjectPageSubSectionAlignContent")
                                        ]
                                    }),
                                ]
                            }),
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("businesspartner_title_others"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            new sap.ui.layout.form.SimpleForm("", {
                                                editable: true,
                                                width: "auto",
                                                content: [
                                                    /*
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_project_dataowner") }),
                                                    new sap.extension.m.DataOwnerInput("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "dataOwner",
                                                        type: new sap.extension.data.Numeric(),
                                                    }),
                                                    */
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_project_teammembers") }),
                                                    new sap.extension.m.SelectionInput("", {
                                                        showValueHelp: true,
                                                        chooseType: ibas.emChooseType.MULTIPLE,
                                                        repository: initialfantasy.bo.BORepositoryInitialFantasy,
                                                        dataInfo: {
                                                            type: initialfantasy.bo.User,
                                                            key: initialfantasy.bo.User.PROPERTY_DOCENTRY_NAME,
                                                            text: initialfantasy.bo.User.PROPERTY_NAME_NAME
                                                        },
                                                        criteria: [
                                                            new ibas.Condition(initialfantasy.bo.User.PROPERTY_ACTIVATED_NAME, ibas.emConditionOperation.EQUAL, ibas.emYesNo.YES)
                                                        ]
                                                    }).bindProperty("bindingValue", {
                                                        path: "teamMembers",
                                                        type: new sap.extension.data.Alphanumeric()
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_project_organization") }),
                                                    new sap.extension.m.DataOrganizationInput("", {
                                                        showValueHelp: true,
                                                    }).bindProperty("bindingValue", {
                                                        path: "organization",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 8
                                                        }),
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_project_remarks") }),
                                                    new sap.extension.m.TextArea("", {
                                                        rows: 3,
                                                    }).bindProperty("bindingValue", {
                                                        path: "remarks",
                                                        type: new sap.extension.data.Alphanumeric(),
                                                    }),
                                                ]
                                            }).addStyleClass("sapUxAPObjectPageSubSectionAlignContent")
                                        ]
                                    }),
                                ]
                            }),
                        ]
                    });
                }

                private page: sap.extension.uxap.ObjectPageLayout;

                /** 显示数据 */
                showProject(data: bo.Project): void {
                    this.page.setModel(new sap.extension.model.JSONModel(data));
                    // 改变页面状态
                    sap.extension.pages.changeStatus(this.page);
                }
                protected onClosed(): void {
                    super.onClosed();
                }
            }
        }
    }
}
