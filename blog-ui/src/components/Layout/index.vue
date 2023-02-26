<template>
  <div class="layout">
    <el-container>
      <el-header>
        <slot name="NavMenu"></slot>
        <slot name="userInfo"></slot>
      </el-header>
      <el-main>
        <slot name="main" />
        <div class="content">
          <router-view />
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.layout {
  height: 100%;
}

.el-container {
  height: 100%;
}

.el-header {
  display: flex;
  justify-content: space-around;
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0 0;
  background-color: #545c64;
}


.el-main {
  /* background-color: #E9EEF3; */
  color: #333;
  text-align: center;
  padding: 0;
  /* line-height: 160px; */
}
</style>