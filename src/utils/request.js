import axios from "./axios";
/**
 * @description post请求
 * @params {string,Object对象} 请求路径  请求参数
 * @return {Promise对象} Promise对象
 */
export function post(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, {
      ...params
    }).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err)
    })
  })
}

/**
 * @description get请求
 * @params {string,Object对象} 请求路径  请求参数
 * @return {Promise对象} Promise对象
 */
export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: {
        ...params
      }
    }).then(res => {
      if(res.data) resolve(res.data);
      else resolve(res);
      
    }).catch(err => {
      reject(err)
    })
  })
}