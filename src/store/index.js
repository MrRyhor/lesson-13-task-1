import { createStore } from 'vuex'
import teachers from './modules/teachers'
import lessons from './modules/lessons'
import user from './modules/user'

export default createStore({
    modules: {
        user,
        teachers,
        lessons,
    },
})
