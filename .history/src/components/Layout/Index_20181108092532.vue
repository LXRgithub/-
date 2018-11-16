<template>
    <div class="layout-index">
        <div class="layout-left">{{$route.path+'--'}}
            <div class="left-top"></div>
            <div class="left-bottom">
                <NavMenu :data="menuData" @click="clickNav" 
                :clickActive1="`${$route.path}`" :clickActive2="`${$route.path}`"></NavMenu>
                <!-- :clickActive1="clickActive1" :clickActive2="clickActive2" -->
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
        menuData: [],       // 菜单
        clickActive1: '',   // 选中的一级菜单
        clickActive2: '',   // 选中的二级菜单
        storageValue1: sessionStorage.getItem('clickActive1') ? sessionStorage.getItem('clickActive1') : 0,
    };
  },
  created() {
    this.getMenuData();     // 获取菜单数据

    // this.clickActive1 = this.storageValue1;
    
    // this.clickNav(this.clickActive1,{})
  },
  watch: {
    '$route' (newRoute) {
      const { name, query, params, meta, mindex } = newRoute
      /* this.addTag({
        route: { name, query, params, meta },
        type: 'push'
      }) */
      console.log('newRoute',newRoute)
    //   this.setBreadCrumb(newRoute)
    //   this.setTagNavList(getNewTagList(this.tagNavList, newRoute))
    //   this.$refs.sideMenu.updateOpenName(newRoute.name)
    }
  },
  methods: {
    /**
     *  @function: 点击菜单
     *  @author: lxr
     *  @date: 2018-11-06
     **/
    clickNav( index, item){
        console.log(index, item);
        if(this.storageValue1){
            // 打开二级菜单
        console.log('aaa',index, item)
            // item.isSubShow = true;
        }
        if(item.routeUrl != undefined && item.routeUrl != ''){
            this.$router.push(item.routeUrl);
      let { name, params, query, mindex } = {}
        mindex = index
        // params = route.params
        // query = route.query
       /*  this.$router.push({
            name: item.routeUrl
        // params:{index:index},
        // query:{index:index}
      }) */
      console.log('rout-click',this.$route)
        }
        sessionStorage.setItem('clickActive1',index);
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
           /*  if(this.menuData.length > 0){
                this.clickNav(0,{routeUrl:'/Home'})
            } */
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
    display: flex;
    flex-direction: column;
    background: #2f334f;
    color: #9799a7;
    font-size: 14px;
    .left-top{
        flex-basis: 80px;
    }
  }
  .layout-right {
    flex: 1;
    background: #F6F7FA;
    padding: 25px 40px 40px;
  }
}
</style>
