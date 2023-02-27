import axios from "../utils/request"

const base = {
    addUser: '/addUser',
    login: '/userLogin',
    updatePassword: '/updatePassword',
    updateName: '/updateName'
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
    }
}

export default api