<!-- 公共-账号设置 -->
<template>
  <div class="account-setting">
       <el-container>
        <el-header style="text-align: right; font-size: 12px">
            <el-row>
                <el-col :sm="12" :md="12" :lg="12" :xl="12">
                    <div class="title">账号设置</div>
                </el-col>
                <el-col :sm="12" :md="12" :lg="12" :xl="12">
                    <!-- <headerInfo></headerInfo> -->
                </el-col>
            </el-row>
        <span>王小虎</span>
        </el-header>
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
  </div>
</template>

<script>
import '../Base/common.scss'    // home样式文件

export default {
  name: "account-setting",
  created(){
  }
};
</script>
