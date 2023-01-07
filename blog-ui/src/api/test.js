import request from "@/api";

// 查询用户列表
export function listUser() {
    return request({
        url: '/listUser',
        method: 'get'
    })
}