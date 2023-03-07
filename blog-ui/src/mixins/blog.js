import { mapMutations } from "vuex"
export default {
    data() {
        return {
            blog: {}
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