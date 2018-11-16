<!-- 管理员角色-授权管理-角色管理 -->
<template>
  <div class="role-manager">
    <div v-for="(item, index) in 10" :key="index">
                            <el-popover
                                placement="left"
                                trigger="hover" v-model="popover">
                                    <span>22</span>
                                    <span slot="reference">{{ item }}</span>
                            </el-popover>
                        </div>
  </div>
</template>

<script>
import headerInfo from "@/components/common/headerInfo.vue";
import popover from "@/components/element/popover.vue";
import './author.scss'

export default {
  name: 'role-manager',
  components: {
    headerInfo,popover
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
            popover: false,     // 弹出框
      }
  },
}
</script>
