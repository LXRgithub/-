<!-- 登录页 -->
<template>
  <div class="login-index">
    <el-container>
        <el-aside :width="asideW34">
            <div class="login-bg">
                <img src="../../assets/banner2.png" class="bg-img">
                <img src="">
            </div>
        </el-aside>
        <el-main>
            <el-row type="flex" align="middle">
                <el-main class="content-div">
                    <div class="logo-div">
                        <div class="logo">
                            <img />
                        </div>
                        <div class="school">全国高等教育信息服务平台</div>
                    </div>
                    <div class="input-div">
                        <!-- <ul class="signIn">
                            <li class="account">
                                <img :src="accountNo">
                                <input type="text" placeholder="请输入账号" v-model="account" @focus="accFocus" @blur="accBlur"/>
                            </li>
                            <li class="password">
                                <img :src="passwordNo" class="left">
                                <input :type="psdOpen ? 'text':'password'" placeholder="请输入密码" v-model="password" @input="psdInput(password)" @focus="psdFocus"
                                    @blur="psdBlur" ref="pwdRef"/>
                                <img :src="psdOpen ? passwordOpen:passwordClose" class="right" @click="openPsd">
                            </li>
                            <li class="password">
                                <img :src="passwordNo" class="left">
                                <input :type="psdOpen ? 'text':'password'" placeholder="请输入验证码" v-model="password" @input="psdInput(password)" @focus="psdFocus"
                                    @blur="psdBlur" ref="pwdRef"/>
                                <img :src="psdOpen ? passwordOpen:passwordClose" class="right" @click="openPsd">
                            </li>
                        </ul> -->
                        <el-form :model="loginForm" ref="loginForm" :rules="loginRule" label-width="0px" class="sign-in">
                            <el-form-item label="" prop="account">
                                <el-input placeholder="请输入账号" v-model="loginForm.account">
                                    <i slot="prefix" class="el-icon-account"></i>
                                </el-input>
                            </el-form-item>
                            <el-form-item label="" prop="password">
                                <el-input placeholder="请输入密码" v-model="loginForm.password">
                                    <i slot="prefix" class="el-icon-password"></i>
                                </el-input>
                            </el-form-item>
                            <el-form-item label="" prop="code">
                                <el-input placeholder="请输入验证码" v-model="loginForm.code">
                                    <i slot="prefix" class="el-icon-code"></i>
                                    <img slot="suffix" src="../../assets/images/code.png" />
                                </el-input>
                            </el-form-item>
                        </el-form>
                    </div>
                    <div class="login-button">
                        <el-button class="admin_button" style="width:160px;font-size:16px;" @click="clickLogin('loginForm')">登录</el-button>
                    </div>
                </el-main>
                <!-- <el-row>
                    <el-col :span="24" class="input-div">
                        <ul class="signIn">
                            <li class="account">
                                <img :src="account.length != ''|| accActive ? accountAc:accountNo">
                                <input type="text" placeholder="请输入手机号" v-model="account" @focus="accFocus" @blur="accBlur"/>
                            </li>
                            <li class="password">
                                <img :src="password != '' || psdActive ? passwordAc:passwordNo" class="left">
                                <input :type="psdOpen ? 'text':'password'" placeholder="密码" v-model="password" @input="psdInput(password)" @focus="psdFocus"
                                    @blur="psdBlur" ref="pwdRef"/>
                                <img :src="psdOpen ? passwordOpen:passwordClose" class="right" @click="openPsd">
                            </li>
                        </ul>
                    </el-col>
                </el-row> -->
            </el-row>
        </el-main>
    </el-container>
  </div>
</template>

<script>
import './login.scss'            // 样式文件

export default {
  name: "login-index",
  inject: ['reload'],
  data(){
      return{
        asideW34: '',           // 背景图宽度-始终为高度3/4
        account: localStorage.getItem('userNum')? localStorage.getItem('userNum') :"", //账号
        password: '',// localStorage.getItem('UserPassword')? localStorage.getItem('UserPassword') 
        // accActive: false, //账号输入状态
        // accountAc: require("../../assets/account_active.png"),
        // accountNo: require("../../assets/images/account.png"),
        // psdOpen: false, //是否显示密码
        // psdActive: false, //密码输入状态
        // passwordAc: require("../../assets/password_active.png"),
        // passwordNo: require("../../assets/images/password.png"),
        accountNo: require("../../assets/images/account.png"),  // 账号图标
        passwordNo: require("../../assets/images/password.png"), // 密码图标
        codeNo: require("../../assets/images/code.png"), // 验证码图标
        loginForm: {},          // 登录form
        loginRule: {            // 登录验证规则
            account: [
            { required: true, message: "请输入账号", trigger: "blur" },
            ],
            password: [
            { required: true, message: "请输入密码", trigger: "blur" },
            { min: 6, max: 6, message: "长度在 6 个字符", trigger: "blur" }
            ],
            code: [
            { required: true, message: "请输入验证码", trigger: "blur" },
            { min: 4, max: 4, message: "长度在 4 个字符", trigger: "blur" }
            ]
        },  
      }
  },
  methods:{
    /**
     *  @function: 点击登录按钮
     *  @author: lxr
     *  @date: 2018-11-13
     **/
      clickLogin(formName){
          this.$refs[formName].validate(valid => {
            if (valid) {
                // 本地验证通过
            } else {
            return false;
            }
        });
      },
      /**
     *  @function: 获取背景图片宽度 - 3/4格式
     *  @author: lxr
     *  @date: 2018-11-13
     **/
      getAsideWidth(){
        this.asideW34 = $('body').height() / 4 * 3 + 'px';
      }
  },
  mounted(){
        window.onresize = () => { //监听窗口变化，获取背景图片宽度
            this.getAsideWidth();
        }
  },
  created(){
        this.getAsideWidth();   // 获取背景图片宽度
  }
};
</script>
