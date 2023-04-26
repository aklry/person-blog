import api from "@/api/user"
import { mapMutations } from "vuex"
export default {
    data() {
        return {
            form: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    { required: true, message: "请输入用户名", trigger: "blur" },
                    { min: 3, max: 10, message: "长度在3到10个字符", trigger: "blur" },
                ],
                password: [
                    { required: true, message: "请输入至少六位包含数字和字母的组合", trigger: "blur" },
                    { pattern: '^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$', message: '密码格式不正确', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        ...mapMutations(['set']),
        submitForm() {
            api.findUser({
                name: this.form.username,
                password: this.form.password
            })
                .then(res => {
                    if (res.data[0].flag) {
                        this.set({
                            token: res.data[0].token,
                            userInfo: res.data[1],
                            flag: res.data[0].flag
                        })
                        localStorage.setItem('token', res.data[0].token)
                        localStorage.setItem('userInfo', JSON.stringify(res.data[1]))
                        this.$message.success(res.data[0].message)
                        setTimeout(() => {
                            this.$router.push({ name: 'Home' })
                        }, 2000)
                    } else {
                        this.$message.error(res.data[0].message)
                    }
                }).catch(error => console.log(error))
        },
        registerHandle() {
            this.$router.push({name: 'Register'})
        }
    }
}