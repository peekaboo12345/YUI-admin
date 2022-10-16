import { defineStore, acceptHMRUpdate } from 'pinia'
import router from '@/router';
import { setCss, removeCss, addClass, removeClass } from '@/utils/baseCss';
import variable from '@/style/variable.module.scss';

export const useBaseStore = defineStore('base', {
  state(){
    return {
      isCollapse: false, // 是否折叠菜单
      theme: '', // 当前主题，默认亮色主题
      tagViews: [], // 储存当前点击的菜单
      test: []
    }
  },
  getters: {
    keepAliveComponentNames(){
      return this.tagViews.map(el => el.name)
    }
  },
  actions: {
    // 设置菜单开关
    setCollapse(value){
      this.isCollapse = value;
      console.log(this.isCollapse, 'this.isCollapse')
      this.test.push({name: new Date().getTime()})
      if(value) {
        setCss('--z-aside-width', variable.foldWidth)
      } else {
        removeCss('--z-aside-width')
      }
    },
    // 设置主题
    setTheme(value){
      if(value) {
        addClass(value)
      } else {
        this.theme ? removeClass(this.theme) : null
      }
      this.theme = value;
      console.log(value, 'Theme')
    },

    // 设置tagView
    addTagView(route){
      route = Object.assign({}, route); // 使响应式失
      if(!this.tagViews.some(el => el.name === route.name)) {
        this.tagViews.push(route)
      }
    },
    
    // 设置默认跳转固定路由
    setDefaultTagView(){
      // 当前没有跳转任何路由就跳转最后一个
      if(!router.currentRoute.value.name && this.tagViews.length > 0) {
        router.push({name: this.tagViews[this.tagViews.length - 1].name})
      }
    },

    // 删除当前tagview项
    delTagView(name) {
      this.tagViews = this.tagViews.filter(el => el.name !== name)
      if(this.tagViews.length > 0) {
        router.replace({name: this.tagViews[this.tagViews.length - 1].name})
      }
    }
  },
  // 使用该插件，开启数据缓存
  persist: {
    //这里存储默认使用的是session
    //key的名称
    key: 'base',
    //更改默认存储，我更改为localStorage
    storage: window.sessionStorage,
    // 默认是全部进去存储
  }
})

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useBaseStore, import.meta.hot))
// }