import axios from 'axios';
import LRU from 'lru-cache';

// Base URLs for proxies
const BASE_URL_FLAGS = 'https://currency-rate-exchange-api.onrender.com'; // Update this to the correct endpoint
const API_KEY = import.meta.env.VITE_EXCHANGERATE_API_KEY;
const BASE_URL_RATES = 'https://v6.exchangerate-api.com/v6';
const BASE_URL_HISTORICAL = 'https://api.freecurrencyapi.com/v1/historical';

// Cache setup
const cache = new LRU({ max: 100, maxAge: 1000 * 60 * 5 }); // Cache 100 items for 5 minutes

const fetchWithCache = async (url, params) => {
  const cacheKey = `${url}_${JSON.stringify(params)}`;
  const cachedData = cache.get(cacheKey);
  if (cachedData) {
    return cachedData;
  }
  const response = await axios.get(url, { params });
  cache.set(cacheKey, response.data);
  return response.data;
};

export const fetchCurrencyInfo = async (currencyCode) => {
  try {
    const url = `${BASE_URL_FLAGS}/${currencyCode}`;
    const data = await fetchWithCache(url);
    console.log('Currency Info:', data);
    return data;
  } catch (error) {
    console.error('Error fetching currency info:', error);
    throw new Error('Failed to fetch currency info');
  }
};

export const fetchExchangeRates = async (baseCurrency) => {
  try {
    const url = `${BASE_URL_RATES}/${API_KEY}/latest/${baseCurrency}`;
    const data = await fetchWithCache(url);
    console.log('Exchange Rates:', data.conversion_rates);
    return data.conversion_rates;
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    throw new Error('Network error or invalid API response');
  }
};

export const fetchHistoricalRates = async (baseCurrency, targetCurrency, startDate, endDate) => {
  try {
    const url = `${BASE_URL_HISTORICAL}`;
    const params = { apikey: API_KEY, date: startDate, base_currency: baseCurrency, currencies: targetCurrency };
    const data = await fetchWithCache(url, params);
    console.log('Historical Rates:', data);
    return data;
  } catch (error) {
    console.error('Error fetching historical exchange rates:', error);
    throw new Error('Network error or invalid API response');
  }
};
