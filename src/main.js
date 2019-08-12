// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import Vuex from 'vuex'
import axios from 'axios'

import router from './router'
import store from './store/index'

// eslint-disable-next-line no-unused-vars
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
