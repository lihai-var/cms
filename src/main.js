import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import login from './common/login'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import auth from './common/auth'
import { injectGlobal } from './common/'
import './style/reset.less'
import './style/common.less'
import './assets/font/iconfont.css'
import './style/index.less'
import './filters/filter'
//全局注入
Vue.use(ElementUI)

injectGlobal()

window.globalVue = "";
auth(router);
Vue.config.productionTip = false
const globalVue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
window.globalVue = globalVue;
window.ydStorage && ydStorage.postItem();
