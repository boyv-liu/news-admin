import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/base.css'
import moment from 'moment'

Vue.use(ElementUI)

Vue.config.productionTip = false

// 挂载axios+设置基地址
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://localhost:3000'

// 路径处理过滤器
Vue.filter('handelSrc', value => {
  return axios.defaults.baseURL + value
})
// 时间处理
Vue.filter('time', (value, str = 'YYYY-MM-DD') => {
  return moment(value).format(str)
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
