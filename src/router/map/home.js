/**
 * Created by ZhongquanHe on 2019/04/29.
 */
import layout from '@/components/common/layout/layout' 
import Home from '@/pages/home/index.vue'
import Index from '@/pages/index/index.vue'
export default {
	path: '/',
	name: '首页',
	component:layout,
	children:[
		{path:'/home', component:Home},
		{path:'/index', component:Home},
    ]
}