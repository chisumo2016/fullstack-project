
import {createRouter ,createWebHistory} from 'vue-router'
import MyFirstVuePage from "../components/pages/MyFirstVuePage.vue";
import Basic from "../components/pages/basic.vue";
import Methods from "../components/pages/methods.vue";


const routes = [
    {
        path: "/my-new-vue-router",
        component: MyFirstVuePage,

    },

    {
        path: "/hooks",
        component: Basic,
    },
    {
        path: "/methods",
        component: Methods,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

// export default new Router({
//     routes: [
//         {
//             path: '/my-new-vue-router',
//             component: MyFirstVuePage },
//     ]
// })


