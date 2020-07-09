import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  el: '#main',
  router,
  store,
  render: h => h(App)
}).$mount('#app')




// 全局注册
import Vue from 'vue'

// use

new Vue({
  'el': '#main'
})