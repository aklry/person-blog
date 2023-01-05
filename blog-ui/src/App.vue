<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <el-button type="primary">primary</el-button>
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { listUser } from "@/api/user.js";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  mounted() {
    listUser().then((res) => {
      console.log(res);
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
