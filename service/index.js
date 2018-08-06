

import axios from 'axios'
// import qs from 'qs'


// 创建实例配置选项参数
// /v1/get_entry_by_rank?src=web&limit=20&category=5562b415e4b00c57d9b94ac8
axios.defaults.baseURL = 'http://localhost:3000/api';

// 判断是路由跳转还是 axios 请求
if (process.server) {
    axios.defaults.baseURL = `http://${process.env.HOST || '127.0.0.1'}:${process.env.PORT || 3000}/api`
}

// 获取首页中 各个模块的数据
export const getIndexMoudelData = (type, count = 20) => {
    return axios.get(`/v1/get_entry_by_rank?src=${type}&limit=${count}&category=5562b415e4b00c57d9b94ac8`)
}



// import config from './config'

// const service = axios.create(config)

// // POST 传参序列化
// service.interceptors.request.use(
//     config => {
//         if (config.method === 'post') config.data = qs.stringify(config.data)
//         return config
//     },
//     error => {
//         return Promise.reject(error)
//     }
// )
// // 返回结果处理
// service.interceptors.response.use(
//     res => {
//         return res.data
//     },
//     error => {
//         return Promise.reject(error)
//     }
// )

// export default {
//     // post 方法
//     post(url, data) {
//         console.log('post request url', url)
//         return service({
//             method: 'post',
//             url,
//             params: data
//         })
//     },
//     // get 方法
//     get(url, data) {
//         console.log('get request url', url)
//         return service({
//             method: 'get',
//             url,
//             params: data
//         })
//     }
// }

