// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "@/libs/axios.js"
import {store} from './store/store'
import '@/libs/baseStyle.js'
import '@/libs/element.js'
import baseJs from '@/libs/baseJs.js'
require('./mock/mock.js')   // 引入mockjs
import './assets/css/theme/0000ff/index.css'

Vue.use(baseJs);//注册自定义全局函数
Vue.prototype.axios = axios.loadAxios      //（一定要这么定义才能在页面this.axios这么使用）

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
