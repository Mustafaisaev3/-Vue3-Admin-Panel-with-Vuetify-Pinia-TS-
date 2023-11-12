import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FullLayout from '@/layouts/full/FullLayout.vue'
import MainRoutes from './MainRoutes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    MainRoutes
  ]
})

export default router
