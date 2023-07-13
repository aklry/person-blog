import url from './base'
import request from '../utils/request'

const base = {
    getAllBanner: '/getAllBanner'
}

const api = {
    getAllBanner: () => request.get(url.baseURL + base.getAllBanner)
}

export default api