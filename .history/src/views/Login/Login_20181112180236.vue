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
                <!-- <el-row>
                    <el-col :span="24" class="logo-div" tag="div">
                        <div class="logo">
                            <img />
                        </div>
                        <div class="school">全国高等教育信息服务平台</div>
                    </el-col>
                </el-row> -->
                    <el-col :span="24" class="logo-div" tag="div">
                        <div class="logo">
                            <img />
                        </div>
                        <div class="school">全国高等教育信息服务平台</div>
                    </el-col>
                    <el-col :span="24" class="input-div">
                        <ul class="signIn">
                            <li class="account">
                                <!--<img :src="accActive ? accountAc:accountNo">-->
                                <img :src="account.length != ''|| accActive ? accountAc:accountNo">
                                <input type="text" placeholder="请输入手机号" v-model="account" @focus="accFocus" @blur="accBlur"/>
                            </li>
                            <li class="password">
                                <!--<img :src="psdActive ? passwordAc:passwordNo" class="left">-->
                                <img :src="password != '' || psdActive ? passwordAc:passwordNo" class="left">
                                <input :type="psdOpen ? 'text':'password'" placeholder="密码" v-model="password" @input="psdInput(password)" @focus="psdFocus"
                                    @blur="psdBlur" ref="pwdRef"/>
                                <!-- <img :src="psdOpen ? passwordOpen:passwordClose" class="right" @click="openPsd"> -->
                            </li>
                        </ul>
                    </el-col>
                <el-row>
                </el-row>
            </el-row>
        </el-main>
    </el-container>
  </div>
</template>

<script>
import './login.scss'            // 样式文件

export default {
  name: "login-index",
  data(){
      return{
        account: localStorage.getItem('userNum')? localStorage.getItem('userNum') :"", //账号
        password: '',// localStorage.getItem('UserPassword')? localStorage.getItem('UserPassword') 
        accActive: false, //账号输入状态
        accountAc: require("../../assets/account_active.png"),
        accountNo: require("../../assets/account_no.png"),
        psdActive: false, //密码输入状态
        passwordAc: require("../../assets/password_active.png"),
        passwordNo: require("../../assets/password_no.png"),
        psdOpen: false, //是否显示密码
      }
  },
  methods:{

      accFocus() {
        //输入账号获取焦点时
        console.log("获取焦点");
        this.accActive = true;
      },
      accBlur() {
        //输入账号失去焦点时
        console.log("失去焦点");
        this.accActive = false;
      },
      psdFocus() {
        //输入密码获取焦点时
        console.log("获取焦点");
        this.psdActive = true;
      },
      psdBlur() {
        //输入密码失去焦点时
        console.log("失去焦点");
        this.psdActive = false;
      },
      openPsd() {
        //是否显示密码
        console.log("睁眼，闭眼");
        this.psdOpen = !this.psdOpen;
        this.$refs.pwdRef.focus();
      },
  }
};
</script>
