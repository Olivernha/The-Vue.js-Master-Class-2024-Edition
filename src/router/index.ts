import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL || '/'), // Fallback to '/' if BASE_URL is undefined
  routes, // Ensure routes are correctly imported and used
})

export default router
