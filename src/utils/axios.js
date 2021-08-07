import axios from "axios";
import vueAxios from "vue-axios";
import Vue from "vue";
Vue.use(vueAxios, axios);
import { env } from "./env";
// axios二次封装
let serve = Vue.axios.create({
  baseURL: env,
  timeout: 3000,
  headers: { "Content-Type": "application/json;charset=utf-8" },
  responseType: "json",
  withCredentials: false,
});
// 请求拦截器
serve.interceptors.request.use(config => config, err => Promise.reject(err))
// 响应拦截器
serve.interceptors.response.use(res => res, err => Promise.reject(err));
export default serve;
