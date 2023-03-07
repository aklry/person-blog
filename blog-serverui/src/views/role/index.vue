<template>
  <div>
    <Breadcrumb>权限管理</Breadcrumb>
    <div class="formContent">
      <el-form :model="data" ref="form" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="data.username" placeholder="请输入你想要修改权限的名字" />
        </el-form-item>
        <el-form-item label="权限">
          <el-select v-model="data.role" placeholder="请选择权限">
            <el-option label="超级管理员" value="超级管理员"></el-option>
            <el-option label="普通管理员" value="普通管理员"></el-option>
          </el-select>
        </el-form-item>
        <el-button type="primary" @click="authorization">授权</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import roleMixins from '@/mixins/role'
export default {
  mixins: [roleMixins],
  components: {
    Breadcrumb
  }
}
</script>

<style scoped>
.formContent {
  margin: 100px auto
}

.el-input {
  width: 300px !important;
}

.el-button {
  margin-left: 100px;
}
</style>