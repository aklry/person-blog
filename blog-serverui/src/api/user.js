import axios from "@/util/request"

const base = {
    listUser: '/listUser'
}

const api = {
    getAllUsers() {
        return axios.post(base.listUser)
    }
}

export default api