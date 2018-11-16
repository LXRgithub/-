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
        <el-form :model="changePwdForm" ref="changePwdForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="年龄" prop="age">
                <el-input type="age" v-model.number="changePwdForm.age" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('changePwdForm')">提交</el-button>
                <el-button @click="resetForm('changePwdForm')">重置</el-button>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button class="admin_button" style="width:100px;font-size:14px;" @click="savePwd('changePwdForm')">保存</el-button>
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
          changePwdForm: {},            // 修改密码form
      }
  },
  methods:{
    /**
     *  @function: 点击修改按钮
     *  @author: lxr
     *  @date: 2018-11-12
     **/
    changePwd() {
        this.changePwdDialog = true;
    },
    /**
     *  @function: 点击保存按钮
     *  @author: lxr
     *  @date: 2018-11-12
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
