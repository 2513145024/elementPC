<template>
	<el-header>
		<div class="FlexBox">
			<div class="l-content">
				<el-button icon="el-icon-menu" @click="SETCOLLAPSE"></el-button>
				<span style="margin-left: 15px">首页</span>
			</div>
			<div class="r-contnet">
				<el-dropdown>
					<div style="margin-top: 10px">
						<el-avatar>用户</el-avatar>
					</div>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>个人中心</el-dropdown-item>
						<el-dropdown-item>退出</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
		</div>
	
	</el-header>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
	name: "AppHeader",

	methods: {
		...mapMutations(['SETCOLLAPSE'])
	}
}
</script>

<style scoped>
.FlexBox {
	display: flex;
	justify-content: space-between;
}


.el-header, .el-footer {
	background-color: #211f1f;
	color: #fff;
	text-align: center;
	line-height: 60px;
}
</style>
