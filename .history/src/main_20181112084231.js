// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "@/libs/axios.js"
import {store} from './store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/libs/style'
import '@/assets/js/jquery-3.3.1.min.js'

Vue.prototype.axios = axios.loadAxios      //（一定要这么定义才能在页面this.axios这么使用）

Vue.use(ElementUI)
require('./mock/mock.js')   // 引入mockjs

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
