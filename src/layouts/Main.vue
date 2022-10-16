<template>
  <el-container>
    <el-header class="bg-white">
      <top-bar />
    </el-header>
    <el-container>
      <el-aside width="200px" class="bg-white h-screen overflow-hidden overscroll-y-auto">
        <side-bar />
      </el-aside>
      <el-main>
        <!-- 这里应该要上个过渡动画 -->
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts" setup>
import SideBar from './SideBar/index.vue';
import TopBar from './TopBar/index.vue';
</script>
<style lang="less" scoped>
.side-bar {
  height: 100vh;
}
</style>
