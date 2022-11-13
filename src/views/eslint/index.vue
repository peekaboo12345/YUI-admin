<template>
  <div ref="eslint">
    <div class="text">eslint</div>
    <div class="text">eslint</div>
    <div class="text">eslint</div>
    <div class="text">eslint</div>
    <div class="text">eslint</div>
    <div class="text">eslint</div>
    <div class="text">eslint</div>
    <div class="text">eslint</div>
    <div class="text">eslint</div>
    <div class="text">eslint</div>
    <div class="text">eslint</div>
    <div class="text">eslint</div>
    <div class="text">eslint</div>
    <div class="text">eslint</div>
    <div class="text">eslint</div>
    <div class="text">eslint</div>
    <div class="text">eslint</div>
    <div class="text">eslint</div>
    <div class="text">eslint</div>
    <div class="text">eslint</div>
    <div class="text">eslint</div>
    <div>{{ number }}</div>
    <div>
      <el-button @click="openLoading">打开</el-button>
      <el-button @click="closeLoading">关闭</el-button>
    </div>
    <el-button @click="num">打开</el-button>
  </div>
</template>

<!-- 这个script主要是问了增加name属性，需要缓存时使用 -->
<script>
export default {
  name: 'eslint',
};
</script>

<script setup>
import loading from '@/hooks/loading';
import { ref } from 'vue';
let eslint = ref('');
let { openLoading, closeLoading } = loading(eslint);

let number = ref(1);
let num = () => {
  number.value++;
};
</script>

<style scoped lang="scss">
.text {
  line-height: 32px;
  font-size: 28px;
}
</style>
