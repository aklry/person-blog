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
export default {
    name: 'Login',
    mixins: [mixin],
    methods: {
        ...mapMutations(['setAdminInfo']),
        submitForm () {
            const username = this.form.username
            const password = this.form.password
            api.getAdminInfo({
                username,
                password
            })
                .then(res => {
                    const [message, result] = res.data
                    if (message.flag && message.token) {
                        this.setAdminInfo({
                            token: message.token,
                            adminInfo: result
                        })
                        localStorage.setItem('token', message.token)
                        localStorage.setItem('adminInfo', JSON.stringify(result))
                        this.$router.push('home')
                    } else {
                        this.$message.error(message.message)
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