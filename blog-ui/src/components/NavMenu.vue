<template>
    <div class="menu">
        <el-menu :default-active="index" class="el-menu-demo" mode="horizontal" @select="handleSelect"
            background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="/home">首页</el-menu-item>
            <el-submenu index="2">
                <template slot="title">vue</template>
                <el-menu-item index="/router">vue-router</el-menu-item>
                <el-menu-item index="/net">axios</el-menu-item>
                <el-menu-item index="/stateTool">vuex</el-menu-item>
                <el-menu-item index="/tools">开发工具</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">webpack</el-menu-item>
            <el-menu-item index="4">个人中心</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {

    data() {
        return {
            index: '/home'
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }

}
</script>

<style scoped>

</style>