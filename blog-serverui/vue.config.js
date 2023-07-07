const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const { VUE_APP_BASE_API, VUE_APP_SERVE} = process.env
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()]
  },
  devServer: {
    proxy: {
      [VUE_APP_BASE_API]: {
        target: VUE_APP_SERVE,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/upload': {
        target: VUE_APP_SERVE
      }
    }
  }
})
