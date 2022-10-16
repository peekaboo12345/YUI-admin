import { defineStore, acceptHMRUpdate } from 'pinia';
import { getUser, getRoutes} from '@/api/login';
import { setStorage, getData } from '@/utils/storage'
import { useBaseStore } from './base';
import router from '@/router';

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: {}, // 储存用户信息
    routes: [], // 左侧菜单路由结构
    routeList: [], // 已被格式化后的路由，全部是同级，并且在path: '/'下
    test: true,
  }),
  getters: {

  },
  actions: {
    setTest(value){
      this.test = value;
      console.log(this.test, 'this.test')
    },
    /**
     * 获取用户信息及路由
     */
    async getRoutes(){
      console.log('请求路由')
      let {data:userData} = await getUser({token: getData('token')}); // 获取用户信息
      this.userInfo = userData; // 储存当前用户信息

      let {data:routes} = await getRoutes({ // 通过用户信息获取对应的展示菜单
        userId: userData.id
      })
      this.routes = routes; // 储存左侧菜单未格式化的信息，用于按层级排列和搜索功能
      this.routeList = this.mapAddRoute(routes, 'layout') // 格式化获取的路由
      console.log(this.routeList, 'routeList')
    },
    /**
     * 
     * @param {*} routes 请求返回的路由数据
     * @param {*} routeName 当前父路由的name
     * @returns 过滤完成的路由数据
     */
    mapAddRoute(routes, routeName) {
      let base = useBaseStore();
      let arr = []; // 储存所有的路由信息

      // vite 不支持import直接导入(本人已试过很多方式),只能用这一种
      // 限制了目录结构，入口都必须以./views/test/index.vue的方式
      const modules = import.meta.glob('../views/**/*.vue')
      
      // 循环组装子路由
      // 实现思路: 左侧菜单栏使用后台返回的路由层级显示，这个将所有路由转换为同一级，这样只需要用Content组件内的一层router-view就可以显示
      // 所有路由的path都必须以/开头，那样就不会有层级关系，都以根路径开始
      for(let i = 0, len = routes.length; i < len ; i++) {
        let item = routes[i];
        if(item.children && item.children.length > 0) {
          let childredRoute = this.mapAddRoute(item.children, item.name);
          arr.push(...childredRoute)
        } else {
          if(item.component) {
            item.component = modules[`../views/${item.component}/index.vue`]; // 只有这一种可以用
            // item.component = () => import(`./views/${item.component}.vue`);
            // item.component = defineAsyncComponent(() => import(`./views/${item.component}.vue`));
          }
        }

        // 向父路由添加子路由
        router.addRoute(routeName, item)

        arr.push(item);
    
        item.meta.isFixed ? base.addTagView(item) : ''; // 将固定的tagview项添加到页面中
      }
      console.log('路由信息添加到store')
      return arr
    }
  },
  // 使用该插件，开启数据缓存
  persist: {
    //这里存储默认使用的是session
    //key的名称
    key: 'user',
    //更改默认存储，我更改为localStorage
    storage: window.sessionStorage,
    // 默认是全部进去存储
    }
})

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
// }