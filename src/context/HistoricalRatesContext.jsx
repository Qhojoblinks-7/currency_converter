import React, { createContext, useReducer, useContext, useEffect } from 'react';
import { fetchExchangeRates } from '../services/historyService';

const HistoryRatesContext = createContext();

const initialState = {
  baseCurrency: 'USD',
  comparisonCurrency: 'GHS',
  exchangeData: [],
  loading: false,
  error: null,
  timePeriod: '1m', // Default to 1 month
};

const ratesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: true, error: null };
    case 'SET_RATES':
      return {
        ...state,
        loading: false,
        exchangeData: [...state.exchangeData, action.payload],
      };
    case 'SET_ERROR':
      return { ...state, loading: false, error: action.payload };
    case 'SET_BASE_CURRENCY':
      return { ...state, baseCurrency: action.payload };
    case 'SET_COMPARISON_CURRENCY':
      return { ...state, comparisonCurrency: action.payload };
    case 'SET_TIME_PERIOD':
      return { ...state, timePeriod: action.payload };
    default:
      return state;
  }
};

export const RatesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ratesReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      if (state.loading) return; // Prevent duplicate fetches if already loading
      dispatch({ type: 'SET_LOADING' });

      try {
        const exchangeRates = await fetchExchangeRates(state.baseCurrency, state.comparisonCurrency, state.timePeriod);

        dispatch({
          type: 'SET_RATES',
          payload: {
            timestamp: new Date().toISOString(),
            baseCurrencyRate: exchangeRates.baseCurrencyRate,
            comparisonCurrencyRate: exchangeRates.comparisonCurrencyRate,
          },
        });
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: error.message });
      }
    };

    fetchData();
  }, [state.baseCurrency, state.comparisonCurrency, state.timePeriod]); // Re-fetch data when selection changes

  return (
    <HistoryRatesContext.Provider value={{ state, dispatch }}>
      {children}
    </HistoryRatesContext.Provider>
  );
};

export const useRates = () => useContext(HistoryRatesContext);
