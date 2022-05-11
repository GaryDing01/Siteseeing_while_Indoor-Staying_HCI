// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'//axios
import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css
import echarts from 'echarts' //echarts
import china from 'echarts/map/json/china.json' // 引入json文件

import './assets/DCH/global.css'
import './assets/DCH/global.js'


Vue.use(ElementUI) //使用elementUI
Vue.prototype.$axios = axios//axios
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
echarts.registerMap('china', china) // 在echarts中注册使用这个文件

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',

//   data: function(){
//     return {
//         req_ID: '1111',
//     }
// },


})
