//import Vue from "vue";
//import router from "./router/index.js";
//import ElementUI from 'element-ui';
//import App from './App.vue';
import 'element-ui/lib/theme-chalk/index.css';


import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

const app = createApp(App)
app.use(router)
app.mount('#app')
//
// Vue.use(ElementUI);
// Vue.config.productionTip = false;
//
// new Vue({
//     router,
//     render: (h) => h(App),
// }).$mount("#app");
