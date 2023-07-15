<template>
    <div>
        <Breadcrumb>分类管理</Breadcrumb>
        <div class="container">
            <el-button type="primary" size="mini" @click="isVisible = true">点击添加类目</el-button>
            <transition name="fade">
                <div class="add-category" v-show="isVisible">
                    <el-input placeholder="请输入类目" v-model="category" size="mini" />
                    <el-button type="primary" size="mini" @click="addCategoryHandler">提交</el-button>
                </div>
            </transition>

            <el-table :data="allCategory">
                <el-table-column type="index" width="260" label="序号" />
                <el-table-column label="类别" width="260">
                    <template #default="{ row }">
                        <el-tag type="success">{{ row.category }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template #default="{ row }">
                        <el-popconfirm confirm-button-text='好的' cancel-button-text='不用了' icon="el-icon-info"
                            icon-color="red" title="确定要删除该标签吗？" @confirm="confirmDeleteHandler(row)">
                            <el-button slot="reference" size="mini" type="danger" icon="el-icon-delete" />
                        </el-popconfirm>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import api from '@/api/category.js'
export default {
    name: 'Category',
    components: {
        Breadcrumb
    },
    data() {
        return {
            isVisible: false,
            category: '',
            allCategory: []
        }
    },
    methods: {
        async addCategoryHandler() {
            const result = await api.addCategory(this.category)
            if (result.status && result.status === 200) {
                const { flag, message } = result.data
                if (flag) {
                    this.$message.success(message)
                    this.category = '' //将输入框里的内容清空
                    this.loadCategoryData() //刷新表格数据
                } else {
                    this.$message.success(message)
                }
            }
        },
        //加载所有分类数据
        async loadCategoryData() {
            const result = await api.getAllCategory() //获取分类列表数据或获取已经存在的类目名称列表数
            const { data } = result
            this.allCategory = data
        },
        //删除分类
        async confirmDeleteHandler(row) {
            const { id } = row
            const result = await api.deleteCategory(id)
            const { message, flag } = result.data
            if (flag) {
                this.$message.success(message) //提示删除成功
                this.loadCategoryData() //刷新表格数据
            } else {
                this.$message.error(message)
            }
        }
    },
    mounted() {
        this.loadCategoryData()
    }
}
</script>

<style lang="scss" scoped>
.container {

    .el-input {
        width: 300px;
        margin-top: 10px;
        margin-right: 10px;
    }

    &>div {
        width: 100%;

        .el-button {
            margin-top: 10px;
        }
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>