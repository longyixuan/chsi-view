// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import store from '@/store/store'
import router from '@/router'
import axios from './http'

Vue.prototype.$axios = axios;
// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app');
router.beforeEach((to, from, next) => {
	if(to.meta.requireAuth) { //判断路由是否需要登录权限
	    if (store.state.token) {  // 通过vuex state获取当前的token是否存在
	        next();
	    } else {
	    	next({
	    		path: '/login',
	            query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
	    	})
	    }
	} else {
		next();
	}
})