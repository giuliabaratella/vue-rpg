import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./assets/pages/AppHome.vue";
import AppCharacters from "./assets/pages/AppCharacters.vue";
import CharacterDetail from "./assets/pages/CharacterDetail.vue";
import AppTypes from "./assets/pages/AppTypes.vue";
import TypeDetail from "./assets/pages/TypeDetail.vue";
import AppItems from "./assets/pages/AppItems.vue";
import ItemDetail from "./assets/pages/ItemDetail.vue";
import NotFound from "./assets/pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/characters",
      name: "characters",
      component: AppCharacters,
    },
    {
      path: "/characters/:slug",
      name: "single-characters",
      component: CharacterDetail,
    },
    {
      path: "/types",
      name: "types",
      component: AppTypes,
    },
    {
      path: "/types/:slug",
      name: "single-types",
      component: TypeDetail,
    },
    {
      path: "/items",
      name: "items",
      component: AppItems,
    },
    {
      path: "/items/:slug",
      name: "single-items",
      component: ItemDetail,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export default router;
