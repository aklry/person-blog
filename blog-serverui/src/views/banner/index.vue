<template>
    <div>
        <Breadcrumb>轮播图管理</Breadcrumb>
        <div class="img-table">
            <div class="upload-img">
                <el-button type="primary" size="mini" @click="uploadHandler">点击上传轮播图</el-button>
                <Dialog :isShow="visible" :title="title" @clearData="clearData">
                    <template #input>
                        <el-upload class="avatar-uploader" :action="action" :show-file-list="false"
                            :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                            <img v-if="uploadParams.imgUrl" :src="uploadParams.imgUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </template>
                    <template #button>
                        <el-button type="primary" @click="saveImage">确认</el-button>
                        <el-button @click="visible = false">取消</el-button>
                    </template>
                </Dialog>
            </div>
            <div class="data-show">
                <el-table :data="banner">
                    <el-table-column type="index" label="序号" width="260" />
                    <el-table-column label="轮播图" width="260">
                        <template #default="{ row }">
                            <img :src="row.imgUrl" alt="" width="100px">
                        </template>
                    </el-table-column>
                    <el-table-column label="操作">
                        <template #default="{ row }">
                            <el-button size="mini" type="primary" icon="el-icon-edit" @click="doEdit(row)" />
                            <el-popconfirm style="margin-left: 5px;" confirm-button-text='好的' cancel-button-text='不用了'
                                title="确定删除这一个轮播图吗?" icon="el-icon-info" @confirm="confirmDelete(row)">
                                <el-button slot="reference" size="mini" type="danger" icon="el-icon-delete" />
                            </el-popconfirm>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Dialog from '@/components/Dialog'
import api from '@/api/banner'
export default {
    name: 'Banner',
    components: {
        Breadcrumb,
        Dialog
    },
    data() {
        return {
            visible: false,
            action: `${process.env.VUE_APP_SERVE}/blog/uploadBanner`,
            banner: [],
            title: '',
            uploadParams: {
                imgUrl: '',
                id: 0
            }
        };
    },
    methods: {
        handleAvatarSuccess(res, file) {
            this.uploadParams.imgUrl = res
        },
        beforeAvatarUpload(file) {
            const isImage = file.type.split('/')[0] === 'image';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isImage) {
                this.$message.error('只能上传图片');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isImage && isLt2M;
        },
        //保存图片到数据库
        saveImage() {
            this.handleAddOrUpdate(this.uploadParams)
        },
        //编辑数据
        doEdit(row) {
            this.visible = true
            this.uploadParams.id = row.id
            this.title = '修改图片'
            this.uploadParams.imgUrl = row.imgUrl || ''
        },
        //删除数据
        async confirmDelete(row) {
            const result = await api.deleteBannerById(row.id)
            const { flag, message } = result.data
            if (flag) {
                this.$message.success(message)
                await this.http()
            }
        },
        //获取轮播图数据
        async http() {
            const result = await api.getAllBanner()
            const { status, data } = result
            if (status === 200) {
                this.banner = data.data
            }
        },
        uploadHandler() {
            this.visible = true
            this.title = '上传图片'
        },
        //更新或添加轮播图
        async handleAddOrUpdate(params) {
            const result = await api.addOrUpdateBanner(params)
            const { flag, message } = result.data
            if (flag) {
                this.$message.success(message)
                await this.http()
            } else {
                this.$message.error(message)
            }
            this.visible = false
        },
        //关闭弹窗后清除数据
        clearData() {
            this.uploadParams.imgUrl = ''
        }
    },
    mounted() {
        this.http()
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