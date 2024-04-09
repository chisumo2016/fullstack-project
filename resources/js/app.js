import './bootstrap';
import '../css/app.css';

/**Load The Vue Files**/

import { createApp } from 'vue'
import Mainapp from "./components/Mainapp.vue";
import router from "./Router/router.js";

const app = createApp()

app.component('mainapp', Mainapp);
app.use(router)
app.mount('#app')
