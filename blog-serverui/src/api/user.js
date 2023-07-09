import axios from "@/util/request"
import { url } from "./base"
const base = {
    listUser: '/listUser',
    updateUser: '/updateUser',
    deleteUser: '/deleteUser'
}

const user = {
    getAllUsers() {
        return axios.post(url + base.listUser)
    },
    updateUser(params) {
        return axios.post(url + base.updateUser, params)
    },
    deleteUserById(params) {
        return axios.post(url + base.deleteUser, params)
    },
    getRouter(params) {
        return axios.get(params)
    }
}

export default user