<template>
    <el-table :data="
        tableData.filter(
            (data) =>
                !search || data.name.toLowerCase().includes(search.toLowerCase())
        )
    " style="width: 100%">
        <el-table-column label="ID" prop="ID"> </el-table-column>
        <el-table-column label="username" prop="username"> </el-table-column>
        <el-table-column align="right">
            <template slot="header" slot-scope="scope">
                <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
            </template>
            <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
            </template>
        </el-table-column>
</el-table>
</template>
  
<script>
export default {
    data() {
        return {
            tableData: [
                {
                    ID: '1',
                    username: '张三丰'
                }
            ],
            search: "",
        };
    },
    methods: {
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
    },
};

</script>