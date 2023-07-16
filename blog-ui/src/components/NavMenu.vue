<template>
    <div class="menu">
        <el-menu class="el-menu-demo" :default-active="index" mode="horizontal" router background-color="#545c64"
            text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item v-for="category in categoryList" :key="category.id">
                <router-link class="content" :to="{ name: 'Content', params: { content: category.category } }">{{
                    category.category }}</router-link>
            </el-menu-item>
            <el-menu-item index="/user">个人中心</el-menu-item>
            <el-menu-item index="/publishBlog">发表博客</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
import api from '@/api/category'
export default {
    data() {
        return {
            index: '/',
            categoryList: []
        }
    },
    async mounted() {
        const { data } = await api.getAllCategory()
        this.categoryList = data.slice(0, 3)
    }
}
</script>

<style scoped></style>