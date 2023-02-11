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
                    { required: true, message: "请输入至少八个字符，至少一个字母和一个数字", trigger: "blur" },
                    {pattern: '^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$',message:'密码格式不正确',message:'密码格式不正确',trigger:'change'}
                ]
            }
        }
    }
}