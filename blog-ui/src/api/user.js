import axios from "../utils/request"
import url from './base.js'
const base = {
    addUser: '/addUser',
    login: '/userLogin',
    updatePassword: '/updatePassword',
    updateName: '/updateName',
    findUserByName: '/findUserByName',
    listCommentByUser: '/listCommentByUser',
    updateUserURL: '/updateUserURL' //更新用户头像的URL
}

const api = {
    addUser(params) {
        return axios.post(url.baseURL + base.addUser, params)
    },
    findUser(params) {
        return axios.post(url.baseURL + base.login, params)
    },
    updatePassword(params) {
        return axios.post(url.baseURL + base.updatePassword, params)
    },
    updateName(params) {
        return axios.post(url.baseURL + base.updateName, params)
    },
    findUserByName(params) {
        return axios.post(url.baseURL + base.findUserByName, params)
    },
    updateUserURL(params) {
        return axios.post(url.baseURL + base.updateUserURL, params)
    }
}

export default api