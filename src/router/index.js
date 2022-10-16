import { createRouter, createWebHashHistory } from 'vue-router'

export const baseRoutes = [
  // 根路由要放在第一，后边动态添加路由容易获取
  {
    path: '/',
    name: 'layout',
    component: () => import('@/layout/index.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/login/index.vue'),
  },
  {
    path: '/redirect',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/redirect/:name(.*)',
        component: () => import('@/layout/redirect.js')
      }
    ]
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes: baseRoutes
})