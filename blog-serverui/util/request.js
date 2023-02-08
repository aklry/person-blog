import axios from "axios"
import qs from 'querystring'
/**
 * 处理错误信息
 * status:状态码
 * info:具体信息
 */

const errorHandle = (status, info) => {
    switch (status) {
        case 400:
            console.log('语义错误')
            break;
        case 401:
            console.log('服务器认证失败')
            break;
        case 403:
            console.log('服务器请求拒绝执行')
            break;
        case 404:
            console.log('请检查网络请求地址')
            break;
        case 500:
            console.log('服务器发生意外')
            break;
        case 502:
            console.log('服务器无响应')
            break;
        default:
            console.log(info)
            break
    }
}

/**
 * 创建Axios对象
 */
const instance = axios.create({
    baseURL:'http://localhost:8080/blog/',
    timeout: 5000,
    // withCredentials: true
    // 设置Content-Type，规定了前后端的交互使用json
    headers: {'Content-Type': 'application/json;charset=utf-8'}
})

/**
 * 拦截器
 */
//请求拦截器
instance.interceptors.request.use(
    config => {
    if (config.method === 'post') {
        config.data = qs.stringify(config.data)
    }
    return config
}, error => Promise.reject(error))

//响应拦截器
instance.interceptors.response.use(
    response => response.status === 200 ? Promise.resolve(response) : Promise.reject(response),
    error => {
        const { response } = error
        if (response) {
            errorHandle(response.status)
        } else {
            console.log('网络请求被中断了')
        }
        
    }
)

export default instance