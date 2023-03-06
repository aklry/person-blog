import blogApi from "@/api/blog"
export default {
    inject: ['reload'],
    data() {
        return {
            blogInfo: [],
            search: '',
            pageInfo: ''
        }
    },
    methods: {
        handleDelete(index, row) {
            this.$confirm("此操作将永久删除该博客, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    blogApi.deleteBlogById(row.id)
                        .then(res => {
                            if (res.data.flag && res.status === 200) {
                                this.$message.success(res.data.message)
                                this.reload()
                            } else {
                                this.$message.success(res.data.message)
                            }
                        })
                })
                .catch((error) => { console.log(error) })

        }
    }
}