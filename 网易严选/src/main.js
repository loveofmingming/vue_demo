// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 入口js：创建Vue 实例

import Vue from 'vue'
import App from './App.vue'
import './main.css'

import router from './router'
import store from './store'

import './mock/mockServer'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  //将app组件渲染到index中去  映射成标签
  render: h => h(App),
  router,
  store

})
