<template>
  <div>
    <Breadcrumb>用户管理</Breadcrumb>
    <el-table :data="
      userList.filter((data) => !search || data.username.includes(search))
    " style="width: 100%">
      <el-table-column label="id" prop="id"> </el-table-column>
      <el-table-column label="用户名" prop="name"> </el-table-column>
      <el-table-column label="性别" prop="sex"> </el-table-column>
      <el-table-column label="地址" prop="address"> </el-table-column>
      <el-table-column label="电话号码" prop="phoneNumber"> </el-table-column>
      <el-table-column label="密码" prop="password"> </el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import user from '@/mixins/user'
import api from '@/api/user'
import utils from '@/util/utils'
export default {
  mixins: [user],
  inject: ['reload'],
  components: {
    Breadcrumb,
  },
  methods: {
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          api.deleteUserById(row.id)
            .then(res => {
              if (res.data.flag) {
                utils.alert(this, res.data.message)
                this.reload()
              } else {
                utils.alert(this, res.data.message)
              }
            })
        })
        .catch((error) => { console.log(error) })
    },
  },
  mounted() {
    api.getAllUsers().then(res => {
      if (res.data.length != 0) {
        this.$data.userList = res.data
      }
    })
  }
}
</script>

<style></style>