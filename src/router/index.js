/*
 * @Author: chaichai chaichai@cute.com
 * @Date: 2022-09-26 08:29:56
 * @LastEditors: fengyuanyao fengyuanyao@fanyu.com
 * @LastEditTime: 2022-10-14 10:02:08
 * @FilePath: \Vue-Second-dimensional-personal-blog\src\router\index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by CQUCC-4-433, All Rights Reserved. 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: '医 · 者'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView/LoginView.vue'),
    meta: {
      title: '登录 | 医 · 者'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView/RegisterView.vue'),
    meta: {
      title: '注册 | 医 · 者'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/FirstView/FirstView.vue'),
    meta: {
      title: '首页 | 医 · 者'
    }
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogView/BlogView.vue'),
    meta: {
      title: '博客 | 医 · 者'
    }
  },
  {
    path: '/back',
    name: 'back',
    component: () => import('../views/BackView/BackView.vue'),
    meta: {
      title: '后台 | 医 · 者'
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/404View.vue'),
    meta: {
      title: '404 | 医 · 者'
    }
  },

  { path: '*', redirect: '/404', hidden: true }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router