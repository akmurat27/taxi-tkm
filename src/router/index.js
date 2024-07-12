// router/index.js

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/btn',
    name: 'btn',
    component: () => import(/* webpackChunkName: "about" */ '@/components/btnComp.vue')
  },
  {
    path: '/helloworld',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '@/components/HelloWorld.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
