import axios from '../util/request'

const base = {
    listAllBlog: '/listAllBlog',
    deleteBlogById: '/deleteBlogById',
    listAllBlogNoPage: '/listBlog'
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
    }
}

export default blogApi