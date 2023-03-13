<template>
  <div class="login">
    <div class="login-content">
      <el-form :rules="rules" :model="form" ref="form">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" ref="username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" show-password ref="password"></el-input>
        </el-form-item>
        <el-form-item style="text-align: center;">
          <el-button @click="submitForm" style="background-color: rgba(0, 0, 0, 0.6); border: none">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import loginMixins from '@/mixins/login'
export default {
  mixins: [loginMixins]
}
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  color: #fff;
  background: url(@/assets/name.jpg) no-repeat;
  overflow: hidden;
}

.login-content {
  width: 500px;
  margin: 100px auto;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.6);

  .el-form {
    margin-top: 20px;
  }
}

.el-input__inner {
  background-color: transparent !important;
  border: 1px solid transparent !important;
  border-bottom: 1px solid #fff;
}
</style>