import Vue from "vue";
import Router from "vue-router";
import { ROUTER_MODE } from "../config/app";

import Home from "../views/home/index.vue";

// 静态路由
import err401 from "../views/error/err401.vue";
import err404 from "../views/error/err404.vue";
import err500 from "../views/error/err404.vue";
import login from "../views/login/index.vue";
// 前言
import main from "../views/home/main.vue";

// 公共模块测试
import uploadList from "../views/components/uploadList.vue";

// 管理组相关
import adminRouter from "../views/userManage/admin/router.vue";
import authAdmin from "../views/userManage/admin/authAdmin.vue";
import authRole from "../views/userManage/admin/authRole.vue";
import authPermissionRule from "../views/userManage/admin/authPermissionRule.vue";

// 广告管理
// import adSite from "../views/adManage/adSite.vue";
// import ad from "../views/adManage/ad.vue";

Vue.use(Router);

// 注意 权限字段 authRule （严格区分大小写）
export const constantRouterMap = [
    {
        path: "*",
        component: err404,
        hidden: true
    },
    {
        path: "/401",
        component: err401,
        name: "401",
        hidden: true
    },
    {
        path: "/404",
        component: err404,
        name: "404",
        hidden: true
    },
    {
        path: "/500",
        component: err500,
        name: "500",
        hidden: true
    },
    {
        path: "/login",
        component: login,
        name: "登录",
        hidden: true
    },
    {
        path: "/",
        component: Home,
        redirect: "/readme",
        name: "首页",
        hidden: true
    },
    {
        path: "/readme",
        component: Home,
        redirect: "/readme/main",
        icon: "shouye",
        name: "首页",
        noDropdown: true,
        children: [
            {
                path: "main",
                component: main
            }
        ]
    },
    {
        path: "/components",
        redirect: "/components/uploadList",
        component: Home,
        name: "图片管理 picture",
        icon: "tongyong",
        children: [
            {
                path: "uploadList",
                name: "上传图片的展示",
                component: uploadList
            }
        ]
    }
];

export default new Router({
    // mode: 'history', //后端支持可开
    mode: ROUTER_MODE,
    routes: constantRouterMap,
    strict: process.env.NODE_ENV !== "production"
});

export const asyncRouterMap = [
    {
        path: "/userManage",
        redirect: "/userManage/adminManage/index",
        component: Home,
        icon: "guanliyuan1",
        name: "用户管理 User",
        meta: {
            authRule: ["user_manage"]
        },
        // noDropdown: true,
        children: [
            {
                path: "/userManage/adminManage",
                component: adminRouter,
                redirect: "/userManage/authAdmin/index",
                name: "管理组",
                icon: "0",
                meta: {
                    authRule: ["user_manage/admin_manage"]
                },
                children: [
                    {
                        path: "authAdmin",
                        component: authAdmin,
                        name: "管理员管理",
                        icon: "0",
                        meta: {
                            authRule: ["admin/auth_admin/index"]
                        }
                    },
                    {
                        path: "authRole",
                        component: authRole,
                        name: "角色管理",
                        icon: "0",
                        meta: {
                            authRule: ["admin/auth_role/index"]
                        }
                    },
                    {
                        path: "authPermissionRule",
                        component: authPermissionRule,
                        name: "权限管理",
                        icon: "0",
                        meta: {
                            authRule: ["admin/auth_permission_rule/index"]
                        }
                    }
                ]
            }
        ]
    }
    // {
    //     path: "/adManage",
    //     redirect: "/adManage/adSite",
    //     component: Home,
    //     icon: "guanggao",
    //     name: "文字管理 Text",
    //     meta: {
    //         authRule: ["ad_manage"]
    //     },
    //     // noDropdown: true,
    //     children: [
    //         {
    //             path: "adSite",
    //             component: adSite,
    //             name: "文字管理 Text",
    //             icon: "0",
    //             meta: {
    //                 authRule: ["admin/ad_site/index"]
    //             }
    //         }
    //         // },
    //         // {
    //         //     path: "ad",
    //         //     component: ad,
    //         //     name: "文字管理",
    //         //     icon: "0",
    //         //     meta: {
    //         //         authRule: ["admin/ad/index"]
    //         //     }
    //         // }
    //     ]
    // }
];
