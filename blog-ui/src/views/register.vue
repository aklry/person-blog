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
                <el-form-item label="电话号码" prop="phoneNumber">
                    <el-input v-model="form.phoneNumber"></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="sex">
                    <el-radio-group v-model="form.sex">
                        <el-radio label="男"></el-radio>
                        <el-radio label="女"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="地址" prop="address">
                    <el-select v-model="form.address" placeholder="请选择你的所在地">
                        <el-option label="上海" value="上海"></el-option>
                        <el-option label="北京" value="北京"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item style="text-align: center">
                    <el-button type="primary" @click="rollback">返回</el-button>
                    <el-button type="primary" @click="registerForm">注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import registerMixins from '../mixins/register'
export default {
    mixins: [registerMixins]
}
</script>

<style scoped>
.register {
    height: 100%;
    color: #fff;
}

.register-content {
    width: 500px;
    margin: 100px auto;
    padding: 20px;
}
</style>