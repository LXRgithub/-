<template>
    <div class="layout-index">
        div.
    </div>
</template>

<script>
export default {
  name: "layout-index",
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
  .el-row,
  .el-col,
  .grid-content {
    height: 100%;
    border: 1px solid #000;
  }
  .layout-left {
    border: 1px solid green;
  }
  .layout-right {
    border: 1px solid red;
  }
}
</style>
