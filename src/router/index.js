
import { createApp } from 'vue'
import Login from "../views/Login.vue";

import VueRouter from 'vue-router'


const routes=[
    //这里和vue2一样
    {
        path:"/",
        name:"Login",
        component: Login,
    }
]
const login = createApp(Login)
login.use(VueRouter)
const router = new VueRouter({

    routes
})

export default router

//

// const routes =[
//     {
//         path:"/",
//         name:"Login",
//         component: Login,
//     }
// ]
// const router = new VueRouter({
//     routes,
// });
//
// export default router