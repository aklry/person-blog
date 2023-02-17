import axios from '@/util/request'
const base = {
    login: '/login',
    register: '/register',
    listAllAdmin: '/listAllAdmin',
    add: '/add',
    deleteById: '/delete'
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
    },
    add(params) {
        return axios.post(base.add, params)
    },
    delete(id) {
        return axios.post(base.deleteById,id)
    }
}

export default api;