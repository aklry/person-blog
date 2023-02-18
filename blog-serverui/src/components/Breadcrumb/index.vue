<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>
            <a href="/">
                <slot></slot>
            </a>
        </el-breadcrumb-item>
  </el-breadcrumb>
</template>