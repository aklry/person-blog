import axios from "../utils/request"

const base = {
    addUser: '/addUser',
    login: '/userLogin',
    updatePassword: '/updatePassword',
    updateName: '/updateName',
    findUserByName: '/findUserByName',
    listCommentByUser: '/listCommentByUser'
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
    }
}

export default api