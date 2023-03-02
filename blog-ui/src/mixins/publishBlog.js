export default {
    data() {
        return {
            // 表单数据
            formData: {
                title: '',
                author: '',
                dateTime: '',
                content: '',
                category: '',
                type: ''
            },
            rules: {
                title: [
                    { required: true, message: "请输入文章标题", trigger: "blur" },
                    { min: 3, max: 10, message: "长度在3到10个字符", trigger: "blur" },
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
            }
        }
    },
    methods: {
        handleSubmit(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!')
                    this.$refs[formName].resetFields();
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        }
    }
}