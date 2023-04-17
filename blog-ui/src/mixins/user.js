export default {
    data() {
        return {
            search: ''
        }
    },
    methods: {
        handleSearch() {
            const content = this.search
            this.$router.push({name: 'Content', params: { content }})
        }
    }
}