import api from "@/api/user"
export default {
    //异步更新用户数据
    asynChangeUserInfo({ commit }, value) {
        api.findUserByName({
            name: value
        }).then(res => {
            if (res.status === 200) {
                commit('changeUserInfo', res.data)
                localStorage.setItem('userInfo', JSON.stringify(res.data))
            }
        }).catch(error => console.log(error))
    }
}