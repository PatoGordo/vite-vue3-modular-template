import { Router } from "vue-router";
import router from "./router";

interface IModule {
  router(router: Router): void;
}

const registerModule = (name: string, module: IModule): void => {
  if (module.router) {
    module.router(router);
  }
};

// ToDo
// Remove type any

export const registerModules = (modules: any): void => {
  Object.entries(modules).forEach(([key, module]) => {
    registerModule(key, module as IModule);
  });
};
