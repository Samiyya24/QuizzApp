import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    }, {
        path: '/about',
        name: 'about',
        component: () => import('../pages/About.vue')
    },
    {
        path: '/products',
        name: 'products',
        component: () => import('../pages/products.vue')
    },
    {
        path: '/products/:id',
        name: 'product_detailes',
        component: () => import('../pages/product_detailes.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'note-found',
        component: () => import('../pages/NotFound.vue')
    }
    ]
})

export default router