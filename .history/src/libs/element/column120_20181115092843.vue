<template>
    <el-table-column :prop="prop" label="姓名" sortable width="180"> </el-table-column>
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
            }
        }
    }
</script>