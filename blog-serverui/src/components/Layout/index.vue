<template>
    <div class="layout">
        <el-container>
            <el-aside width="200px" height="100%">
                <el-menu :default-active="$route.path" class="el-menu-vertical-demo" router background-color="#001529"
                    text-color="#999" active-text-color="#fff">
                    <div class="logo">
                        <img src="@/assets/logo.png" alt="" />
                        <span style="font-size: 16px;">个人博客管理后台</span>
                    </div>
                    <NavMenu :routes="menuRoutes" />
                </el-menu>
            </el-aside>
            <el-main>
                <el-header>
                    <div class="welcome">
                        欢迎 {{ adminInfo.username }}登录个人博客后台管理系统
                    </div>
                    <div class="user-info">
                        <img class="avatar" src="@/assets/a1.png" alt="">
                        <!-- <span class="username"></span> -->
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                {{ adminInfo.username }}<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>
                                    <span @click="logout">登出</span>
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </el-header>
                <div class="content">
                    <router-view></router-view>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import NavMenu from '@/components/NavMenu.vue';
import { mapState, mapMutations } from 'vuex';
import api from '@/api/user'
export default {
    data() {
        return {
            menuRoutes: []
        }
    },
    components: {
        NavMenu
    },
    methods: {
        ...mapMutations(['handleLogOut']),
        logout() {
            this.handleLogOut()
            this.$router.push('/login')
        },
        loadMenuData() {
            switch (this.$store.state.adminInfo.role) {
                case '超级管理员':
                    api.getRouter('/vip.json').then(res => this.menuRoutes = res.data)
                    break
                case '普通管理员':
                    api.getRouter('/admin.json').then(res => this.menuRoutes = res.data)
                    break
            }
        }
    },
    computed: {
        ...mapState(['token', 'adminInfo'])
    },
    mounted() {
        this.loadMenuData()
    }
}
</script>

<style scoped>
.layout {
    height: 100%;
}

.el-container {
    height: 100%;
}

.el-main {
    padding: 0;
}

.el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 5px #ccc;
}

.content {
    padding: 20px;
}

.avatar {
    width: 30px;
    height: 30px;
}

.logo {
    height: 70px;
    color: #fff;
    font-size: 20px;
    line-height: 70px;
    text-align: center;
}

.logo img {
    width: 30px;
    height: 30px;
    vertical-align: middle;
    border-radius: 5px;
}

.el-menu {
    height: 100%;
    overflow: hidden;
}
</style>