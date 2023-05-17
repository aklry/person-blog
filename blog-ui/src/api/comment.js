import axios from '../utils/request'
import url from './base.js'
const base = {
    addComment: '/addComment',
    listUsersComment: '/listAllCommentByUser'
}

const commentApi = {
    addComment(params) {
        return axios.post(url.baseURL + base.addComment, params)
    },
    listUsersComment(params) {
        return axios.post(url.baseURL + base.listUsersComment, params)
    }
}

export default commentApi