const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()]
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8088',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/upload': {
        target: 'http://localhost:8088'
      }
    }
  }
})
