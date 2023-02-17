<template>
    <el-table :data="
        tableData.filter(
            (data) =>
                !search || data.name.toLowerCase().includes(search.toLowerCase())
        )
    " style="width: 100%">
        <el-table-column label="id" prop="id"> </el-table-column>
        <el-table-column label="用户名" prop="username"> </el-table-column>
        <el-table-column label="密码" prop="password"> </el-table-column>
        <el-table-column align="right">
            <template slot="header" slot-scope="scope">
                <div class="container">
                    <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
                    <el-button size="mini" @click="isShowHandle()">Add</el-button>
                </div>
                <!-- 弹出框 -->
                <Dialog :isShow="isShow" @changeIsShow="changeIsShow" />
            </template>
            <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                <EditDialog :isShow="isShow" @changeIsShow="changeIsShow" :id="id" />
                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>
  
<script>
import api from "@/api"
import mixin from '@/mixins/table'
import Dialog from "@/components/Dialog"
import EditDialog from '@/components/Dialog/EditDialog.vue'
import utils from "@/util/utils"
export default {
    mixins: [mixin],
    inject: ['reload'],
    methods: {
        handleEdit(index, row) {
            console.log(index, row)
            this.$data.isShow = true
            this.$data.id = row.id
        },
        handleDelete(index, row) {
            this.$confirm('此操作将永久删除该管理员, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                api.delete(row.id).then(res => {
                    utils.alert(this, res.data.message)
                    this.reload()
                })
            }).catch(() => { })
        }
    },
    components: {
        Dialog,
        EditDialog
    },
    mounted() {
        api
            .getAllAdmin()
            .then((res) => {
                this.$data.tableData = res.data
            })
            .catch((error) => console.log(error))
    }
}
</script>
<style scoped>
.container {
    display: flex;
}
</style>