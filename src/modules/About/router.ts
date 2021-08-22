import { Router, RouteRecordRaw } from "vue-router";
const Index = () => import("./views/Index.vue");
const Module = () => import("./Module.vue");

const moduleRouter: RouteRecordRaw = {
  path: "/about",
  component: Module,
  children: [
    {
      path: "/about",
      component: Index,
    },
  ],
};

export default (router: Router): void => {
  router.addRoute(moduleRouter);
};
