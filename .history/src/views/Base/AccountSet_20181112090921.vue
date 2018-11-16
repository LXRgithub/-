<!-- 公共-账号设置 -->
<template>
  <div class="account-setting">
       <el-container>
        <el-header style="text-align: right; font-size: 12px">
            <div class="title">账号设置</div>
        </el-header>
        <el-container>
           <!--  <el-aside width="200px">
            </el-aside> -->
            <el-main class="set-main">
                <el-row align="middle" type="flex">
                    <el-col :span="12">
                        <div>姓名</div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </el-col>
                    <el-col :span="12">
                        右边
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
    </el-container>
  </div>
</template>

<script>
import '../Base/base.scss'    

export default {
  name: "account-setting",
  created(){
      
  }
};
</script>
