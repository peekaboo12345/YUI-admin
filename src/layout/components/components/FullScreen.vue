<template>
  <el-tooltip
    class="item"
    effect="dark"
    :content="fullscreen ? '退出全屏' : '全屏'"
    placement="bottom"
  >
    <svg-icon :name="fullscreen ? 'svg-full-screen-min' : 'svg-icon-full-screen-max'" @click="handleFullScreen"></svg-icon>
  </el-tooltip>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import screenfull from 'screenfull'

const fullscreen = ref(false);

// 设置监听器
onMounted(() => {
  screenfull.on('change', change)
})

// 监听变化
const change = () => {
  fullscreen.value = screenfull.isFullscreen
}
// 全屏切换
const handleFullScreen = () => {
  screenfull.toggle()
}
</script>

<style></style>
