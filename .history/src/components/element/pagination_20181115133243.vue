<!-- 表格列 120宽 -->
<template>
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
            pageSize:{
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