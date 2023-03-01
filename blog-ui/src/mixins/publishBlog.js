export default {
    data() {
        return {
            // 表单数据
            formData: {},
            formDesc: {
                title: {
                    type: 'input',
                    label: '标题'
                },
                author: {
                    type: 'input',
                    label: '作者',
                    required: true
                },
                content: {
                    type: 'textarea',
                    label: '内容',
                    required: true // 必填简写
                },
                dateTime: {
                    type: 'datetime',
                    label: '发表时间',
                    required: true
                },
                type: {
                    type: 'radio',
                    label: '类型',
                    required: true,
                    default: 1,
                    options: [
                        { text: '自制', value: 1 },
                        { text: '转载', value: 0 }
                    ]
                },
                category: {
                    type: 'select',
                    label: '分区',
                    required: true,
                    options: [
                        {
                            value: 'vue',
                            label: 'vue',
                        },
                        {
                            value: '数据库',
                            label: '数据库'
                        }
                    ]
                }
            },
            rules: {
                title: { required: true, type: 'string', message: '必须填写标题' },
                label: { required: true, message: '标签必须填写标题' }
            }
        }
    },
    methods: {
        handleSubmit(data) {
            // eslint-disable-next-line no-console
            console.log(data)
            return Promise.resolve()
        },
        handleSuccess() {
            this.$message.success('创建成功')
        }
    }
}