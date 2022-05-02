import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import http from "@/request/http";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import '@/mock/mockServe'
Vue.config.productionTip = false
Vue.prototype.$http = http
Vue.use(ElementUI)


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
