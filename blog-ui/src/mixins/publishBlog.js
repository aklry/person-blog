import blogApi from "@/api/blog"
import { mapMutations, mapGetters } from "vuex"
export default {
    data() {
        return {
            // 表单数据
            formData: {
                title: '',
                author: '',
                publishTime: '',
                content: '',
                category: '',
                type: ''
            },
            rules: {
                title: [
                    { required: true, message: "请输入文章标题", trigger: "blur" },
                ],
                author: [
                    { required: true, message: "请输入作者", trigger: "blur" },
                ],
                dateTime: [
                    { required: true }
                ],
                content: [
                    { required: true, message: "必须填写博客内容", trigger: "blur" }
                ],
                type: [
                    { required: true }
                ],
                category: [
                    { required: true }
                ]
            },
            editorOptions: {
                placeholder: '请输入博客内容...',
                theme: 'snow'
            }
        }
    },
    methods: {
        ...mapMutations(['setBlogInfo']),
        //实现发表博客的功能
        handleSubmit(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    blogApi.publishBlog({
                        publishTime: this.formData.publishTime,
                        title: this.formData.title,
                        author: this.formData.author,
                        content: this.formData.content,
                        category: this.formData.category,
                        type: this.formData.type
                    }).then(res => {
                        if (res.status === 200 && res.data.flag) {
                            this.$message.success(res.data.message)
                            //将博客信息保存到vuex以及localStorage
                            this.setBlogInfo({
                                publishTime: this.formData.publishTime,
                                title: this.formData.title,
                                author: this.formData.author,
                                content: this.formData.content,
                                category: this.formData.category,
                                type: this.formData.type
                            })
                            this.$refs[formName].resetFields()
                            this.$router.push({ name: 'Home' })
                        } else {
                            this.$message.success(res.data.message)
                            this.$refs[formName].resetFields()
                        }
                    }).catch(error => console.log(error))
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        },
        cancel() {
            this.$router.push('/')
        }
    },
    computed: {
        ...mapGetters(['getBlogInfo'])
    }
}