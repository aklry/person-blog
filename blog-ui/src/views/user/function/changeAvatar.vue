<template>
    <div class="container">
        <el-button class="btn" type="primary" @click="dialogUploadVisible = true">上传头像</el-button>
        <el-dialog destroy-on-close :visible="dialogUploadVisible" center title="上传头像">
            <el-upload class="avatar-uploader" :action="getActions" :show-file-list="false"
                :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <template #footer>
                <el-button @click="dialogUploadVisible = false">取消</el-button>
                <el-button type="primary" @click="dialogUploadVisible = false">确认</el-button>
            </template>
        </el-dialog>
    </div>
</template>

<script>
import api from '@/api/user';

export default {
    data() {
        return {
            dialogUploadVisible: false,
            imageUrl: ''
        }
    },
    methods: {
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw)
            localStorage.setItem('imageUrl', res)
            api.updateUserURL({
                id: this.$store.state.userInfo.id,
                url: res
            }).then(res => {
                if (res.status === 200) {
                    this.$message(res.data.message)
                }
            }).catch(error => console.log(error))
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG或者PNG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        }
    },
    computed: {
        getActions() {
            return process.env.NODE_ENV === 'development' ? `${process.env.VUE_APP_SERVE}/uploadAvatar` : `${process.env.VUE_APP_SERVE}/blog/uploadAvatar`
        }
    }
}
</script>
<style scoped>
.btn {
    margin-top: 10px;
}
</style>