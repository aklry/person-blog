<template>
  <div>
    <Breadcrumb>
      <template>管理员管理</template>
    </Breadcrumb>
    <el-table :data="
      tableData.filter((data) => !search || data.username.includes(search))
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
          <EditDialog :isVisible="isVisible" @changeIsVisible="changeIsVisible" :id="id">
            <template #input>
              <el-form :model="form" :rules="rules">
                <el-form-item label="用户名" :label-width="formLabelWidth" prop="username">
                  <el-input v-model="form.username" autocomplete="off" ref="username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password" :label-width="formLabelWidth">
                  <el-input v-model="form.password" show-password ref="password" autocomplete="off"></el-input>
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
    <div class="block">
      <el-pagination @current-change="handleCurrentChange" :current-page="pageNum" :page-size="pageInfo.size"
        layout="total, prev, pager, next, jumper" :page-count="pageInfo.pages">
      </el-pagination>
    </div>
  </div>
</template>
  
<script>
import api from "@/api"
import table from "@/mixins/table"
import editDialog from '@/mixins/editDialog'
import Dialog from "@/components/Dialog";
import EditDialog from "@/components/Dialog/EditDialog.vue"
import utils from "@/util/utils"
import Breadcrumb from "@/components/Breadcrumb"
import {
  mapMutations, mapState
} from "vuex";
export default {
  mixins: [table, editDialog],
  inject: ["reload"],
  methods: {
    ...mapMutations(['changePageNum']),
    handleEdit(index, row) {
      this.$data.isVisible = true
      this.$data.id = row.id
    },
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除该管理员, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          api.delete(row.id).then((res) => {
            utils.alert(this, res.data.message);
            this.reload();
          });
        })
        .catch(() => { });
    },
    cancel() {
      this.isVisible = false
    },
    submit() {
      this.isVisible = false
      const username = this.$data.form.username
      const password = this.$data.form.password
      const id = this.id
      api.update({
        id,
        username,
        password
      }).then(res => {
        if (res.data.flag) {
          utils.alert(this, res.data.message)
          this.reload()
        } else {
          utils.alert(this, res.data.message)
        }
      })
    },
    handleCurrentChange(val) {
      this.changePageNum(val)
      this.reload()
    }
  },
  components: {
    Dialog,
    EditDialog,
    Breadcrumb,
  },
  mounted() {
    api
      .getAllAdmin({
        pageNum: this.$store.state.pageNum,
        size: 5
      })
      .then((res) => {
        this.$data.tableData = res.data.list;
        this.$data.pageInfo = res.data
        console.log(this.$data.pageInfo)
      })
      .catch((error) => console.log(error));
  },
  computed: {
    ...mapState(['pageNum'])
  }
};
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
</style>