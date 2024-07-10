// router/index.js

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/inputAdd',
    name: 'About',
    component: "@/components/inputAdd.vue"
  },
  {
    path: '/helloworld',
    name: 'About',
    component: "@/components/HelloWorld.vue"
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
