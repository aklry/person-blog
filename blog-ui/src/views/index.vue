<template>
  <Layout>
    <template #NavMenu>
      <NavMenu>
        <template #header>
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
        </template>
      </NavMenu>
    </template>
    <template #userInfo>
      <div class="userinfo" v-if="flag === true ? false : true">
        <router-link to="/login" class="login">登录</router-link>
        <router-link to="/register" class="register">注册</router-link>
      </div>
      <div class="user-info" v-if="flag === true ? true : false">
        <img class="avatar" src="@/assets/a1.png" alt="" style="padding: 0 2px;">
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
      <Carrousel></Carrousel>
      <Card></Card>
    </template>
  </Layout>
</template>

<script>
import NavMenu from '@/components/NavMenu.vue'
import Layout from '../components/Layout'
import Carrousel from '@/components/Carrousel'
import Card from '@/components/Card'
import { mapState, mapMutations } from 'vuex'
export default {
  components: {
    Layout,
    NavMenu,
    Carrousel,
    Card
  },
  computed: {
    ...mapState(['flag', 'userInfo', 'token'])
  },
  methods: {
    ...mapMutations(['handleLogout']),
    logout() {
      this.handleLogout()
      this.$router.push('/login')
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

.avatar {
  width: 30px;
  height: 30px;
}

.user-info {
  padding-top: 5px;
}
</style>