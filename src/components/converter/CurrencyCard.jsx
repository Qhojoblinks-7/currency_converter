import React from 'react';
import { getFlagColors } from '../../utils/flagColors';

const CurrencyCard = ({ currencyData, currency, amount, handleCurrencyChange, rates, isBase }) => {
  const getGradient = (countryCode) => {
    const colors = getFlagColors(countryCode);
    return `linear-gradient(135deg, ${colors.join(', ')})`;
  };

  return (
    <div style={{ background: getGradient(currencyData.countryCode) }} className="p-4 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-2">{isBase ? 'Base Currency' : 'Target Currency'}</h2>
          <div className="flex items-center">
            {currencyData.flagImage && <img src={currencyData.flagImage} alt={`${currencyData.currencyName} flag`} width="50" height="30" className="mr-2" />}
            <p>{currencyData.currencyName} ({currencyData.currencySymbol})</p>
          </div>
        </div>
        <select
          value={currency}
          onChange={handleCurrencyChange}
          className="ml-4 mt-1 block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          {Object.keys(rates).map((curr) => (
            <option key={curr} value={curr}>{curr}</option>
          ))}
        </select>
      </div>
      <div className="text-right mt-4">
        <p className="text-xl font-semibold">{isBase ? amount : (amount * rates[currency]).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CurrencyCard;
