const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
      plugins: [new NodePolyfillPlugin()]
  },
  devServer: {
    port: 80,
    proxy: 'http://localhost:8088'
  }
})
