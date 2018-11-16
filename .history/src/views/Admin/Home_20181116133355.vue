<!-- 管理员角色-首页 -->
<template>
  <div class="admin-home-index">
       <el-container>
        <el-header style="text-align: right; font-size: 12px">
            <el-row>
                <el-col :sm="12" :md="12" :lg="12" :xl="12">
                    <div class="title">设置home title</div>
                </el-col>
                <el-col :sm="12" :md="12" :lg="12" :xl="12">
                    <headerInfo></headerInfo>
                </el-col>
            </el-row>
        </el-header>
        <el-main>
            <!--   <div v-for="item in 10" :key="item">
                                    <el-popover placement="top" width="160" v-model="popover">
                                        <p>确定删除吗？</p>
                                        <div>
                                                <el-button size="mini" type="text" @click="popover = false">取消</el-button>
                                                <el-button type="primary" size="mini" >确定</el-button>
                                        </div>
                                        <el-button slot="reference">删除</el-button>
                                    </el-popover>
                                </div> -->
        </el-main>
    </el-container>
  </div>
</template>

<script>
import headerInfo from '@/components/common/headerInfo.vue'
import './home.scss'            // home样式文件

export default {
  name: "admin-home-index",
  components:{
      headerInfo
  }
};
</script>
