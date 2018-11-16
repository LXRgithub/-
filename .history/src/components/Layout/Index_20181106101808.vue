<template>
    <div class="layout-index">
        <div class="layout-left">
            <div class="left-top"></div>
            <div class="left-bottom"></div>
        </div>
        <div class="layout-right">
            <NavMenu :data="menuData"></NavMenu>
        </div>
    </div>
</template>

<script>
import NavMenu from "@/components/common/NavMenu/NavMenu.1";
export default {
  name: "layout-index",
  components: {
    NavMenu
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  created() {
    console.log("$():", $("body"));
  },
  methods: {
    expandBtn() {
      console.log("点击伸缩按钮");
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
