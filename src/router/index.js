import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Index",
    meta: {
      title: "首页",
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import("@/pages/home/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
