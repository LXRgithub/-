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
        <el-header style="height:auto;">
            <el-form class="uip_custom_form" :model="recordForm" ref="changePwdForm" :inline="true">
                <el-form-item label="年级">
                    <el-select v-model="recordForm.grade" placeholder="请选择" style="width:120px;">
                        <el-option v-for="item in gradeData" :label="item.name" :value="item.id" :key="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="学院">
                    <el-select v-model="recordForm.grade" placeholder="请选择" style="width:120px;">
                        <el-option v-for="item in collageData" :label="item.name" :value="item.id" :key="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="专业">
                    <el-select v-model="recordForm.grade" placeholder="请选择" style="width:120px;">
                        <el-option v-for="item in majorData" :label="item.name" :value="item.id" :key="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="班级">
                    <el-select v-model="recordForm.grade" placeholder="请选择" style="width:120px;">
                        <el-option v-for="item in classData" :label="item.name" :value="item.id" :key="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="">
                    <el-autocomplete v-model="state4" :fetch-suggestions="querySearchAsync" :trigger-on-focus="false"
                        placeholder="输入姓名或者学号搜索" @select="handleSelect" style="width:190px;">
                        <i slot="suffix" class="el-icon-search"></i>
                    </el-autocomplete>
                </el-form-item>
                <el-button class="admin_button" style="width:100px;font-size:14px;" @click="clickQuery">查询</el-button>
            </el-form>
        </el-header>
        <el-main class="record-main">
            <el-table :data="tableData" style="width: 100%" height="100%" border
                :default-sort = "{prop: 'date', order: 'descending'}" >
                <el-table-column prop="id" v-if="showIndex"></el-table-column>
                <column120 prop="name" label="姓名"></column120>
                <column120 prop="name" label="学号"></column120>
                <column120 prop="name" label="班级"></column120>
                <column120 prop="name" label="院系"></column120>
                <el-table-column prop="name" label="班级" sortable width="180"> </el-table-column>
                <el-table-column prop="name" label="院系" sortable width="180"> </el-table-column>
                <el-table-column prop="name" label="性别" sortable width="180"> </el-table-column>
                <el-table-column prop="name" label="联系电话" sortable width="180"> </el-table-column>
            </el-table>
        </el-main>
        <el-footer class="pagination-footer">
            <!-- <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage3"
                :page-size="pageSize"
                layout="prev, pager, next, jumper"
                :total="total">
            </el-pagination> -->
        </el-footer>
    </el-container>
  </div>
</template>

<script>
import headerInfo from "@/components/common/headerInfo.vue";
import column120 from "@/components/element/column120.vue";
import "./record.scss";

export default {
  name: "student-record",
  components: {
    headerInfo, column120
  },
  data() {
    return {
      recordForm: {}, // 档案form
      gradeData: [], // 年级数据
      collageData: [], // 学院数据
      majorData: [], // 专业数据
      classData: [], // 班级数据
      tableData: [], // 表格数据
        showColmn: false,
      pageSize: 20,     // 每页条数
      total: '',        // 表格总数
      restaurants: [],
      state4: "",
      timeout: null,
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
    },
    /**
     *  @function: 获取表格数据
     *  @author: lxr
     *  @date: 2018-11-15
     **/
    getTableData() {
      this.axios("post", "/getStudentRecordData", {}).then(res => {
        console.log("表格数据", res);
        if (res.code == "0") {
          this.tableData = res.data;
        }
      });
    },
    /**
     *  @function: 点击查询
     *  @author: lxr
     *  @date: 2018-11-14
     **/
    clickQuery(formName) {},
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return state => {
        console.log(state, queryString);
        return (
          state.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      console.log(item);
    }
  },
  created() {
    this.getToolData(); // 获取年级数据
    this.getTableData(); // 获取表格数据
    this.restaurants = [
      {
        value: "三全鲜食（北新泾店）",
        address: "长宁区新渔路144号",
        name: "12345"
      },
      {
        value: "Hot honey 首尔炸鸡（仙霞路）",
        address: "上海市长宁区淞虹路661号"
      },
      {
        value: "新旺角茶餐厅",
        address: "上海市普陀区真北路988号创邑金沙谷6号楼113"
      },
      { value: "泷千家(天山西路店)", address: "天山西路438号" },
      {
        value: "胖仙女纸杯蛋糕（上海凌空店）",
        address: "上海市长宁区金钟路968号1幢18号楼一层商铺18-101"
      },
      { value: "贡茶", address: "上海市长宁区金钟路633号" },
      {
        value: "豪大大香鸡排超级奶爸",
        address: "上海市嘉定区曹安公路曹安路1685号"
      }
    ];
  }
};
</script>

