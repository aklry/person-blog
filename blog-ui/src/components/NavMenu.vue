<template>
    <div class="menu">
        <el-menu class="el-menu-demo" :default-active="index" mode="horizontal" router background-color="#545c64" text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="/home">首页</el-menu-item>
            <el-submenu index="menu">
                <template slot="title">vue</template>
                <el-menu-item index="/router">vue-router</el-menu-item>
                <el-menu-item index="/net">axios</el-menu-item>
                <el-menu-item index="/stateTool">vuex</el-menu-item>
                <el-menu-item index="/tools">开发工具</el-menu-item>
            </el-submenu>
            <el-menu-item index="/webpack">webpack</el-menu-item>
            <el-menu-item index="/user">个人中心</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            index: '/home'
        }
    }
}
</script>

<style scoped></style>