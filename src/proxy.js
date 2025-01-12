import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

// Set up a proxy to handle the API calls
const BASE_URL_FLAGS = 'https://currency-rate-exchange-api.onrender.com';
const BASE_URL_RATES = 'https://v6.exchangerate-api.com/v6';
const BASE_URL_HISTORICAL = 'https://api.freecurrencyapi.com/v1/historical';

// Proxy for Exchange Rate API
app.use(
  '/api',
  createProxyMiddleware({
    target: BASE_URL_RATES,
    changeOrigin: true,
    pathRewrite: {
      '^/api': '',
    },
  })
);

// Proxy for Flag API
app.use(
  '/flag-api',
  createProxyMiddleware({
    target: BASE_URL_FLAGS,
    changeOrigin: true,
    pathRewrite: {
      '^/flag-api': '',
    },
  })
);

// Proxy for Historical Rates API
app.use(
  '/historical',
  createProxyMiddleware({
    target: BASE_URL_HISTORICAL,
    changeOrigin: true,
    pathRewrite: {
      '^/historical': '',
    },
  })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
