import Vue from 'vue'
import App from './App.vue'
import "reset.css";
import router from "./routers";
import "./plugins/rem";
import "./plugins/vant";
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
