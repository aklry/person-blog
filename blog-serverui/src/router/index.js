import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
nProgress.configure({ showSpinner: false })
Vue.use(VueRouter)
//解决重复点击导航问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  nProgress.start()
  let token = localStorage.getItem('token')
  if (token && token != null) { // 本地有 token 去下一步
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else { // 不是 login 页面我再去跳 ，是 login 就会死循环，因为login 也是页面就会被守卫
    if (to.meta.isLogin && to.path != '/login') {
      // 路由原信息为true 并且 不是 login 页面 去login 防止死循环
      next('/login')
    } else {
      next()
    }
  }
})
router.afterEach((to, from, next) => {
  nProgress.done()
})
export default router
