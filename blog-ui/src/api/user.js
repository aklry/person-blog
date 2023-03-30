import axios from "../utils/request"

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
        return axios.post(base.addUser, params)
    },
    findUser(params) {
        return axios.post(base.login, params)
    },
    updatePassword(params) {
        return axios.post(base.updatePassword, params)
    },
    updateName(params) {
        return axios.post(base.updateName, params)
    },
    findUserByName(params) {
        return axios.post(base.findUserByName, params)
    },
    updateUserURL(params) {
        console.log(params)
        return axios.post(base.updateUserURL, params)
    }
}

export default api