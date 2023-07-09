import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import tool from './util/tool'
import request from '@/util/request'
// 引入element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import  '@/directive/drag.js'
//引入公共样式
import '@/common/css/reset.css'
//引入echarts插件
import echarts from '@/plugins/echarts'
//引入富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
//引入富文本编辑器相关样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(echarts)
Vue.use(VueQuillEditor)
Vue.prototype.$request = request
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
tool.dataStorage()
