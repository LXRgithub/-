<!-- 表格列 160宽 -->
<template>
    <el-table-column :prop="prop" :label="label" :sortable="sortable" width="160"> </el-table-column>
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