import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import './src/assets/styles/variables.scss';`,
      },
    },
  },
  plugins: [vue()],
})
