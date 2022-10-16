<template>
  <el-row justify="space-between" align="middle" class="bg-white top-bar h-full">
    <el-col :span="20" :lg="20" :md="18" :sm="16" :xs="14">右侧标签</el-col>
    <el-col :span="4" :lg="4" :md="6" :sm="8" :xs="10">左侧标签</el-col>
  </el-row>
</template>

<script setup lang="ts"></script>
<style lang="less" scoped>
.top-bar {
  font-size: 1.6rem;
}
</style>
