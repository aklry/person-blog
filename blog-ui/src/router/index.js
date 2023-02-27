import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
Vue.use(VueRouter)
//解决重复点击导航问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/index.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/register.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('@/views/user'),
    meta: {
      isLogin: true
    },
    children: [
      {
        path: '/info',
        name: 'Info',
        component: () => import('@/views/user/info.vue')
      },
      {
        path: '/changePassword',
        name: 'ChangePassword',
        component: () => import('@/views/user/changePassword.vue')
      },
      {
        path: '/changeName',
        name: 'ChangeName',
        component: () => import('@/views/user/changeName.vue')
      },
      {
        path: '/private',
        name: 'Private',
        component: () => import('@/views/user/private.vue')
      },
      {
        path: '/callback',
        name: 'Callback',
        component: () => import('@/views/user/callback.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
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
