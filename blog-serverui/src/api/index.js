import axios from '@/util/request'
import { url } from './base'
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
        return axios.post(url +base.login, params)
    },
    getAllAdmin(params) {
        return axios.post(url +base.listAllAdmin, params)
    },
    add(params) {
        return axios.post(url +base.add, params)
    },
    delete(id) {
        return axios.post(url +base.deleteById, id)
    },
    update(params) {
        return axios.post(url +base.update, params)
    },
    updateRole(params) {
        return axios.post(url +base.updateRole, params)
    },
    /**
     * 模糊查询
     */
    search(params) {
        return axios.post(url + base.search, params)
    }
}

export default api;