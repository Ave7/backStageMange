import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import '@/styles/index.scss' // 全局样式
import App from './App'
import store from './store'
import router from './router'
import request from '@/utils/request'

import '@/permission' // permission control
// set ElementUI lang to EN
Vue.use(ElementUI, {locale})

Vue.prototype.req = request

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue();

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
