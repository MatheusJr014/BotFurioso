import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/views/HomeBot.vue')
        },
        {
            path: '/sobre',
            name: 'sobre',
            component: ()=> import('../views/Sobre.vue')
        }
    ]
})

export default router
