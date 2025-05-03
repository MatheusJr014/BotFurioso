import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/views/HomeBot.vue')
        },
        // {
        //     path: '/teste',
        //     name: 'testeFront',
        //     component: ()=> import('@/views/HomeBot.vue')

        // },
        {
            path: '/teste2',
            name: 'teste2',
            component: ()=> import('../views/Time.vue')
        }
    ]
})

export default router
