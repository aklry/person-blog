<template>
    <el-dialog :visible="isShow">
        <el-form :model="form" :rules="rules">
            <el-form-item label="用户名" :label-width="formLabelWidth" prop="username">
                <el-input v-model="form.username" autocomplete="off" ref="username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password" :label-width="formLabelWidth">
                <el-input v-model="form.password" show-password ref="password" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="cancel">取 消</el-button>
            <el-button type="primary" @click="submit">修 改</el-button>
        </div>
    </el-dialog>
</template>

<script>
import mixin from '@/mixins/dialog'
import api from '@/api';

import utils from '@/util/utils';
export default {
    inject: ['reload'],
    mixins: [mixin],
    props: {
        isShow: {
            type: Boolean,
            default() {
                return false
            }
        }
    },
    methods: {
        cancel() {
            this.$emit("changeIsShow", false);
        },
        submit() {
            const username = this.$data.form.username
            const password = this.$data.form.password
            api.update({
                username,
                password
            }).then(res => {
                if (res.data.flag) {
                    utils.alert(res.data.message)
                    this.reload()
                } else {
                    utils.alert(res.data.message)
                }
            })
        }
    }
}
</script>

<style></style>