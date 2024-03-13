import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Login from './pages/Login.vue';
import Contact from './pages/Contact.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/login', component: Login },
    { path: '/contact', component: Contact },
  ],
});

export default router;