import axios from "../utils/request"

const base = {
    addBlog: '/publishBlog',
    listAllBlog: '/listAllBlog', //分页查询
    listBlog: '/listBlog',
    findBlogById: '/findBlogById',
    findBlogByCategory: 'findBlogByCategory' //根据博客分类查询
}

const blogApi = {
    publishBlog(params) {
        return axios.post(base.addBlog, params)
    },
    listAllBlog() {
        return axios.post(base.listAllBlog)
    },
    listBlog() {
        return axios.post(base.listBlog)
    },
    findBlogById(params) {
        return axios.post(base.findBlogById,params)
    },
    findBlogByCategory(params) {
        return axios.get(base.findBlogByCategory, {
            params
        })
    }
}

export default blogApi