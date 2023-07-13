<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>
            <slot></slot>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>
<style scoped lang="scss">
.el-breadcrumb {
    display: block;
    margin-bottom: 20px;
}
</style>