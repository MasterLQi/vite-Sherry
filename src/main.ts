import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import './styles/index.css';
import 'uno.css';
import { setupRouter } from './router';
import { setupPania } from './store';

(async () => {
  const app = createApp(App);

  await setupRouter(app);

  setupPania(app);

  app.use(ElementPlus);

  app.mount('#app');
})();
