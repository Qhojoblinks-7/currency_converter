import React from 'react';
import { TransitionGroup } from 'react-transition-group';
import CurrencyCard from './CurrencyCard';

const CurrencyList = ({ conversionRates, amount, baseCurrency, selectedCountry, currencyCountryMap }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.keys(conversionRates).map((currency) => {
        if (selectedCountry && currencyCountryMap[currency] !== selectedCountry) {
          return null;
        }
        return (
          <CurrencyCard
            key={currency}
            currency={currency}
            country={currencyCountryMap[currency]}
            conversionRate={conversionRates[currency]}
            amount={amount}
            baseCurrency={baseCurrency}
          />
        );
      })}
    </div>
  );
};


export default CurrencyList;
