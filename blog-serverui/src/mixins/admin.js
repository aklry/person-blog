import api from "@/api"
const admin = {
    data() {
        return {
            adminList: [],
            search: "",
            addVisible: false,
            editVisible: false,
            addTitle: '添加用户',
            editTitle: '修改用户',
            id: 0,
            pageInfo: {},
            pageNum: 1,
            size: 5,
            loading: false
        }
    },
    methods: {
        isShowHandle() {
            this.addVisible = true
        },
        cancel(formName) {
            this.addVisible = false
            this.editVisible = false
            this.$refs[formName].resetFields()
        },
        /**
         * 点击编辑按钮
         */
        handleEdit(index, row) {
            this.editVisible = true
            const { id, username, password } = row
            this.id = id
            Object.assign(this.editForm, { username, password })
        },
        //获得所有用户
        http() {
            this.loading = true
            api
                .getAllAdmin({
                    pageNum: this.pageNum,
                    size: this.size
                })
                .then((res) => {
                    this.adminList = res.data.list
                    this.pageInfo = res.data
                    this.loading = false
                })
                .catch((error) => console.log(error));
        },
        /**
         * 点击删除按钮
         * @param {*} index 
         * @param {*} row 
         */
        handleDelete(index, row) {
            this.$confirm("此操作将永久删除该管理员, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    api.delete(row.id).then((res) => {
                        this.$message.success(res.data.message)
                        this.http()
                    })
                })
                .catch((error) => console.log(error));
        },
        /**
         * 确认修改
         */
        clickEditHandle(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    this.editVisible = false
                    const username = this.editForm.username
                    const password = this.editForm.password
                    const id = this.id
                    api.update({
                        id,
                        username,
                        password
                    }).then(res => {
                        if (res.data.flag) {
                            this.$message.success(res.data.message)
                            this.$refs[formName].resetFields()
                            this.http()
                        } else {
                            this.$message.error(res.data.message)
                        }
                    })
                } else {
                    this.$message.error('格式错误')
                    return false;
                }
            })
        },
        /**
         * 确认添加用户
         */

        clickAddHandle(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    this.addVisible = false
                    const username = this.addForm.username
                    const password = this.addForm.password
                    const role = this.addForm.role
                    api.add({
                        username,
                        password,
                        role
                    }).then(res => {
                        if (res.data[0].flag) {
                            this.$message.success(res.data[0].message)
                            this.$refs[formName].resetFields()
                            this.http()
                        } else {
                            this.$message.error(res.data[0].message)
                        }
                    })
                } else {
                    this.$message.error('请正确填写表单信息')
                    return false
                }
            })
        },
        /**
         * 分页刷新数据
         * @param {} val 
         */
        handleCurrentChange(val) {
            this.pageNum = val
            this.http()
        },
        /**
         * 根据关键字搜索管理员
         */
        searchHandler() {
            api.search({
                keywords: '%' + this.search + '%'
            }).then(res => {
                if (res.data.length > 0) {
                    this.adminList = res.data
                } else {
                    this.adminList = []
                }
            }).catch(error => console.log(error))
        }
    },
    mounted() {
        this.http()
    }
}
export default admin