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
      },
      {
        path: '/admin',
        name: 'Admin',
        component: () => import('@/views/admin'),
        meta: {
          isLogin: true
        }
      },
      {
        path: '/user',
        name: 'User',
        component: () => import('@/views/user'),
        meta: {
          isLogin: true
        }
      },
      {
        path: '/role',
        name: 'Role',
        component: () => import('@/views/role'),
        meta: {
          isLogin: true
        }
      },
      {
        path: '/blogManage',
        name: 'BlogManage',
        component: () => import('@/views/blogManage'),
        meta: {
          isLogin: true
        }
      },
      {
        path: '/comment',
        name: 'Comment',
        component: () => import('@/views/comment'),
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
