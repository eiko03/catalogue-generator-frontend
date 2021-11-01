import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'
import Axios from 'axios'
import "./assets/tailwind.css"
import JsPDF from "jspdf";
import HTML2canvas from "html2canvas"


// import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
// import 'jquery/src/jquery.js'
// import 'bootstrap/dist/js/bootstrap.min.js'

createApp(App).use(store).use(router).use(VueAxios,Axios).use(JsPDF).use(HTML2canvas).mount('#app')
