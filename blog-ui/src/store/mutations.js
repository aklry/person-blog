export default {
    set(state, params) {
        state.token = params['token']
        state.userInfo = params['userInfo']
        state.flag = params['flag']
    },
    //退出功能
    handleLogout(state) {
        state.token = ''
        state.userInfo = {}
        state.flag = false
       localStorage.clear()
    },
    //当完成用户信息的修改后，更新vuex保存的用户信息
    changeUserInfo(state, userInfo) {
        state.userInfo = userInfo
    },
    //发表博客时，将博客信息保存在vuex
    setBlogInfo(state, blogInfo) {
        state.blogInfo.push(blogInfo)
    }
}