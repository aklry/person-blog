<template>
    <el-dialog :visible="isVisible">
        <slot name="input" />
        <slot name="button" />
    </el-dialog>
</template>

<script>
export default {
    props: {
        isVisible: {
            type: Boolean,
            default() {
                return false
            }
        },
        id: {
            type: Number
        }
    }
}
</script>

<style></style>