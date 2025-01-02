import React from 'react';

/**
 * CurrencyCard Component
 * 
 * Displays a card with currency conversion information. It shows the selected country's currency,
 * the conversion rate, and the calculated converted amount.
 * 
 * @param {string} currency - The currency code.
 * @param {string} country - The country name corresponding to the currency.
 * @param {number} conversionRate - The conversion rate to the base currency.
 * @param {number} amount - The amount in the base currency to be converted.
 * @param {string} baseCurrency - The base currency code for conversion.
 * 
 * @returns {JSX.Element} A card displaying the conversion information.
 */
const CurrencyCard = ({ currency, country, conversionRate, amount, baseCurrency }) => {
  return (
    <div className="p-6 bg-white dark:bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
        {country || 'Unknown Country'} ({currency})
      </h3>
      <p className="text-gray-700 dark:text-gray-300">
        {amount} {baseCurrency} ={' '}
        <span className="text-xl font-semibold text-blue-600 dark:text-blue-400">
          {(amount * conversionRate).toFixed(2)} {currency}
        </span>
      </p>
    </div>
  );
};

export default CurrencyCard;
