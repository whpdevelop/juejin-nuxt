
import axios from 'axios'
// import qs from 'qs'


// 创建实例配置选项参数
// /v1/get_entry_by_rank?src=web&limit=20&category=5562b415e4b00c57d9b94ac8
// axios.defaults.baseURL = 'http://localhost:3000/api';
axios.defaults.baseURL = 'http://127.0.0.1:3008';
// 判断是路由跳转还是 axios 请求
if (process.server) {
    axios.defaults.baseURL = `http://${process.env.HOST || '127.0.0.1'}:${process.env.PORT || 3008}`
}

// 获取首页中 各个模块的数据
var category = {
    frontend: '5562b415e4b00c57d9b94ac8',
    android: '5562b410e4b00c57d9b94a92',
    ai: '57be7c18128fe1005fa902de',
    ios: '5562b405e4b00c57d9b94a41',
    freebie: '5562b422e4b00c57d9b94b53',
    article: '5562b428e4b00c57d9b94b9d',
    devops: '5b34a478e1382338991dd3c1',
    backend: '5562b419e4b00c57d9b94ae2'
}

export const getIndexMoudelData = (type, count = 20) => {
    return axios.get(`/v1/get_entry_by_rank?src=web&limit=${count}&category=${category[type]}`)
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




// frontend
// https://timeline-merger-ms.juejin.im/v1/get_entry_by_rank?src=web&limit=20&category=5562b415e4b00c57d9b94ac8

// android
// https://timeline-merger-ms.juejin.im/v1/get_entry_by_rank?src=web&limit=20&category=5562b410e4b00c57d9b94a92

// ai
// https://timeline-merger-ms.juejin.im/v1/get_entry_by_rank?src=web&limit=20&category=57be7c18128fe1005fa902de

// ios 
// category=5562b405e4b00c57d9b94a41


// 工具资源
// category=5562b422e4b00c57d9b94b53

// 阅读
// category=5562b428e4b00c57d9b94b9d

// 运维
// category=5b34a478e1382338991dd3c1



