export const routes = [
    {
        path: '/',
        name: 'Layout',
        redirect: '/home',
        component: () => import('@/components/Layout'),
        children: [
            {
                path: '/home',
                name: 'Home',
                meta: {
                    isLogin: true,
                    icon: 'el-icon-s-home',
                    title: '首页'
                },
                component: () => import('@/views/home')
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login'),
        meta: {
            hidden: true
        }
    },
    {
        path: '/systemSetting',
        name: 'SystemSetting',
        redirect: '/systemSetting/user',
        component: () => import('@/components/Layout'),
        meta: {
            title: '系统设置',
            icon: 'el-icon-setting'
        },
        children: [
            {
                path: '/systemSetting/user',
                name: 'User',
                component: () => import('@/views/user'),
                meta: {
                    isLogin: true,
                    title: '用户管理',
                    icon: 'el-icon-s-custom'
                }
            }
        ]
    },
    {
        path: '/blog',
        redirect: '/blog/blogManage',
        component: () => import('@/components/Layout'),
        meta: {
            title: '博客管理',
            icon: 'el-icon-setting'
        },
        children: [
            {
                path: '/blog/blogManage',
                name: 'BlogManage',
                component: () => import('@/views/blogManage'),
                meta: {
                    isLogin: true,
                    title: '博客管理',
                    icon: 'el-icon-s-management'
                }
            },
            {
                path: '/blog/comment',
                name: 'Comment',
                component: () => import('@/views/comment'),
                meta: {
                    isLogin: true,
                    title: '评论管理',
                    icon: 'el-icon-s-comment'
                }
            }
        ]
    },
    {
        path: '/',
        component: () => import('@/components/Layout'),
        redirect: '/banner',
        children: [
            {
                path: '/banner',
                name: 'Banner',
                component: () => import('@/views/banner'),
                meta: {
                    isLogin: true,
                    title: 'banner管理',
                    icon: 'el-icon-s-operation'
                }
           }
        ]
    }
]