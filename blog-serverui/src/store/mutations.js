const mutations = {
    setAdminInfo(state, params) {
        state.adminInfo = params.adminInfo
        state.token = params.token
    },
    handleLogOut(state) {
        state.token = ''
        state.adminInfo = ''
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('adminInfo')
    },
    setRoutes(state, routes) {
        state.routes = routes
    }
}
export default mutations