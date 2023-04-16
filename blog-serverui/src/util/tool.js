// 封装兼容性方法getStyle(获取元素的css属性)
const getStyle = function (elem, prop) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(elem, null)[prop];
    } else {
        return elem.currentStyle[prop];
    }
}

export default {
    getStyle
}