import router from '@/router/index'

// 刷新当前路由
export const refresh = tagName => {
  let { currentRoute } = router;
  let name = (tagName || currentRoute.name);
  router.replace({
    path: '/redirect/' + name,
  })
}