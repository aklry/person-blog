import api from "@/api/user"
import utils from "@/utils/utils"
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
                    // { pattern: '^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$', message: '电话号码格式不正确', trigger: 'blur' }
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
                        utils.alert(this, res.data.message)
                        this.$router.push({name: 'Login'})
                    } else {
                        utils.alert(this, res.data.message)
                        this.$router.push({name: 'Register'})
                    }
                }).catch(error => console.log(error))
        }
    }
}