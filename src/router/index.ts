import { App } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/layouts/Main.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export async function setupRouter(app: App<Element>) {
  app.use(router);
  await router.isReady();
}
