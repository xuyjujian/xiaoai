import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import VCharts from 'v-charts'
import JsonExcel from 'vue-json-excel'
Vue.use(ElementUI);
Vue.use(mavonEditor);
Vue.use(VCharts);
Vue.component('downloadExcel', JsonExcel)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  el: '#main',
  router,
  store,
  render: h => h(App)
}).$mount('#app')


