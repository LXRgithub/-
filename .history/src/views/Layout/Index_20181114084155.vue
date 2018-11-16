<template>
    <div class="layout-index">
        <el-container>
            <el-aside width="200px">
                <el-container>
                    <el-header>
                        <div class="left-top"></div>
                    </el-header>
                    <el-main>
                        <NavMenu :data="menuData" @click="clickNav"
                        :clickActive1="`${storageValue1}`" :clickActive2="`${$route.path}`"></NavMenu>
                    </el-main>
                </el-container>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import NavMenu from "@/components/common/NavMenu/NavMenu";

export default {
  name: "layout-index",
  components: {
    NavMenu
  },
  inject: ["reload"],
  data() {
    return {
      menuData: [], // 菜单
      clickActive1: "", // 选中的一级菜单
      clickActive2: "" // 选中的二级菜单
      // storageValue1: sessionStorage.getItem('clickActive1') ? sessionStorage.getItem('clickActive1') : 0,     // 存一级菜单index(用来选中效果)
    };
  },
  watch: {
    /**
     *  @function: 重定向路由到首页
     *  @author: lxr
     *  @date: 2018-11-08
     **/
    $route() {
      if (this.$route.path == "/Home") {
        sessionStorage.setItem("clickActive1", "/Home");
        this.reload();
      }
    }
  },
  computed: {
    storageValue1() {
      return this.$store.state.menuActive;
    }
  },
  methods: {
    /**
     *  @function: 点击菜单
     *  @author: lxr
     *  @date: 2018-11-06
     **/
    clickNav(index, item, fidx) {
      // console.log(index, item);
      let actVal = ""; // 选中一级菜单session
      if (item.routeUrl != undefined && item.routeUrl != "") {
        this.$router.push(item.routeUrl);
        actVal = item.routeUrl;
        if (fidx) {
          // 点击二级菜单 给一级菜单赋index
          actVal = fidx;
        }
      } else {
        actVal = sessionStorage.getItem("clickActive1");
      }
      sessionStorage.setItem("clickActive1", actVal);
      this.$store.commit("changeMenuAct", actVal);
    },
    /**
     *  @function: 获取菜单列表
     *  @author: lxr
     *  @date: 2018-11-06
     **/
    getMenuData() {
      this.axios("post", "/getMenuData", {}).then(res => {
        // console.log(res);
        if (res.code == "0") {
          this.menuData = res.menuData;
        }
      });
    }
  },
  created() {
    this.getMenuData(); // 获取菜单数据
    console.log("created", this.$store.state.menuActive);
  },
  destroyed() {
      this.$store.commit("changeMenuAct", '/Home');
  }
};
</script>

<style type="text/scss" lang="scss" scoped>
.layout-index {
  width: 100%;
  height: 100%;
  .el-container {
    .el-aside {
      background: #2f334f;
      color: #9799a7;
      .el-header {
        height: 80px;
        .left-top {
        }
      }
      .el-main {
        padding: 0;
        overflow: auto;
        background: transparent;
      }
    }
    > .el-main {
      background: #f6f7fa;
      padding: 25px 40px 40px;
    }
  }
}
</style>
