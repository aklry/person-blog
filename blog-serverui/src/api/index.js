import axios from '@/util/request'
import utils from '@/util/utils'
const base = {
    login: '/login'
}

const api = {
    getAdminInfo (params) {
        // console.log(JSON.stringify(params))
        // console.log(JSON.stringify(params))
        return axios.post(base.login,utils.serialize(params))
    }
}

export default api;