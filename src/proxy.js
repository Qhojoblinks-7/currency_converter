const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy for Exchange Rate API
app.use(
  '/api',
  createProxyMiddleware({
    target: 'https://v6.exchangerate-api.com',
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
    target: 'https://currency-rate-exchange-api.onrender.com',
    changeOrigin: true,
    pathRewrite: {
      '^/flag-api': '',
    },
  })
);

// Proxy for Open Exchange Rates API for Historical Data
app.use(
  '/historical',
  createProxyMiddleware({
    target: 'https://openexchangerates.org',
    changeOrigin: true,
    pathRewrite: {
      '^/historical': '/api/historical',
    },
  })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
