<template>
    <el-dialog v-drag :visible="isShow" :show-close="false" :title="title" :center="true" width="600px">
        <!-- 表单 -->
        <slot name="input" />
        <!-- 按钮 -->
        <slot name="button" />
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