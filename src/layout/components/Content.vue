<!--  -->
<template>
  <div class="content" id="content">
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
import { init } from '@/hooks/common.js';
import watermark from '@/utils/watermark.js';
import { computed, watch, onMounted } from 'vue';
let { base, route, common } = init();

let keepAliveComponentNames = computed(() => base.keepAliveComponentNames);
let dom = {};
onMounted(() => {
  watch(
    () => common.isWatermark,
    (value) => {
      if (value) {
        dom = watermark({
          watermarl_element: 'content',
          watermark_txt: base.userinfo.username + '   ' + base.userinfo.userId,
          watermark_width: 400,
          watermark_y: 15,
        });
      } else {
        dom.remove && dom.remove();
      }
    },
    {
      immediate: true,
    },
  );
});
</script>
<style lang="scss" scoped>
.content {
  width: calc(100vw - $asideW);
  height: calc(100vh - $headerH - $tagView);
  background-color: var(--el-bg-color);
  padding: 8px;
  position: relative;
  section {
    width: 100%;
    height: 100%;
    overflow: auto;

    :deep(.el-loading-parent--relative) {
      height: max-content;
      width: 100%;
    }
  }
}
.content:not(.isTagView) {
  height: calc(100vh - $headerH);
}
</style>
