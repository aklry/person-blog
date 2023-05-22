import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import tool from './util/tool'
// 引入element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import  '@/directive/drag.js'
//引入公共样式
import '@/common/css/reset.css'
//引入echarts插件
import echarts from '@/plugins/echarts'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(echarts)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
tool.dataStorage()
