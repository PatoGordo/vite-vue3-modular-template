import { createApp } from "vue";
import router from "./router";

import App from "./App.vue";
import "./shared/styles/global.scss";

import { registerModules } from "./register-modules";

import homeModule from "./modules/Home";
import aboutModule from "./modules/About";

registerModules({
  about: aboutModule,
  home: homeModule,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
