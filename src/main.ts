import Vue from 'vue'
import App from './renderer/App.vue'
import router from './renderer/router'
import db from '#/datastore/index'
import ElementUI from 'element-ui'
import { webFrame } from 'electron'
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyLoad from 'vue-lazyload'
import axios from 'axios'

webFrame.setVisualZoomLevelLimits(1, 1)
webFrame.setLayoutZoomLevelLimits(0, 0)

Vue.config.productionTip = false

Vue.prototype.$db = db
Vue.prototype.$http = axios

Vue.use(ElementUI)
Vue.use(VueLazyLoad)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
