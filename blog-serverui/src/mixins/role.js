import api from '@/api'
export default {
    data() {
        return {
            data: {
                username: '',
                role: ''
            }
        }
    },
    methods: {
        authorization() {
            api.updateRole({
                username: this.data.username,
                role: this.data.role
            }).then(res => {
                if (res.data.flag && res.status === 200) {
                    this.$message.success(res.data.message)
                } else {
                    this.$message.success(res.data.message)
                }
            })

        }
    }
}