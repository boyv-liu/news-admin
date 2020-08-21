import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from 'pages/Home.vue'

Vue.use(VueRouter)

// 解决push, 重复跳转路由报错的问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject)
  }
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes: [{ path: '/', component: Home }]
})

export default router
