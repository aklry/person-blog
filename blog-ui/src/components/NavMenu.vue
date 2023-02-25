<template>
    <div class="menu">
        <el-menu class="el-menu-demo" :default-active="index" mode="horizontal" router background-color="#545c64" text-color="#fff"
            active-text-color="#ffd04b">
            <slot name="header" />
        </el-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            index: '/home'
        }
    }
}
</script>

<style scoped></style>