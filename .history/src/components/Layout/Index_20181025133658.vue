<template>
    <div class="layout-index">
      <el-row  type="flex">
          <!-- <el-col :xs="8" :sm="6" :md="4" :lg="6" :xl="4"><div class="grid-content layout-left">
            <el-button @click="expandBtn">伸缩</el-button>
          </div></el-col>
        <el-col :xs="16" :sm="18" :md="20" :lg="18" :xl="20"><div class="grid-content layout-right"></div></el-col>
       -->
            <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="10"><div class="grid-content bg-purple-light"></div></el-col>
       </el-row>
        
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
