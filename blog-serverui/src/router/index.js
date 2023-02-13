import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    redirect: '/home',
    component: () => import('@/components/Layout'),
    children: [
      {
        path: '/home',
        name: 'Home',
        meta: {
          isLogin: true
        }
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

router.beforeEach((to, from, next) => {
  console.log(from)
  console.log(to)
    if (to.meta.isLogin) {
      if (store.state.token) {
      console.log(store.state.token)
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
