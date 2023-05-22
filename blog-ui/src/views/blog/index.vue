<template>
    <div class="blog">
        <Layout>
            <template #NavMenu>
                <NavMenu />
            </template>
            <template #userInfo>
                <div class="user-info">
                    <img class="avatar" :src="url" alt="" style="padding: 0 2px;">
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
                <div class="blog-content">
                    <h1 class="title">{{ blog.title }}</h1>
                    <p class="author">{{ blog.author }}</p>
                    <article class="article">
                        <div class="article-content">
                            <div v-html="blog.content"></div>
                        </div>
                    </article>
                </div>
                <div class="publishComment">
                    <el-form :model="formData" ref="userContent" :rules="rules">
                        <el-form-item prop="content">
                            <el-input type="textarea" v-model="formData.content" placeholder="请说说你的看法"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="comment(userInfo, blog,'userContent')">发表</el-button>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="comment">
                    <p class="comment_title">评论列表</p>
                    <div class="comment_content">
                        <div class="main" v-for="(comment, index) in userInfoConComment" :key="index">
                            <p class="user">{{ comment.user.name }}: {{ comment.content }}</p>
                        </div>
                    </div>
                </div>
            </template>
        </Layout>
    </div>
</template>

<script>
import Layout from '@/components/Layout'
import NavMenu from '@/components/NavMenu.vue'
import { mapState } from 'vuex'
import blogMixins from '@/mixins/blog'
export default {
    mixins: [blogMixins],
    components: {
        Layout,
        NavMenu
    },
    computed: {
        ...mapState(['userInfo', 'blog'])
    }
}
</script>

<style lang="scss" scoped>
.avatar {
    width: 30px;
    height: 30px;
}

.user-info {
    padding-top: 5px;
}

.blog {
    height: 100%;
}

.blog-content {
    width: 100%;

    .title {
        margin-top: 20px;
        font-weight: 600;
        font-size: 20px;
        line-height: 20px;
    }

    .author {
        padding: 20px;
    }

    .article {
        width: 500px;
        line-height: 30px;
        margin: 0 auto;
        .article-content {
            text-align: left;
            text-indent: 2em;
        }
    }
}

.publishComment {
    width: 500px;
    margin: 20px auto;
}

.comment {
    width: 500px;
    margin: 10px auto;

    .comment_content {
        width: 500px;
        height: 200px;
        margin-top: 20px;

        .main {
           text-align: left;
           p {
            line-height: 30px;
           }
        }
    }

    .comment_title {
        text-align: left;
        font-weight: 700;
    }
}
</style>