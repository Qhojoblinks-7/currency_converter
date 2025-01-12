import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['lodash'], // Externalize lodash
    },
  },
  server: {
    proxy: {
      // Proxy for the exchange rate API
      '/api': {
        target: 'https://v6.exchangerate-api.com', // External API base URL
        changeOrigin: true, // Changes the origin of the request to the target URL
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove '/api' prefix
        secure: false, // Disable SSL verification (if needed)
      },
      // Proxy for the flag API
      '/flag-api': {
        target: 'https://currency-rate-exchange-api.onrender.com', // External API base URL
        changeOrigin: true, // Changes the origin of the request to the target URL
        rewrite: (path) => path.replace(/^\/flag-api/, ''), // Remove '/flag-api' prefix
        secure: false, // Disable SSL verification (if needed)
      },
    },
  },
});
