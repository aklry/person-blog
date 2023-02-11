export default {
    data () {
        return {
            form: {
                username: '',
                password: '',
            },
            rules: {
                username: [
                    { required: true, message: "请输入用户名", trigger: "blur" },
                    { min: 3, max: 10, message: "长度在3到10个字符", trigger: "blur" },
                ],
                password: [
                    { required: true, message: "请输入密码", trigger: "blur" },
                    { min: 3, max: 10, message: "长度在3到10个字符", trigger: "blur" },
                ]
            }
        }
    },
    methods: {
        submitForm () {
            console.log('登录')
        }
    }
}