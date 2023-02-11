<template>
    <div class="regiser">
        <div class="register-content">
            <h1 style="text-align: center">注册</h1>
            <el-form :rules="rules" :model="form" ref="form">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="form.password" show-password></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="form.password" show-email></el-input>
                </el-form-item>
                <el-form-item style="text-align: center;">
                    <el-button type="primary" @click="registerForm">注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import mixin from '@/mixins'
export default {
    data () {
        return {
            form: {
                email: ''
            },
            rules: {
                username: [
                    { required: true, message: "请输入用户名", trigger: "blur" },
                    { min: 3, max: 10, message: "长度在3到10个字符", trigger: "blur" },
                ],
                password: [
                    { required: true, message: "请输入密码", trigger: "blur" },
                    { min: 3, max: 10, message: "长度在3到10个字符", trigger: "blur" },
                ],
                email: [
                    { required: true, message: "请输入密码", trigger: "blur" },
                    { min: 3, max: 10, message: "长度在3到10个字符", trigger: "blur" },
                ]
            }
        }
    },
    methods: {
        registerForm () {
            this.$alert('注册成功', '提示', {
                confirmButtonText: '确定',
                callback: action => {
                    this.$message({
                        type: 'info',
                        message: `action${ action }`
                    })
                }
            })
        }
    }

}
</script>

<style scoped>
.register {
    /* width: 100%; */
    height: 100%;
    color: #fff;
}

.register-content {
    width: 500px;
    margin: 100px auto;
    padding: 20px;
}
</style>>

</style>