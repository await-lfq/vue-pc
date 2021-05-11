import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
let router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/md5File"
    },
    {
      name: "md5File",
      path: "/md5File",
      component() { return import("../views/md5") }
    },
    {
      name: "robot",
      path: "/robot",
      component() { return import("../views/robot") }
    },
    {
      name:"upload",
      path:"/upload",
      component(){return import("../views/upload")}
    },
    {
      name:"geyVerifyCode",
      path:"/geyVerifyCode",
      component(){return import("../views/geyVerifyCode")}
    },
    {
      name:"waterfallsLayout",
      path:"/waterfallsLayout",
      component(){return import("../views/waterfallsLayout")}
    },
    {
      name:"scrollLoading",
      path:"/scrollLoading",
      component(){return import("../views/scrollLoading")}
    }
  ]
});
export default router
