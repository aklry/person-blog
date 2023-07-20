import Vue from 'vue'
import VueRouter from 'vue-router'
import nProgress from 'nprogress'
import api from '@/api/user'
import 'nprogress/nprogress.css'
nProgress.configure({ showSpinner: false })
Vue.use(VueRouter)
//解决重复点击导航问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = []
const { role } = JSON.parse(localStorage.getItem('adminInfo'))

//处理动态路由数据
const router = new VueRouter({
  routes
})
//将服务端返回的数据转化为路由配置数据格式的数据
const transfer = data => {
  data.forEach(item => {
    routes.push({
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
  return routes
}
//根据权限获取路由数据
const getRoutesData = async role => {
  switch (role) {
    case '超级管理员':
      let res1 = await api.getRouter('/vip.json')
      let routesData1 = transfer(res1.data)
      routesData1.forEach(item => router.addRoute(item))
      break;
    case '普通管理员':
      let res2 = await api.getRouter('/admin.json')
      let routesData2 = transfer(res2.data)
      routesData2.forEach(item => router.addRoute(item))
      break
    default: break
  }
}

getRoutesData(role)
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
    if (to.meta.isLogin && to.path !== '/login') {
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
