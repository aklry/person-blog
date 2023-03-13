import { mapMutations } from "vuex"
export default {
    data() {
        return {
            formData: {
                content: ''
            }
        }
    },
    methods: {
        ...mapMutations(['handleLogout']),
        logout() {
            this.handleLogout()
            this.$router.push({name: 'Login'})
        }
    }
}