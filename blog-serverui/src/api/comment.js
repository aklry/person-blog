import axios from '../util/request'
import { url } from './base'
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
        return axios.post(url + base.listAllComment)
    },
    /**
     * 根据id删除用户
     * @param {*} params --> 用户id
     * @returns 
     */
    deleteComment(params) {
        return axios.post(url + base.deleteComment, params)
    }
}

export default api 