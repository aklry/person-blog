export default {
    data() {
        return {
            tableData: [],
            search: "",
            isShow: false,
            isVisible: false,
            formLabelWidth: '120px',
            isRouterAlive: true,
            id: 0,
            pageInfo: {},
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