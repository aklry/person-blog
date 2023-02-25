export default {
    set(state, params) {
        state.token = params['token']
        state.userInfo = params['userInfo']
    }
}