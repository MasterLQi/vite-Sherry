import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import unocss from 'unocss/vite';
import { getSrcPath } from './build';

// https://vitejs.dev/config/
export default defineConfig((configEnv) => {
  const env = loadEnv(configEnv.mode, process.cwd());

  const srcPath = getSrcPath();

  return {
    resolve: {
      alias: {
        '@': srcPath
      }
    },
    plugins: [vue(), unocss()],
    server: {
      host: '0.0.0.0'
    }
  };
});
