<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>{{level2}}</el-breadcrumb-item>
    <el-breadcrumb-item>{{level3}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  props: ["level2", "level3"]
};
</script>

<style scoped>

.el-breadcrumb {
  height: 45px;
  line-height: 45px;
  padding-left: 10px;
}
</style>
