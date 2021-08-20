import { Router } from "vue-router";

type Route = {
  name: string;
  path: string;
  component: any;
}

interface IModule {
  router: {
    routes: Route[],
  },
}

export function ManageModule(module: IModule, router: Router) {
  module.router.routes.forEach(route => {
    router.addRoute(route)
  });
}