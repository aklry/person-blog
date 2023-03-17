import { mapMutations } from "vuex"
import commentApi from "@/api/comment"
import moment from "moment"
export default {
    data() {
        return {
            formData: {
                content: ''
            },
            rules: {
                content: [
                    {required: true, message: "请输入你的评论", trigger: "blur"}
                ]
            }
        }
    },
    methods: {
        ...mapMutations(['handleLogout']),
        logout() {
            this.handleLogout()
            this.$router.push({name: 'Login'})
        },
        comment(userInfo, formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    const dateTime = moment().format('YYYY-MM-DD hh:mm:ss')
                    commentApi.addComment({
                        content: this.formData.content,
                        dateTime,
                        user_id: userInfo.id
                    }).then(res => {
                        if (res.data.flag) {
                            this.$message.success(res.data.message)
                            this.$refs[formName].resetFields()
                        } else {
                            this.$message.success(res.data.message)
                            this.$refs[formName].resetFields()
                        }
                    })
                } else {
                    return false
                }
            })
        }
    }
}