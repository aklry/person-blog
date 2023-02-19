import axios from "@/util/request"

const base = {
    listUser: '/listUser',
    updateUser: '/updateUser',
    deleteUser: '/deleteUser'
}

const user = {
    getAllUsers() {
        return axios.post(base.listUser)
    },
    updateUser(params) {
        return axios.post(base.updateUser, params)
    },
    deleteUserById(params) {
        return axios.post(base.deleteUser, params)
    }
}

export default user