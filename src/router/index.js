import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入路由
import Home from 'pages/Home.vue'
import Login from 'pages/Login.vue'
import PostList from 'pages/PostList.vue'
import PostPublish from 'pages/PostPublish.vue'
import MainPage from 'pages/MainPage.vue'

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
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        { path: '/', name: 'mainpage', component: MainPage },
        { path: '/postlist', name: 'postlist', component: PostList },
        { path: '/postpublish', name: 'postpublish', component: PostPublish }
      ]
    },
    { path: '/login', name: 'login', component: Login }
  ]
})

// 前置守卫
router.beforeEach((to, from, next) => {
  // 有token和登录页放行
  const token = localStorage.getItem('token')
  if (to.path == '/login' || token) {
    next()
  } else {
    // 其余拦截到登录页
    next('/login')
  }
})
export default router
