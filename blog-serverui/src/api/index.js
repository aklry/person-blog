import axios from '@/util/request'
import utils from '@/util/utils'
const base = {
    login: '/login',
    register: '/register'
}

const api = {
    getAdminInfo (params) {
        // console.log(JSON.stringify(params))
        // console.log(JSON.stringify(params))
        return axios.post(base.login,params)
    },
    adminRegister(params) {
        return axios.post(base.register,params)
    }
}

export default api;