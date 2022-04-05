<template>
	<el-aside width="auto">
		<el-menu
			:default-active="key"
			class="el-menu-vertical-demo"
			:collapse="isCollapse"
			background-color="#545c64"
			text-color="#fff"
			active-text-color="#ffd04b"
			style="text-align: left"
		>
			<h4 class="title">{{ isCollapse ? '后台' : '通用后台管理系统' }}</h4>
			<el-menu-item
				v-for="item in NochildrenList"
				:index="item.path"
				:key="item.path"
				@click="toLink(item)"
			>
				<i :class="'el-icon-'+item.icon"></i>
				<span slot="title">{{ item.label }}</span>
			</el-menu-item>
			<el-submenu
				v-for="(item) in HaschildrenList"
				:index="item.label"
				:key="item.label"
			>
				<template slot="title">
					<i :class="'el-icon-'+item.icon"></i>
					<span slot="title">{{ item.label }}</span>
				</template>
				<el-menu-item-group
					v-for="p in item.children"
					:index="p.path"
					:key="p.path"
				>
					<el-menu-item
						:index="p.path"
						@click="toLink(p)"
					>{{ p.label }}
					</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
		</el-menu>
	</el-aside>
</template>

<script>
import {mapState} from 'vuex'

export default {
	name: "AppAside",
	data() {
		return {
			menu: [
				{
					path: '/home',
					name: 'home',
					label: '首页',
					icon: 's-home',
					url: 'Home/Home'
				},
				{
					path: '/mall',
					name: 'mall',
					label: '商品管理',
					icon: 'video-play',
					url: 'MallManage/MallManage'
				},
				{
					path: '/user',
					name: 'user',
					label: '用户管理',
					icon: 'user',
					url: 'UserManage/UserManage'
				},
				{
					label: '其他',
					icon: 'location',
					children: [
						{
							path: '/page1',
							name: 'page1',
							label: '页面1',
							icon: 'setting',
							url: 'Other/PageOne'
						},
						{
							path: '/page2',
							name: 'page2',
							label: '页面2',
							icon: 'setting',
							url: 'Other/PageTwo'
						}
					]
				}
			]
		};
	},
	computed: {
		...mapState(['isCollapse']),
		NochildrenList() {
			return this.menu.filter(item => !item.children)
		},
		HaschildrenList() {
			return this.menu.filter(item => item.children)
		},
		key() {
			console.log(this.$route.path);
			return this.$route.path
		}
	},
	methods: {
		toLink(val) {
			this.$router.push({
				name: val.name,
			})
		}
	}
}
</script>

<style scoped>
.title {
	text-align: center;
	margin: 20px 0px;
	color: #fff;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
	width: 200px;
	min-height: 400px;
}

.el-menu {
	height: 100%;
	border: none;
}

.el-aside {
	background-color: #D3DCE6;
	color: #333;
	text-align: center;
	/*line-height: 200px;*/
}
</style>
