import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import MainView from '@/views/MainView.vue';
import MenuView from '@/views/MenuView.vue';
import FeedbackView from '@/views/FeedbackView.vue';
import AboutView from '@/views/AboutView.vue';
import ContactsView from '@/views/ContactsView.vue';

const routes: RouteRecordRaw[] = [
  {
    name: 'Main',
    path: '/',
    component: MainView,
  },
  {
    name: 'Menu',
    path: '/menu',
    component: MenuView,
  },
  {
    name: 'Feedback',
    path: '/feedback',
    component: FeedbackView,
  },
  {
    name: 'About',
    path: '/about',
    component: AboutView,
  },
  {
    name: 'Contacts',
    path: '/contacts',
    component: ContactsView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;