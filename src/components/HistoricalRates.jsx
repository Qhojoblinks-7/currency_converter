import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {fetchExchangeRates, fetchCurrencyInfo } from '../services/historyService';
import 'chart.js/auto';
import '../styles/HistoricalRates.css';

// Mapping of currency codes to country names
const defaultCurrencyCountryMap = {
  USD: 'United States',
  EUR: 'European Union',
  GBP: 'United Kingdom',
  JPY: 'Japan',
  CAD: 'Canada',
  // Add more as needed
};

const HistoricalRates = () => {
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [currentExchangeRate, setCurrentExchangeRate] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);
  const [baseCurrencyInfo, setBaseCurrencyInfo] = useState(null);
  const [targetCurrencyInfo, setTargetCurrencyInfo] = useState(null);
  const [startDate, setStartDate] = useState('2023-01-01');
  const [endDate, setEndDate] = useState('2023-12-31');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCurrencyInfoData(baseCurrency, setBaseCurrencyInfo);
    fetchCurrencyInfoData(targetCurrency, setTargetCurrencyInfo);
    fetchCurrentExchangeRate();
    if (baseCurrency && targetCurrency) {
      fetchHistoricalData();
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
    try {
      const exchangeRates = await fetchExchangeRates(baseCurrency);
      setCurrentExchangeRate(exchangeRates[targetCurrency]);
      setLastUpdated(new Date().toLocaleString()); // Assuming the latest data is fetched
    } catch (error) {
      setError('Failed to fetch current exchange rate: ' + error.message);
      console.error('Error fetching current exchange rate:', error);
    }
  };

  const fetchHistoricalData = async () => {
    try {
      const data = await fetchHistoricalRates(baseCurrency, targetCurrency, startDate, endDate);
      console.log('Fetched Historical Data:', data);

      if (data && Object.keys(data).length > 0) {
        const dates = Object.keys(data).sort((a, b) => new Date(a) - new Date(b));
        const rates = dates.map(date => data[date]);
        const targetColors = targetCurrencyInfo?.flag ? [targetCurrencyInfo.flag] : ['#000'];
        const baseColors = baseCurrencyInfo?.flag ? [baseCurrencyInfo.flag] : ['#000'];

        if (rates.length > 0) {
          setHistoricalData({
            labels: dates,
            datasets: [
              {
                label: `${baseCurrency} to ${targetCurrency} Exchange Rate`,
                data: rates,
                borderColor: targetColors[0],
                backgroundColor: baseColors[0],
                fill: true,
              },
            ],
          });
          setError(null);
        } else {
          throw new Error('No rates found for the selected currencies and dates');
        }
      } else {
        throw new Error('Invalid data format');
      }
    } catch (error) {
      setError('Failed to fetch historical data: ' + error.message);
      console.error('Error fetching historical data:', error);
    }
  };

  const handleBaseCurrencyChange = (event) => {
    setBaseCurrency(event.target.value);
  };

  const handleTargetCurrencyChange = (event) => {
    setTargetCurrency(event.target.value);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Historical Exchange Rates
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label
            htmlFor="start-date"
            className="block text-sm font-medium text-gray-700"
          >
            Start Date:
          </label>
          <input
            type="date"
            id="start-date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="end-date"
            className="block text-sm font-medium text-gray-700"
          >
            End Date:
          </label>
          <input
            type="date"
            id="end-date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="base-currency"
            className="block text-sm font-medium text-gray-700"
          >
            Base Currency:
          </label>
          <select
            id="base-currency"
            value={baseCurrency}
            onChange={handleBaseCurrencyChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {Object.keys(defaultCurrencyCountryMap).map((currency) => (
              <option key={currency} value={currency}>
                {defaultCurrencyCountryMap[currency]} ({currency})
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="target-currency"
            className="block text-sm font-medium text-gray-700"
          >
            Target Currency:
          </label>
          <select
            id="target-currency"
            value={targetCurrency}
            onChange={handleTargetCurrencyChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {Object.keys(defaultCurrencyCountryMap).map((currency) => (
              <option key={currency} value={currency}>
                {defaultCurrencyCountryMap[currency]} ({currency})
              </option>
            ))}
          </select>
        </div>
      </div>
      {currentExchangeRate && (
        <div className="bg-white border border-gray-300 p-4 rounded-md mb-6">
          <h2 className="text-lg font-semibold text-blue-600 mb-2">
            Current Exchange Rate
          </h2>
          <p className="text-gray-700">
            1 {baseCurrency} = {currentExchangeRate} {targetCurrency}
          </p>
          <p className="text-sm text-gray-500">Last Updated: {lastUpdated}</p>
        </div>
      )}
      {error ? (
        <p className="text-center text-red-500 font-medium">{error}</p>
      ) : (
        historicalData && (
          <div className="bg-white border border-gray-300 rounded-md p-4">
            <Line data={historicalData} options={{ responsive: true }} />
          </div>
        )
      )}
    </div>
  );
  
};

export default HistoricalRates;
