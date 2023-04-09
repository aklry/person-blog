import { mapMutations } from "vuex"
import commentApi from "@/api/comment"
import moment from "moment"
import blogApi from '@/api/blog'
import axios from "axios"
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
            userInfoConComment: [],
            url: ''
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
        //加载用户头像
        const imageUrl = localStorage.getItem('imageUrl')
        if (imageUrl) {
            this.url = imageUrl
        } else if (this.$store.state.userInfo.url) {
            this.url = this.$store.state.userInfo.url
        } else {
            this.url = require('@/assets/a1.png')
        }
        axios.all([blogApi.findBlogById(this.$store.state.blog.id), commentApi.listUsersComment(this.$store.state.blog.id)])
            .then(axios.spread((acct, perms) => {
                //查询所有博客之后，保存博客信息在vuex以及localStorage
                this.$store.state.blog = acct.data
                localStorage.setItem('blog', JSON.stringify(acct.data))

                //查询所有用户及其评论，并将其保存在变量
                this.userInfoConComment = perms.data
            })).catch(error => console.log(error))
    }
}