<!-- 登录页 -->
<template>
  <div class="login-index">
       <el-container>
        <el-header style="text-align: right; font-size: 12px">
            <el-row>
                <el-col :sm="12" :md="12" :lg="12" :xl="12">
                    <div class="title">设置home title</div>
                </el-col>
                <el-col :sm="12" :md="12" :lg="12" :xl="12">
                    <headerInfo></headerInfo>
                </el-col>
            </el-row>
        </el-header>
        <el-main></el-main>
    </el-container>
  </div>
</template>

<script>
import './logi.scss'            // 样式文件

export default {
  name: "login-index",
  components:{
  }
};
</script>
