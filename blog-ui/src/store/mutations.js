export default {
    set(state, params) {
        state.token = params['token']
        state.userInfo = params['userInfo']
        state.flag = params['flag']
    },
    handleLogout(state) {
        state.token = ''
        window.localStorage.removeItem('token')
    }
}