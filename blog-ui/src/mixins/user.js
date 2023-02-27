export default {
    data() {
        return {
            search: '',
            isShow: false
        }
    },
    methods: {
        handleSearch() {
            console.log(this.search)
        },
        changeName() {
            this.isShow = true
        }
    }
}