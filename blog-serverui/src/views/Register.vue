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
                    <el-input v-model="form.email" show-email></el-input>
                </el-form-item>
                <el-form-item style="text-align: center;">
                    <el-button type="primary" @click="registerForm">注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import mixin from '@/mixins/register'
export default {
    mixins: [mixin]
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