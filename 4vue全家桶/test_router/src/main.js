import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import axios from 'axios'

Vue.prototype.$http = axios;
Vue.config.productionTip = false

router.beforeEach((to, from, next)=>{
  if(to.path === '/notes'){
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      next();
    }else{
      next('/login');
    }
  }
  next();
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
