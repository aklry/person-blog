import Admin from '@/views/admin'
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
                path: '/systemSetting/admin',
                name: 'Admin',
                component: Admin,
                meta: {
                    isLogin: true,
                    title: '管理员管理',
                    icon: 'el-icon-user-solid'
                }
            },
            {
                path: '/systemSetting/user',
                name: 'User',
                component: () => import('@/views/user'),
                meta: {
                    isLogin: true,
                    title: '用户管理',
                    icon: 'el-icon-s-custom'
                }
            },
            {
                path: '/systemSetting/role',
                name: 'Role',
                component: () => import('@/views/role'),
                meta: {
                    isLogin: true,
                    title: '权限管理',
                    icon: 'el-icon-unlock'
                }
            },
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
    }

]