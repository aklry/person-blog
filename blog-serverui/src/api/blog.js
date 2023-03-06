import axios from '../util/request'

const base = {
    listAllBlog: '/listAllBlog',
    deleteBlogById: '/deleteBlogById'
}

const blogApi = {
    listAllBlog(params) {
        return axios.post(base.listAllBlog, params)
    },
    deleteBlogById(params) {
        return axios.post(base.deleteBlogById, params)
    }
}

export default blogApi