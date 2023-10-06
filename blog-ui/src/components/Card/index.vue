<template>
  <div class="container">
    <el-row>
      <el-col :span="8" v-for="blog in blogList" :key="blog.id">
        <el-card :body-style="{ padding: '0px' }" style="height: 100%;">
          <div style="padding: 14px;">
            <p class="title" show-overflow-tooltip="true">{{ blog.title }}</p>
            <div class="bottom clearfix">
              <article class="article">
                <div class="article-container">
                  <div class="article-content" v-html="blog.content"></div>
                </div>
              </article>
              <el-button type="text" class="button" @click="viewArticle(blog)">查看原文</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div>
      <el-pagination @current-change="handleCurrentChange" :current-page="pageInfo.pageNum" :page-size="pageInfo.pageSize"
        layout="total, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      
    }
  },
  methods: {
    ...mapMutations(['setBlog', 'setPageInfo']),
    viewArticle(blog) {
      this.setBlog(blog)
      this.$router.push('/blog')
    },
    handleCurrentChange(val) {
      this.setPageInfo(val)
    }
  },
  computed: {
    ...mapState(['blogInfo', 'pageInfo'])
  },
  props: {
    blogList: {
      type: Array,
      default: () => []
    },
    total: {
      type: Number,
      default: 0
    }
  }
}
</script>
<style lang="scss" scoped>
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
  .article-content {
   text-align: left;
  }
}
.bottom {
  margin-top: 13px;
}

.title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 700;
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


.el-row {
  display: flex;
  margin: 20px auto;

  .el-col {
    padding: 20px;
    width: 500px;
    height: 250px;

    .el-card {
      width: 350px;
      height: 350px;
      box-shadow: 0 0 5px #999;
    }
    &:nth-child(1) {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
  