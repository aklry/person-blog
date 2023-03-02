import axios from "../utils/request"

const base = {
    addBlog: '/publishBlog',
    listAllBlog: '/listAllBlog'
}

const blogApi = {
    publishBlog(params) {
        console.log(params)
        return axios.post(base.addBlog, params)
    },
    listAllBlog() {
        return axios.post(base.listAllBlog)
    }
}

export default blogApi