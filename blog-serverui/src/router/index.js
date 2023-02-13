import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    redirect: '/home',
    meta: {
      isLogin: true
    },
    component: () => import('@/components/Layout'),
    children: [
      {
        path: '/home',
        name:'Home'
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register')
  }
  
]

const router = new VueRouter({
  routes
})

router.beforeEach((from, to, next) => {
    if (to.meta.isLogin) {
    if (store.state.token) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})

export default router
