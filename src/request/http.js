import axios from "axios";
import Vue from "vue";
import router from "../router";
const baseURL = window.IPCONFIG;
const instance = axios.create({
  timeout: 7000, // 请求超时时间
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

// 请求
instance.interceptors.request.use(
  async config => {
    return config
  },
  
  error => {
    console.log('5555', config)
    console.log(error)
    return Promise.reject(error)
  }
)

// 拦截器配置
instance.interceptors.response.use(
  (res) => {
    if (res.data && res.data.code === "1003") {
      router.push("/");
    }
    if (!res.data.success && res.data.code !== "0") {
      if (res.data.message && !res.config.url.includes("")) {
        Vue.prototype.$message.error({
          type: "error",
          duration: 3000,
          message: res.data.message,
        });
      }
    }
    if (typeof res.data === "object" && !res.data.status) {
      res.data.status = res.status;
    }
    return res.data;
  },
  (error) => {
    // 超时情况
    if (!error.response && error.message.indexOf("timeout") >= 0) {
      error.response = {};
      error.response.data = {
        code: "timeout",
        data: null,
        message: "请求超时",
        success: false,
        status: error.response.status,
      };
      return error.response.data;
    } else {
      return error;
    }
  }
);

export default {
  get: function (url, data, config) {
    return instance.get(encodeURI(url), data, config); // 请求参数
  },
  post: function (url, data, config) {
    return axios.post(encodeURI(url), data, config); // 请求参数
  },
  delete: function (url, data, config) {
    return instance.delete(encodeURI(url), data, config); // 请求参数
  },
};


// import axios from 'axios'

// // axios 配置
// axios.defaults.timeout = 60000 // 设置请求超时
// axios.defaults.headers.post['Content-Type'] =
//   'application/x-www-form-urlencoded;'

// // 请求
// axios.interceptors.request.use(
//   async config => {
//     return config
//   },
//   error => {
//     console.log(error)
//     return Promise.reject(error)
//   }
// )
// // 拦截器配置
// axios.interceptors.response.use(
//   res => {
//     return res.data
//   },
//   error => {
//     // 超时情况 Network Error
//     if (!error.response) {
//       if (error.message.indexOf('timeout') >= 0) {
//         error.response = {}
//         error.response.data = {
//           code: 500,
//           data: null,
//           message: '请求超时'
//         }
//         return error.response.data
//       } else {
//         return Promise.reject(error)
//       }
//     } else {
//       return error.response.data
//     }
//   }
// )

// export default {
//   get(url, data, config={}) {
//     axios.defaults.baseURL = window.IPCONFIG // 请求地址
//     return axios({
//       method: 'GET',
//       url: encodeURI(url),
//       params: data,
//       responseType: config.responseType || 'json'
//     })
//   },
//   post(url, data, config={}) {
//     axios.defaults.baseURL = window.IPCONFIG // 请求地址
//     return axios.post(encodeURI(url), data, config)
//   },
//   delete(url, data, config={}) {
//     axios.defaults.baseURL = window.IPCONFIG // 请求地址
//     return axios.delete(encodeURI(url), data, config)
//   }
// }

