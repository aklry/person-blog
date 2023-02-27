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
import api from '@/api/user';
import utils from '@/utils/utils'
import store from '@/store'
import { mapMutations } from 'vuex';
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
            api.updateName({
                name: this.form.newName,
                id: store.state.userInfo.id
            })
                .then(res => {
                    if (res.data.flag) {
                        utils.alert(this, res.data.message)

                    } else {
                        utils.alert(this, res.data.message)
                    }
                }).catch(error => console.log(error))
            api.findUserByName({
                name: this.form.newName
            }).then(res => {
                this.changeUserInfo(res.data)
            }).catch(error => console.log(error))
        }
    }
}
</script>

<style></style>