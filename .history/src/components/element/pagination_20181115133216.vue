<!-- 表格列 120宽 -->
<template v-if="isSlots">
    <el-table-column :prop="prop" :label="label" :sortable="sortable" 
    align="center" :width="width">
        <template slot-scope="scope">
            <slot :scope="scope.row"></slot>
        </template>
    </el-table-column>
</template>

<template v-if="!isSlots">
    <el-pagination
        @current-change="changeCurrent"
        :current-page.sync="currentPage"
        :page-size="pageSize"
        layout="prev, pager, next, jumper"
        :total="total">
    </el-pagination>
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
            },
            isSlots:{
                type: Boolean,
				default() {
					return false
				}
            }
        },
        data(){
            return {
            }
        }
    }
</script>