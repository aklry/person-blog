import axios from '../util/request'

const base = {
    listAllComment: '/getAllComment',
    deleteComment: '/deleteComment'
}

const api = {
    /**
     * 获取所有评论
     * @returns 
     */
    listAllComment() {
        return axios.post(base.listAllComment)
    },
    /**
     * 根据id删除用户
     * @param {*} params --> 用户id
     * @returns 
     */
    deleteComment(params) {
        return axios.post(base.deleteComment, params)
    }
}

export default api 