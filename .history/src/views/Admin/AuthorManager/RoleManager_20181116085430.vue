<!-- 管理员角色-授权管理-角色管理 -->
<template>
  <div class="role-manager">
    <el-container>
        <el-header>
            <el-row>
                <el-col :sm="12" :md="12" :lg="12" :xl="12">
                     <el-tabs v-model="tagActName" @tab-click="handleClick">
                        <el-tab-pane label="教职工角色分配" name="1"></el-tab-pane>
                        <el-tab-pane label="角色权限设置" name="2"></el-tab-pane>
                    </el-tabs>
                </el-col>
                <el-col :sm="12" :md="12" :lg="12" :xl="12">
                    <headerInfo></headerInfo>
                </el-col>
            </el-row>
        </el-header>
        <el-main class="role-main">
            <el-container v-if="isMenu1">
                <el-aside width="200px">
                    <el-container class="teacher-role-set" v-if="isMenu1">
                        <el-header>
                            <span>全部系统用户</span>
                        </el-header>
                        <el-main>
                            <!-- <div v-for="item in roleTypeData" :key="item.name">
                                <span>{{ item.name }}</span>
                                <div v-for="item in systemData" :key="item.name">
                                    <span>{{ item.name }}</span>
                                </div>
                            </div> -->
                                
                                <div class="list-title">
                                    <span><img></span>系统角色</div>
                                <div class="user-list">
                                    <div v-for="(item, index) in systemData" :class="{actClass:}" :key="index">
                                        <span>{{ item.name }}</span>
                                    </div>
                                </div>
                                
                        </el-main>
                    </el-container>
                </el-aside>
                <el-main>Main</el-main>
            </el-container>
            <el-container v-if="!isMenu1">
                <el-aside width="200px">22Aside</el-aside>
                <el-main>22Main</el-main>
            </el-container>
        </el-main>
       <!--  <el-header style="height:auto;">
            <el-form class="uip_custom_form" :model="recordForm" ref="changePwdForm" :inline="true">
                <el-form-item label="部门">
                    <el-select v-model="recordForm.grade" placeholder="请选择" filterable style="width:120px;">
                        <el-option v-for="item in departmentData" :label="item.name" :value="item.id" :key="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="职务">
                    <el-select v-model="recordForm.grade" placeholder="请选择" style="width:120px;">
                        <el-option v-for="item in dutyData" :label="item.name" :value="item.id" :key="item.id"></el-option>
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
                :default-sort = "{prop: 'date', order: 'descending'}"
                @sort-change="sortChange">
                <column120 prop="no" label="id" v-if="showColumn"></column120>
                <column120 prop="indexID" label="..." :sortable="false" width="80"></column120>
                <column120 prop="name" label="姓名" :isSlots="true" width="">
                    <div slot-scope="slot">{{slot.scope.name}}1</div>
                </column120>
                <column120 prop="no" label="工号" width=""></column120>
                <column120 prop="grade" label="部门" width=""></column120>
                <column120 prop="collage" label="职务" width=""></column120>
                <column120 prop="tel" label="联系电话" width=""></column120>
            </el-table>
        </el-main>
        <el-footer class="pagination-footer">
            <el-pagination layout="prev, pager, next, jumper" @current-change="changeCurrent"
                :current-page.sync="currentPage" :page-size="pageSize" :total="total"></el-pagination>
        </el-footer> -->
    </el-container>
  </div>
</template>

<script>
import headerInfo from "@/components/common/headerInfo.vue";
import './author.scss'

export default {
  name: 'role-manager',
  components: {
    headerInfo
  },
  data(){
      return {
          tagActName: '1',       // 选中标签页 默认教职工
          isMenu1: true,        // 是否教职工角色设置
          roleTypeData: [       // 角色类型
              {
                  name: '系统角色'
              },
              {
                  name: '自定义角色'
            }],  
            systemData: [],     // 系统角色数据    
            sysData: [],     // 系统角色数据    
      }
  },
  methods:{
    /**
     *  @function: 点击tag标签切换页面
     *  @author: lxr
     *  @date: 2018-11-15
     **/
      handleClick(tab){//    transform: translateX(220px);
          console.log('tagclick',tab)
          if(tab.name == 1){    // 教职工角色分配
            this.isMenu1 = true;
          }else if(tab.name == 2){    // 角色权限设置
            this.isMenu1 = false;
          }
      },
    /**
     *  @function: 获取条件数据
     *  @author: lxr
     *  @date: 2018-11-15
     **/
      getToolData(){
        // 角色数据
        this.axios("post", "/getRoleData", {}).then(res => {
            console.log('角色数据',res);
            if (res.code == "0") {
                this.systemData = res.data;
            }
        });
      }
  },
  created(){
      this.getToolData();   // 获取条件数据
  }
}
</script>
