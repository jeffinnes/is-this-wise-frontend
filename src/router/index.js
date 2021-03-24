import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/Home.vue';
import QuickAdvice from '../pages/QuickAdvice.vue';
import RateAdvice from '../pages/RateAdvice.vue';
import Auth from '../pages/Auth.vue';

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
  },
  {
    path: '/login',
    name: 'Auth Page',
    component: Auth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
