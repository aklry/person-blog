import Vue from 'vue'
import VueRouter from 'vue-router'
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
    component: () => import('@/views/Home/index.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/blogNav/:content',
    name: 'Content',
    component: () => import('@/views/Home/blogNav/index.vue')
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
        component: () => import('@/views/user/function/info.vue')
      },
      {
        path: '/changePassword',
        name: 'ChangePassword',
        component: () => import('@/views/user/function/changePassword.vue')
      },
      {
        path: '/changeName',
        name: 'ChangeName',
        component: () => import('@/views/user/function/changeName.vue')
      },
      {
        path: '/changeAvatar',
        name: 'ChangeAvatar',
        component: () => import('@/views/user/function/changeAvatar.vue')
      }
    ]
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('@/views/blog')
  },
  {
    path: '/publishBlog',
    name: 'PublishBlog',
    component: () => import('@/views/blog/publish.vue')
  }
]

const router = new VueRouter({
  routes
})

// 添加路由守卫, 实现权限控制
router.beforeEach((to, from, next) => {
  // 1.如果访问的是注册或者登录, 那么就放行
  if (to.path === '/login' || to.path === '/register' || to.path === '/') {
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
