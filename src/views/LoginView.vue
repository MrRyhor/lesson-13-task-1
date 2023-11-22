<template>
    <form class="login-container" @submit="onLogIn">
        <label
            >Login:
            <input v-model="getLogin" type="text" name="login" />
        </label>
        <label
            >Password:
            <input type="password" name="password" />
        </label>
        <button type="submit">Log in</button>
    </form>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'LoginView',

    computed: {
        ...mapGetters('user', ['login', 'password']),
        getLogin: {
            get() {
                return this.login
            },
            set(val) {
                return this.setUserLogin(val)
            },
        },
        getPassword: {
            get() {
                return this.password
            },
            set(val) {
                return this.setPassword(val)
            },
        },
    },

    methods: {
        ...mapActions('user', ['setIsAuth', 'setUserLogin', 'setPassword']),
        onLogIn() {
            localStorage.setItem('isAuth', 'true')
            this.setIsAuth(true)
            if (this.$route.query.redirect)
                this.$router.push({
                    path: this.$route.query.redirect,
                })
            else this.$router.push({
                name: 'main',
            })
        },
    },
}
</script>
<style lang="scss" scoped>
.login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    
}
</style>
