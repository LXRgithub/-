<!-- 表格列 200宽 -->
<template>
    <el-table-column :prop="prop" :label="label" :sortable="sortable" width="200"> </el-table-column>
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

        }
    }
</script>