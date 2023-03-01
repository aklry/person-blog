import { mapMutations } from "vuex"
export default {
    ...mapMutations(['handleLogout']),
    methods: {
        logout() {
            this.handleLogout()
            this.$router.push({name: 'Login'})
        }
    }
}