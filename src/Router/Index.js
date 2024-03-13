import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/index.vue";
import About from "@/pages/about.vue";
import Login from '@/pages/login.vue';
import Contact from '@/pages/contact.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;