<!-- 管理员角色-首页 -->
<template>
  <div class="admin-home-index">
       <el-container>
        <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
        </el-header>
        
        <el-main>
        <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
        </el-table>
        </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "admin-home-index"
};
</script>

@import 'home.scss'
<style type="text/scss" lang="scss" scoped>
/* .admin-home-index {
  // -webkit-box-shadow: 1px 1px 10pxpx red;
  // -moz-box-shadow: 1px 1px 10pxpx red;
//   box-shadow: 0px 5px 15px #f2eaed;
} */
</style>
