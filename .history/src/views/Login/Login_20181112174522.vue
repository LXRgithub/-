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
                        <span class="name-span">用户名</span><span>：</span>
                        <input type="text" placeholder="手机号或管理员账号" v-model="account" 
                                @keypress="keypress" maxlength="11"/>
                    </li>
                    <li class="password">
                        <span class="name-span">密码</span><span>：</span>
                        <input type="password" placeholder="输入密码" v-model="userPwd"
                               @keypress="keypress"/>
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
