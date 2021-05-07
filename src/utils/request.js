import axios from "./axios";
// post请求
export function post(url, params={}) {
  return new Promise((resolve, reject) => {
    axios.post(url, { ...params }).then(res => {
      if (res.code == 0) {
        resolve(res.data);
      }
    }).catch(err => {
      reject("网络异常")
    })
  })
}

// get请求
export function get(url, params={}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: {
        ...params
      }
    }).then(res => {
      if (res.code == 0) {
        resolve(res.data);
      }
    }).catch(err => {
      reject("网络异常")
    })
  })
}
