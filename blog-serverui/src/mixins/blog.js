import blogApi from "@/api/blog"
import moment from 'moment'
const blog = {
    data() {
        return {
            blogInfo: [],
            search: '',
            pageInfo: '',
            pageNum: 1,
            size: 5,
            isShow: false,
            title: '编辑博客',
            blogData: {
                title: '',
                author: '',
                publishTime: '',
                content: '',
                type: '',
                category: ''
            },
            editorOptions: {
                placeholder: '请输入博客内容...',
                theme: 'snow',
                modules: this.toolbarOptions
            },
            toolbarOptions: [
                ["bold", "italic", "underline", "strike"], // 加粗 斜体 下划线 删除线 -----['bold', 'italic', 'underline', 'strike']
                ["blockquote", "code-block"], // 引用  代码块-----['blockquote', 'code-block']
                [{ list: "ordered" }, { list: "bullet" }], // 有序、无序列表-----[{ list: 'ordered' }, { list: 'bullet' }]
                [{ header: 1 }, { header: 2 }],
                [{ script: "sub" }, { script: "super" }], // 上标/下标-----[{ script: 'sub' }, { script: 'super' }]
                [{ indent: "-1" }, { indent: "+1" }],
                [{ size: [] }], // 配置字号
                [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题-----[{ header: [1, 2, 3, 4, 5, 6, false] }]
                [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色-----[{ color: [] }, { background: [] }]
                [{ font: [] }], //显示字体选择
                [{ align: [] }], // 对齐方式-----[{ align: [] }]
                ["clean"], // 清除文本格式-----['clean']
                ["link"], // 链接、图片、视频-----['link', 'image', 'video']
            ],
            rules: {
                title: [
                    { required: true, message: "请输入文章标题", trigger: "blur" },
                ],
                author: [
                    { required: true, message: "请输入作者", trigger: "blur" },
                ],
                publishTime: [
                    { required: true }
                ],
                content: [
                    { required: true, message: "必须填写博客内容", trigger: "blur" }
                ],
                type: [
                    { required: true }
                ],
                category: [
                    { required: true }
                ]
            },
            loading: false
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
            this.loading = true
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
                        this.loading = false
                    }
                })
                .catch(error => console.log(error))
        },
        handleEdit(index, row) {
            this.isShow = true
            Object.assign(this.blogData, row)
        },
        cancelHandle() {
            this.isShow = false
        },
        async confirmHandle(forName) {
            this.isShow = false
            await this.$refs[forName].validate()
            let result = await blogApi.updateBlogInfoById({
                id: this.blogData.id,
                publishTime: new Date(this.blogData.publishTime),
                title: this.blogData.title,
                author: this.blogData.author,
                content: this.blogData.content,
                category: this.blogData.category,
                type: this.blogData.type
            })

            if (result.status === 200) {
                this.$message.success(result.data.message)
                this.http()
            } else {
                this.$message.error(result.data.message)
            }
        }
    },
    mounted() {
        this.http()
    }
}
export default blog