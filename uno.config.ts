import { defineConfig, presetUno } from 'unocss';

export default defineConfig({
  exclude: ['node_modules', 'public', 'index.html', '.vscode'],
  presets: [presetUno({ dark: 'class' })]
});
