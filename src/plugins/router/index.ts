import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import MainView from '@/views/MainView.vue';

const routes: RouteRecordRaw[] = [
  {
    name: 'Main',
    path: '/',
    component: MainView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;