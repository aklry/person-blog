<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>
#app {
  height: 100%;
}

.block {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.el-tooltip__popper {
  max-width: 20%;
}

.el-tooltip__popper,
.el-tooltip__popper.is-dark {
  background: rgb(48, 65, 86) !important;
  line-height: 24px !important;
}
.el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
</style>
