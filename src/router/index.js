import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import QuickAdvice from '../views/QuickAdvice.vue';

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
