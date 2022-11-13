import { createApp } from 'vue';
import router from '@/router';
import pinia from '@/store';
import ElementPlus from 'element-plus';

import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css'; // 暗黑主题样式

import '@/style/index.scss';

import Iconfont from '@/components/iconfont.vue';
import App from './App.vue';
import '@/mock'; // 拦截请求

const app = createApp(App);
app.component('Iconfont', Iconfont);
app.use(router).use(pinia).use(ElementPlus);
app.mount('#app');
