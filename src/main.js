import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

// 挂载axios+设置基地址
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://localhost:3000'

// 解决push, 重复跳转路由报错的问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject)
  }
  return originalPush.call(this, location).catch(err => err)
}

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
