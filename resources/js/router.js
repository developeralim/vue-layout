import { createRouter, createWebHistory } from "vue-router";

import TheHome from './pages/TheHome.vue';
import TheTest from './pages/TheTest.vue';

const routes = [
    {
        path : '/',
        name : 'home',
        component : TheHome,
        meta : {
            title : "Home Page"
        }
    },
];

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router;