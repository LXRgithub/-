<template>
  <el-popover trigger="click" placement="right" @show="init" @hide="clear_param" v-model="planShow">
　　<div class="tc_content">
　　　　这是一段内容。。。。
　　</div>
　　<el-tag slot="reference" class="name-wrapper">{{data.ruleName?data.ruleName:'添加新的项'}}</el-tag>
  </el-popover>
</template>
<script>
	export default {
		props: {
        }
}
            </script>