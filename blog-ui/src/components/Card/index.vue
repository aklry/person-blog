<template>
  <el-row style="height: 30%; padding: 20px;">
    <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0" style="width: 400px;height: 100%;">
      <el-card :body-style="{ padding: '0px' }" style="height: 100%;">
        <div style="padding: 14px;">
          <span class="title">好吃的汉堡</span>
          <div class="bottom clearfix">
            <article class="artical">
              有些开发者会说不会出现这种接口,已经约定好的所有post接口只需这三种参数就行。
              对此我想反驳：一个有潜力的项目总会不断地加入更多的需求，如果你觉得你的项目是没有潜力的，那当我没说。
              但如果你不敢肯定你的项目之后是否会加入更多特性,不敢保证是否会遇到这类特殊场景,那请你在二次封装时,尽可能地保持与原生API对齐,
              以保证原生API中一切能做到的,二次封装后的新API也能做到,
              以避免在遇到上述的特殊情况时,你只能尴尬地修改新API,而且还会出现为了兼容因而改得特别难看那种写法。
            </article>
            <el-button type="text" class="button">查看原文</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>
<style scoped>
.artical {
  font-size: 13px;
  line-height: 23px;
  -webkit-line-clamp: 6;
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
  line-height: 12px;
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
  box-shadow: 0 0 5px #999;
}
</style>
  