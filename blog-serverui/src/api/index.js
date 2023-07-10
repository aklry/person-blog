import { url } from './base'
import request from '../util/request'
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
    getAdminInfo:params => request.post(url +base.login, params),
    getAllAdmin:params => request.post(url +base.listAllAdmin, params),
    add:params =>request.post(url +base.add, params),
    delete:id => request.post(url +base.deleteById, id),
    update:params => request.post(url +base.update, params),
    updateRole:params => request.post(url +base.updateRole, params),
    /**
     * 模糊查询
     */
    search:(params) => {
        return request.post(url + base.search, params)
    }
}

export default api;