/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../borep/index.ts" />
/// <reference path="./postingperiod/index.ts" />
/// <reference path="./project/index.ts" />
/// <reference path="./dimension/index.ts" />
/// <reference path="./taxgroup/index.ts" />
/// <reference path="./coststructure/index.ts" />
/// <reference path="./costitem/index.ts" />
namespace accounting {
    export namespace app {
        /** 属性-导航 */
        const PROPERTY_NAVIGATION: symbol = Symbol("navigation");
        /** 模块控制台 */
        export class Console extends ibas.ModuleConsole {
            /** 构造函数 */
            constructor() {
                super();
                this.id = CONSOLE_ID;
                this.name = CONSOLE_NAME;
                this.version = CONSOLE_VERSION;
                this.copyright = ibas.i18n.prop("shell_license");
            }
            /** 创建视图导航 */
            navigation(): ibas.IViewNavigation {
                return this[PROPERTY_NAVIGATION];
            }
            /** 初始化 */
            protected registers(): void {
                // 注册功能
                this.register(new ProjectFunc());
                this.register(new CostStructureFunc());
                this.register(new PostingPeriodFunc());
                this.register(new CostItemFunc());
                this.register(new DimensionFunc());
                this.register(new TaxGroupFunc());
                // 注册服务应用
                this.register(new PostingPeriodChooseServiceMapping());
                this.register(new ProjectChooseServiceMapping());
                this.register(new DimensionChooseServiceMapping());
                this.register(new DimensionDataServiceMapping());
                this.register(new TaxGroupChooseServiceMapping());
                this.register(new CostStructureChooseServiceMapping());
                this.register(new CostStructureNodeChooseServiceMapping());
                this.register(new CostItemChooseServiceMapping());
                // 注册常驻应用

            }
            /** 运行 */
            run(): void {
                // 加载语言-框架默认
                ibas.i18n.load([
                    this.rootUrl + "resources/languages/accounting.json",
                    this.rootUrl + "resources/languages/bos.json",
                ], () => {
                    // 设置资源属性
                    this.description = ibas.i18n.prop(this.name.toLowerCase());
                    this.icon = ibas.i18n.prop(this.name.toLowerCase() + "_icon");
                    // 先加载ui导航
                    let uiModules: string[] = [];
                    if (!ibas.config.get(ibas.CONFIG_ITEM_DISABLE_PLATFORM_VIEW, false)) {
                        if (this.plantform === ibas.emPlantform.PHONE) {
                            // 使用m类型视图
                            uiModules.push("index.ui.m");
                        }
                    }
                    // 默认使用视图
                    if (uiModules.length === 0) {
                        // 使用c类型视图
                        uiModules.push("index.ui.c");
                    }
                    // 加载视图库
                    this.loadUI(uiModules, (ui) => {
                        // 设置导航
                        this[PROPERTY_NAVIGATION] = new ui.Navigation();
                        // 调用初始化
                        this.initialize();
                    });
                    // 保留基类方法
                    super.run();
                });
            }
        }
        /** 模块控制台 */
        export class ConsolePhone extends Console {
            /** 初始化 */
            protected registers(): void {
                this.register(new ProjectChooseServiceMapping());
                this.register(new TaxGroupChooseServiceMapping());
                this.register(new CostStructureChooseServiceMapping());
                this.register(new CostStructureNodeChooseServiceMapping());
                this.register(new CostItemChooseServiceMapping());
            }
        }
    }
}
