import url from './base'
import request from '../utils/request'

const base = {
    getAllCategory: '/getAllCategory'
}

const api = {
    getAllCategory: () => request.get(url.baseURL + base.getAllCategory)
}

export default api