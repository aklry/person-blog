import axios from '../util/request'

const base = {
    listAllBlog: 'listAllBlog'
}

const blogApi = {
    listAllBlog(params) {
        return axios.post(base.listAllBlog, params)
    }
}

export default blogApi