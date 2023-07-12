import request from '../util/request'
import { url } from './base'
const base = {
    listAllBlog: '/listAllBlog',
    deleteBlogById: '/deleteBlogById',
    listAllBlogNoPage: '/listBlog',
    updateBlogInfoById: '/updateBlogInfoById'
}

const blogApi = {
    /**
     * 
     * @param {PageInfo} params 分页对象
     * @returns 
     */
    listAllBlog: params => request.post(url + base.listAllBlog, params),
    /**
     * 
     * @param {Object} params 
     * @returns 
     */
    deleteBlogById: params => request.post(url + base.deleteBlogById, params),
    /**
     * 不通过分页获取所有博客数据
     * @returns 
     */
    listAllBlogNoPage: () => request.post(url + base.listAllBlogNoPage),
    /**
     * 根据id更新博客信息
     * @param {Object} params 
     * @returns 
     */
    updateBlogInfoById: params => request.post(url + base.updateBlogInfoById, params)
}

export default blogApi