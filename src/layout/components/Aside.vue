<!--  -->
<template>
  <div class="aside_group">
    <div class="aside-logo" @click="openHome">
      <img v-if="!isCollapse" src="/img/logo-sidebar.png" class="Fold">
      <img v-else src="/img/avatar.jpg" class="Expand">
    </div>
    <el-scrollbar class="scrollbar_group">
      <el-menu
        :default-active="activePath"
        @select="menuSelect"
        :collapse="isCollapse"
        :collapse-transition="false"
      >
        <menu-item v-for="item in routes" :key="item.index" :item="item"></menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { computed, watch, ref } from "vue";
import { refresh } from '@/utils/router'
import MenuItem from './components/MenuItem.vue';
import { init } from '@/hooks/common.js';
export default {
  components: {
    MenuItem
  },
  setup(){
    let { base, user, route, router} = init()
    let isCollapse = computed(() => base.isCollapse);
    let routes = computed(() => user.routes);
    let routeList = computed(() => user.routeList);
    // 默认展示的页面(左侧侧边栏默认选中)
    let activePath = ref('');
    // 点击logo
    let openHome = () => {
      router.push('/')
    }

    // 点击左侧菜单进行页面的刷新(这里的index是route的name)
    let menuSelect = (index, indexPath, item, routeResult) => {
      // 点击左侧刷新有点影响用户体验
      //refresh(index)

      // 当前菜单没有name属性就跳过
      if(index) {
        let route = routeList.value.find(el => el.name === index)
        base.addTagView(route)
      }
    }

    // 监听路由变化,更新左侧展示的菜单项
    watch(() =>router.currentRoute.value.name, (newValue,oldValue)=> {
      activePath.value = newValue;
    },{ immediate: true })

    return {
      isCollapse,
      routes,
      activePath,
      menuSelect,
      openHome
    }
  }
}
</script>
<style lang='scss' scoped>

.aside_group {
  position: absolute;
  top: 0;
  left: 0;
  width: $asideW;
  height: 100vh;
  overflow: hidden;
  border-right: solid 1px var(--el-menu-border-color);
  user-select: none;
  transition: width var(--el-transition-duration);
  z-index: 999;
  .aside-logo{
    height: $logoH;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 var(--el-menu-base-level-padding);
    .Expand{
      width: 48px;
    }
    .Fold{
      width: 100%;
    }
  }
  .scrollbar_group{
    height: calc(100vh - $logoH);
    width: $asideW;
    background-color: var(--el-menu-bg-color)
  }

  ::v-deep(.el-menu){
    border-right: none;
  }
  ::v-deep(.el-menu-item.is-active){
    box-shadow: 3px 0px 0px $systemColor;
    width: calc(100% - 3px);
  }
}
</style>