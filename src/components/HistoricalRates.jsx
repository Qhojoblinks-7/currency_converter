import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { fetchExchangeRates, fetchCurrencyInfo } from '../services/historyService';
import { useHistoricalRates } from '../context/HistoricalRatesContext';
import 'chart.js/auto';
import '../styles/HistoricalRates.css';

const defaultCurrencyCountryMap = {
  USD: 'United States',
  EUR: 'European Union',
  GBP: 'United Kingdom',
  JPY: 'Japan',
  CAD: 'Canada',
};

const HistoricalRates = () => {
  const { state, dispatch } = useHistoricalRates();
  const { historicalRates } = state;
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [startDate, setStartDate] = useState('2023-01-01');
  const [endDate, setEndDate] = useState('2023-12-31');
  const [currentExchangeRate, setCurrentExchangeRate] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [baseCurrencyInfo, setBaseCurrencyInfo] = useState(null);
  const [targetCurrencyInfo, setTargetCurrencyInfo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCurrencyInfoData(baseCurrency, setBaseCurrencyInfo);
    fetchCurrencyInfoData(targetCurrency, setTargetCurrencyInfo);
    fetchCurrentExchangeRate();

    if (historicalRates.length === 0) {
      initializeHistoricalRates();
    }
  }, [baseCurrency, targetCurrency, startDate, endDate]);

  const fetchCurrencyInfoData = async (currencyCode, setCurrencyInfo) => {
    try {
      const data = await fetchCurrencyInfo(currencyCode);
      setCurrencyInfo(data);
    } catch (error) {
      setError('Failed to fetch currency info: ' + error.message);
      console.error('Error fetching currency info:', error);
    }
  };

  const fetchCurrentExchangeRate = async () => {
    setLoading(true);
    try {
      const exchangeRates = await fetchExchangeRates(baseCurrency);
      setCurrentExchangeRate(exchangeRates[targetCurrency]);
      setLastUpdated(new Date().toLocaleString());
    } catch (error) {
      setError('Failed to fetch current exchange rate: ' + error.message);
      console.error('Error fetching current exchange rate:', error);
    }
    setLoading(false);
  };

  const initializeHistoricalRates = async () => {
    const initialRates = [];
    for (const base of Object.keys(defaultCurrencyCountryMap)) {
      for (const target of Object.keys(defaultCurrencyCountryMap)) {
        if (base !== target) {
          try {
            const exchangeRates = await fetchExchangeRates(base);
            initialRates.push({
              baseCurrency: base,
              targetCurrency: target,
              rate: exchangeRates[target],
              timestamp: new Date().toISOString(),
            });
          } catch (error) {
            console.error('Error fetching initial exchange rates:', error);
          }
        }
      }
    }
    dispatch({ type: 'INITIALIZE_RATES', payload: initialRates });
  };

  const saveHistoricalRate = (rate) => {
    dispatch({ type: 'ADD_RATE', payload: rate });
  };

  useEffect(() => {
    if (currentExchangeRate) {
      const rate = { baseCurrency, targetCurrency, rate: currentExchangeRate, timestamp: new Date().toISOString() };
      saveHistoricalRate(rate);
    }
  }, [currentExchangeRate]);

  const handleBaseCurrencyChange = (event) => {
    setBaseCurrency(event.target.value);
  };

  const handleTargetCurrencyChange = (event) => {
    setTargetCurrency(event.target.value);
  };

  const handleStartDateChange = (e) => {
    if (new Date(e.target.value) <= new Date(endDate)) {
      setStartDate(e.target.value);
    }
  };

  const handleEndDateChange = (e) => {
    if (new Date(e.target.value) >= new Date(startDate)) {
      setEndDate(e.target.value);
    }
  };

  return (
    <div className="container">
    <h1 className="text-center text-white text-3xl font-bold mb-6">Historical Exchange Rates</h1>
  
    <div className="form-container bg-gradient-to-r from-blue-50 via-white to-blue-100 p-6 rounded-lg shadow-lg max-w-lg mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="form-group relative">
          <input
            type="date"
            id="start-date"
            value={startDate}
            onChange={handleStartDateChange}
            className="form-input peer w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label
            htmlFor="start-date"
            className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
          >
            Start Date
          </label>
        </div>
  
        <div className="form-group relative">
          <input
            type="date"
            id="end-date"
            value={endDate}
            onChange={handleEndDateChange}
            className="form-input peer w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label
            htmlFor="end-date"
            className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
          >
            End Date
          </label>
        </div>
      </div>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <div className="form-group">
          <label htmlFor="base-currency" className="block text-gray-700 font-medium mb-1">
            Base Currency
          </label>
          <select
            id="base-currency"
            value={baseCurrency}
            onChange={handleBaseCurrencyChange}
            className="form-select w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {Object.keys(defaultCurrencyCountryMap).map((currency) => (
              <option key={currency} value={currency}>
                {defaultCurrencyCountryMap[currency]} ({currency})
              </option>
            ))}
          </select>
        </div>
  
        <div className="form-group">
          <label htmlFor="target-currency" className="block text-gray-700 font-medium mb-1">
            Target Currency
          </label>
          <select
            id="target-currency"
            value={targetCurrency}
            onChange={handleTargetCurrencyChange}
            className="form-select w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {Object.keys(defaultCurrencyCountryMap).map((currency) => (
              <option key={currency} value={currency}>
                {defaultCurrencyCountryMap[currency]} ({currency})
              </option>
            ))}
          </select>
        </div>
      </div>
  
      <div className="mt-6 text-center">
        <button
          className="btn-primary w-full sm:w-auto px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-300 disabled:cursor-not-allowed"
          onClick={fetchCurrentExchangeRate}
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center justify-center space-x-2">
              <span className="spinner-border animate-spin inline-block w-4 h-4 border-2 border-white rounded-full"></span>
              <span>Fetching Rates...</span>
            </div>
          ) : (
            'Get Rates'
          )}
        </button>



      {currentExchangeRate && (
        <div className="bg-white p-4 rounded-lg shadow-lg mt-4">
          <h2>Current Exchange Rate</h2>
          <p>{`1 ${baseCurrency} = ${currentExchangeRate} ${targetCurrency}`}</p>
          <p className="text-gray-500">Last Updated: {lastUpdated}</p>
        </div>
      )}

      {error && <p className="text-red-500">{error}</p>}

      {historicalRates.length > 0 && !error && (
        <div className="chart-container mt-4">
          <Line
            data={{
              labels: historicalRates.map(rate => new Date(rate.timestamp).toLocaleDateString()),
              datasets: [{
                label: `${baseCurrency} to ${targetCurrency} Exchange Rate`,
                data: historicalRates.map(rate => rate.rate),
                borderColor: '#3498db',
                backgroundColor: '#ecf0f1',
                fill: true,
              }]
            }}
          />
        </div>
      )}
    </div>
    </div>
    </div>
  );
};

export default HistoricalRates;
