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

    removeRoute(name + '' + time);
  }
};

/**
 * 
 * @param {*} arr 需要遍历的数组
 * @param {*} id 需要遍历出所有父级的子id
 * @param {*} result 默认数组
 * @returns Array 包含子级及父级的数组
 */
export const getMapRoute = (arr, id, result = []) => {
  for(let i = 0, len = arr.length; i < len; i++) {
    let item = arr[i];
    result.push(item);

    if(item.id == id) {
      if(result.length === 1) return result;
      return true
    }

    if(item.children && item.children.length > 0) {
      let flag = getMapRoute(item.children, id, result);
      if(flag) {
        return result
      }
    }

    result.pop()
  }

  return false
}
