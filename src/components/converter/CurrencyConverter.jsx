import React, { useState, useEffect } from 'react';
import { fetchCurrencyInfo, fetchExchangeRates } from '../../services/currencyService';
import CurrencyCard from './CurrencyCard';
import CurrencyInput from './CurrencyInput';
import FlipButton from './FlipButton';
import { Link } from 'react-router-dom';
import '../../styles/CurrencyConverter.css';

const CurrencyConverter = () => {
  const [rates, setRates] = useState({});
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [currencyData, setCurrencyData] = useState({});
  const [targetCurrencyData, setTargetCurrencyData] = useState({});

  useEffect(() => {
    const getCurrencyData = async () => {
      try {
        const data = await fetchCurrencyInfo(baseCurrency);
        setCurrencyData(data);

        const exchangeRates = await fetchExchangeRates(baseCurrency);
        setRates(exchangeRates);

        const targetData = await fetchCurrencyInfo(targetCurrency);
        setTargetCurrencyData(targetData);
      } catch (error) {
        console.error(error);
      }
    };

    getCurrencyData();
  }, [baseCurrency, targetCurrency]);

  const handleBaseCurrencyChange = (event) => {
    setBaseCurrency(event.target.value);
  };

  const handleTargetCurrencyChange = (event) => {
    setTargetCurrency(event.target.value);
  };

  const handleFlipCurrencies = () => {
    const tempCurrency = baseCurrency;
    setBaseCurrency(targetCurrency);
    setTargetCurrency(tempCurrency);
    setAmount((prevAmount) => (rates[targetCurrency] ? (prevAmount * rates[targetCurrency]) : prevAmount));
  };

  return (
    <div className="currency-converter max-w-lg mx-auto p-6 rounded-lg shadow-md" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
      <h1 className="text-2xl font-bold mb-4">Currency Converter</h1>
      <CurrencyInput amount={amount} setAmount={setAmount} />
      <div className="grid grid-rows-2 gap-4">
        <CurrencyCard
          currencyData={currencyData}
          currency={baseCurrency}
          amount={amount}
          handleCurrencyChange={handleBaseCurrencyChange}
          rates={rates}
          isBase={true}
        />
        <CurrencyCard
          currencyData={targetCurrencyData}
          currency={targetCurrency}
          amount={amount}
          handleCurrencyChange={handleTargetCurrencyChange}
          rates={rates}
          isBase={false}
        />
      </div>
      <FlipButton handleFlipCurrencies={handleFlipCurrencies} />
      <Link to="/multi-currency" className="mt-4 block text-center text-indigo-600 hover:text-indigo-900 transition duration-300 ease-in-out">
        Go to Multi-Currency Converter
      </Link>
    </div>
  );
};

export default CurrencyConverter;
