import blogApi from "@/api/blog"
import blogApi from '@/api/blog'
import moment from 'moment'
export default {
    data() {
        return {
            blogInfo: [],
            search: '',
            pageInfo: '',
            pageNum: 1,
            size: 5
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
                                this.http()
                            } else {
                                this.$message.success(res.data.message)
                            }
                        })
                })
                .catch((error) => { console.log(error) })

        },
        handleCurrentChange(val) {
            this.pageNum = val
            this.http()
        },
        http() {
            blogApi.listAllBlog({
                pageNum: this.pageNum,
                size: this.size
            })
                .then(res => {
                    if (res.status === 200 && res.data != null) {
                        res.data.list.filter((item) => {
                            item.publishTime = moment(item.publishTime).format('YYYY-MM-DD HH:mm:ss')
                        })
                        this.blogInfo = res.data.list
                        this.pageInfo = res.data
                    }
                })
                .catch(error => console.log(error))
        }
    },
    mounted() {
        this.http()
    }
}