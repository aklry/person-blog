import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// 引入element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入 vue-ele-form
import EleForm from 'vue-ele-form'
import EleFormImageUploader from 'vue-ele-form-image-uploader'
//引入swiper插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
//引入公共样式
import '@/common/css/reset.css'
Vue.config.productionTip = false
//注册element-ui
Vue.use(ElementUI)
// 注册 vue-ele-form
Vue.use(EleForm, {
   // number类型
  number: {
    min: 0 // 所有 number 类型, 最小值为 0
  },
  // 对所有具有上传属性的组件适用
  upload: {
    fileSize: 10
  }
})
// 注册 image-uploader 组件
Vue.component('image-uploader', EleFormImageUploader)
Vue.use(VueAwesomeSwiper)

import VueQuillEditor from 'vue-quill-editor'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
