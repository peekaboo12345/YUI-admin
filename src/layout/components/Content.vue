<!--  -->
<template>
  <div class="content">
    <section>
      <router-view v-slot="{ Component }">
        <transition name="fade-transform" mode="out-in">
          <keep-alive :include="keepAliveComponentNames">
            <component :is="Component" :key="route.name" />
          </keep-alive>
        </transition>
      </router-view>
    </section>
  </div>
</template>

<script setup>
import { init } from "@/hooks/common.js";
import { computed } from "vue";

let { base, route } = init();

let keepAliveComponentNames = computed(() => base.keepAliveComponentNames);
</script>
<style lang='scss' scoped>
.content {
  width: calc(100vw - $asideW);
  height: calc(100vh - $headerH - $tagView);
  position: absolute;
  left: $asideW;
  top: calc($headerH + $tagView);
  z-index: 1;
  background-color: #f5f5f5;
  padding: 10px 0 0 10px;
  section{
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: #fff;
  }
}
</style>