export default {
    setAdminInfo (state, params) {
        state.adminInfo = params.adminInfo
        state.token = params.token
    }
}