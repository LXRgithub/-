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
      msg: "Welcome to Your Vue.js App",
       menuData: [
        {
          title: "首页",
          value: 1,
          isSubShow: false,
          icon: require('../../assets/images/report_d03.png'),
          iconActive: require('../assets/images/report_s03.png')
        },
        {
          title: "档案管理",
          value: 2,
          isSubShow: false,
          icon: require('../assets/images/report_d03.png'),
          iconActive: require('../assets/images/report_s03.png'),
          submenus: [
            {
              title: "学生档案",
              value: 21,
              id: 2
            },
            {
              title: "教职工档案",
              value: 22,
              id: 2
            },
          ]
        },
        {
          title: "系统设置",
          icon: require('../assets/images/report_d03.png'),
          iconActive: require('../assets/images/report_s03.png'),
          value: 3,
          isSubShow: false,
          submenus: [
            {
              title: "登录背景",
              value: 31,
              id: 3
            },
            {
              title: "初始密码",
              value: 32,
              id: 3
            },
            {
              title: "系统日志",
              value: 33,
              id: 3
            },
          ]
        },
        {
          title: "授权管理",
          value: 4,
          isSubShow: false,
          icon: require('../assets/images/report_d03.png'),
          iconActive: require('../assets/images/report_s03.png')
        },
        {
          title: "信息发布",
          value: 5,
          isSubShow: false,
          icon: require('../assets/images/report_d03.png'),
          iconActive: require('../assets/images/report_s03.png'),
          submenus: [
            {
              title: "图片库",
              value: 51,
              id: 3
            },
            {
              title: "视频库",
              value: 52,
              id: 3
            },
          ]
        }
      ]
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
