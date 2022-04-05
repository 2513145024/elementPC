import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
	path: '/',
	name: 'layout',
	redirect: '/home',
	component: () => import('../layout/index.vue'),
	children: [
		{
			path: '/home',
			name: 'home',
			meta: {title: '首页', icon: 's-home'},
			component: () => import('../views/Home.vue')
		}, {
			path: '/mall',
			name: 'mall',
			meta: {title: '商品管理', icon: 'video-play'},
			component: () => import('../views/Mall.vue')
		},
		{
			path: '/user',
			name: 'user',
			meta: {title: '用户管理', icon: 'user'},
			component: () => import('../views/User.vue')
		},
	
	]
},
	{
		path: '/other',
		name: 'other',
		component: () => import('../layout/index.vue'),
		meta: {title: '其他', icon: 'location'},
		children: [
			{
				path: '/page1',
				name: 'page1',
				meta: {title: '页面1', icon: 'setting'},
				component: () => import('../views/Other/PageOne.vue')
			},
			{
				path: '/page2',
				name: 'page2',
				meta: {title: '页面2', icon: 'setting'},
				component: () => import('../views/Other/PageTwo.vue')
			}
		]
	},
]

const router = new VueRouter({
	mode: 'history', base: process.env.BASE_URL, routes
})

export default router
