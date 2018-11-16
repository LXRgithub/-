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
                            <el-option v-for="item in gradeData" :label="item.name" :value="item.id" :key="item.id"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="学院">
                        <el-select v-model="recordForm.grade" placeholder="" style="width:120px;">
                            <el-option v-for="item in collageData" :label="item.name" :value="item.id" :key="item.id"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="专业">
                        <el-select v-model="recordForm.grade" placeholder="" style="width:120px;">
                            <el-option v-for="item in majorData" :label="item.name" :value="item.id" :key="item.id"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="班级">
                        <el-select v-model="recordForm.grade" placeholder="" style="width:120px;">
                            <el-option v-for="item in classData" :label="item.name" :value="item.id" :key="item.id"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="">
                        <!-- <el-autocomplete v-model="state4" :fetch-suggestions="querySearchAsync"
                            placeholder="" @select="handleSelect"></el-autocomplete> -->
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
      recordForm: {},           // 档案form
      gradeData: [],            // 年级数据
      collageData: [],          // 学院数据
      majorData: [],            // 专业数据   
      classData: [],            // 班级数据   
    };
  },
  methods: {
    /**
     *  @function: 获取条件数据
     *  @author: lxr
     *  @date: 2018-11-14
     **/
    getToolData() {
        // 年级数据
        this.axios("post", "/getGradeData", {}).then(res => {
            // console.log('年级数据',res);
            if (res.code == "0") {
                this.gradeData = res.data;
            }
        });
        // 学院数据
        this.axios("post", "/getGradeData", {}).then(res => {
            // console.log('学院数据',res);
            if (res.code == "0") {
                this.collageData = res.data;
            }
        });
        // 专业数据
        this.axios("post", "/getGradeData", {}).then(res => {
            // console.log('专业数据',res);
            if (res.code == "0") {
                this.majorData = res.data;
            }
        });
        // 班级数据
        this.axios("post", "/getGradeData", {}).then(res => {
            // console.log('班级数据',res);
            if (res.code == "0") {
                this.classData = res.data;
            }
        });
    }
  },
  created() {
      this.getToolData();       // 获取年级数据
      var Num= new Date().getFullYear();
       console.log('randomNum',Num.slice(Num.length-2))
  }
};
</script>

