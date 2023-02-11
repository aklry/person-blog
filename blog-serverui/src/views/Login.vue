<template>
    <div class="login">
        <div class="login-content">
            <h1>登录</h1>
            <el-form :rules="rules" :model="form" ref="form">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="form.password" show-password></el-input>
                </el-form-item>
                <p>无账号,<router-link to="/register" class="register">去注册</router-link></p>
                <el-form-item style="text-align: center;">
                    <el-button type="primary" @click="submitForm">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import mixin from '@/mixins'
export default {
    name: 'Login',
    mixins: [mixin]
}
</script>

<style scoped>
.login {
    /* width: 100%; */
    height: 100%;
    color: #fff;
    background-color: #2d3a4b;
    overflow: hidden;
}

.login-content {
    width: 500px;
    margin: 100px auto;
    padding: 20px;
    box-shadow: 0 0 5px #ccc;
}

.register {
    color: #fff;
    text-decoration: none;
}
.register:hover {
    color: red;
}
</style>>

</style>