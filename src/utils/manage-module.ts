import { DefineComponent } from "vue";
import { Router } from "vue-router";

type Route = {
  name: string;
  path: string;
  component: DefineComponent;
};

interface IModule {
  router: {
    routes: Route[];
  };
}

export function ManageModule(module: IModule, router: Router): void {
  module.router.routes.forEach((route) => {
    router.addRoute(route);
  });
}
