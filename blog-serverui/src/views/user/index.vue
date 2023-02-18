<template>
  <div>
    <Breadcrumb>用户管理</Breadcrumb>
    <el-table
      :data="
        userList.filter((data) => !search || data.username.includes(search))
      "
      style="width: 100%"
    >
      <el-table-column label="id" prop="id"> </el-table-column>
      <el-table-column label="用户名" prop="name"> </el-table-column>
      <el-table-column label="性别" prop="sex"> </el-table-column>
      <el-table-column label="地址" prop="address"> </el-table-column>
      <el-table-column label="电话号码" prop="phoneNumber"> </el-table-column>
      <el-table-column label="权限" prop="role"> </el-table-column>
      <el-table-column label="密码" prop="password"> </el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
            <el-input
              v-model="search"
              size="mini"
              placeholder="输入关键字搜索"
            />
        </template>
        <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import user from '@/mixins/user'
export default {
  mixins: [user],
    components: {
        Breadcrumb
    }
}
</script>

<style>

</style>