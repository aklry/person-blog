<template>
  <div>
    <Breadcrumb>博客管理</Breadcrumb>
    <el-table :data="
      blogInfo.filter((data) => !search || data.title.includes(search))
    " style="width: 100%">
      <el-table-column label="id" prop="id"> </el-table-column>
      <el-table-column label="文章标题" prop="title"> </el-table-column>
      <el-table-column label="文章作者" prop="author"> </el-table-column>
      <el-table-column label="内容" prop="content" show-overflow-tooltip>
        <template #default="scope">
          <div class="content" v-html="scope.row.content"></div>
        </template>
      </el-table-column>
      <el-table-column label="分区" prop="category" align="center"> </el-table-column>
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
export default {
  mixins: [blogMixins],
  components: {
    Breadcrumb
  },
  mounted() {
    this.http()
  },
  methods: {
    handleCurrentChange(val) {
      this.$data.pageNum = val
      this.http()
    },
    http() {
      blogApi.listAllBlog({
        pageNum: this.$data.pageNum,
        size: this.$data.size
      })
        .then(res => {
          if (res.status === 200 && res.data != null) {
            res.data.list.filter((item) => {
              item.publishTime = moment(item.publishTime).format('YYYY-MM-DD HH:mm:ss')
            })
            this.$data.blogInfo = res.data.list
            this.$data.pageInfo = res.data
          }
        })
        .catch(error => console.log(error))
    }
  }
}
</script>

<style scoped>
.content {
  font-size: 13px;
  line-height: 30px;
  -webkit-line-clamp: 1;
  /*用来限制在一个块元素显示的文本的行数，2 表示最多显示 2 行。为了实现该效果，它需要组合其他的 WebKit 属性*/
  display: -webkit-box;
  /*和 1 结合使用，将对象作为弹性伸缩盒子模型显示 */
  -webkit-box-orient: vertical;
  /*和 1 结合使用 ，设置或检索伸缩盒对象的子元素的排列方式 */
  overflow: hidden;
  /*文本溢出限定的宽度就隐藏内容*/
  text-overflow: ellipsis;
  /*多行文本的情况下，用省略号 “…” 隐藏溢出范围的文本*/
  margin-bottom: 12px;
}
</style>