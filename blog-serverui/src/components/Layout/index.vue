<template>
    <div class="layout">
        <el-container>
            <el-aside width="200px">
                <NavMenu />
            </el-aside>
            <el-main>
                <el-header>
                    <div class="welcome">
                        <Home>
                            欢迎 {{ adminInfo.username }}登录个人博客后台管理系统
                        </Home>
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
import Home from '@/views/home'
import { mapState, mapMutations } from 'vuex';
export default {
    data () {
        return {

        }
    },
    components: {
        NavMenu,
        Home
    },
    methods: {
        ...mapMutations(['handleLogOut']),
        logout () {
            this.handleLogOut()
            this.$router.push('/login')
        }
    },
    computed: {
        ...mapState(['token','adminInfo'])
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
</style>