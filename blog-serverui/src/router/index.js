import Vue from 'vue'
import VueRouter from 'vue-router'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Login from '@/views/Login.vue'
import store from '@/store'
import vip from '@/util/data/vip.json'
import admin from '@/util/data/admin.json'
nProgress.configure({ showSpinner: false })
Vue.use(VueRouter)
//解决重复点击导航问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    path: "/login",
    name: "Login",
    meta: {
      "hidden": true
    },
    component: Login
  },
]

//处理动态路由数据
const router = new VueRouter({
  routes
})
//将服务端返回的数据转化为路由配置数据格式的数据
const transfer = data => {
  data = data.filter(item => item.name !== 'Login')
  const routerData = []
  data.forEach(item => {
    routerData.push({
      path: item.path,
      name: item.name,
      meta: item.meta,
      redirect: item.redirect,
      component: () => import(`@/${item.component}`),
      children: item.children ? item.children.map(child => {
        return {
          path: child.path,
          name: child.name,
          meta: child.meta,
          component: () => import(`@/${child.component}`)
        }
      }) : null
    })
  })
  return routerData
}

const getExactlyRouter = data => {
  let result = transfer(data)
  result.forEach(item => router.addRoute(item))
}

router.beforeEach(async (to, from, next) => {
  nProgress.start()
  let token = localStorage.getItem('token')
  let routesData = store.state.routes || []
  if (token) { // 本地有 token 去下一步
    if (routesData.length === 0) {
      const { role } = JSON.parse(localStorage.getItem('adminInfo'))
      if (role === '超级管理员') {
        await store.dispatch('SET_ROUTES', vip)
        getExactlyRouter(vip)
      } else {
        await store.dispatch('SET_ROUTES', admin)
        getExactlyRouter(admin)
      }
      next({ path: to.path })
    } else {
      next()
    }
  } else { // 不是 login 页面我再去跳 ，是 login 就会死循环，因为login 也是页面就会被守卫
    if (to.path !== '/login') {
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
