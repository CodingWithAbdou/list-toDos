import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "home",
    path: "/",
    component: () => import("../views/HomeView.vue"),
    meta: {
      title: "Home Page",
    },
  },
  {
    name: "showTodo",
    path: "/show-todo",
    component: () => import("../views/ToDos.vue"),
    meta: {
      title: "Show To Dos",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
