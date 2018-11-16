<!-- 表格列 120宽 -->
<template>
    <el-table-column :prop="prop" :label="label" :sortable="sortable" align="center" :width="width">
        
        <template slot-scope="scope">
            <!-- <slot :scope="prop"></slot> -->
            <!-- <img src="../../assets/images/online.png" alt="" v-if="scope.row.onlineState == 1">
            <img src="../../assets/images/offline.png" alt="" v-if="scope.row.onlineState == 0">
            <span v-if="scope.row.onlineState == 1">在线</span>
            <span v-if="scope.row.onlineState == 0">离线</span> -->
            <span></span>
        </template>
    </el-table-column>
</template>

<script>
	export default {
		props: {
            prop:{
                type: String,
				default() {
					return ''
				}
            },
            label:{
                type: String,
				default() {
					return ''
				}
            },
            sortable:{
                type: Boolean,
				default() {
					return true
				}
            },
            width:{
                type: String,
				default() {
					return '120'
				}
            }
        }
    }
</script>