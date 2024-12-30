import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CurrencyConverter from './components/converter/CurrencyConverter';
import HistoricalRates from './components/HistoricalRates';
import MultiCurrencyConverter from './components/multi/MultiCurrencyConverter';
import { HistoricalRatesProvider } from './context/HistoricalRatesContext';
import './App.css';

const App = () => {
  const baseCurrency = 'USD';
  const amount = 100;

  return (
    <HistoricalRatesProvider>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/converter" element={<CurrencyConverter />} />
          <Route path="/historical-rates" element={<HistoricalRates baseCurrency={baseCurrency} />} />
          <Route path="/multi-currency" element={<MultiCurrencyConverter baseCurrency={baseCurrency} amount={amount} />} />
        </Routes>
      </div>
    </Router>
    </HistoricalRatesProvider>
  );
};

export default App;
