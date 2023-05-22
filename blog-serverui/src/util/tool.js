import store from "@/store"
//数据持久化存储函数
const dataStorage = function () {
    const token = localStorage.getItem('token')
    const adminInfo = JSON.parse(localStorage.getItem('adminInfo'))
    if (token) {
        store.commit('setAdminInfo', {
            token,
            adminInfo
        })
    }
}
// 封装兼容性方法getStyle(获取元素的css属性)
const getStyle = function (elem, prop) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(elem, null)[prop];
    } else {
        return elem.currentStyle[prop];
    }
}

export default {
    getStyle,
    dataStorage
}