import React from 'react';

const CountrySelector = ({ selectedCountry, handleCountryChange, currencyCountryMap }) => {
  return (
    <div className="relative group">
      {/* Hover Area (could be an icon or label) */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-lg group-hover:bg-blue-600 transition-all duration-300">
        Select Country
      </button>

      {/* Dropdown Menu (appears on hover) */}
      <div
        className="absolute top-12 left-0 w-64 bg-white-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50"
      >
        <label htmlFor="country-select" className="block text-lg font-semibold mb-2 p-4 text-gray-100 dark:text-gray-200">
          Select a Country:
        </label>
        <select
          id="country-select"
          value={selectedCountry}
          onChange={handleCountryChange}
          className="block w-full p-3 border sticky border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        >
          <option value="">All Countries</option>
          {Object.entries(currencyCountryMap).map(([currency, country]) => (
            <option key={currency} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CountrySelector;