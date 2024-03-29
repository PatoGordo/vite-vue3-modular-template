import { Router, RouteRecordRaw } from "vue-router";
const Index = () => import("./views/Index.vue");
const Page404 = () => import("./views/404.vue");
const Module = () => import("./Module.vue");

const moduleRouter: RouteRecordRaw = {
  path: "/",
  component: Module,
  children: [
    {
      path: "/",
      component: Index,
    },
    {
      path: "/:pathMatch(.*)*",
      component: Page404,
    },
  ],
};

export default (router: Router): void => {
  router.addRoute(moduleRouter);
};
