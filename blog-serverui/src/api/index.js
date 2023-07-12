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
    /**
     * 用于用户登录时调用的方法
     * @param {Object} params 用户传入的用户名及密码组成的对象
     * @returns 
     */
    getAdminInfo: params => request.post(url + base.login, params),
    /**
     * 
     * @param {Object} params 向后端传递的当前页码以及每页数据条数
     * @returns PageInfo(返回值是后端传递过来的分页对象)
     */
    getAllAdmin: params => request.post(url + base.listAllAdmin, params),
    /**
     * 添加一个管理员
     * @param {Object} params 包含管理员信息的对象
     * @returns 
     */
    add: params => request.post(url + base.add, params),
    /**
     * 根据id删除管理员
     * @param {Number} id 用户id
     * @returns 
     */
    delete: id => request.post(url + base.deleteById, id),
    /**
     * 用户修改管理员信息
     * @param {Object} params 包含管理员的相关信息
     * @returns 
     */
    update: params => request.post(url + base.update, params),
    /**
     * 修改管理员的权限
     * @param {Object} params 包含想要修改的管理员姓名及权限
     * @returns 
     */
    updateRole:params => request.post(url +base.updateRole, params),
    /**
     * 模糊查询
     */
    search:(params) => {
        return request.post(url + base.search, params)
    }
}

export default api;