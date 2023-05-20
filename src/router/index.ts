import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'lyrics',
      component: () => import('@/views/lyrics/index.vue'),
    },
  ],
})

export default router
