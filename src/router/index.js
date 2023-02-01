import { createRouter, createWebHashHistory } from 'vue-router';
import Np from '@/config/nprogress';
import { ElMessage } from 'element-plus';
import { useBaseStore } from '@/store/base';
import pinia from '@/store/index';
import { _setAsyncRouter, _setOneComponent } from '@/router/routerUtils.js';

let routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/404.vue'),
      },
      {
        path: '/user',
        name: 'user',
        meta: {
          id: '88888888', // 设置id是为了在跳转user详情页时，将当前路由添加到tagview中(这三个必传)
          title: '个人信息',
          name: 'user',
        },
        component: () => import('@/layout/user.vue'),
      },
    ],
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
        component: () => import('@/layout/redirect.js'),
      },
    ],
  },
];
// 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 路由拦截
router.beforeEach(async (to, from, next) => {
  console.log(to, 'resrsr')
  Np.start();
  // 调用store必须在路由函数中使用，可参考官网
  let base = useBaseStore(pinia);
  // 主要处理全屏打开路由的逻辑
  if (to.query.component) {
    _setOneComponent(to.query);
    next();
    return;
  }
  if (!['login'].includes(to.name)) {
    // 当前有登录信息并且有路由
    if (base.token) {
      // 当前没有动态路由信息
      if (router.getRoutes().length < 7) {
        base.mapRouteList = [];
        _setAsyncRouter(base.routeList);
        next({ ...to, replace: true });
      } else {
        next();
      }
    } else {
      // 未登录或登录信息删除
      ElMessage({
        message: '获取登录信息失败，请重新登录',
        type: 'warning',
      });

      next({ name: 'login' });
    }
  } else {
    next();
  }
  Np.done();
});

export default router;
