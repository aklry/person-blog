<template>
  <div>
    <Breadcrumb>博客管理</Breadcrumb>
    <el-table :data="
      blogInfo.filter((data) => !search || data.title.includes(search))
    " style="width: 100%">
      <el-table-column label="id" prop="id"> </el-table-column>
      <el-table-column label="文章标题" prop="title"> </el-table-column>
      <el-table-column label="文章作者" prop="author"> </el-table-column>
      <el-table-column label="分区" prop="category"> </el-table-column>
      <el-table-column label="发表时间" prop="publishTime"> </el-table-column>
      <el-table-column label="类型" prop="type"> </el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
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
import Breadcrumb from '@/components/Breadcrumb'
import blogMixins from '@/mixins/blog'
import blogApi from '@/api/blog'
import moment from 'moment'
import {
  mapState, mapMutations
} from 'vuex'
export default {
  mixins: [blogMixins],
  inject: ['reload'],
  components: {
    Breadcrumb
  },
  mounted() {
    blogApi.listAllBlog({
      pageNum: this.$store.state.pageNum,
      size: 5
    })
      .then(res => {
        if (res.status === 200 && res.data != null) {
          for (const data of res.data.list) {
            data.publishTime = moment(data.publishTime).format('YYYY-MM-DD hh:mm:ss')
          }
          this.$data.blogInfo = res.data.list
          this.$data.pageInfo = res.data
        }
      })
      .catch(error => console.log(error))
  },
  computed: {
    ...mapState(['pageNum'])
  },
  methods: {
    ...mapMutations(['changePageNum']),
    handleCurrentChange(val) {
      this.changePageNum(val)
      this.reload()
    }
  }
}
</script>

<style scoped>
.block {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
</style>