<!-- 管理员角色-档案管理-学生档案 -->
<template>
  <div class="student-record">
       <el-container>
        <el-header>
            <el-row>
                <el-col :sm="12" :md="12" :lg="12" :xl="12">
                    <div class="title">学生档案</div>
                </el-col>
                <el-col :sm="12" :md="12" :lg="12" :xl="12">
                    <headerInfo></headerInfo>
                </el-col>
            </el-row>
        </el-header>
        <el-main>
            <el-header style="height:auto;">
                <el-form class="uip_custom_form" :model="recordForm" ref="changePwdForm" :rules="recordFormRule" :inline="true">
                    <el-form-item label="年级" prop="pwd">
                        <el-input type="age" v-model.number="recordForm.pwd" style="width:240px;"></el-input>
                    </el-form-item>
                    <el-form-item label="学院" prop="newPwd">
                        <el-input type="age" v-model.number="recordForm.newPwd" style="width:240px;"></el-input>
                    </el-form-item>
                    <el-form-item label="专业" prop="newPwd2">
                        <el-input type="age" v-model.number="recordForm.newPwd2" style="width:240px;"></el-input>
                    </el-form-item>
                    <el-form-item label="班级" prop="newPwd2">
                        <el-input type="age" v-model.number="recordForm.newPwd2" autocomplete="off" style="width:240px;"></el-input>
                    </el-form-item>
                </el-form>
            </el-header>
            <el-main>
            
            </el-main>
        </el-main>
    </el-container>
  </div>
</template>

<script>
import headerInfo from '@/components/common/headerInfo.vue'
import './record.scss'

export default {
  name: 'student-record',
  components:{
      headerInfo
  },
  data(){
      return {
          recordForm: {},       // 档案form
      }
  },
  created(){}
}
</script>

