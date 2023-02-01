<template>
  <div>
    <FullScreen ref="fullScreen" :width="'max-content'">
      <img src="/1.jpg" height="240" width="320" class="image"
    /></FullScreen>
    <div>{{ value }}</div>
    <div>
      <button name="放大" @click="open">放大</button>
      <button name="缩小" @click="close">缩小</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FullScreen',
};
</script>

<script setup>
import { ref } from 'vue';
import FullScreen from './index.vue';
let fullScreen = ref();
let value = ref(0);
let open = () => {
  value.value++;
  fullScreen.value.open();
};

let close = () => {
  value.value--;
  fullScreen.value.close();
};
</script>
<style scoped lang="scss"></style>
