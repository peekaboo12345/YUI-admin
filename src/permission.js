import router from './router/index';
import { getData } from '@/utils/storage';
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/store/user';
import { nextTick } from 'vue';
import axios from 'axios';
import Nprogress from '@/config/nprogress'
let firstVisit = true; // 是否第一次进入路由，解决刷新浏览器动态路由清空的问题
router.beforeEach(async (to, from, next) => {
  console.log('firstVisit', firstVisit)
  console.log('router.beforeEach')
  console.log(router.getRoutes())
  axios.post('/getUser', {}).then(() => {
    console.log('res')
  })
  Nprogress.start()
  let user = useUserStore();
  if(to.path !== '/login') {
    // 当前有登录信息
    if(getData('token')) {

      // 如果第一次进入路由就
      if(firstVisit) {
        console.log(1)
        //await user.getRoutes()
      }
      next()
    } else {
      // 未登录或登录信息删除
      ElMessage({
        message: '获取登录信息失败，请重新登录',
        type: 'warning'
      })

      next({name: 'login'})
    }
  } else {
    next()
  }
  Nprogress.done()
  firstVisit = false;
})

