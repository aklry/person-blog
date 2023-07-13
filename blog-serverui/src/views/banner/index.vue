<template>
    <div>
        <Breadcrumb>轮播图管理</Breadcrumb>
        <div class="img-table">
            <div class="upload-img">
                <el-button type="primary" size="mini" @click="visible = true">点击上传轮播图</el-button>
                <Dialog :isShow="visible" title="上传图片">
                    <template #input>
                        <el-upload class="avatar-uploader" :action="action"
                            :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </template>
                    <template #button>
                        <div slot="footer" class="dialog-footer">
                            <el-button type="primary" @click="saveImage">确认</el-button>
                            <el-button @click="visible = false">取消</el-button>
                        </div>
                    </template>
                </Dialog>
            </div>
            <div class="data-show"></div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Dialog from '@/components/Dialog'
import api from '@/api/banner' // or add it to your file and import it. (optional: only for examples) 描述自身内容或在'
export default {
    name: 'Banner',
    components: {
        Breadcrumb,
        Dialog
    },
    data() {
        return {
            imageUrl: '',
            visible: false,
            action: `${process.env.VUE_APP_SERVE}/blog/uploadBanner`
        };
    },
    methods: {
        handleAvatarSuccess(res, file) {
            this.imageUrl = res
        },
        beforeAvatarUpload(file) {
            const isImage = file.type.split('/')[0] === 'image';
            const isLt2M = file.size / 1024 / 1024 < 3;

            if (!isImage) {
                this.$message.error('只能上传图片');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 3MB!');
            }
            return isImage && isLt2M;
        },
        //保存图片到数据库
        async saveImage() {
            const result = await api.addBanner(this.imageUrl)
            const { flag, message } = result.data
            flag ? this.$message.success(message) : this.$message.error(message)
            this.visible = false //message is a custom message, can be an array of messages if necessary. (optional: only for examples) 描述
        }
    }
}
</script>

<style lang="scss" scoped>
.img-table {
    width: 70%;
}

.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}

.avatar {
    width: 178px;
    height: 178px;
    display: block;
}

.el-button {
    margin-bottom: 10px;
}
.dialog-footer {
    text-align: right;
}
</style>