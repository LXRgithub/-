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
                        <div>学院</div>
                        <div>角色</div>
                        <div>密码</div>
                    </el-col>
                    <el-col :span="12">
                        <div>{{ userName }}</div>
                        <div>{{ college }}</div>
                        <div>{{ role }}</div>
                        <div>
                            <el-input v-model="userPwd" type="password" :readonly="true"></el-input>
                            <el-button type="primary" icon="el-icon-share"></el-button>
                        </div>
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
  data(){
      return {
          userName: 'admin',
          college: '工程学院',
          role: '管理员',
          userPwd: '123456'
      }
  },
  created(){
      this.$store.dispatch('getLoginInfo')
  }
};
</script>
