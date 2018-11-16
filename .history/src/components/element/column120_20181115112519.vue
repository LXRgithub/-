<!-- 表格列 120宽 -->
<template>
        <el-table-column :prop="prop" :label="label" :sortable="sortable"  v-if="!isSlots"
        align="center" :width="width"></el-table-column>
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