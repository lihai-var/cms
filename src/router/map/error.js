// 登录
export default [
	{	
		path: '/403',
        component: () => import('@/pages/errorPage/index.vue')
	},{	
		path: '*',
        component: () => import('@/pages/errorPage/index.vue')
	},
]