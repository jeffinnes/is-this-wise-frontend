import { createRouter, createWebHistory } from 'vue-router';

// Import pages
import Home from '../pages/Home.vue';
import QuickAdvice from '../pages/QuickAdvice.vue';
import RateAdvice from '../pages/RateAdvice.vue';
import Auth from '../pages/Auth.vue';
import Profile from '../pages/Profile.vue';

// Import store for page guard
import store from '../store/index';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/quick-advice',
    name: 'Quick Advice',
    component: QuickAdvice,
  },
  {
    path: '/rate-advice',
    name: 'Rate Advice',
    component: RateAdvice,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'Auth Page',
    component: Auth,
  },
  {
    path: '/profile',
    name: 'User Home',
    component: Profile,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Auth guard
router.beforeEach((to, _, next) => {
  if (!store.getters.isAuthenticated) {
    store.dispatch('authCheck').then(() => {
      if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
        next('/login');
      } else {
        next();
      }
    });
  } else {
    next();
  }
});

export default router;
