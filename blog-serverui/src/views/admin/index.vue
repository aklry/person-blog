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
                <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
            </template>
            <template slot-scope="scope">
                <el-button size="mini" @click="isShowHandle">Add</el-button>
                <!-- 弹出框 -->
                <Dialog :isShow="isShow" @changeIsShow="changeIsShow"/>
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
            </template>
        </el-table-column>
</el-table>
</template>
  
<script>
import api from "@/api"
import mixin from '@/mixins/table'
import Dialog from "@/components/Dialog"
export default {
    mixins: [mixin],
    methods: {
        handleEdit(index, row) {
            console.log(index, row)
            this.$data.isShow = true
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
        isShowHandle() {
            this.$data.isShow = true
        },
        changeIsShow(val) {
            this.isShow = val
        }
    },
    components: {
        Dialog
    },
    mounted() {
        api
            .getAllAdmin()
            .then((res) => {
                this.$data.tableData = res.data
            })
            .catch((error) => console.log(error))
    }
};
</script>