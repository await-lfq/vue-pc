import Vue from 'vue'
import App from './App.vue'
import "reset.css"; // 重置默认样式
import router from "./routers"; // 引入路由
import "./plugins/element"; // 引入element
import registerToast from "./components/alert/alert.js";
Vue.use(registerToast);
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
