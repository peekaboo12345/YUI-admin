import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from '@/store'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { useUserStore } from './store/user'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css' // 暗黑主题样式
import '@/style/index.scss'
import "nprogress/nprogress.css"; // 引入加载进度css样式

// 解决Chrome51 版本以后，Chrome 增加了新的事件捕获机制－Passive Event Listeners
// 不使用插件会提示优化mousewheel/touch事件等
import 'default-passive-events'

import '@/mock'; // 引入mock，拦截请求
console.log('123')
import SvgIcon from 'components/SvgIcon.vue'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

import './permission'

let user = useUserStore(pinia)
// user.getRoutes()

app.component('SvgIcon', SvgIcon)

app.use(pinia).use(router).use(ElementPlus)

router.isReady().then(() => {
  app.mount('#app')
})