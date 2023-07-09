<template>
  <div id="container">
    <div id="pie" class="pie"></div>
  </div>
</template>

<script>
import api from '@/api/blog'
export default {
  name: 'Home',
  methods: {
    setChart(data) {
      this.$pie('pie', {
        type: 'pie',
        data
      })
    }
  },
  mounted() {
    api.listAllBlogNoPage()
      .then(res => {
        const data = res.data
        const arr = []
        Object.keys(data).filter(item => {
          arr.push({
            name: item,
            value: data[item]
          })
        })
        this.setChart(arr)
      })
      .catch(error => console.log(error))
  }
}

</script>

<style lang="scss" scoped>
#container {
  width: 800px;
  height: 400px;

  .pie {
    width: 100%;
    height: 100%;
  }
}
</style>