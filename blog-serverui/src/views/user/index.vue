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
      <el-table-column label="权限" prop="role"> </el-table-column>
      <el-table-column label="密码" prop="password"> </el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <EditDialog :isVisible="isVisible" @changeIsVisible="changeIsVisible" :id="id">
            <template #input>
              <el-form :model="form" :rules="rules">
                <el-form-item label="用户名" :label-width="formLabelWidth" prop="username">
                  <el-input v-model="form.username" autocomplete="off" ref="username"></el-input>
                </el-form-item>
                <el-form-item label="性别" :label-width="formLabelWidth" prop="sex">
                  <el-input v-model="form.sex" autocomplete="off" ref="sex"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password" :label-width="formLabelWidth">
                  <el-input v-model="form.password" show-password ref="password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="电话号码" prop="phoneNumber" :label-width="formLabelWidth">
                  <el-input v-model="form.phoneNumber" ref="phoneNumber" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="地址" prop="address" :label-width="formLabelWidth">
                  <el-input v-model="form.address" ref="address" autocomplete="off"></el-input>
                </el-form-item>
              </el-form>
            </template>
            <template #button>
              <div slot="footer" class="dialog-footer">
                <el-button @click="cancel">取 消</el-button>
                <el-button type="primary" @click="submit">修 改</el-button>
              </div>
            </template>
          </EditDialog>
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
import EditDialog from '@/components/Dialog/EditDialog.vue'
export default {
  mixins: [user],
  components: {
    Breadcrumb,
    EditDialog
  },
  mounted() {
    api.getAllUsers().then(res => {
      console.log(res.data)
      if (res.data.length != 0) {
          this.$data.userList = res.data
        }
      })
  }
}
</script>

<style></style>