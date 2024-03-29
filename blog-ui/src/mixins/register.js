import api from "@/api/user"
export default {
    data() {
        return {
            form: {
                username: '',
                password: '',
                phoneNumber: '',
                address: '',
                sex: ''
            },
            rules: {
                username: [
                    { required: true, message: "请输入用户名", trigger: "blur" },
                    { min: 3, max: 10, message: "长度在3到10个字符", trigger: "blur" },
                ],
                password: [
                    { required: true, message: "请输入至少六位包含数字和字母的组合", trigger: "blur" },
                    { pattern: '^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$', message: '密码格式不正确', trigger: 'blur' }
                ],
                phoneNumber: [
                    { required: true, message: "请输入正确的电话号码格式", trigger: "blur" },
                ],
                sex: [
                    { required: true }
                ],
                address: [
                    { required: true }
                ]
            }
        }
    },
    methods: {
        rollback() {
            this.$router.push({ name: 'Home' })
        },
        registerForm() {
            api.addUser({
                name: this.form.username,
                sex: this.form.sex,
                address: this.form.address,
                phoneNumber: this.form.phoneNumber,
                password: this.form.password

            })
                .then(res => {
                    if (res.data.flag) {
                        this.$message.success(res.data.message)
                        this.$router.push({ name: 'Login' })
                    } else {
                        this.$message.error(res.data.message)
                        this.$router.push({ name: 'Register' })
                    }
                }).catch(error => console.log(error))
        }
    }
}