import router from '@/router/index';

// 刷新当前路由
export const refresh = (tagName) => {
  let { currentRoute } = router;
  let name = tagName || currentRoute.value.name;
  router.replace({
    path: '/redirect/' + name,
  });
};

/**
 * 将当前路由在新的窗口打开
 * @param {*} route 包含path、name、component的对象
 */
export const openNewWindow = async (route) => {
  let { path, name, component } = route;
  if (path && name && component) {
    let time = new Date().getTime();
    let newRoute = {
      path: path + '' + time,
      name: name + '' + time,
      component: '',
    };

    let removeRoute = router.addRoute(newRoute);
    let url = router.resolve({
      name: name + '' + time,
      query: {
        path: path,
        name: name,
        component,
      },
    });
    // router.push({ ...router.currentRoute.value, replace: true });
    window.open(url.href, '_blank');
    console.log(router.getRoutes());

    removeRoute(name + '' + time);
  }
};
