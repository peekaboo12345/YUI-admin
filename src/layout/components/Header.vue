<!--  -->
<template>
  <div class="header_group">
    <div class="left">
      <el-icon @click="setCollapse">
        <Expand v-if="isCollapse"/>
        <Fold v-else/>
      </el-icon>
    </div>
    <div class="right">
      <!-- 控制全屏 -->
      <FullScreen></FullScreen>

      <!-- 控制主题开关 -->
      <Switch></Switch>

      <!-- 个人信息 -->
      <el-dropdown :hide-on-click="false" trigger="click" placement="bottom-end">
        <div>
          <el-avatar shape="square" :size="36" fit="fill" src="/img/avatar.jpg" />
            <span class="el-dropdown-link">
              <el-icon class="el-icon--right"><arrow-down /></el-icon>
            </span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item><el-icon><User/></el-icon>个人信息</el-dropdown-item>
            <el-dropdown-item divided><el-icon><SwitchButton /></el-icon>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import Switch from './components/switch.vue'
import FullScreen from './components/FullScreen.vue'
import { init } from '@/hooks/common.js';  
let { base, route, router} = init()  

// 控制左侧菜单
let isCollapse = computed(() => base.isCollapse);
const setCollapse = () => base.setCollapse(!isCollapse.value)

// 控制主题显示
let theme = ref(false);


</script>
<style lang='scss' scoped>
.header_group{
  user-select: none;
  position: absolute;
  left: $asideW;
  width: calc(100vw - $asideW);
  height: $headerH;
  line-height: $headerH;
  border-bottom: 1px solid var(--el-menu-border-color);
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  transition: all var(--el-transition-duration);

  .left{

  }

  .right{
    display: flex;
    align-items: center;
    justify-content: right;

    .el-dropdown-link{
      margin-left: 10px;
      .el-icon{
        vertical-align: -3px;
      }
    }
    ::v-deep(.el-tooltip__trigger){
      display: flex;
      align-items: center;
    }
  }
}
</style>