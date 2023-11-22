import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import LoginView from '../views/LoginView.vue'
import NotFound from '../views/NotFound.vue'
import LessonsView from '../views/LessonsView.vue'
import TeachersView from '../views/TeachersView.vue'
import СurriculumView from '../views/СurriculumView.vue'

const routes = [
    {
        path: '/',
        name: 'main',
        component: MainView,
    },
    {
        path: '/teachers',
        name: 'teachers',
        component: TeachersView,
        // не работает с lazy loading !!!
        // component: () => import('../views/TeachersView.vue'),
        children: [
            {
                path: ':id(\\d*)+',
                name: 'selected-teachers',
                component: TeachersView,
                beforeEnter: (to) => {
                    const urlParams = to.params.id
                    console.log(urlParams)
                },
            },
        ],
        meta: {
            requiresAuth: true,
        },
        beforeEnter: (to) => {
            const urlParams = to.params.id
            const isAuthorized = localStorage.getItem('isAuth')
            console.log(urlParams)
            if (!urlParams && !isAuthorized) return { name: 'main' }
            if (!urlParams && isAuthorized) return { name: 'lessons' }
        },
    },
    {
        path: '/:id(\\d*-\\d*)+',
        name: 'selected-teachers-lessons',
        component: СurriculumView,
        meta: { requiresAuth: false },
    },
    {
        path: '/lessons',
        name: 'lessons',
        component: LessonsView,
        //не работает с lazy loading !!!
        // component: () => import('../views/LessonsView.vue'),
        meta: { requiresAuth: true },
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView,
        meta: { requiresAuth: false },
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
        meta: { requiresAuth: false },
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

router.beforeEach((to) => {
    const isAuthenticated = localStorage.getItem('isAuth')
    console.log(to)
    if (to.meta.requiresAuth && !isAuthenticated) {
        return {
            name: 'login',
            query: { redirect: to.fullPath },
        }
    }
})

export default router
