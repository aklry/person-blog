<template>
    <div class="menu">
        <el-menu class="el-menu-demo" :default-active="index" mode="horizontal" router background-color="#545c64"
            text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item>
                <router-link class="content" :to="{ name: 'Content', params: { content: 'vue' } }">vue</router-link>
            </el-menu-item>
            <el-menu-item>
                <router-link class="content"
                    :to="{ name: 'Content', params: { content: 'JavaScript' } }">JavaScript</router-link>
            </el-menu-item>
            <el-menu-item index="/user">个人中心</el-menu-item>
            <el-menu-item index="/publishBlog">发表博客</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            index: '/'
        }
    }
}
</script>

<style scoped></style>