import Index from "./views/Index.vue";

export default {
  routes: [
    {
      path: "/:pathMatch(.*)*",
      name: "Page 404",
      component: Index,
    },
  ],
};
