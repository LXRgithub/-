<!-- 管理员角色-档案管理-教职工档案 -->
<template>
  <div class="teach-record">
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
            </el-main>
            <el-footer class="pagination-footer">
                <el-pagination layout="prev, pager, next, jumper" @current-change="changeCurrent"
                    :current-page.sync="currentPage" :page-size="pageSize" :total="total"></el-pagination>
            </el-footer>
        </el-container>
  </div>
</template>

<script>
import './record.scss'

export default {
  name: 'teach-index'
}
</script>
