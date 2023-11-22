<template>
    <div class="app-container">
        <nav>
            <router-link to="/">Main</router-link> | <router-link to="/lessons">Lessons</router-link> |
            <router-link :to="{name: 'teachers'}">Teachers</router-link>            
        </nav>
        <div v-if="!isAuth" class="log-in">
            <router-link to="/login">Log in</router-link>
        </div>
        <div v-else>
            <span>{{ login }}</span> / <button type="button" @click="onLogOut">Log out</button>
        </div>
    </div>

    <router-view />
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'App',

    computed: {
        ...mapGetters('user', ['login', 'isAuth']),
    },

    created() {
        const checkIsAuth = localStorage.getItem('isAuth')
        checkIsAuth ? this.setIsAuth(true) : this.setIsAuth(false)
    },

    methods: {
        ...mapActions('user', ['setIsAuth', 'setUserLogin', 'setPassword']),
        onLogOut() {
            localStorage.removeItem('isAuth')
            this.setIsAuth(false)
            this.setUserLogin(null)
            this.setPassword(null)
            this.$router.push({
                name: 'login',
            })
        },
    },
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    max-width: 1000px;
    margin: 0 auto;
    button {
        cursor: pointer;
    }
    button:hover {
        background-color: rgb(78, 77, 77);
        color: #fff;
    }
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
.app-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
