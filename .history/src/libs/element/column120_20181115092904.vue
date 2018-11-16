<template>
    <el-table-column :prop="prop" :label="label" :sortable="sortable" width="180"> </el-table-column>
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
            label:{
                type: String,
				default() {
					return ''
				}
            }
        }
    }
</script>