import { App } from 'vue';
import { createPinia } from 'pinia';

export function setupPania(app: App<Element>) {
  const pinia = createPinia();
  app.use(pinia);
}

export * from './modules';
