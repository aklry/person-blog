import axios from "../utils/request"

const base = {
    addUser: '/addUser',
    login: '/userLogin'
}

const api = {
    addUser(params) {
        return axios.post(base.addUser, params)
    },
    findUser(params) {
        return axios.post(base.login, params)
    }
}

export default api