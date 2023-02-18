import axios from "@/util/request"

const base = {
    listUser: '/listUser',
    updateUser: '/updateUser'
}

const user = {
    getAllUsers() {
        return axios.post(base.listUser)
    },
    updateUser(params) {
        return axios.post(base.updateUser, params)
    }
}

export default user