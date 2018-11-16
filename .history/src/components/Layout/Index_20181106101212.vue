<template>
    <div class="layout-index">
        <div class="layout-left">
            <div class="left-top"></div>
            <div class="left-top"></div>
        </div>
        <div class="layout-right">

        </div>
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
  display: flex;
  .layout-left {
      flex-basis: 200px;
        border: 1px solid green;
  }
  .layout-right {
        flex: 1;
        border: 1px solid red;
  }
}
</style>
