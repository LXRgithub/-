<!-- 公共头-当前登录者信息 -->
<template>
  <div class="header-info">
        <el-badge is-dot class="item">
            <img src="../../assets/images/notic_b.png">
        </el-badge>
        <span class="head-icon">
            <img src="../../assets/images/head.png">
        </span>
       <el-dropdown @command="clickInfoList">
            <span class="el-dropdown-link">当前登陆者
                <i class="el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(list, index) in menuList" :key="index" :command="list.value">{{ list.title }}</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
  </div>
</template>

<script>
export default {
  name: "header-info",
  inject: ['reload'],
  data() {
    return {
      menuList: [
        {
          title: "切换身份",
          value: "1"
        },
        {
          title: "账号设置",
          value: "2"
        },
        {
          title: "退出登录",
          value: "3"
        }
      ]
    };
  },
  methods: {
    clickInfoList(command) {
      console.log("command", command);
      if (command == "1") {
        // 切换身份
      } else if (command == "2") {
        // 账号设置 
        sessionStorage.setItem('clickActive1', '');
        this.$store.commit('changeMenuAct', '')
        this.$router.push('/AccountSet');    
        this.reload();
      } else if (command == "3") {
        // 退出登录
        sessionStorage.clear();     // 清除所有session
        localStorage.clear();       // 清除所有localStorage
        this.$router.push('/');     // 返回登录页
      }
    }
  }
};
</script>

<style type="text/scss" lang="scss" scoped>
.header-info {
  width: 100%;
  height: 100%;
  .el-badge {
    width: 25px;
    height: 25px;
    margin-right: 20px;
    img {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
  .head-icon {
    width: 35px;
    height: 35px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 100%;
    overflow: hidden;
    position: relative;
    img {
      position: absolute;
      right: 0;
      left: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      max-width: 100%;
      max-height: 100%;
    }
  }
  .el-dropdown {
    .el-dropdown-link {
      cursor: pointer;
    }
  }
}
</style>
