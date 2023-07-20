import store from "@/store"
//数据持久化存储函数
export const dataStorage = function () {
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
export const getStyle = function (elem, prop) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(elem, null)[prop];
    } else {
        return elem.currentStyle[prop];
    }
}

//封装数组深拷贝方法
export const deepCopyArray = function (arr) {
    if (!Array.isArray(arr)) {
        return arr; // 如果不是数组直接返回该元素
    }

    const copy = [];
    for (let i = 0; i < arr.length; i++) {
        copy.push(deepCopyArray(arr[i])); // 递归拷贝数组元素
    }

    return copy;
}