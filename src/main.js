import Vue from 'vue'
import App from './App.vue'
import "reset.css"; // 重置默认样式
import router from "./routers"; // 引入路由
import "./plugins/element"; // 引入element
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
