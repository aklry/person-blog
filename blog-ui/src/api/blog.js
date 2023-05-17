import axios from "../utils/request"
import url from './base.js'
const base = {
    addBlog: '/publishBlog',
    listAllBlog: '/listAllBlog', //分页查询
    findBlogById: '/findBlogById',
    findBlogByCategory: 'findBlogByCategory' //根据博客分类查询
}

const blogApi = {
    publishBlog(params) {
        return axios.post(url.baseURL + base.addBlog, params)
    },
    listAllBlog(params) {
        return axios.post(url.baseURL + base.listAllBlog, params)
    },
    findBlogById(params) {
        return axios.post(url.baseURL + base.findBlogById, params)
    },
    findBlogByCategory(params) {
        return axios.get(url.baseURL + base.findBlogByCategory, {
            params
        })
    }
}

export default blogApi