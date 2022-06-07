import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from "axios";
const base = axios.create({
  baseURL: "https://hangover.timotheedurand.fr/api/", 
});






Vue.prototype.$http = base;

Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
