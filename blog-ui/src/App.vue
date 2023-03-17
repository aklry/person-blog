<template>
  <div id="app">
    <router-view v-if="isRouterAlive" />
  </div>
</template>
<script>
import store from './store'
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
  width: 100%;
  height: 100%;
}
</style>
