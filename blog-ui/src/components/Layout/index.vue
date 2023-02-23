<template>
  <div class="layout">
    <el-container>
      <el-header>
        <NavMenu></NavMenu>
        <div class="userinfo">
          <router-link to="/login" class="login">登录</router-link>
          <router-link to="/register" class="register">注册</router-link>
        </div>
      </el-header>
      <el-main>
        <Carrousel></Carrousel>
        <Card></Card>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import NavMenu from '../NavMenu.vue'
import Carrousel from '../Carrousel'
import Card from '../Card'
export default {
  components: {
    NavMenu,
    Carrousel,
    Card
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

.el-header {
  display: flex;
  justify-content: space-around;
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0 0;
  background-color: #545c64;
}


.el-main {
  /* background-color: #E9EEF3; */
  color: #333;
  text-align: center;
  padding: 0;
  /* line-height: 160px; */
}

.login,
.register {
  text-decoration: none;
  color: #fff;
}

.login {
  padding: 0 20px;
}
</style>