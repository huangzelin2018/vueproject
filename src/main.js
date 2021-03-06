import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import axios from 'axios'
import $ from 'jquery'


Vue.prototype.$ajax = axios

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
