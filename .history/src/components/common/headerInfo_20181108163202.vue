<!-- 公共头-当前登录者信息 -->
<template>
  <div class="header-info">
        <img src="" class="head-icon">
       <el-dropdown>
            <span>当前登陆者
                <i class="el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="">查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'header-info',
  data(){
      return{
          menuList: [
              {
                  title: '切换身份',
                  value: '1'
              },
              {
                  title: '账号设置',
                  value: '2'
              },
              {
                  title: '退出登录',
                  value: '3'
              }
          ]
      }
  }
}
</script>

<style type="text/scss" lang="scss" scoped>
.header-info{
    width: 100%;
    height: 100%;
    border: 2px solid;
    .head-icon{
        width: 40px;
        height: 40px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 10px;
        border-radius: 100%;
        border: 1px solid;
    }
}
</style>
