import axios from '../util/request'

const base = {
    listAllBlog: '/listAllBlog',
    deleteBlogById: '/deleteBlogById',
    listAllBlogNoPage: '/listBlog',
    updateBlogInfoById: '/updateBlogInfoById'
}

const blogApi = {
    listAllBlog(params) {
        return axios.post(base.listAllBlog, params)
    },
    deleteBlogById(params) {
        return axios.post(base.deleteBlogById, params)
    },
    listAllBlogNoPage() {
        return axios.post(base.listAllBlogNoPage)
    },
    updateBlogInfoById(params) {
        return axios.post(base.updateBlogInfoById, params)
    }
}

export default blogApi