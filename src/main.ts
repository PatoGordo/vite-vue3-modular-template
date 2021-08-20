import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import { ManageModule } from "./utils/manage-module";

import App from "./App.vue";
import HomeModule from "./modules/Home";
import Page404Module from "./modules/404";
import "./shared/styles/global.scss";

const router = createRouter({
  history: createWebHistory(),
  routes: [],
});

ManageModule(HomeModule, router);
ManageModule(Page404Module, router);

const app = createApp(App);
app.use(router);
app.mount("#app");
