import axios from '@/util/request'
const base = {
    login: '/login',
    register: '/register',
    listAllAdmin: '/listAllAdmin',
    add: '/add',
    deleteById: '/delete',
    update: '/update',
    updateRole: '/updateRole'
}

const api = {
    getAdminInfo(params) {
        // console.log(JSON.stringify(params))
        // console.log(JSON.stringify(params))
        return axios.post(base.login,params)
    },
    adminRegister(params) {
        return axios.post(base.register,params)
    },
    getAllAdmin(params) {
        return axios.post(base.listAllAdmin,params)
    },
    add(params) {
        return axios.post(base.add, params)
    },
    delete(id) {
        return axios.post(base.deleteById,id)
    },
    update(params) {
        return axios.post(base.update,params)
    },
    updateRole(params) {
        return axios.post(base.updateRole, params)
    }
}

export default api;