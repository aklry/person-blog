import store from "@/store"
//数据持久化存储函数
export function dataStorage() {
    const token = localStorage.getItem('token')
    const user = JSON.parse(localStorage.getItem('userInfo'))
    const blogInfo = JSON.parse(localStorage.getItem('blogInfo'))
    const blog = JSON.parse(localStorage.getItem('blog'))
    if (token) {
        store.commit('dataStorage', {
            flag: true,
            userInfo: user,
            blogInfo,
            blog
        })
    }
}