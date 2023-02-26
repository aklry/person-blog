export default {
    data() {
        return {
            search: ''
        }
    },
    methods: {
        handleSearch() {
            console.log(this.search)
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath)
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath)
        }
    }
}