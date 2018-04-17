// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import 'font-awesome/css/font-awesome.min.css'
import 'animate.css'
import VideoPlayer from 'vue-video-player'
// 引用API文件
import api from './api/index.js'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
import defines from './assets/config/config'

// 将API方法绑定到全局
Vue.prototype.$api = api;
Vue.use(VideoPlayer);
Vue.use(VueRouter)

FastClick.attach(document.body)

//全局，尽量少用吧
Vue.prototype.$defines = defines;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
