<template>
  <Layout>
    <template #NavMenu>
      <NavMenu />
    </template>
    <template #userInfo>
      <div class="userinfo" v-if="flag === true ? false : true">
        <router-link to="/login" class="login">登录</router-link>
        <router-link to="/register" class="register">注册</router-link>
      </div>
      <div class="user-info" v-if="flag === true ? true : false">
        <img class="avatar" :src="url" alt="" style="padding: 0 2px;">
        <el-dropdown>
          <span class="el-dropdown-link" style="color: #fff;">
            {{ userInfo.name }}<i class="el-icon-arrow-down el-icon--right" style="color: rgba(255, 255, 255, .7);"></i>
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
      <Carrousel />
      <Card :blogList="blogList" :total="total" />
    </template>
    <div class="content">
      <router-view></router-view>
    </div>
  </Layout>
</template>

<script>
import NavMenu from '@/components/NavMenu.vue'
import Layout from '@/components/Layout'
import Carrousel from '@/components/Carrousel'
import Card from '@/components/Card'
import { mapState, mapMutations } from 'vuex'
import api from '@/api/blog'
export default {
  data() {
    return {
      url: '',
      blogList: [],
      total: 0
    }
  },
  components: {
    Layout,
    NavMenu,
    Carrousel,
    Card
  },
  computed: {
    ...mapState(['flag', 'userInfo', 'pageInfo'])
  },
  methods: {
    ...mapMutations(['handleLogout']),
    logout() {
      this.handleLogout()
      this.$router.push('/login')
    },
    async http(val) {
      //加载博客数据
      const result = await api.listAllBlog(val)
      const { list, total } = result.data
      this.blogList = list
      this.total = total
    }
  },
  async mounted() {
    const imageUrl = localStorage.getItem('imageUrl')
    if (imageUrl) {
      this.url = imageUrl
    } else if (this.$store.state.userInfo.url) {
      this.url = this.$store.state.userInfo.url
    } else {
      this.url = require('@/assets/a1.png')
    }
    this.http({pageNum: 1, size: 4})
  },
  //监听博客数据页码的变化
  watch: {
    pageInfo: function(val) {
      this.http(val)
    }
  }
}
</script>

<style scoped>
.login,
.register {
  text-decoration: none;
  color: #fff;
}

.login {
  padding: 0 20px;
}

.user-info {
  padding-top: 5px;
}

.content {
  text-decoration: none;
  color: #fff;
  padding: 10px;
}
</style>