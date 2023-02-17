export default {
    data() {
        return {
            tableData: [],
            search: "",
            isShow: false,
            formLabelWidth: '120px',
            isRouterAlive: true,
            id: 0
        }
    },
    methods: {
        isShowHandle() {
            this.isShow = true
        },
        changeIsShow(val) {
            this.isShow = val
        }
    }
}