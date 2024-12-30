import React, { createContext, useReducer, useContext } from 'react';

const HistoricalRatesContext = createContext();

const initialState = {
  historicalRates: [],
};

const historicalRatesReducer = (state, action) => {
  switch (action.type) {
    case 'INITIALIZE_RATES':
      return { ...state, historicalRates: action.payload };
    case 'ADD_RATE':
      return { ...state, historicalRates: [...state.historicalRates, action.payload] };
    default:
      return state;
  }
};

export const HistoricalRatesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(historicalRatesReducer, initialState);

  return (
    <HistoricalRatesContext.Provider value={{ state, dispatch }}>
      {children}
    </HistoricalRatesContext.Provider>
  );
};

export const useHistoricalRates = () => {
  return useContext(HistoricalRatesContext);
};
