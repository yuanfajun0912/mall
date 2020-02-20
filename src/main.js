import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import Toast from './components/common/toast'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

//使用Toast这个轮子
Vue.use(Toast)

// 在Vue原型上注册事件总线
Vue.prototype.$bus = new Vue()

//解决移动端300ms延迟问题
FastClick.attach(document.body)

//图片懒加载
Vue.use(VueLazyLoad, {
  preLoad: 1,
  loading: require('./assets/img/common/isLoading.gif')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
