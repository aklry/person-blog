import axios from "../utils/request"

const base = {
    addBlog: '/publishBlog',
    listAllBlog: '/listAllBlog', //分页查询
    listBlog: '/listBlog'
}

const blogApi = {
    publishBlog(params) {
        console.log(params)
        return axios.post(base.addBlog, params)
    },
    listAllBlog() {
        return axios.post(base.listAllBlog)
    },
    listBlog() {
        return axios.post(base.listBlog)
    }
}

export default blogApi