import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://v6.exchangerate-api.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/flag-api': {
        target: 'https://currency-rate-exchange-api.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/flag-api/, ''),
      },
    },
  },
});
