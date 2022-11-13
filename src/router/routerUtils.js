import { useBaseStore } from '@/store/base';
import pinia from '@/store/index';
import router from './index.js';

// vite 不支持import直接导入(本人已试过很多方式),只能用这一种
// 限制了目录结构，入口都必须以./views/test/index.vue的方式
const modules = import.meta.glob('../views/**/*.vue');

// 设置动态路由
export const _setAsyncRouter = (routes) => {
  let base = useBaseStore(pinia);

  // 循环组装子路由
  // 实现思路: 左侧菜单栏使用后台返回的路由层级显示，这个将所有路由转换为同一级，这样只需要用Content组件内的一层router-view就可以显示
  // 所有路由的path都必须以/开头，那样就不会有层级关系，都以根路径开始
  for (let i = 0, len = routes.length; i < len; i++) {
    let { id, path, name, component, isFixed, children, type } = routes[i];

    let item = { path, name, component: '', meta: { ...routes[i] } };

    if (children && children.length > 0) {
      _setAsyncRouter(children);
    } else {
      if (!path && type !== '1') continue;
      if (component) {
        item.component = modules[`../views/${component}.vue`]; // 只有这一种可以用
        // item.component = () => import(`./views/${item.component}.vue`);
        // item.component = defineAsyncComponent(() => import(`./views/${item.component}.vue`));

        if (!item.component) console.error(`${component}组件没有找到！`);
      }

      // 向父路由添加子路由
      router.addRoute('layout', item);

      base.mapRouteList.push(routes[i]);

      isFixed ? base.addTagView(routes[i]) : ''; // 将固定的tagview项添加到页面中
    }
  }
};

export const _setOneComponent = (query) => {
  let newRoute = {
    path: query.path,
    name: query.name,
    component: modules[`../views/${query.component}.vue`],
  };

  let removeRoute = router.addRoute(newRoute);
  router.push({ path: query.path, replace: true });
};
