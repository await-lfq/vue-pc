import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
let router = new VueRouter({
  mode: "history",
  routes: [{
    path: "/",
    redirect: () => ({ name: "drag" })
  },
  {
    name: "md5",
    path: "/md5",
    component: () => import("../views/md5")
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
  },
  {
    name: "pageCommunication",
    path: "/pageCommunication",
    component: () => import("../views/windowMessage/pageCommunication")
  },
  {
    name: "pageCommunication2",
    path: "/pageCommunication2",
    component: () => import("../views/windowMessage/pageCommunication2")
  },
  {
    name: "drag",
    path: "/drag",
    component: () => import("../views/drag")
  }
  ]
});
export default router