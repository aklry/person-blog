import request from '../util/request'
import { url } from './base'

const base = {
    addCategory: '/addCategory',
    getAllCategory: '/getAllCategory',
    deleteCategory: '/deleteCategory'
}

const api = {
    addCategory: category => request.get(url + base.addCategory, { params: { category } }),
    getAllCategory: () => request.get(url + base.getAllCategory),
    deleteCategory: id => request.get(url + base.deleteCategory, { params: { id }})
}

export default api