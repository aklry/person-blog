export default {
    set(state, params) {
        state.token = params['token']
        state.userInfo = params['userInfo']
        state.flag = params['flag']
    },
    //退出功能
    handleLogout(state) {
        state.token = ''
        state.userInfo = null
        state.flag = false
        state.blog = null
       localStorage.clear()
    },
    //当完成用户信息的修改后，更新vuex保存的用户信息
    changeUserInfo(state, userInfo) {
        state.userInfo = userInfo
    },
    //发表博客时，将博客信息保存在vuex
    setBlogInfo(state, blogInfo) {
        state.blogInfo.push(blogInfo)
    },
    //点击查看原文时，设置查看的博客
    setBlog(state, blog) {
        state.blog = blog
    },
    //持久化数据
    dataStorage(state, params) {
        state.flag = params['flag']
        state.userInfo = params['userInfo']
        state.blogInfo = params['blogInfo']
        state.blog = params['blog']
    },
    setPageInfo(state, pageNum) {
        state.pageInfo = {...state.pageInfo, pageNum }
    }
}