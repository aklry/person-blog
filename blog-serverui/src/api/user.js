import { url } from "./base"
import request from '../util/request'
const base = {
    listUser: '/listUser',
    updateUser: '/updateUser',
    deleteUser: '/deleteUser'
}

const user = {
    /**
     * 
     * @returns 所有用户的信息
     */
    getAllUsers: () => request.post(url + base.listUser),
    /**
     * 更新用户信息
     * @param {Object} params 用户的相关信息
     * @returns 
     */
    updateUser: params => request.post(url + base.updateUser, params),
    /**
     * 
     * @param {Object} params 用户的id
     * @returns 
     */
    deleteUserById: params => request.post(url + base.deleteUser, params),
}

export default user