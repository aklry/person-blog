<template>
  <el-row>
    <el-col :span="8" v-for="(item, index) in blogInfo" :key="index">
      <el-card :body-style="{ padding: '0px'}" style="height: 100%;">
      <div style="padding: 14px;">
        <span class="title">{{ item.title }}</span>
        <div class="bottom clearfix">
          <article class="article">
            <p>{{ item.content }}</p>
          </article>
          <el-button type="text" class="button" @click="viewArticle(item.id)">查看原文</el-button>
        </div>
      </div>
    </el-card>
    </el-col>
  </el-row>
  
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import blogApi from '@/api/blog'
export default {
  data() {
    return {

    }
  },
  methods: {
    ...mapMutations(['setBlogId']),
    viewArticle(id) {
      this.setBlogId(id)
      this.$router.push('/blog')
    }
  },
  computed: {
    ...mapState(['blogInfo'])
  },
  mounted() {
    blogApi.listBlog()
      .then(res => {
        if (res.status === 200 && res.data != null) {
          this.$store.state.blogInfo = res.data
          localStorage.setItem('blogInfo', JSON.stringify(this.$store.state.blogInfo))
        }
      }).then(error => console.log(error))
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
  width: 350px;
  height: 350px;
  box-shadow: 0 0 5px #999;
}

.el-row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 20px 50px;
}
.el-col {
  margin-bottom: 20px;
}
</style>
  