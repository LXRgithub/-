<!-- 管理员角色-首页 -->
<template>
  <div class="admin-home-index">
       <el-container>
        <el-header style="text-align: right; font-size: 12px">
            <el-row>
                <el-col :sm="12" :md="12" :lg="12" :xl="12">
                    <div class="title">设置home</div>
                    </el-col>
                <el-col :sm="12" :md="12" :lg="12" :xl="12">
                    <headerInfo></headerInfo>
                </el-col>
            </el-row>
        <span>王小虎</span>
        </el-header>
        
        <el-main>
        
        </el-main>
    </el-container>
  </div>
</template>

<script>
import './home.scss'    // home样式文件
import headerInfo from '@/components/common/headerInfo.vue'

export default {
  name: "admin-home-index",
  components:{
      headerInfo
  }
};
</script>
