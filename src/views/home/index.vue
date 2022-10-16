<!--  -->
<template>
  <div>
    home
    <el-button @click="setTest">点击</el-button>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { init } from '@/hooks/common';
let { user } = init();
let test = computed(() => user.test)
let setTest = () => user.setTest(!test.value)

</script>
<style lang='scss' scoped>

</style>