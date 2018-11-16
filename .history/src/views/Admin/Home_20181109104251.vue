<!-- 管理员角色-首页 -->
<template>
  <div class="admin-home-index">
       <el-container>
        <el-header style="text-align: right; font-size: 12px">
            <el-row>
                <el-col :sm="12" :md="12" :lg="12" :xl="12">
                    <div class="title">设置home</div>
                    </el-col>
                <el-col :sm="12" :md="12" :lg="12" :xl="12">
                    <headerInfo></headerInfo>
                </el-col>
            </el-row>
        <span>王小虎</span>
        </el-header>
        
        <el-main>
        
        </el-main>
    </el-container>
  </div>
</template>

<script>
import './home.scss'    // home样式文件
import headerInfo from 'src/compoments/common/headerInfo.vue'
// import headerInfo from '../../components/common/headerInfo'

export default {
  name: "admin-home-index",
  components:{
      headerInfo
  }
};
</script>
<style type="text/scss" lang="scss" scoped>
/* .admin-home-index {
  // -webkit-box-shadow: 1px 1px 10pxpx red;
  // -moz-box-shadow: 1px 1px 10pxpx red;
//   box-shadow: 0px 5px 15px #f2eaed;
} */
</style>
