import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useRates } from '../context/HistoricalRatesContext';
import { fetchExchangeRates } from '../services/historyService';
import '../styles/HistoricalRates.css';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,  // Import the Filler plugin
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler // Register the Filler plugin
);

const HistoricalRates = () => {
  const { state, dispatch } = useRates();
  const { exchangeData, baseCurrency, comparisonCurrency, loading, error } = state;
  const [timePeriod, setTimePeriod] = useState('1m');

  const updateBaseCurrency = (currency) => {
    dispatch({ type: 'SET_BASE_CURRENCY', payload: currency });
  };

  const updateComparisonCurrency = (currency) => {
    dispatch({ type: 'SET_COMPARISON_CURRENCY', payload: currency });
  };

  const filterDataForTimePeriod = (data, period) => {
    const currentDate = new Date();
    let filteredData = data;

    if (period === '1d') {
      filteredData = filteredData.filter(item => new Date(item.timestamp) >= new Date(currentDate.setDate(currentDate.getDate() - 1)));
    } else if (period === '1w') {
      filteredData = filteredData.filter(item => new Date(item.timestamp) >= new Date(currentDate.setDate(currentDate.getDate() - 7)));
    } else if (period === '1m') {
      filteredData = filteredData.filter(item => new Date(item.timestamp) >= new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
    } else if (period === '1y') {
      filteredData = filteredData.filter(item => new Date(item.timestamp) >= new Date(currentDate.setFullYear(currentDate.getFullYear() - 1)));
    }

    return filteredData;
  };

  const chartData = () => {
    const filteredData = filterDataForTimePeriod(exchangeData, timePeriod);

    return {
      labels: filteredData.map(item => item.timestamp),
      datasets: [
        {
          label: `Exchange Rate (${baseCurrency})`,
          data: filteredData.map(item => item.baseCurrencyRate),
          borderColor: '#3498db',
          backgroundColor: 'rgba(52, 152, 219, 0.2)',
          fill: true,  // Fill is enabled
        },
        {
          label: `Exchange Rate (${comparisonCurrency})`,
          data: filteredData.map(item => item.comparisonCurrencyRate),
          borderColor: '#e74c3c',
          backgroundColor: 'rgba(231, 76, 60, 0.2)',
          fill: true,  // Fill is enabled
        },
      ],
    };
  };

  return (
    <div className="container">
      <h1 className="text-center text-3xl font-bold mb-6">Exchange Rate Tracker</h1>

      {state ? (
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="base-currency">Base Currency</label>
            <select
              id="base-currency"
              value={baseCurrency}
              onChange={(e) => updateBaseCurrency(e.target.value)}
              className="form-select"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="JPY">JPY</option>
              <option value="CAD">CAD</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="comparison-currency">Comparison Currency</label>
            <select
              id="comparison-currency"
              value={comparisonCurrency}
              onChange={(e) => updateComparisonCurrency(e.target.value)}
              className="form-select"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="JPY">JPY</option>
              <option value="CAD">CAD</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="time-period">Select Time Period</label>
            <select
              id="time-period"
              value={timePeriod}
              onChange={(e) => setTimePeriod(e.target.value)}
              className="form-select"
            >
              <option value="1d">1 Day</option>
              <option value="1w">1 Week</option>
              <option value="1m">1 Month</option>
              <option value="1y">1 Year</option>
            </select>
          </div>

          {loading && <p>Loading exchange rates...</p>}
          {error && <p className="error">{error}</p>}

          {exchangeData.length > 0 && (
            <Line
              data={chartData()}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                },
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: 'Timestamp',
                    },
                  },
                  y: {
                    title: {
                      display: true,
                      text: 'Exchange Rate',
                    },
                  },
                },
              }}
            />
          )}
        </div>
      ) : (
        <p>Loading context...</p>
      )}
    </div>
  );
};

export default HistoricalRates;
