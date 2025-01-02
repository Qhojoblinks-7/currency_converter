import React from 'react';
import CurrencyCard from './CurrencyCard';

/**
 * CurrencyList Component
 * 
 * Displays a list of currency conversion cards. Filters the cards based on the selected country.
 * Each card shows the conversion rate and the amount converted to the respective currency.
 * 
 * @param {object} conversionRates - An object containing the conversion rates for each currency.
 * @param {number} amount - The amount in the base currency to be converted.
 * @param {string} baseCurrency - The base currency code for conversion.
 * @param {string} selectedCountry - The selected country used to filter the currencies.
 * @param {object} currencyCountryMap - A mapping of currency codes to country names.
 * 
 * @returns {JSX.Element} A grid of currency conversion cards.
 */
const CurrencyList = ({ conversionRates, amount, baseCurrency, selectedCountry, currencyCountryMap }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.keys(conversionRates).map((currency) => {
        // Filter by the selected country if it is set
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
