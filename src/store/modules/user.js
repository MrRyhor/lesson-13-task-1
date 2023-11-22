export default {
    namespaced: true,
    state: {
        userlogin: null,
        password: null,
        isAuth: false,
    },
    getters: {
        login: ({ userlogin }) => userlogin,
        password: ({ password }) => password,
        isAuth: ({ isAuth }) => isAuth,
    },
    mutations: {
        setUserLogin(state, val) {
            state.userlogin = val
        },
        setPassword(state, val) {
            state.password = val
        },
        setIsAuth(state, val) {
            state.isAuth = val
        },
    },
    actions: {
        setUserLogin({ commit }, val) {
            commit('setUserLogin', val)
        },
        setPassword({ commit }, val) {
            commit('setPassword', val)
        },
        setIsAuth({ commit }, val) {
            commit('setIsAuth', val)
        },
    },
    modules: {},
}