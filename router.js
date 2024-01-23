import { createRouter, createWebHistory } from 'vue-router'
import AppHome from './src/assets/pages/AppHome.vue';
import AppCharacters from './src/assets/pages/AppCharacters.vue';
import AppTypes from './src/assets/pages/AppTypes.vue';
import AppItems from './src/assets/pages/AppItems.vue';
import NotFound from './src/assets/pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome
    },
    {
      path: "/characters",
      name: "characters",
      component: AppCharacters
    },
    {
      path: "/types",
      name: "types",
      component: AppTypes
    },
    {
      path: "/items",
      name: "items",
      component: AppItems
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound
    },
  ]
})

export default router
