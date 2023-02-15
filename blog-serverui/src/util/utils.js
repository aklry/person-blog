export default {
    //弹出框
    alert (vm, info) {
        vm.$alert(info, '提示', {
            confirmButtonText: '确定'
        })
    }
}