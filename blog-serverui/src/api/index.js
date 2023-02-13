import axios from '@/util/request'
const base = {
    login: '/login'
}

const api = {
    getAdminInfo (params) {
        // console.log(JSON.stringify(params))
        // console.log(JSON.stringify(params))
        return axios.post(base.login,JSON.stringify(params))
    }
}

export default api;