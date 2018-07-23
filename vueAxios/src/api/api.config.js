import axios from 'axios'
import qs from 'qs'
// 响应时间
axios.defaults.timeout = 5 * 1000
// 配置cookie
axios.defaults.withCredentials = true
// 配置请求头
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// 静态资源
// Vue.prototype.$static = ''
// 配置接口地址
// axios.defaults.baseURL = ''
// 添加请求拦截器
axios.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    return Promise.reject(err);
  }
)
// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use(
  res => {
    return res;
  },
  err => {
    return Promise.reject(err);
  }
)

// 发送请求
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(
        res => {
          resolve(res.data)
        },
        err => {
          reject(err.data)
        }
      )
      .catch(err => {
        reject(err.data)
      })
  })
}

export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params,
        paramsSerializer: function (params) {
          return qs.stringify(params, {arrayFormat: 'repeat'})
        },
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);

      })
  })
}
