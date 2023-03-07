//import Vue from 'vue'
import VueRouter from "vue-router"
import Login from '../views/Login.vue'

//Vue.createApp(VueRouter)

const routes =[{
    path:"/",
    name:"Login",
    component:Login
}]
const router =new VueRouter.createRouter({
    routes
})
export default router;