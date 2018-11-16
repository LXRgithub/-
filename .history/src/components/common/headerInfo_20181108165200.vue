<!-- 公共头-当前登录者信息 -->
<template>
  <div class="header-info">
        <el-badge is-dot class="item">
            <img src="../../assets/images/report_d03.png">
        </el-badge>
        <span class="head-icon">
            <img src="../../assets/images/default.png">
        </span>
       <el-dropdown>
            <span class="el-dropdown-link">当前登陆者
                <i class="el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(list, index) in menuList" :key="index">{{ list.title }}</el-dropdown-item>
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
    .el-badge{
        width: 25px;
        height: 25px;
        margin-right: 20px;
        img{
            position: absolute;
            right: 0;
            top: 0;
        }
    }
    .head-icon{
        width: 40px;
        height: 40px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 10px;
        border-radius: 100%;
        overflow: hidden;
        border: 1px solid;
        img{
            position: absolute;
            right: 0;
            top: 0;
            w
        }
    }
    .el-dropdown-link{
        cursor: pointer;
    }
}
</style>
