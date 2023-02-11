import axios from '@/util/request'

const base = {
    login: '/login'
}

const api = {
    getAdminInfo (params) {
        return axios.post(base.login,params)
    }
}

export default api;