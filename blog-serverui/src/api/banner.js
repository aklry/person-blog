import { url } from './base'
import request from '../util/request'

const base = {
    addOrUpdateBanner: '/addOrUpdateBanner',
    getAllBanner: '/getAllBanner',
    deleteBannerById: '/deleteBanner'
}

const api = {
    /**
     * 添加或更新轮播图
     * @param {Object}
     * @returns 
     */
    addOrUpdateBanner: params => request.get(url + base.addOrUpdateBanner, { params }),
    /**
     * 
     * @returns 所有轮播图
     */
    getAllBanner: () => request.get(url + base.getAllBanner),
    /**
     * 根据id删除轮播图数据
     */
    deleteBannerById: id => request.get(url + base.deleteBannerById, { params: { id } })
}

export default api