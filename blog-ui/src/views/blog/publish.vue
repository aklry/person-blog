<template>
    <el-card header="发表博客" style="max-width:1200px;margin: 50px auto;">
        <ele-form v-model="formData" :form-desc="formDesc" :request-fn="handleSubmit" :rules="rules"
            @request-success="handleSuccess"></ele-form>
    </el-card>
</template>
  
<script>
import publishBlog from '@/mixins/publishBlog'
export default {
    mixins: [publishBlog]
}
</script>
  
<style>
body {
    background-color: #efefef;
}
</style>