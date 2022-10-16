<!--  -->
<template>
<div style="width: 1800px;height: 1080px">
  <el-button @click="clickFn">点击发送</el-button>
  <div>test</div>
  <div>test</div>
  <div>test</div>
  <div>test</div>
  <div>test</div>
  <div>test</div>
  <div>test</div>
  <div>test</div>
  <div>test</div>
  <div>test</div>
  <div>test</div>
  <div>test</div>
  <div>test</div>
  <div>test</div>
  <div>test</div>
  <div>test</div>
  <div>test</div>
  <div>test</div>
  <div>test</div>
  <div>test</div>
  <div>test</div>
  <div>test</div>
  <div>test</div>
  <div>test</div>
  <div>test</div>
  <div>test</div>
  <div>test</div>
  <div>test</div>
  <div>test</div>
  <div>test</div>
  <div>test</div>
  <div>test</div>
  <div>test</div>
  <div>test</div>
  <div>test</div>
  <div>test</div>
  <div>test</div>
  <div>test</div>
  <div>test</div>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { test } from '@/api/test'

let clickFn = () => {
  test({})
}

</script>
<style lang='scss' scoped>

</style>