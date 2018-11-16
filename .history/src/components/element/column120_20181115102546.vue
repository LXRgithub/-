<!-- 表格列 120宽 -->
<template>
    <el-table-column :prop="prop" :label="label" :sortable="sortable" align="center" :width="width">
             <!-- <slot :scope="prop"></slot> -->
        <template slot-scope="scope">{{scope.row}}
            <span>{{ scope.row[prop] }}</span>
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