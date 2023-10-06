<template>
    <div class="container">
        <el-button class="btn" type="primary" @click="dialogUploadVisible = true">上传头像</el-button>
        <el-dialog destroy-on-close :visible="dialogUploadVisible" center title="上传头像">
            <el-upload
                    class="avatar-uploader"
                    :action="actions"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                    :auto-upload="false"
                    ref="upload"
                    :on-change="handleAvatarChange"
            >
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <template #footer>
                <el-button @click="cancel">取消</el-button>
                <el-button type="primary" @click="handleUpload">确认</el-button>
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
            localStorage.setItem('imageUrl', res)
            api.updateUserURL({
                id: this.$store.state.userInfo.id,
                url: res
            }).then(res => {
                if (res.status === 200) {
                    this.$message.success(res.data.message)
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
        },
        handleAvatarChange(file) {
            this.imageUrl = URL.createObjectURL(file.raw)
        },
        handleUpload() {
            this.dialogUploadVisible = false
            this.$refs.upload.submit()
        },
        cancel() {
            this.dialogUploadVisible = false
            this.imageUrl = ''
        }
    },
    computed: {
        actions() {
            return `${process.env.VUE_APP_SERVE}/blog/uploadAvatar`
        }
    }
}
</script>
<style scoped>
.btn {
    margin-top: 10px;
}
</style>