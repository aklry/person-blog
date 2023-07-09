<template>
  <div>
    <Breadcrumb>用户管理</Breadcrumb>
    <el-table :data="
      userList.filter((data) => !search || data.name.includes(search))
    " style="width: 100%">
      <el-table-column label="序号" type="index" width="200"> </el-table-column>
      <el-table-column label="用户名" prop="name"> </el-table-column>
      <el-table-column label="性别" prop="sex"> </el-table-column>
      <el-table-column label="地址" prop="address"> </el-table-column>
      <el-table-column label="电话号码" prop="phoneNumber"> </el-table-column>
      <el-table-column label="头像" prop="url">
        <template #default="scope">
          <img :src="scope.row.url ? scope.row.url : require('@/assets/a1.png')"
            style="width: 30px; height: 30px; border-radius: 50%;">
        </template>
      </el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)" icon="el-icon-delete" />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import user from '@/mixins/user'
import api from '@/api/user'
export default {
  name: 'User',
  mixins: [user],
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
                this.$message.success(res.data.message)
                this.http()
              } else {
                this.$message.error(res.data.message)
              }
            })
        })
        .catch((error) => { console.log(error) })
    },
    http() {
      api.getAllUsers().then(res => {
        if (res.data.length != 0) {
          this.$data.userList = res.data
        }
      })
    }
  },
  mounted() {
    this.http()
  }
}
</script>

<style></style>