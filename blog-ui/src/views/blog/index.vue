<template>
    <div class="blog">
        <Layout>
            <template #NavMenu>
                <NavMenu>
                    <template #header>
                        <el-menu-item index="/">首页</el-menu-item>
                        <el-submenu index="menu">
                            <template slot="title">vue</template>
                            <el-menu-item index="/router">vue-router</el-menu-item>
                            <el-menu-item index="/net">axios</el-menu-item>
                            <el-menu-item index="/stateTool">vuex</el-menu-item>
                            <el-menu-item index="/tools">开发工具</el-menu-item>
                        </el-submenu>
                        <el-menu-item index="/webpack">webpack</el-menu-item>
                        <el-menu-item index="/user">个人中心</el-menu-item>
                        <el-menu-item index="/publishBlog">发表博客</el-menu-item>
                    </template>
                </NavMenu>
            </template>
            <template #userInfo>
                <div class="user-info">
                    <img class="avatar" src="@/assets/a1.png" alt="" style="padding: 0 2px;">
                    <el-dropdown>
                        <span class="el-dropdown-link" style="color: #fff;">
                            {{ userInfo.name }}<i class="el-icon-arrow-down el-icon--right"
                                style="color: rgba(255, 255, 255, .7);"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>
                                <span @click="logout">登出</span>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </template>
            <template #main>
                <div class="blog">
                    <h1 class="title">{{ blog.title }}</h1>
                    <p class="author">{{ blog.author }}</p>
                    <article class="article">{{ blog.content }}</article>
                </div>
            </template>
        </Layout>
    </div>
</template>

<script>
import Layout from '@/components/Layout'
import NavMenu from '@/components/NavMenu.vue'
import { mapState, mapMutations } from 'vuex'
import blogMixins from '@/mixins/blog'
import blogApi from '@/api/blog'
export default {
    mixins: [blogMixins],
    components: {
        Layout,
        NavMenu
    },
    computed: {
        ...mapState(['userInfo'])
    },
    methods: {
        ...mapMutations(['handleLogout']),
        logout() {
            this.handleLogout()
            this.$router.push({ name: 'Login' })
        }
    },
    mounted() {
        blogApi.findBlogById(this.$store.state.blogId)
            .then(res => {
                this.$data.blog = res.data
            }).catch(error => console.log(error))
    }
}
</script>

<style scoped>
.avatar {
    width: 30px;
    height: 30px;
}

.user-info {
    padding-top: 5px;
}

.blog {
    position: inherit;
    width: 100%;
    height: 100%;
    background-color: rgb(246, 248, 249);
}


.blog .title {
    margin-top: 20px;
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
}

.blog .author {
    padding: 20px;
}

.blog .article {
    width: 500px;
    line-height: 30px;
    margin: 0 auto;
}
</style>