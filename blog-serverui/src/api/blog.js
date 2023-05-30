import axios from '../util/request'
import { url } from './base'
const base = {
    listAllBlog: '/listAllBlog',
    deleteBlogById: '/deleteBlogById',
    listAllBlogNoPage: '/listBlog',
    updateBlogInfoById: '/updateBlogInfoById'
}

const blogApi = {
    listAllBlog(params) {
        return axios.post(url + base.listAllBlog, params)
    },
    deleteBlogById(params) {
        return axios.post(url + base.deleteBlogById, params)
    },
    listAllBlogNoPage() {
        return axios.post(url + base.listAllBlogNoPage)
    },
    updateBlogInfoById(params) {
        return axios.post(url + base.updateBlogInfoById, params)
    }
}

export default blogApi