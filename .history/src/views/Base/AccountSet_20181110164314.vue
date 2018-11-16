<!-- 公共-账号设置 -->
<template>
  <div class="account-setting">
       <el-container>
        <el-header style="text-align: right; font-size: 12px">
            <el-row>
                <el-col :sm="12" :md="12" :lg="12" :xl="12">
                    <div class="title">账号设置 title</div>
                </el-col>
                <el-col :sm="12" :md="12" :lg="12" :xl="12">
                    <!-- <headerInfo></headerInfo> -->
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
import './base.scss'    // home样式文件

export default {
  name: "account-setting",
  created(){
  }
};
</script>
