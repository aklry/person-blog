import axios from '@/util/request'
const base = {
    login: '/login',
    listAllAdmin: '/listAllAdmin',
    add: '/add',
    deleteById: '/delete',
    update: '/update',
    updateRole: '/updateRole',
    search: '/search'
}

const api = {
    getAdminInfo(params) {
        return axios.post(base.login, params)
    },
    getAllAdmin(params) {
        return axios.post(base.listAllAdmin, params)
    },
    add(params) {
        return axios.post(base.add, params)
    },
    delete(id) {
        return axios.post(base.deleteById, id)
    },
    update(params) {
        return axios.post(base.update, params)
    },
    updateRole(params) {
        return axios.post(base.updateRole, params)
    },
    /**
     * 模糊查询
     */
    search(params) {
        return axios.post(base.search, params)
    }
}

export default api;