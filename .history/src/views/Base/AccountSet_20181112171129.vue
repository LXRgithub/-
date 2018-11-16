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
        <el-form :model="changePwdForm" ref="changePwdForm" :rules="changePwdFormRule" label-width="120px" class="demo-ruleForm">
            <el-form-item label="输入原密码" prop="pwd">
                <el-input type="age" v-model.number="changePwdForm.pwd" autocomplete="off" style="width:240px;"></el-input>
            </el-form-item>
            <el-form-item label="输入新密码" prop="newPwd">
                <el-input type="age" v-model.number="changePwdForm.newPwd" autocomplete="off" style="width:240px;"></el-input>
            </el-form-item>
            <el-form-item label="再次输入新密码" prop="newPwd2">
                <el-input type="age" v-model.number="changePwdForm.newPwd2" autocomplete="off" style="width:240px;"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button class="admin_button" style="width:100px;font-size:14px;" @click="savePwd('changePwdForm')">保存</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script>
import "../Base/base.scss";

export default {
  name: "account-setting",
  data() {
    return {
      userName: "admin",
      college: "工程学院",
      role: "管理员",
      userPwd: "123456",
      changePwdDialog: false, // 修改弹窗是否显示
      changePwdForm: {}, // 修改密码form
      changePwdFormRule: {
        pwd: [
          { required: true, message: "请输入原密码", trigger: "blur" },
          { min: 6, max: 6, message: "长度在 6 个字符", trigger: "blur" }
        ],
        newPwd: [
          { required: true, message: "请输入新密码", trigger: "blur" },
          { min: 6, max: 6, message: "长度在 6 个字符", trigger: "blur" }
        ],
        newPwd2: [
          { required: true, message: "请输入新密码", trigger: "blur" },
          { min: 6, max: 6, message: "长度在 6 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
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
    savePwd(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
          this.changePwdDialog = false;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  created() {
    this.$store.dispatch("getLoginInfo");
  }
};
</script>
