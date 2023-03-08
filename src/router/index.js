import { createRouter,createWebHistory} from "vue-router";
import Home from "../components/HelloWorld.vue";
import Login from "../views/Login.vue";
const routes = [
    {
        path: '/',
        //name: 'HelloWorld',
        component: Home
    },
    {
        path: "/home",
        name: "home",
        component: () => import('../views/Home.vue')
    },
    {
        path: "/login",
        //name: "login",
        component: Login
        //component: () => import('../views/Login.vue')
    },

]

const  router = createRouter({
    history: createWebHistory(),
    routes: routes,

})
export default router