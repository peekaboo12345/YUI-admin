<!--  -->
<template>
  <div class="header_group">
    <div class="left">
      <Iconfont
        @click="setCollapse"
        :icon="isCollapse ? 'icon-zhankai' : 'icon-shouqi'"
      ></Iconfont>
    </div>
    <div class="right">
      <!-- 控制主题开关 -->
      <Switch></Switch>

      <!-- 分享 -->
      <Share></Share>

      <!-- 控制全屏 -->
      <FullScreen></FullScreen>

      <!-- 设置 -->
      <Setting />

      <!-- 个人信息 -->
      <el-dropdown
        :hide-on-click="true"
        trigger="click"
        @command="onCommand"
        placement="bottom-end"
      >
        <div>
          <el-avatar
            shape="square"
            :size="36"
            fit="fill"
            src="/img/touxiang.png"
          />
          <!-- <span class="el-dropdown-link">
            <el-icon class="el-icon--right"><ArrowDown /></el-icon>
          </span> -->
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="user"
              ><el-icon><User /></el-icon>个人信息</el-dropdown-item
            >
            <el-dropdown-item divided command="switchButton"
              ><el-icon><SwitchButton /></el-icon>退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import Switch from './components/switch.vue';
import FullScreen from './components/FullScreen.vue';
import Share from './components/share.vue';
import Setting from './components/Setting.vue';
import { SwitchButton, User } from '@element-plus/icons-vue';
import { init } from '@/hooks/common.js';
let { common, route, router } = init();

// 控制左侧菜单
let isCollapse = computed(() => common.isCollapse);
const setCollapse = () => common.setCollapse(!isCollapse.value);

let onCommand = (name, props) => {
  console.log(name, props);
  switch (name) {
    case 'user':
      router.push({ name: 'user' });
      break;
    case 'switchButton':
      localStorage.removeItem('base');
      localStorage.removeItem('common');
      router.push({ path: '/login', replace: true });
      break;
  }
};
</script>
<style lang="scss" scoped>
.header_group {
  user-select: none;
  height: $headerH;
  line-height: $headerH;
  border-bottom: 1px solid var(--el-menu-border-color);
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
  transition: all var(--el-transition-duration);
  font-size: 18px;

  .left {
  }

  .right {
    display: flex;
    align-items: center;
    justify-content: right;
    gap: 12px;

    .el-dropdown-link {
      margin-left: 10px;
      .el-icon {
        vertical-align: -3px;
      }
    }
    ::v-deep(.el-tooltip__trigger) {
      display: flex;
      align-items: center;
    }
  }
}
</style>
