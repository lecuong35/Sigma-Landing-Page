import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import ContactPage from '../components/ContactPage.vue';
import NewsPage from '../components/NewsPage.vue';
import PartnerPage from '../components/PartnerPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage,
  },
  {
    path: '/news',
    name: 'news',
    component: NewsPage,
  },
  {
    path: '/partner',
    name: 'partner',
    component: PartnerPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
