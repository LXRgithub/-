<!-- 公共头-当前登录者信息 -->
<template>
  <div class="header-info">
       <el-dropdown>
            <span>当前</span>
            <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'header-info'
}
</script>

<style type="text/scss" lang="scss" scoped>
.header-info{
    width: 100%;
    height: 100%;
    border: 2px solid;
}
</style>
