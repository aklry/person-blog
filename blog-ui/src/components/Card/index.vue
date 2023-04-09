<template>
  <div class="container">
    <el-row>
      <el-col :span="8" v-for="(item, index) in blogInfo" :key="index">
        <el-card :body-style="{ padding: '0px' }" style="height: 100%;">
          <div style="padding: 14px;">
            <span class="title">{{ item.title }}</span>
            <div class="bottom clearfix">
              <article class="article">
                <div v-html="item.content"></div>
              </article>
              <el-button type="text" class="button" @click="viewArticle(item)">查看原文</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div>
      <el-pagination @current-change="handleCurrentChange" :current-page="pageNum" :page-size="pageInfo.size"
        layout="total, prev, pager, next, jumper" :page-count="pageInfo.pages">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import blogApi from '@/api/blog'
export default {
  data() {
    return {
      pageInfo: {},
      pageNum: 1,
      size: 4
    }
  },
  methods: {
    ...mapMutations(['setBlog', 'setPageNum']),
    viewArticle(blog) {
      this.setBlog(blog)
      this.$router.push('/blog')
    },
    handleCurrentChange(val) {
      // this.setPageNum(val)
      this.pageNum = val
      this.http()
    },
    //加载博客数据
    http() {
      blogApi.listAllBlog({
        pageNum: this.pageNum,
        size: this.size
      })
        .then(res => {
          if (res.status === 200 && res.data != null) {
            this.pageInfo = res.data
            this.$store.state.blogInfo = res.data.list
            localStorage.setItem('blogInfo', JSON.stringify(this.$store.state.blogInfo))
          }
        }).catch(error => console.log(error))
    }
  },
  computed: {
    ...mapState(['blogInfo', 'pageNum'])
  },
  mounted() {
    this.http()
  }
}
</script>
<style scoped>
.article {
  font-size: 13px;
  line-height: 30px;
  -webkit-line-clamp: 4;
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

.bottom {
  margin-top: 13px;
}

.button {
  padding: 0;
  float: right;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.el-card {
  position: relative;
  width: 350px;
  height: 350px;
  box-shadow: 0 0 5px #999;
}


.el-row {
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
}

.el-row .el-col {
  padding: 20px;
  width: 500px;
  height: 250px;
  flex: 1;
}

.el-row .el-col:nth-child(1) {
  margin-left: 0;
}

.el-row .el-col:last-child {
  margin-right: 0;
}
</style>
  