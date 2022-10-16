<!--  -->
<template>
  <!-- 左侧导航栏 -->
  <Aside></Aside>

  <!-- 头部 -->
  <Header></Header>
  <!-- 动态路由标签栏 -->
  <TagView></TagView>
  <!-- 内容区 -->
  <Content></Content>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import Aside from "./components/Aside.vue";
import Header from "./components/Header.vue";
import Content from "./components/Content.vue";
import TagView from "./components/tagView.vue";
import { init } from "@/hooks/common";
// import {setStorage, getData} from '@/utils/storage'
let { base, user, router } = init();
// // 页面刷新后读取缓存信息
// user.routes = getData('routes');
// user.routeList = getData('routeList');
let tagViews = computed(() => base.tagViews);
console.log("setup");
user.getRoutes()
onMounted(() => {
  console.log("onMounted");
  if (tagViews.value.length > 0) {
    router.push({ name: tagViews.value[tagViews.value.length - 1].name });
  }
});
</script>
<style lang='sass' scoped>
</style>