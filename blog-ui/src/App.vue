<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
    }
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}

.el-main {
  background-color: rgb(233, 236, 245);
}

.content {
  text-decoration: none;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 30px;
  height: 30px;
  margin: 6px;
  vertical-align: middle;
  border-radius: 50%;
}
</style>
