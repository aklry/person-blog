import axios from '../utils/request'

const base = {
    addComment: '/addComment'
}

const commentApi = {
    addComment(params) {
        return axios.post(base.addComment, params)
    }
}

export default commentApi