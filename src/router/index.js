import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Review from "../views/Review.vue";
import Admin from "../views/Admin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/review",
    name: "Review",
    component: Review,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
