const mutations = {
    setAdminInfo(state, params) {
        state.adminInfo = params.adminInfo
        state.token = params.token
    },
    handleLogOut(state) {
        state.token = ''
        state.adminInfo = {}
        state.routes = []
        localStorage.removeItem('token')
        localStorage.removeItem('adminInfo')
    },
    setRoutes(state, routes) {
        state.routes = routes
    }
}
export default mutations