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
}
</script>
