import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/question/",
    name: "QuestionPage",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/QuestionPage.vue"),
  },
  {
    path: "/collect-info/",
    name: "CollectInfoPage",

    component: () => import("../views/CollectInfoPage.vue"),
  },
  {
    path: "/finish/",
    name: "FinishPage",

    component: () => import("../views/FinishPage.vue"),
  },
  {
    path: "*",
    name: "Home",
    component: Home,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
