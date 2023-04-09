export default {
    setAdminInfo (state, params) {
        state.adminInfo = params.adminInfo
        state.token = params.token
    },
    handleLogOut(state) {
        state.token = ''
        window.localStorage.removeItem('token')
    }
}