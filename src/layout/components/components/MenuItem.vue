<!--  -->
<template>
    <el-sub-menu v-if="item.children && item.children.length > 0" :index="item.name">
      <template #title>
        <Zicon v-if="icon" :icon="icon"></Zicon>
        <span>{{title}}</span>
      </template>
      <menu-item v-for="el in item.children" :key="el.name" :item="el"></menu-item>
    </el-sub-menu>

    <el-menu-item v-else :index="item.name">
        <Zicon v-if="icon" :icon="icon"></Zicon>
        <template #title>
           <Zlink :href="item.path" :title="title"></Zlink>
        </template>
    </el-menu-item>
</template>

<script>
import Zicon from './Icon.vue';
import Zlink from './Link.vue';
export default {
  name: 'MenuItem',
  components: {
    Zicon,
    Zlink
  },
  props: ['item'],
  setup(props){
    let { item } = props;
    let { icon, title } = item.meta;
    return {
      item,
      icon,
      title
    }
  }
}


</script>
<style lang='scss' scoped>

</style>