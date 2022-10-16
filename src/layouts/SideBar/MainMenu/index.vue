<template>
  <el-menu
    class="el-menu-demo h-full"
    background-color="#ffffff"
    active-text-color="#6cd8f1"
    text-color="#303133"
  >
    <sub-menu :menu-list="menuList"></sub-menu>
  </el-menu>
</template>
<script setup lang="ts">
import SubMenu from '../SubMenu/index.vue';
const menuList: AuthRoute.MenuTypes[] = [
  {
    name: 'item one',
    children: [
      {
        name: 'item one one',
        children: [
          {
            name: 'item one, one one'
          }
        ]
      },
      {
        name: 'item one two'
      }
    ]
  },
  {
    name: 'item two',
    children: [
      {
        name: 'item two one'
      },
      {
        name: 'item two two'
      }
    ]
  },
  {
    name: 'item three',
    children: [
      {
        name: 'item three one'
      },
      {
        name: 'item three two'
      }
    ]
  },
  {
    name: 'item four'
  }
];
// import { menuTree } from '@/mock/tree';
// import { reactive } from 'vue';

// console.log(menuTree);

// const list = reactive(menuTree.list);
</script>
