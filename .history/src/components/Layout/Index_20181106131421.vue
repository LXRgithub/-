<template>
    <div class="layout-index">
        <div class="layout-left">
            <div class="left-top"></div>
            <div class="left-bottom">
                <NavMenu :data="menuData" @click="clickNav"></NavMenu>
            </div>
        </div>
        <div class="layout-right">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import NavMenu from "@/components/common/NavMenu/NavMenu";
export default {
  name: "layout-index",
  components: {
    NavMenu
  },
  data() {
    return {
        msg: "Welcome to Your Vue.js App",
        menuData: [],       // 菜单
    };
  },
  created() {
    this.getMenuData();     // 获取菜单数据
  },
  methods: {
    expandBtn() {
      console.log("点击伸缩按钮");
    },
    /**
     *  @function: 点击菜单
     *  @author: lxr
     *  @date: 2018-11-06
     **/
    clickNav( index, item){
        
    },
    /**
     *  @function: 获取菜单列表
     *  @author: lxr
     *  @date: 2018-11-06
     **/
    getMenuData(){
        this.axios('post',"/getMenuData",{}).then(res => {
        console.log(res);
        if(res.code == '0'){
            this.menuData = res.menuData;
        }
      });
    }
  }
};
</script>

<style type="text/scss" lang="scss" scoped>
.layout-index {
  width: 100%;
  height: 100%;
  display: flex;
  .layout-left {
    flex-basis: 200px;
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    background: #2f334f;
    color: #9799a7;
    font-size: 14px;
    .left-top{
        flex-basis: 80px;
        border: 1px solid green;
    }
  }
  .layout-right {
    flex: 1;
    border: 1px solid red;
  }
}
</style>
