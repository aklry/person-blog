const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const env = process.env
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()]
  },
  devServer: {
    proxy: {
      [env.VUE_APP_BASE_API]: {
        target: env.VUE_APP_SERVE,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/upload': {
        target: env.VUE_APP_SERVE
      }
    }
  }
})
