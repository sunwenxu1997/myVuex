import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

Vue.config.productionTip = false

//项目首次进入获取用户信息
store.dispatch('user/getInfo')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
