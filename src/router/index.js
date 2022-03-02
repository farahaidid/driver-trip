import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/Home/Login.vue"
import Register from "../components/Home/Register.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
