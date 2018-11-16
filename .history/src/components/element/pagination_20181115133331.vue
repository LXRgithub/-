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
                type: Number,
				default() {
					return 30
				}
            },
            total:{
                type: Number,
				default() {
					return 0
				}
            },
            total:{
                type: Number,
				default() {
					return 0
				}
            }
        },
        data(){
            return {
            }
        }
    }
</script>