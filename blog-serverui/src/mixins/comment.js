import commentApi from "@/api/comment"
import moment from 'moment'
export default {
    inject: ['reload'],
    data() {
        return {
            commentList: [],
            search: ''
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
                    commentApi.deleteComment(row.id)
                        .then(res => {
                            if (res.status === 200 && res.data.flag) {
                                this.$message.success(res.data.message)
                                this.reload()
                            } else {
                                return false
                            }
                        })
                        .catch(error => console.log(error))
                })
                .catch((error) => { console.log(error) })
        }
    },
    mounted() {
        commentApi.listAllComment()
            .then(res => {
                if (res.status === 200) {
                    const data = res.data.map((item) => {
                        item.dateTime = moment(item.dateTime).format('YYYY-MM-DD hh:mm:ss')
                        return item
                    })
                    this.commentList = data
                } else {
                    return false
                }
            })
    }
}