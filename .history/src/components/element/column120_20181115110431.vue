<!-- 表格列 120宽 -->
<template>
    <el-table-column :prop="prop" :label="label" :sortable="sortable" align="center" :width="width">
        <template slot-scope="scope">
            <slot :scope="scope.row"></slot>
        </template>
            <slot></slot>
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