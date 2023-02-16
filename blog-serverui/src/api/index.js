import axios from '@/util/request'
const base = {
    login: '/login',
    register: '/register',
    listAllAdmin: '/listAllAdmin'
}

const api = {
    getAdminInfo (params) {
        // console.log(JSON.stringify(params))
        // console.log(JSON.stringify(params))
        return axios.post(base.login,params)
    },
    adminRegister(params) {
        return axios.post(base.register,params)
    },
    getAllAdmin() {
        return axios.get(base.listAllAdmin)
    }
}

export default api;