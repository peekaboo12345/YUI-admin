<template>
  <Video ref="videoRef"></Video>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Video from './index.vue';
import initScroll from '@/hooks/scroll';
initScroll();

const videoRef = ref();
onMounted(() => {
  videoRef.value.init({
    poster: 'http://localhost:9527/yuan.jpg',
    src: 'http://localhost:9527/123.mp4',
  });
});
</script>
<style scoped lang="scss">
.flex {
  display: flex;
  justify-content: space-between;
}
</style>
