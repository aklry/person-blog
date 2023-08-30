const add = {
    data() {
        return {
            addForm: {
                username: "",
                password: "",
                role: ""
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
                role: [
                    { required: true }
                ]
            },
            formLabelWidth: "150px"
        }
    }
}
export default add