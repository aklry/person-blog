export default {
    set(state, params) {
        state.token = params['token']
        state.userInfo = params['userInfo']
        state.flag = params['flag']
    },
    handleLogout(state) {
        state.token = ''
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('userInfo')
    },
    //当完成用户信息的修改后，更新vuex保存的用户信息
    changeUserInfo(state, userInfo) {
        state.userInfo = userInfo
    }
}