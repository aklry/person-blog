import { url } from "./base"
import request from '../util/request'
const base = {
    listUser: '/listUser',
    updateUser: '/updateUser',
    deleteUser: '/deleteUser'
}

const user = {
    getAllUsers: () => request.post(url + base.listUser),
    updateUser: params => request.post(url + base.updateUser, params),
    deleteUserById: params => request.post(url + base.deleteUser, params),
    getRouter: params => request.get(params)
}

export default user