<!-- 公共-账号设置 -->
<template>
  <div class="account-setting">
    <el-container>
        <el-header style="text-align: right; font-size: 12px">
            <div class="title">账号设置</div>
        </el-header>
        <el-container>
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
                            <el-input v-model="userPwd" style="width:120px" type="password" :readonly="true"></el-input>
                            <el-button class="admin_button" style="width:120px;font-size:16px;" @click="changePwd">修改</el-button>
                        </div>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
    </el-container>
    <el-dialog title="修改密码" width="30%" top="30vh"
         :visible.sync="changePwdDialog" :close-on-click-modal="false">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
            <el-button class="admin_button" style="width:100px;font-size:14px;" @click="savePwd">保存</el-button>
        </span>
    </el-dialog>
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
          userPwd: '123456',
          changePwdDialog: false,       // 修改弹窗是否显示
      }
  },
  methods:{
    /**
     *  @function: 点击
     *  @author: lxr
     *  @date: 2018-11-06
     **/
    changePwd() {
        this.changePwdDialog = true;
    },
    /**
     *  @function: 获取菜单列表
     *  @author: lxr
     *  @date: 2018-11-06
     **/
    savePwd(){
        this.changePwdDialog = false
    }
  },
  created(){
      this.$store.dispatch('getLoginInfo')
  }
};
</script>
