<template>
    <el-dialog v-drag :visible="isShow" :show-close="false" :title="title" :center="true" width="600px">
        <!-- 表单 -->
        <slot name="input" />
        <!-- 按钮 -->
       <div slot="footer" class="dialog-footer">
            <slot name="button" />
       </div>
    </el-dialog>
</template>
<script>
export default {
    props: {
        isShow: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ''
        }
    }
}
</script>
<style lang="scss" scoped>
.dialog-footer {
    text-align: right;
}
</style>