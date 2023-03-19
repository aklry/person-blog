import { mapMutations } from "vuex"
import commentApi from "@/api/comment"
import moment from "moment"
import blogApi from '@/api/blog'
export default {
    data() {
        return {
            formData: {
                content: ''
            },
            rules: {
                content: [
                    { required: true, message: "请输入你的评论", trigger: "blur" }
                ]
            },
            userInfoConComment: []
        }
    },
    inject: ['reload'],
    methods: {
        ...mapMutations(['handleLogout']),
        logout() {
            this.handleLogout()
            this.$router.push({ name: 'Login' })
        },
        comment(userInfo, blog, formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    const dateTime = moment().format('YYYY-MM-DD hh:mm:ss')
                    commentApi.addComment({
                        content: this.formData.content,
                        dateTime,
                        user_id: userInfo.id,
                        blog_id: blog.id
                    }).then(res => {
                        if (res.data.flag) {
                            this.$message.success(res.data.message)
                            this.$refs[formName].resetFields()
                            this.reload()
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
    },
    mounted() {
        //渲染博客内容在页面上
        blogApi.findBlogById(this.$store.state.blog.id)
            .then(res => {
                if (res.data && res.status === 200) {
                    this.$store.state.blog = res.data
                    localStorage.setItem('blog', JSON.stringify(res.data))

                }
            }).catch(error => console.log(error))

        commentApi.listUsersComment(this.$store.state.blog.id)
            .then(res => {
                this.userInfoConComment = res.data
            })
            .catch(error => console.log(error))
    }
}