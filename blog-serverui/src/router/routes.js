export const routes = [
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
    }

]