import { createRouter,createWebHistory} from "vue-router";
import Home from "../components/HelloWorld.vue";
import Login from "../views/Login.vue";
const routes = [
    {
        path: '/home',
        //name: 'HelloWorld',
        component: Home
    },
    // {
    //     path: "/home",
    //     name: "home",
    //     component: home
    // },
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