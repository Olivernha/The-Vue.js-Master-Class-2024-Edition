
import { h } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path:'/projects',
      name: 'Projects',
      component: () => import('@/views/ProjectsView.vue')
    },
    {
      // nowhre/nowhere
      path:'/:catchAll(.*)*',
      name: 'NotFound',
      component: h('p',{style : {color:'red'}},'404 Not Found')
    }
  ],
})

export default router
