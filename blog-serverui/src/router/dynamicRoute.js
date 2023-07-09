export const dynamicRoutes = [
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
    {
        path: '/systemSetting/admin',
        name: 'Admin',
        component: () => import('@/views/admin'),
        meta: {
            isLogin: true,
            title: '管理员管理',
            icon: 'el-icon-user-solid'
        }
    },
]