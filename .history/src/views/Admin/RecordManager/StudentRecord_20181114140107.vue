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
                <el-form class="uip_custom_form" :model="recordForm" ref="changePwdForm" :inline="true">
                    <el-form-item label="年级">
                        <el-select v-model="recordForm.grade" placeholder="" style="width:120px;">
                            <el-option v-for="grade in gradeData" :label="grade.name" :value="grade.id" :key="grade.id"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="学院">
                        <el-input type="age" v-model="recordForm.newPwd" style="width:120px;"></el-input>
                    </el-form-item>
                    <el-form-item label="专业">
                        <el-input type="age" v-model="recordForm.newPwd2" style="width:160px;"></el-input>
                    </el-form-item>
                    <el-form-item label="班级">
                        <el-input type="age" v-model="recordForm.newPwd2" style="width:160px;"></el-input>
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
import headerInfo from "@/components/common/headerInfo.vue";
import "./record.scss";

export default {
  name: "student-record",
  components: {
    headerInfo
  },
  data() {
    return {
      recordForm: {}, // 档案form
      gradeData: [] // 年级数据
    };
  },
  methods: {
    getToolData() {
        this.axios("post", "/getGradeData", {}).then(res => {
            console.log('getGradeData',res);
            if (res.code == "0") {
                this.gradeData = res.data;
            }
        });
    }
  },
  created() {
      this.getToolData();       // 获取年级数据
  }
};
</script>

