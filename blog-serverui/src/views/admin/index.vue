<template>
  <div>
    <Breadcrumb>
      <template>管理员管理</template>
    </Breadcrumb>
    <el-table :data="adminList" style="width: 100%">
      <el-table-column label="序号" type="index" width="200"> </el-table-column>
      <el-table-column label="用户名" prop="username"> </el-table-column>
      <el-table-column label="权限" prop="role"></el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <div class="container">
            <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
            <el-button size="mini" @click="isShowHandle">增加</el-button>
            <el-button size="mini" @click="searchHandler">搜索</el-button>
          </div>
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)" icon="el-icon-edit-outline"
            type="primary" />
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)" icon="el-icon-delete" />
        </template>
      </el-table-column>
    </el-table>
    <!-- 添加用户弹出框 -->
    <Dialog :isShow="addVisible" :title="addTitle">
      <template #input>
        <el-form :model="addForm" :rules="rules" ref="addForm" :label-width="formLabelWidth">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="addForm.username" autocomplete="off" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="addForm.password" show-password autocomplete="off" />
          </el-form-item>
          <el-form-item label="权限" prop="role">
            <el-radio-group v-model="addForm.role">
              <el-radio label="普通管理员"></el-radio>
              <el-radio label="超级管理员"></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </template>
      <template #button>
        <el-button @click="cancel('addForm')">取 消</el-button>
        <el-button type="primary" @click="clickAddHandle('addForm')">添 加</el-button>
      </template>
    </Dialog>
    <!-- 编辑用户弹出框 -->
    <Dialog :isShow="editVisible" :title="editTitle">
      <template #input>
        <el-form :model="editForm" :rules="rules" ref="editForm" :label-width="formLabelWidth">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="editForm.username" autocomplete="off" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="editForm.password" show-password autocomplete="off" />
          </el-form-item>
        </el-form>
      </template>
      <template #button>
        <el-button @click="cancel('editForm')">取 消</el-button>
        <el-button type="primary" @click="clickEditHandle('editForm')">修 改</el-button>
      </template>
    </Dialog>
    <div class="block">
      <el-pagination @current-change="handleCurrentChange" :current-page="pageNum" :page-size="pageInfo.size"
        layout="total, prev, pager, next, jumper" :page-count="pageInfo.pages">
      </el-pagination>
    </div>
  </div>
</template>
  
<script>
import editDialog from '@/mixins/editDialog'
import addDialog from '@/mixins/addDialog'
import adminMixin from '@/mixins/admin'
import Dialog from '@/components/Dialog'
import Breadcrumb from "@/components/Breadcrumb"
export default {
  name: 'Admin',
  mixins: [addDialog, editDialog, adminMixin],
  methods: {

  },
  components: {
    Dialog,
    Breadcrumb
  }
}
</script>
<style scoped>
.container {
  display: flex;
}

.block {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.dialog-footer {
  text-align: center;
}
</style>