<template>
  <div>
    <Breadcrumb>评论管理</Breadcrumb>
    <el-table :data="
      commentList.filter((data) => !search || data.user.name.includes(search))
    " style="width: 100%">
      <el-table-column label="id" prop="id"> </el-table-column>
      <el-table-column label="发表时间" prop="dateTime"> </el-table-column>
      <el-table-column label="内容" prop="content"> </el-table-column>
      <el-table-column label="发表人" prop="user.name"> </el-table-column>
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
import commentMixins from '@/mixins/comment'
export default {
  components: {
    Breadcrumb
  },
  mixins: [commentMixins]
}
</script>

<style></style>