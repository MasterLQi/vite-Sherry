<template>
  <template v-for="menu of menuList" :key="menu.name">
    <el-sub-menu :index="menu.name" v-if="isVaildChildren(menu)">
      <template #title>
        <span>{{ menu.name }}</span>
      </template>
      <sub-menu :menu-list="(menu.children as AuthRoute.MenuTypes[])"></sub-menu>
    </el-sub-menu>
    <el-menu-item :index="menu.name" v-else>
      {{ menu.name }}
    </el-menu-item>
  </template>
</template>
<script lang="ts" setup>
import SubMenu from './index.vue';
import { toRefs } from 'vue';
import { isUndefined } from '@/utils';
interface PropsType {
  menuList: AuthRoute.MenuTypes[];
}

const props = defineProps<PropsType>();

const { menuList } = toRefs(props);

/**
 * 判断subMenuList 中的chidlren是否为合法的有效值
 * 若有效,则返回true, 否则返回false
 */
function isVaildChildren(menuList: MenuTypes): boolean {
  // judge children is undefined or not
  if (isUndefined(menuList.children)) return false;

  // if children exist, judge this length;
  if (!menuList.children.length) return false;

  return true;
}
</script>
<style lang="less"></style>
