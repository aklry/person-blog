<template>
  <div class="changePassword">
    <el-form :rules="rules" :model="form" ref="form">
      <el-form-item label="新密码" prop="newPassword">
        <el-input v-model="form.newPassword" show-password ref="newPassword"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPassword">
        <el-input v-model="form.checkPassword" show-password ref="checkPassword"></el-input>
      </el-form-item>
      <el-form-item style="text-align: center;">
        <el-button @click="submitForm">确认</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import api from '@/api/user'
import store from '@/store'
export default {
  data() {
    return {
      form: {
        newPassword: '',
        checkPassword: ''
      },
      rules: {
        newPassword: [
          { required: true, message: "请输入至少六位包含数字和字母的组合", trigger: "blur" },
          { pattern: '^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$', message: '密码格式不正确', trigger: 'blur' }
        ],
        checkPassword: [
          { required: true, message: "请输入至少六位包含数字和字母的组合", trigger: "blur" },
          { pattern: '^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$', message: '密码格式不正确', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm() {
      if (this.form.newPassword === this.form.checkPassword) {
        api.updatePassword({
          password: this.form.newPassword,
          id: store.state.userInfo.id
        }).then(res => {
          if (res.data.flag) {
            this.$message.success(res.data.message)
          } else {
            this.$message.error(res.data.message)
          }
        }).catch(error => console.log(error))
      } else {
        this.$message.error('两个密码不一致')
      }
    }
  }
}
</script>

<style></style>