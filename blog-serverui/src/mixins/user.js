export default {
    data() {
        return {
            userList: [],
            search: "",
            formLabelWidth: '120px',
            isVisible: false,
            id: 0,
            form: {
                name: "",
                password: "",
                sex: '',
                phoneNumber: '',
                address: '',
                role: ''
            },
            rules: {
                name: [
                    { required: true, message: "请输入用户名", trigger: "blur" },
                    { min: 3, max: 10, message: "长度在3到10个字符", trigger: "blur" },
                ],
                password: [
                    { required: true, message: "请输入至少六位包含数字和字母的组合", trigger: "blur" },
                    { pattern: '^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$', message: '密码格式不正确', trigger: 'blur' }
                ],
                phoneNumber: [
                    { required: true, message: "请输入11位电话号码", trigger: "blur" },
                    { pattern: '0?(13|14|15|17|18)[0-9]{9}', message: '请输入正确的电话号码', trigger: 'blur' }
                ],
                address: [
                    { required: true, message: "请输入你的地址", trigger: "blur" },
                ],
                sex: [
                    { required: true, message: "请输入你的性别", trigger: "blur" },
                    { pattern: '^(男|女){1}$', message: '请输入性别格式(男或女)', trigger: 'blur' }
                ]
            },
        }
    },
    methods: {
        changeIsVisible(val) {
            this.isVisible = val
        },
        handleEdit(index, row) {
            this.isVisible = true
        },
        handleDelete(index, row) {
            console.log(row)
        },
        cancel() {
            this.isVisible = false
        }
    }
}