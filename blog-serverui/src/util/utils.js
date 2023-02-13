export default {
    //将数据序列化成JSON格式
    serialize (params) {
        return JSON.stringify(params)
    },
    //弹出框
    alert (vm, info) {
        vm.$alert(info, '提示', {
            confirmButtonText: '确定'
        })
    }
}