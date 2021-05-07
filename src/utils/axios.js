import axios from "axios";
import {env} from "./env";
// axios二次封装
let serve = axios.create({
  baseURL:env,
  timeout: 3000,
  headers: { "context-type": "application/json;charset=utf-8" },
  responseType: "",
  withCredentials: false,

});
// 请求拦截器
serve.interceptors.request.use(config => config, err => err)
// 响应拦截器
serve.interceptors.response.use(res=>res.data,err=>err);
export default serve;
