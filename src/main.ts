import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Login from './pages/Login.vue';
import Contact from './pages/Contact.vue';
import { createVuetify } from 'vuetify'; // Import createVuetify from 'vuetify' instead of 'vuetify/lib'


// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/login', component: Login },
    { path: '/contact', component: Contact },
  ],
});

// Create the Vuetify instance
const vuetify = createVuetify(); // Create Vuetify instance

// Create the Vue app instance
const app = createApp(App);

// Use the router
app.use(router);

// Use Vuetify plugin
app.use(vuetify);

// Mount the app
app.mount('#app');