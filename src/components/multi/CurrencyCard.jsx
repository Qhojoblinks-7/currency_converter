import React from 'react';
import { CSSTransition } from 'react-transition-group';

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
