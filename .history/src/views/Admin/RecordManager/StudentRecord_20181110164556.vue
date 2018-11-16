<!-- 管理员角色-档案管理-学生档案 -->
<template>
  <div class="student-record">
       <el-container>
        <el-header style="text-align: right; font-size: 12px">
            <el-row>
                <el-col :sm="12" :md="12" :lg="12" :xl="12">
                    <div class="title">设置 学生档案 title</div>
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
import headerInfo from '@/components/common/headerInfo.vue'
import '../Base/base.scss'    // 公共样式文件
export default {
  name: 'student-record',
  components:{
      headerInfo
  }
}
</script>

<style type="text/scss" lang="scss" scoped>
</style>
