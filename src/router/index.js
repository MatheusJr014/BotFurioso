import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/views/Home.vue')
        },
        {
            path: '/teste',
            name: 'testeFront',
            component: ()=> import('@/views/HomePage.vue')

        },
        {
            path: '/teste2',
            name: 'teste2',
            component: ()=> import('../components/obsolet/BotFuria.vue')
        }
    ]
})

export default router
