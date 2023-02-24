import axios from "../utils/request"

const base = {
    addUser: '/addUser'
}

const api = {
    addUser(params) {
        return axios.post(base.addUser, params)
    }
}

export default api