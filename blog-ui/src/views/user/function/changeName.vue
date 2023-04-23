<template>
    <div class="changePassword">
        <el-form :rules="rules" :model="form" ref="form">
            <el-form-item label="新昵称" prop="newName">
                <el-input v-model="form.newName"></el-input>
            </el-form-item>
            <el-form-item style="text-align: center;">
                <el-button @click="submitForm">确认</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import api from '@/api/user'
import { mapMutations } from 'vuex'
export default {
    data() {
        return {
            form: {
                newName: ''
            },
            rules: {
                newName: [
                    { required: true, message: "请输入用户名", trigger: "blur" },
                    { min: 3, max: 10, message: "长度在3到10个字符", trigger: "blur" }
                ]
            }
        }
    },
    methods: {
        ...mapMutations(['changeUserInfo']),
        submitForm() {
            /**
             * 调用接口更新用户的昵称信息
             */
            api.updateName({
                name: this.form.newName,
                id: this.$store.state.userInfo.id
            }).then(res => {
                if (res.data[0].flag) {
                    this.$message.success(res.data[0].message)
                    this.changeUserInfo(res.data[1])
                    localStorage.setItem('userInfo', JSON.stringify(res.data[1]))
                } else {
                    this.$message.error(res.data[0].message)
                }
            }).catch(error => console.log(error))
        }
    }
}
</script>

<style></style>