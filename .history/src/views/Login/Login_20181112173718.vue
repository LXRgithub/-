<!-- 登录页 -->
<template>
  <div class="login-index">
    <el-container>
        <el-aside width="35%">Aside</el-aside>
        <el-main>
            <el-row type="flex" align="middle">
                 <!-- <el-col :span="24" class="logo-div">
                    <div class="logo"></div>
                    <div class="school">全国高等教育信息服务平台</div>
                 </el-col> -->
                <div class="logo-div">
                    <div class="logo">
                        <img src="../../" alt="">
                    </div>
                    <div class="school">全国高等教育信息服务平台</div>
                </div>
            </el-row>
        </el-main>
    </el-container>
  </div>
</template>

<script>
import './login.scss'            // 样式文件

export default {
  name: "login-index",
  components:{
  }
};
</script>
