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
                    { min: 6, message: "请输入最少6位,包括至少1个大写字母,1个小写字母,1个数字,1个特殊字符", trigger: "blur" },
                    {pattern: '^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$',message:'密码格式不正确'}
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