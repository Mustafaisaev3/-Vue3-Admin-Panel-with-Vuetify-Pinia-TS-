import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FullLayout from '@/layouts/full/FullLayout.vue'
import MainRoutes from './MainRoutes'
import AuthRoutes from './AuthRoutes'
import { useAuthStore } from '@/store/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    AuthRoutes,
    MainRoutes
  ]
})

router.beforeEach(async (to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/auth/login'];
  const authRequired = !publicPages.includes(to.path);
  const auth: any = useAuthStore();
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    console.log(authRequired, auth.user)
    if (authRequired && !auth.user) {
        // auth.returnUrl = to.fullPath;
        return next('/auth/login');
    } else next();
  } else {
      next();
  }
});

export default router


