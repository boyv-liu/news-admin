import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/base.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

// 挂载axios+设置基地址
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://localhost:3000'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
