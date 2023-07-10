import request from '../util/request'
import { url } from './base'
const base = {
    listAllBlog: '/listAllBlog',
    deleteBlogById: '/deleteBlogById',
    listAllBlogNoPage: '/listBlog',
    updateBlogInfoById: '/updateBlogInfoById'
}

const blogApi = {
    listAllBlog: params => request.post(url + base.listAllBlog, params),
    deleteBlogById: params => request.post(url + base.deleteBlogById, params),
    listAllBlogNoPage: () => request.post(url + base.listAllBlogNoPage),
    updateBlogInfoById: params => request.post(url + base.updateBlogInfoById, params)
}

export default blogApi