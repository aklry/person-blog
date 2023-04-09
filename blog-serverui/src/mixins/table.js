export default {
    data() {
        return {
            adminList: [],
            search: "",
            isShow: false,
            isVisible: false,
            formLabelWidth: '120px',
            id: 0,
            pageInfo: {},
            pageNum: 1,
            size: 5
        }
    },
    methods: {
        isShowHandle() {
            this.isShow = true
        },
        changeIsShow(val) {
            this.isShow = val
        },
        changeIsVisible(val) {
            this.isVisible = val
        }
    }
}