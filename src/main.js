import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios'

// 挂载全局对象
Vue.prototype.$http = axios

// 配置后端api接口路径
axios.defaults.baseURL = 'http://127.0.0.1:5000/v1'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
