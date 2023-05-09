//防抖函数
export function debounce(fn, delay) {
    var timer = null

    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(fn, delay)
    }
}