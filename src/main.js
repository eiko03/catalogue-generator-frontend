import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'
import Axios from 'axios'
import "./assets/tailwind.css"

createApp(App).use(store).use(router).use(VueAxios,Axios).mount('#app')
