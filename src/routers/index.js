import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
let router = new VueRouter({
  mode: "history",
  routes: [{
    path: "/",
    redirect: () =>({ name: "compress" })
  },
  {
    name: "md5",
    path: "/md5",
    component: () => import("../views/md5")
  },
  {
    name: "waterfallsLayout",
    path: "/waterfallsLayout",
    component: () => import("../views/waterfallsLayout")
  },
  {
    name: "scrollLoading",
    path: "/scrollLoading",
    component: () => import("../views/scrollLoading")
  },
  {
    name: "lazyLoading",
    path: "/lazyLoading",
    component: () => import("../views/lazyLoading")
  },
  {
    name: "nativeUpload",
    path: "/nativeUpload",
    component: () => import("../views/nativeUpload")

  },
  {
    name: "cropper",
    path: "/cropper",
    component: () => import("../views/cropper")
  },
  {
    name: "compress",
    path: "/compress",
    component: () => import("../views/compress")
  }
  ]
});
export default router