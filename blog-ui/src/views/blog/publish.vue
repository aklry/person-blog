<template>
    <el-card header="发表博客" style="max-width:1000px;margin: 50px auto;">
        <el-form :model="formData" :rules="rules" ref="form" label-width="100px" class="demo-ruleForm">
            <el-form-item label="标题" prop="title">
                <el-input v-model="formData.title"></el-input>
            </el-form-item>
            <el-form-item label="作者" prop="author">
                <el-input v-model="formData.author"></el-input>
            </el-form-item>
            <el-form-item label="发表时间" prop="publishTime">
                <el-date-picker v-model="formData.publishTime" type="datetime" placeholder="请输入发表时间">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="内容" prop="content">
                <div class="content">
                    <quill-editor v-model="formData.content" class="editor" :options="editorOptions" />
                </div>
            </el-form-item>
            <el-form-item label="类型" prop="type">
                <el-radio-group v-model="formData.type">
                    <el-radio label="自制"></el-radio>
                    <el-radio label="转载"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="内容分区" prop="category">
                <el-select v-model="formData.category" placeholder="请选择内容分区">
                    <el-option label="html5" value="html5"></el-option>
                    <el-option label="css" value="css"></el-option>
                    <el-option label="JavaScript" value="JavaScript"></el-option>
                    <el-option label="vue" value="vue"></el-option>
                    <el-option label="webpack" value="webpack"></el-option>
                    <el-option label="nodejs" value="nodejs"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="handleSubmit('form')">发表</el-button>
                <el-button @click="cancel">取消</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>
<script>
import publishBlog from '@/mixins/publishBlog'
export default {
    mixins: [publishBlog]
}
</script>
<style scoped>
.content {
    height: 200px;
}
.editor {
    height: 100px;
}
</style>