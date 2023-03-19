import axios from '../utils/request'

const base = {
    addComment: '/addComment',
    listUsersComment: '/listAllCommentByUser'
}

const commentApi = {
    addComment(params) {
        return axios.post(base.addComment, params)
    },
    listUsersComment(params) {
        return axios.post(base.listUsersComment, params)
    }
}

export default commentApi