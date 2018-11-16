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
                        <img />
                    </div>
                    <div class="school">全国高等教育信息服务平台</div>
                </div>
                <div class="input-div">
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
                        <img :src="psdOpen ? passwordOpen:passwordClose" class="right" @click="openPsd">
                    </li>
                </ul>
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
