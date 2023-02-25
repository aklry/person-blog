import api from "@/api/user"
import utils from "@/utils/utils"
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
                    {pattern: '^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$',message:'密码格式不正确',trigger:'blur'}
                ]
            }
        }
    },
    methods: {
        submitForm() {
            api.findUser({
                name: this.form.username,
                password: this.form.password
            })
                .then(res => {
                    if (res.data[0].flag) {
                    utils.alert(this, res.data[0].message)
                }
            }).catch(error => console.log(error))
        }
    }
}