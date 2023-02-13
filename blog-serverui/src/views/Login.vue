<template>
    <div class="login">
        <div class="login-content">
            <h1>登录</h1>
            <el-form :rules="rules" :model="form" ref="form">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="form.username" ref="username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="form.password" show-password ref="password"></el-input>
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
import mixin from '@/mixins/login.js'
import api from '@/api'
import { mapMutations } from 'vuex'
import utils from '@/util/utils'
export default {
    name: 'Login',
    mixins: [mixin],
    methods: {
        ...mapMutations(['setAdminInfo']),
        submitForm () {
            const username = this.$data.form.username
            const password = this.$data.form.password
            api.getAdminInfo({
                username,
                password
            })
                .then(res => {
                    if (res.data) {
                        let adminInfo = res.data[0]
                        console.log(adminInfo)
                        this.setAdminInfo({
                            token: res.data[1].token,
                            adminInfo: res.data[0]
                        })
                        localStorage.setItem('token', res.data[1].token)
                        this.$router.push('/home')
                    } else {
                        utils.alert(this, '用户名或密码错误')
                        this.$router.push('/login')
                    }
                })
                .catch(error => console.log(error))

        }
    }
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