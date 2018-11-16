<!-- 公共-账号设置 -->
<template>
  <div class="account-setting">
       <el-container>
        <el-header style="text-align: right; font-size: 12px">
            <div class="title">账号设置</div>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <el-row :gutter="20">
                    <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                </el-row>
            </el-aside>
            <el-main>Main</el-main>
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
