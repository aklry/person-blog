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
        },
        component: () => import('@/views/home')
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
  // 1.如果访问的是注册或者登录, 那么就放行
  if (to.path === '/login' || to.path === '/') {
    return next();
  }
  // 2.获取当前的登录状态
  const token = localStorage.getItem('token');
  // 3.如果访问的是其它路由地址, 那么就需要判断是否已经登录
  //   如果已经登录, 那么就放行, 如果没有登录, 那么就强制跳转到登录界面
  if (!token) {
    return next('/login');
  }
  next();
})

export default router
