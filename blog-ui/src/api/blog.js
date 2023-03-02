import axios from "../utils/request"

const base = {
    addBlog: '/publishBlog'
}

const blogApi = {
    publishBlog(params) {
        console.log(params)
        return axios.post(base.addBlog, params)
    }
}

export default blogApi