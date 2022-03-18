import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
let router = new VueRouter({
  mode: "hash",
  routes: [{
    path: "/",
    redirect: () => ({ name: "alert" })
  },
  {
    name: "fileUpload",
    component: () => import("../views/fileUpload"),
    path: "/fileUpload"
  },
  {
    name: "elementUpload",
    path: "/elementUpload",
    component: () => import("../views/elementUpload")
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
    name: "drag",
    path: "/drag",
    component: () => import("../views/drag")
  }, {
    name: "modal",
    path: "/modal",
    component: () => import("../views/modal")
  },
  {
    name: "imgLazy",
    path: "/imgLazy",
    component: () => import("../views/imgLazy")
  },
  {
    name: "alert",
    path: "/alert",
    component: () => import("../views/alert.vue"),
  }
  ]
});
export default router