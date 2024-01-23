import { createRouter, createWebHistory } from 'vue-router'
import AppHome from './src/assets/pages/AppHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome
    },
   
  ]
})

export default router
