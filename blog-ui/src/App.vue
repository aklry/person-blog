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
  },
  mounted() {
    const token = localStorage.getItem('token')
    const user = JSON.parse(localStorage.getItem('userInfo'))
    const blogInfo = JSON.parse(localStorage.getItem('blogInfo'))
    if (token) {
      store.state.flag = true
      store.state.userInfo = user
      store.state.blogInfo = blogInfo
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
