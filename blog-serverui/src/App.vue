<template>
  <div id="app">
    <router-view v-if="isRouterAlive" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false
      this.$nextTick(() => this.isRouterAlive = true)
    }
  },
  provide() {
    return {
      reload: this.reload
    }
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
</style>
