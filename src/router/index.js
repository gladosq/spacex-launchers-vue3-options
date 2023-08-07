import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes';

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  },
});
