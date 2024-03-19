import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';
import { createVuetify } from 'vuetify'; // Modify the import path

import 'vuetify/dist/vuetify.min.css';

// Import your SCSS files
import '../src/assets/scss/main/_variables.scss';
import '../src/assets/scss/main/_normalize.scss';
import '../src/assets/scss/main/_global.scss';
import '../src/assets/scss/pages/index-html.scss'; 

// CSS
import './assets/css/normalize.css';
import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome-5.10.2.min.css';
import './assets/css/plugin/owl.carousel.min.css';
import './assets/css/plugin/nice-select.css';
import './assets/css/plugin/animate.css';
import './assets/css/style.css';
import './assets/css/responsive.css';


// Import jQuery and other scripts
import './assets/js/jquery.min.js';
import './assets/js/plugin/jquery.rcounter.js';
import './assets/js/plugin/owl.carousel.min.js';
import './assets/js/plugin/jquery.nice-select.min.js';
import './assets/js/main.js';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
  ],
});

const vuetify = createVuetify();
const app = createApp(App);
app.use(router);
app.use(vuetify);
app.mount('#app');
