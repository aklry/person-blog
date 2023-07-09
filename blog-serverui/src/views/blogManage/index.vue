<template>
  <div>
    <Breadcrumb>博客管理</Breadcrumb>
    <el-table :data="blogInfo.filter((data) => !search || data.title.includes(search))
      " style="width: 100%">
      <el-table-column label="序号" type="index" width="200"> </el-table-column>
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
          <el-button icon="el-icon-edit-outline" size="mini" type="primary"
            @click="handleEdit(scope.$index, scope.row)" />
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)" icon="el-icon-delete" />
        </template>
      </el-table-column>
    </el-table>
    <Dialog :isShow="isShow" :title="title">
      <template #input>
        <el-form :rules="rules" :model="blogData" label-width="80px" ref="form">
          <el-form-item label="文章标题" prop="title">
            <el-input v-model="blogData.title" />
          </el-form-item>
          <el-form-item label="文章作者" title="author" prop="author">
            <el-input v-model="blogData.author" />
          </el-form-item>
          <el-form-item label="文章内容" prop="content">
            <div class="content">
              <quill-editor v-model="blogData.content" class="editor" :options="editorOptions" />
            </div>
          </el-form-item>
          <el-form-item label="发表时间" prop="publishTime">
            <el-date-picker v-model="blogData.publishTime" type="datetime" placeholder="请输入发表时间" />
          </el-form-item>
          <el-form-item label="类型" prop="type">
            <el-radio-group v-model="blogData.type">
              <el-radio label="自制"></el-radio>
              <el-radio label="转载"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="分区" prop="category">
            <el-select v-model="blogData.category" placeholder="请选择内容分区">
              <el-option label="html5" value="html5" />
              <el-option label="css" value="css" />
              <el-option label="JavaScript" value="JavaScript" />
              <el-option label="vue" value="vue" />
              <el-option label="webpack" value="webpack" />
              <el-option label="nodejs" value="nodejs" />
            </el-select>
          </el-form-item>
        </el-form>
      </template>
      <template #button>
        <div slot="footer" class="dialog_footer">
          <el-button @click="cancelHandle">取消</el-button>
          <el-button type="primary" @click="confirmHandle('form')">确认</el-button>
        </div>
      </template>
    </Dialog>
    <div class="block">
      <el-pagination @current-change="handleCurrentChange" :current-page="pageNum" :page-size="pageInfo.size"
        layout="prev, pager, next, jumper" :page-count="pageInfo.pages">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import blogMixins from '@/mixins/blog'
import Dialog from '@/components/Dialog'
export default {
  name: 'BlogManage',
  mixins: [blogMixins],
  components: {
    Breadcrumb,
    Dialog
  }
}
</script>

<style lang="scss" scoped>
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

.dialog_footer {
  text-align: right;
}

.el-input {
  width: 250px;
}

.editor {
  height: 180px;
}
</style>