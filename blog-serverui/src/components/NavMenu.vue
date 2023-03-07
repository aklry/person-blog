<template>
    <div class="nav-menu">
        <el-menu default-active="2" class="el-menu-vertical-demo" router background-color="#001529" text-color="#999"
            unique-opened active-text-color="#fff">
            <div class="logo">
                <img src="@/assets/logo.png" alt="" />
                <span style="font-size: 16px;">个人博客管理后台</span>
            </div>
            <el-menu-item index="/home">
                <i class="el-icon-s-home"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="menu">
                <template slot="title">
                    <i class="el-icon-setting"></i>
                    <span slot="title">系统设置</span>
                </template>
                <el-menu-item index="/user">
                    <span slot="title">用户管理</span>
                </el-menu-item>
                <el-menu-item index="/admin" v-if="adminInfo.role === '超级管理员'">
                    <span slot="title">管理员管理</span>
                </el-menu-item>
                <el-menu-item index="/role" v-if="adminInfo.role === '超级管理员'">
                    <span slot="title">权限管理</span>
                </el-menu-item>
            </el-submenu>

            <el-submenu index="blogMenu">
                <template slot="title">
                    <i class="el-icon-setting"></i>
                    <span slot="title">博客设置</span>
                </template>
                <el-menu-item index="/blogManage">
                    <span slot="title">博客管理</span>
                </el-menu-item>
                <el-menu-item index="/comment">
                    <span slot="title">评论管理</span>
                </el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: "NavBar",
    computed: {
        ...mapState(['adminInfo'])
    }
};
</script>

<style scoped>
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

.nav-menu {
    height: 100%;
    background-color: #001529;
}

.el-menu {
    width: 200px;
}
</style>
