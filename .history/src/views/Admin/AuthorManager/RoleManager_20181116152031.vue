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
                            <div class="list-title">
                                <span><img src="@/assets/images/icon1.png"></span>系统角色
                            </div>
                            <div class="user-list">
                                <div v-for="(item, index) in systemRoleData" :key="index" class="user-role"
                                    :class="{actClass: actRole == item.id}"
                                    @click="clickRoleList(item.id)">
                                    <span>{{ item.name }}</span>
                                </div>
                            </div>
                            <div class="list-title">
                                <span><img src="@/assets/images/icon2.png"></span>自定义角色
                                <span class="add-btn" @click="showInput"><i class="el-icon-plus"></i></span>
                            </div>
                            <div class="user-list">
                                <div v-for="(item, index) in customRoleData" :key="index" class="user-role"
                                    :class="{actClass: actRole == item.id}"
                                    @click="clickRoleList(item.id)">
                                    <el-popover placement="left" trigger="hover" v-model="item.state">
                                        <div style="text-align: center; margin: 0">
                                            <el-button size="mini" icon="el-icon-edit" @click="clickPopover(item)"></el-button>
                                        </div>
                                        <!-- <span slot="reference">{{ item.name }}</span> -->{{item.state}}
                                        <el-input  slot="reference" :readonly="!item.only"
                                            v-model="item.name"
                                            size="small"  :ref="`input${item.id}`">
                                        </el-input>
                                    </el-popover>
                                </div>
                                <el-input
                                    class="input-new-tag"
                                    v-if="inputVisible"
                                    v-model="inputValue"
                                    ref="saveTagInput"
                                    size="small" @keyup.enter.native="handleInputConfirm"
                                    @blur="handleInputConfirm" >
                                </el-input>
                            </div>
                        </el-main>
                    </el-container>
                </el-aside>
                <el-main>
                    <el-container>
                         <!-- <el-header style="height:auto;">
                            <el-form class="uip_custom_form" :model="authorForm" ref="changePwdForm" :inline="true">
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
                                <column120 prop="no" label="学号" width=""></column120>
                                <column120 prop="grade" label="班级" width=""></column120>
                                <column120 prop="collage" label="院系" width=""></column120>
                                <column120 prop="sex" label="性别" width=""></column120>
                                <column120 prop="tel" label="联系电话" width=""></column120>
                            </el-table>
                        </el-main> -->
                    </el-container>
                </el-main>
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
        systemRoleData: [],     // 系统角色数据    
        customRoleData: [],     // 自定义角色数据    
        actRole: '',     // 当前选中系统角色数据    
        inputVisible: false,
        inputValue: ''
      }
  },
  methods:{
    /**
     *  @function: 点击tag标签切换页面
     *  @author: lxr
     *  @date: 2018-11-15
     **/
    handleClick(tab){
    //   console.log('tagclick',tab)
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
        this.axios("get", "/getRoleData", {}).then(res => {
            console.log('角色数据',res);
            if (res.code == "0") {
                this.systemRoleData = res.data;
            }
        });
        // 角色数据
        this.axios("get", "/getRoleData", {}).then(res => {
            console.log('角色数据',res);
            if (res.code == "0") {
                this.customRoleData = res.data;
            }
        });
    },
    /**
     *  @function: 点击角色列表
     *  @author: lxr
     *  @date: 2018-11-16
     **/
    clickRoleList(id){
        this.actRole = id;
    },
    /**
     *  @function: 关闭popover弹出框
     *  @author: lxr
     *  @date: 2018-11-16
     **/
    clickPopover(item){
        item.state = false;
        // console.log('edit-input',this.$refs[`input${item.id}`][0])
        // this.$refs[`input${item.id}`][0].readonly = false;
    },
    showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
            this.$refs.saveTagInput.$refs.input.focus();
        });
    },
    handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
            this.customRoleData.push({name:inputValue});
        }
        this.inputVisible = false;
        this.inputValue = '';
    }
  },
  created(){
    this.getToolData();   // 获取条件数据
  }
}
</script>
