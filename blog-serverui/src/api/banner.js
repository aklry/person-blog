import { url } from './base'
import request from '../util/request'

const base = {
    addBanner: '/addBanner'
}

const api = {
    addBanner: imgUrl => request.get(url + base.addBanner, { params: { url: imgUrl } })
}

export default api