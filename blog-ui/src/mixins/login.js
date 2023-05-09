import api from "@/api/user"
import { mapMutations } from "vuex"
import { debounce } from '@/utils/debounce'
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
        registerHandle() {
            this.$router.push({ name: 'Register' })
        },
        submitForm() {
            let that = this
            debounce(function () {
                api.findUser({
                    name: that.form.username,
                    password: that.form.password
                })
                    .then(res => {
                        if (res.data[0].flag) {
                            that.set({
                                token: res.data[0].token,
                                userInfo: res.data[1],
                                flag: res.data[0].flag
                            })
                            localStorage.setItem('token', res.data[0].token)
                            localStorage.setItem('userInfo', JSON.stringify(res.data[1]))
                            that.$router.push({ name: 'Home' })

                        } else {
                            that.$message.error(res.data[0].message)
                        }
                    }).catch(error => console.log(error))
            }, 500)()
        }
    }
}