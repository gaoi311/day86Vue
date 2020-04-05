import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.prototype.$http = axios
Vue.config.productionTip = false
// 全局注册过滤
Vue.filter('currency', (value)=>{
  return '$' + value;
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
