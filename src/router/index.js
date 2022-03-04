import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/Home/Login.vue"
import Register from "../components/Home/Register.vue"
import Dashboard from "../components/Dashboard/Dashboard.vue"
import DashboardLayout from "../layout/DashboardLayout.vue"
import DriverTrip from "../components/Dashboard/DriverTrip.vue"
import Report from "../components/Dashboard/Report.vue"

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
  {
    path: "/dashboard",
    component: DashboardLayout,
    children: [
      {
        path: "",
        name: "dashboard",
        component: Dashboard,
      },
      {
        path: "driver-trip",
        name: "driverTrip",
        component: DriverTrip,
      },
      {
        path: "report",
        name: "report",
        component: Report,
      },
    ]
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
