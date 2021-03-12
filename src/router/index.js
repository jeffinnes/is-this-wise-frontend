import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import QuickAdvice from '../views/QuickAdvice.vue';
import RateAdvice from '../views/RateAdvice.vue';
import Auth from '../views/Auth.vue';

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
